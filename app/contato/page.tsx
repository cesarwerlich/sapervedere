import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';

export const metadata: Metadata = {
  title: 'Solicitar Diagnóstico & Contato',
  description:
    'Agende uma conversa estratégica de 30 minutos com Cesar Werlich. Diagnóstico operacional, GTM e escala para fundadores e líderes B2B.',
  openGraph: {
    title: 'Solicitar Diagnóstico & Contato | Saper Vedere',
    description:
      'Diagnóstico operacional e estruturação de GTM para fundadores e líderes B2B com Cesar Werlich.',
  },
};

export default function ContatoPage() {
  return (
    <div className="theme-v2-blue theme-6-logo-blue-headings min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)] flex flex-col">
      {/* Top navigation */}
      <header className="border-b border-[color:var(--border)] bg-[color:var(--bg)]/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Saper Vedere — início"
          >
            <Image
              src="/LogoSaperVedere.png"
              alt="Saper Vedere"
              width={528}
              height={301}
              priority
              className="h-10 w-auto object-contain sm:h-11"
              sizes="(max-width: 640px) 130px, 160px"
            />
          </Link>

          <Link
            href="/"
            className="text-xs sm:text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors inline-flex items-center gap-1.5"
          >
            <span aria-hidden="true">&larr;</span> Voltar ao início
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--accent)] mb-4">
              Diagnóstico Operacional &amp; Contato
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[color:var(--ink)] leading-[1.15]">
              Vamos conversar sobre a sua operação.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[color:var(--ink-soft)] leading-relaxed max-w-2xl mx-auto">
              Preencha os dados abaixo para alinharmos os pontos prioritários.
              Na tela seguinte você escolhe o melhor horário na agenda para
              nossa conversa de 30 minutos.
            </p>

            {/* Micro trust pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-[color:var(--muted)]">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--surface)]/60 border border-[color:var(--border)] px-3 py-1">
                🔒 Confidencialidade total
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--surface)]/60 border border-[color:var(--border)] px-3 py-1">
                ⚡ Direto com o operador
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--surface)]/60 border border-[color:var(--border)] px-3 py-1">
                🎯 Sem custo ou compromisso
              </span>
            </div>
          </div>

          {/* Form Card */}
          <div className="rounded-[var(--radius-xl)] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-10 shadow-sm">
            <LeadForm
              title="Informações da Empresa"
              subtitle="Leva menos de 1 minuto."
              ctaLabel="Continuar para Escolha de Horário →"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[color:var(--border)] py-8 mt-auto bg-[color:var(--bg)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[color:var(--muted)]">
          <p>
            © {new Date().getFullYear()} Saper Vedere. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacidade"
              className="hover:text-[color:var(--ink)] transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="hover:text-[color:var(--ink)] transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
