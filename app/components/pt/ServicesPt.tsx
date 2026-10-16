'use client';

import Link from 'next/link';
import Section from '../Section';
import { track, Events } from '../../lib/analytics';

type Offer = {
  name: string;
  tag: string;
  description: string;
  scope: string[];
  duration: string;
  for: string;
  href: string;
  ctaText: string;
  featured?: boolean;
};

const offers: Offer[] = [
  {
    name: 'Máquina de GTM & Outbound B2B',
    tag: 'Sprint focado · 4–8 semanas',
    description:
      'Estruturação do motor comercial outbound e geração de demanda previsível, saindo da dependência exclusiva de founder-led sales.',
    scope: [
      'Definição de ICP e enriquecimento de base',
      'Cadência e automação de prospecção outbound',
      'Playbooks de qualificação e handoff comercial',
      'Métricas de funil, conversão e CRM',
    ],
    duration: '4–8 semanas (escopo definido)',
    for: 'Empresas com produto validado buscando tração de vendas repetível',
    href: '/lp/gtm',
    ctaText: 'Ver detalhes do GTM',
  },
  {
    name: 'Operações, Financeiro & Escala (Fractional COO)',
    tag: 'Hands-on · 2–3 dias / semana',
    description:
      'Atuação como braço direito operacional do fundador para instalar rotina de execução, controle financeiro e governança de escala.',
    scope: [
      'Cadência operacional e rituais semanais',
      'Fluxo de caixa, runway e modelagem financeira',
      'Alinhamento entre Produto, Vendas e CS',
      'Estruturação de liderança e contratações-chave',
    ],
    duration: 'Recorrente, mínimo de 3 meses',
    for: 'Fundadores que precisam de um operador experiente, não de conselheiro externo',
    href: '/lp/operacoes',
    ctaText: 'Ver atuação de Fractional COO',
    featured: true,
  },
  {
    name: 'Diagnóstico Operacional & Preparação para Captação',
    tag: 'Auditoria intensiva · 2 semanas',
    description:
      'Avaliação completa da operação, métricas de SaaS e estrutura da empresa para destravar gargalos ou blindar a rodada Seed/Series A.',
    scope: [
      'Auditoria de métricas SaaS (CAC, LTV, churn, cohorts)',
      'Identificação de gargalos operacionais e de equipe',
      'Organização de data room operacional e narrativa',
      'Plano de ação prioritário para os primeiros 90 dias',
    ],
    duration: '2 semanas (diagnóstico intensivo)',
    for: 'Fundadores preparando captação ou passando por momento de reestruturação',
    href: '/lp/diagnostico',
    ctaText: 'Ver formato do Diagnóstico',
  },
];

export default function ServicesPt() {
  const onCta = (offer: string, href: string) =>
    track(Events.ctaClick, { location: 'services_pt', label: offer, href });

  return (
    <Section
      id="servicos"
      label="Como ajudo"
      className="py-24 sm:py-32 relative"
    >
      <span id="services" className="sr-only" tabIndex={-1} aria-hidden />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Como ajudo
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
            Três pilares de atuação.
          </h2>
          <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
            Formatos desenhados para o estágio da sua empresa: um motor de
            vendas focado, uma liderança de operações contínua ou um diagnóstico
            rápido para captação.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className={`relative rounded-[var(--radius-lg)] p-7 sm:p-8 bg-[color:var(--surface)] border flex flex-col justify-between ${
                offer.featured
                  ? 'border-[color:var(--accent)]'
                  : 'border-[color:var(--border)]'
              }`}
            >
              <div>
                {offer.featured && (
                  <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] px-3 py-1 text-xs font-medium uppercase tracking-wider">
                    Oferta principal
                  </span>
                )}

                <header>
                  <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--ink)] tracking-tight">
                    {offer.name}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--muted)] font-medium">
                    {offer.tag}
                  </p>
                </header>

                <p className="mt-5 text-[color:var(--ink-soft)] leading-relaxed">
                  {offer.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {offer.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[color:var(--ink-soft)]"
                    >
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-1 w-1 rounded-full bg-[color:var(--accent)] flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <dl className="mt-6 pt-5 border-t border-[color:var(--border)] grid grid-cols-1 gap-4 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[color:var(--muted)]">
                      Duração
                    </dt>
                    <dd className="mt-1 text-[color:var(--ink)]">
                      {offer.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[color:var(--muted)]">
                      Ideal para
                    </dt>
                    <dd className="mt-1 text-[color:var(--ink)]">
                      {offer.for}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 pt-4 border-t border-[color:var(--border)]">
                <Link
                  href={offer.href}
                  onClick={() => onCta(offer.name, offer.href)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] transition-colors"
                >
                  {offer.ctaText}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
