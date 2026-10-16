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
  if (
    turnstileSecret &&
    typeof turnstileToken === 'string' &&
    turnstileToken.trim()
  ) {
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
        if (!turnstileSecret.startsWith('1x')) {
          return NextResponse.json(
            { error: 'Falha na verificação anti-spam.' },
            { status: 403 }
          );
        }
      }
    } catch {
      // Allow fallback if Cloudflare verification endpoint times out
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

  // e) Resend Email Notification
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const notificationEmail =
    process.env.LEAD_NOTIFICATION_EMAIL?.trim() || 'cesardw@gmail.com';
  const fromEmail =
    process.env.LEAD_EMAIL_FROM?.trim() ||
    'Saper Vedere Leads <contato@sapervedere.com.br>';

  const utmObj =
    typeof utms === 'object' && utms !== null
      ? (utms as Record<string, string>)
      : {};

  if (resendApiKey) {
    try {
      const emailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1410; line-height: 1.6; background-color: #f7f3eb; border-radius: 12px; border: 1px solid rgba(26,20,16,0.1);">
          <h2 style="color: #194162; margin-top: 0; font-size: 22px; border-bottom: 2px solid #ede6d6; padding-bottom: 12px;">Novo Lead — Saper Vedere</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; color: #6b6055; width: 140px;"><strong>Nome:</strong></td><td style="padding: 8px 0; font-weight: 600;">${sanitizedName}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6055;"><strong>E-mail:</strong></td><td style="padding: 8px 0;"><a href="mailto:${sanitizedEmail}" style="color: #1a5c88;">${sanitizedEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b6055;"><strong>WhatsApp / Tel:</strong></td><td style="padding: 8px 0;"><a href="https://wa.me/${sanitizedWhatsapp.replace(/\D/g, '')}" style="color: #1a5c88;">${sanitizedWhatsapp}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b6055;"><strong>Empresa / Site:</strong></td><td style="padding: 8px 0;">${sanitizedCompany}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6055;"><strong>Estágio:</strong></td><td style="padding: 8px 0;">${sanitizedStage}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6055;"><strong>Apoio Prioritário:</strong></td><td style="padding: 8px 0; color: #194162; font-weight: 600;">${sanitizedService}</td></tr>
            ${
              sanitizedChallenge
                ? `<tr><td style="padding: 8px 0; color: #6b6055; vertical-align: top;"><strong>Desafio / Gargalo:</strong></td><td style="padding: 12px; background: #ede6d6; border-radius: 6px;">${sanitizedChallenge}</td></tr>`
                : ''
            }
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(26, 20, 16, 0.1); font-size: 12px; color: #6b6055;">
            <p style="margin: 4px 0;"><strong>Origem / UTMs:</strong> source=${utmObj.utm_source || 'direto'} · medium=${utmObj.utm_medium || '-'} · campaign=${utmObj.utm_campaign || '-'}</p>
            <p style="margin: 4px 0;"><strong>Capturado em:</strong> ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
          </div>
        </div>
      `;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [notificationEmail],
          reply_to: sanitizedEmail,
          subject: `[Lead Saper Vedere] ${sanitizedName} — ${sanitizedCompany}`,
          html: emailHtml,
        }),
        signal: controller.signal,
      }).finally(() => clearTimeout(timeoutId));
    } catch (resendError) {
      console.error('Lead email notification failed:', resendError);
    }
  }

  // e.2) Optional Telegram Notification
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const telegramChatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (telegramBotToken && telegramChatId) {
    try {
      const text =
        `🎯 *Novo Lead — Saper Vedere*\n\n` +
        `👤 *Nome:* ${sanitizedName}\n` +
        `📧 *E-mail:* ${sanitizedEmail}\n` +
        `📱 *WhatsApp:* https://wa.me/${sanitizedWhatsapp.replace(/\D/g, '')} (${sanitizedWhatsapp})\n` +
        `🏢 *Empresa:* ${sanitizedCompany}\n` +
        `📊 *Estágio:* ${sanitizedStage}\n` +
        `🧭 *Apoio:* ${sanitizedService}\n` +
        (sanitizedChallenge ? `⚠️ *Gargalo:* ${sanitizedChallenge}\n` : '') +
        `\n📍 *Origem:* ${utmObj.utm_source || 'direto'} / ${utmObj.utm_campaign || '-'}`;

      const tgController = new AbortController();
      const tgTimeoutId = setTimeout(() => tgController.abort(), 5000);

      await fetch(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text,
            parse_mode: 'Markdown',
          }),
          signal: tgController.signal,
        }
      ).finally(() => clearTimeout(tgTimeoutId));
    } catch (tgError) {
      console.error('Telegram lead notification failed:', tgError);
    }
  }

  // f) Return success response with generated lead ID
  const leadId =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

  return NextResponse.json({ ok: true, leadId }, { status: 200 });
}
