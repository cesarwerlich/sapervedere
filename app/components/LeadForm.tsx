'use client';

import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { track } from '../lib/analytics';

export type ServiceOption = 'gtm' | 'diagnostico' | 'coo' | 'captacao';

export interface LeadFormProps {
  defaultService?: ServiceOption;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
}

export const SERVICE_LABELS: Record<ServiceOption, string> = {
  gtm: 'Máquina de Outbound & GTM B2B',
  diagnostico: 'Diagnóstico Operacional (Sprint 2 Semanas)',
  coo: 'COO Fracionado / Escala Operacional',
  captacao: 'Preparação para Captação & Data Room',
};

export const STAGE_OPTIONS = [
  'Bootstrapped / Receita própria',
  'Pré-Seed',
  'Seed',
  'Series A+',
] as const;

export default function LeadForm({
  defaultService = 'diagnostico',
  title = 'Solicitar Diagnóstico & Agendar Conversa',
  subtitle = 'Preencha os dados abaixo para direcionarmos a conversa ao seu momento atual.',
  ctaLabel = 'Avançar para Escolha de Horário →',
}: LeadFormProps) {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [company, setCompany] = useState('');
  const [stage, setStage] = useState<(typeof STAGE_OPTIONS)[number]>(
    STAGE_OPTIONS[0]
  );

  // Sync service when defaultService prop changes without useEffect cascading render
  const [prevDefaultService, setPrevDefaultService] = useState(defaultService);
  const [service, setService] = useState<ServiceOption>(defaultService);

  if (prevDefaultService !== defaultService) {
    setPrevDefaultService(defaultService);
    setService(defaultService);
  }

  const [challenge, setChallenge] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const utmsRef = useRef<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const siteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';

  // Capture UTM params from window.location.search and sessionStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let collected: Record<string, string> = {};

    try {
      const stored = sessionStorage.getItem('sv_utms');
      if (stored) {
        collected = JSON.parse(stored);
      }
    } catch {
      // ignore storage parse errors
    }

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const utmKeys = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
        'gclid',
        'fbclid',
      ];

      let updated = false;
      for (const key of utmKeys) {
        const val = searchParams.get(key);
        if (val) {
          collected[key] = val;
          updated = true;
        }
      }

      searchParams.forEach((val, key) => {
        if (key.startsWith('utm_') && val) {
          collected[key] = val;
          updated = true;
        }
      });

      if (updated || Object.keys(collected).length > 0) {
        sessionStorage.setItem('sv_utms', JSON.stringify(collected));
      }
    } catch {
      // ignore query parsing errors
    }

    utmsRef.current = collected;
  }, []);

  // Explicitly render Cloudflare Turnstile if script was loaded beforehand
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const win = window as unknown as {
      turnstile?: {
        render: (
          el: string | HTMLElement,
          opts: { sitekey: string; theme?: string }
        ) => string;
      };
    };

    if (win.turnstile && typeof win.turnstile.render === 'function') {
      const container = document.getElementById('turnstile-container');
      if (container && container.childElementCount === 0) {
        try {
          win.turnstile.render(container, {
            sitekey: siteKey,
            theme: 'light',
          });
        } catch {
          // container already rendered
        }
      }
    }
  }, [siteKey]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot validation
    const hp = formData.get('website_hp');
    if (hp) {
      router.push('/obrigado?service=' + encodeURIComponent(service));
      return;
    }

    setIsSubmitting(true);

    const turnstileToken =
      (formData.get('cf-turnstile-response') as string) || '';

    const activeUtms = utmsRef.current;

    const payload = {
      name,
      email,
      whatsapp,
      company,
      stage,
      service,
      challenge: challenge.trim(),
      website_hp: '',
      turnstileToken,
      'cf-turnstile-response': turnstileToken,
      utms: activeUtms,
      ...activeUtms,
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(
          errorData?.error ||
            errorData?.message ||
            'Não foi possível registrar seu contato. Por favor, tente novamente.'
        );
      }

      // Conversion tracking
      track('lead_submitted', { service, stage, ...activeUtms });

      if (typeof window !== 'undefined') {
        const win = window as unknown as { dataLayer?: unknown[] };
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push({
          event: 'generate_lead',
          service,
          stage,
          ...activeUtms,
        });
      }

      router.push('/obrigado?service=' + encodeURIComponent(service));
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Ocorreu um erro ao enviar. Tente novamente.';
      setErrorMessage(msg);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <div className="mb-6">
        <h3 className="font-display text-2xl sm:text-3xl tracking-tight text-[color:var(--ink)]">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[color:var(--ink-soft)] leading-relaxed">
          {subtitle}
        </p>
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="mb-5 rounded-[var(--radius-md)] border border-red-500/30 bg-red-500/10 p-4 text-xs sm:text-sm text-red-700 dark:text-red-300"
        >
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field */}
        <input
          type="text"
          name="website_hp"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* Nome */}
        <div>
          <label
            htmlFor="lead-name"
            className="block text-xs font-semibold uppercase tracking-wider text-[color:var(--ink-soft)] mb-1.5"
          >
            Nome completo <span className="text-[color:var(--accent)]">*</span>
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Ana Silva"
            className="w-full px-3.5 py-2.5 text-sm border border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--ink)] rounded-[var(--radius-md)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent)] transition-colors placeholder:text-[color:var(--muted)]/60"
          />
        </div>

        {/* Email corporativo */}
        <div>
          <label
            htmlFor="lead-email"
            className="block text-xs font-semibold uppercase tracking-wider text-[color:var(--ink-soft)] mb-1.5"
          >
            E-mail corporativo{' '}
            <span className="text-[color:var(--accent)]">*</span>
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ana@suaempresa.com.br"
            className="w-full px-3.5 py-2.5 text-sm border border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--ink)] rounded-[var(--radius-md)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent)] transition-colors placeholder:text-[color:var(--muted)]/60"
          />
        </div>

        {/* WhatsApp com DDD */}
        <div>
          <label
            htmlFor="lead-whatsapp"
            className="block text-xs font-semibold uppercase tracking-wider text-[color:var(--ink-soft)] mb-1.5"
          >
            WhatsApp / Telefone (com DDD){' '}
            <span className="text-[color:var(--accent)]">*</span>
          </label>
          <input
            id="lead-whatsapp"
            name="whatsapp"
            type="tel"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="(11) 99999-9999"
            className="w-full px-3.5 py-2.5 text-sm border border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--ink)] rounded-[var(--radius-md)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent)] transition-colors placeholder:text-[color:var(--muted)]/60"
          />
        </div>

        {/* Empresa / Website */}
        <div>
          <label
            htmlFor="lead-company"
            className="block text-xs font-semibold uppercase tracking-wider text-[color:var(--ink-soft)] mb-1.5"
          >
            Empresa / Website{' '}
            <span className="text-[color:var(--accent)]">*</span>
          </label>
          <input
            id="lead-company"
            name="company"
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="SuaEmpresa ou suaempresa.com.br"
            className="w-full px-3.5 py-2.5 text-sm border border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--ink)] rounded-[var(--radius-md)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent)] transition-colors placeholder:text-[color:var(--muted)]/60"
          />
        </div>

        {/* Estagio atual */}
        <div>
          <label
            htmlFor="lead-stage"
            className="block text-xs font-semibold uppercase tracking-wider text-[color:var(--ink-soft)] mb-1.5"
          >
            Estágio atual <span className="text-[color:var(--accent)]">*</span>
          </label>
          <select
            id="lead-stage"
            name="stage"
            required
            value={stage}
            onChange={(e) =>
              setStage(e.target.value as (typeof STAGE_OPTIONS)[number])
            }
            className="w-full px-3.5 py-2.5 text-sm border border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--ink)] rounded-[var(--radius-md)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent)] transition-colors cursor-pointer"
          >
            {STAGE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Servico prioritario */}
        <div>
          <label
            htmlFor="lead-service"
            className="block text-xs font-semibold uppercase tracking-wider text-[color:var(--ink-soft)] mb-1.5"
          >
            Onde você busca apoio prioritário?{' '}
            <span className="text-[color:var(--accent)]">*</span>
          </label>
          <select
            id="lead-service"
            name="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value as ServiceOption)}
            className="w-full px-3.5 py-2.5 text-sm border border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--ink)] rounded-[var(--radius-md)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent)] transition-colors cursor-pointer"
          >
            <option value="gtm">{SERVICE_LABELS.gtm}</option>
            <option value="diagnostico">{SERVICE_LABELS.diagnostico}</option>
            <option value="coo">{SERVICE_LABELS.coo}</option>
            <option value="captacao">{SERVICE_LABELS.captacao}</option>
          </select>
        </div>

        {/* Desafio principal (textarea opcional) */}
        <div>
          <label
            htmlFor="lead-challenge"
            className="block text-xs font-semibold uppercase tracking-wider text-[color:var(--ink-soft)] mb-1.5"
          >
            Resuma seu principal gargalo hoje{' '}
            <span className="text-[color:var(--muted)] font-normal">
              (opcional)
            </span>
          </label>
          <textarea
            id="lead-challenge"
            name="challenge"
            rows={3}
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
            placeholder="Ex: Dependemos só de indicações; time de vendas bate cabeça sem cadência; falta clareza nos unit economics..."
            className="w-full px-3.5 py-2.5 text-sm border border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--ink)] rounded-[var(--radius-md)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent)] transition-colors placeholder:text-[color:var(--muted)]/60 resize-none"
          />
        </div>

        {/* Cloudflare Turnstile Widget */}
        <div className="pt-1 flex justify-center sm:justify-start">
          <div
            id="turnstile-container"
            className="cf-turnstile"
            data-sitekey={siteKey}
            data-theme="light"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)] text-[color:var(--bg)] font-medium py-3.5 px-6 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Processando...
              </>
            ) : (
              ctaLabel
            )}
          </button>
        </div>

        <p className="text-center text-xs text-[color:var(--muted)] pt-1">
          🔒 Seus dados são confidenciais. Conversa direta com operador sênior.
        </p>
      </form>
    </div>
  );
}

/** Client helper component for firing conversion analytics on the obrigado page */
export function ObrigadoTracker() {
  useEffect(() => {
    track('generate_lead', { step: 'obrigado_page' });
    if (typeof window !== 'undefined') {
      const win = window as unknown as { dataLayer?: unknown[] };
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({ event: 'lead_confirmed' });
    }
  }, []);

  return null;
}
