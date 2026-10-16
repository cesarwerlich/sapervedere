import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SHORT_STRING_LENGTH = 150;
const MAX_LONG_STRING_LENGTH = 3000;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Corpo da requisição inválido.' },
      { status: 400 }
    );
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json(
      { error: 'Corpo da requisição inválido.' },
      { status: 400 }
    );
  }

  const {
    name,
    email,
    whatsapp,
    company,
    stage,
    service,
    challenge,
    website_hp,
    turnstileToken,
    utms,
  } = body as Record<string, unknown>;

  // a) Honeypot check: trap bots silently without tipping them off
  if (typeof website_hp === 'string' && website_hp.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  // b) Validate required fields
  const isValidString = (
    val: unknown,
    maxLen = MAX_SHORT_STRING_LENGTH
  ): val is string =>
    typeof val === 'string' &&
    val.trim().length > 0 &&
    val.trim().length <= maxLen;

  // Normalize service field (supports string or array of checkboxes)
  const normalizedService = Array.isArray(service)
    ? service
        .filter(
          (s): s is string => typeof s === 'string' && s.trim().length > 0
        )
        .map((s) => s.trim())
        .join(', ')
    : typeof service === 'string'
      ? service.trim()
      : '';

  if (
    !isValidString(name) ||
    !isValidString(email, 254) ||
    !EMAIL_REGEX.test(email.trim()) ||
    !isValidString(company) ||
    !isValidString(stage) ||
    !isValidString(normalizedService, MAX_LONG_STRING_LENGTH)
  ) {
    return NextResponse.json(
      { error: 'Campos obrigatórios inválidos.' },
      { status: 400 }
    );
  }

  const sanitizedName = name.trim();
  const sanitizedEmail = email.trim().toLowerCase();
  const sanitizedCompany = company.trim();
  const sanitizedStage = stage.trim();
  const sanitizedService = normalizedService;
  const sanitizedWhatsapp =
    typeof whatsapp === 'string'
      ? whatsapp.trim().slice(0, MAX_SHORT_STRING_LENGTH)
      : '';
  const sanitizedChallenge =
    typeof challenge === 'string'
      ? challenge.trim().slice(0, MAX_LONG_STRING_LENGTH)
      : '';

  // c) Cloudflare Turnstile verification
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (turnstileSecret) {
    if (typeof turnstileToken !== 'string' || !turnstileToken.trim()) {
      return NextResponse.json(
        { error: 'Falha na verificação anti-spam.' },
        { status: 403 }
      );
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const formData = new URLSearchParams();
      formData.append('secret', turnstileSecret);
      formData.append('response', turnstileToken.trim());

      const verifyRes = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
          signal: controller.signal,
        }
      );

      const verifyData = (await verifyRes.json()) as { success?: boolean };
      if (!verifyData || !verifyData.success) {
        return NextResponse.json(
          { error: 'Falha na verificação anti-spam.' },
          { status: 403 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: 'Falha na verificação anti-spam.' },
        { status: 403 }
      );
    } finally {
      clearTimeout(timeoutId);
    }
  }

  // d) Webhook forwarding
  const webhookUrl = process.env.LEAD_WEBHOOK_URL?.trim();
  if (webhookUrl) {
    const webhookPayload = {
      timestamp: new Date().toISOString(),
      name: sanitizedName,
      email: sanitizedEmail,
      whatsapp: sanitizedWhatsapp,
      company: sanitizedCompany,
      stage: sanitizedStage,
      service: sanitizedService,
      challenge: sanitizedChallenge,
      utms: typeof utms === 'object' && utms !== null ? utms : {},
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
        signal: controller.signal,
      });
    } catch (webhookError) {
      console.error('Lead webhook forwarding failed:', webhookError);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  // e) Return success response with generated lead ID
  const leadId =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

  return NextResponse.json({ ok: true, leadId }, { status: 200 });
}
