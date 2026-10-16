import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ObrigadoTracker } from '../components/LeadForm';

export const metadata: Metadata = {
  title: 'Recebemos seus dados | Agende sua conversa',
  robots: {
    index: false,
    follow: false,
  },
};

const CAL_IFRAME_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0bthjlEmSeiF4N8Hu9B9knW7OvOqCVfvDyzNERqgHTz295Fx5mnYOnly9kH9ckBteoAlvT0Wtj?gv=true';
const CAL_FALLBACK_URL = 'https://calendar.app.google/UrbapWUStc9WCJcF7';

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)] flex flex-col">
      {/* Client-side conversion tracker */}
      <ObrigadoTracker />

      {/* Header */}
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

          <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--accent)] bg-[color:var(--surface)] border border-[color:var(--border)] px-3 py-1 rounded-full">
            Etapa 2 de 2
          </span>
        </div>
      </header>

      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* Progress / Step Confirmation Banner */}
          <div className="mb-10 text-center sm:text-left rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--olive)]/15 text-[color:var(--olive)] font-bold text-xl flex-shrink-0">
                ✓
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] font-semibold text-[color:var(--olive)]">
                  Passo 1 concluído! Recebemos seus dados.
                </p>
                <h1 className="mt-1 font-display text-2xl sm:text-3xl text-[color:var(--ink)] tracking-tight">
                  Agora escolha abaixo o melhor horário na agenda para nossa
                  conversa de 30 minutos:
                </h1>
                <p className="mt-2 text-sm text-[color:var(--ink-soft)] leading-relaxed">
                  Selecione um dia e horário de sua preferência. O convite com o
                  link do Google Meet será enviado automaticamente para seu
                  e-mail corporativo.
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Calendar */}
          <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)] p-2 sm:p-4 shadow-sm">
            <iframe
              src={CAL_IFRAME_URL}
              title="Agende sua conversa com Cesar Werlich"
              loading="lazy"
              className="w-full h-[650px] sm:h-[720px] rounded-[var(--radius-md)] border-0"
            />
          </div>

          {/* Fallback button & reassurance */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--surface)]/50 text-xs sm:text-sm text-[color:var(--muted)]">
            <span>
              Prefere agendar em uma janela externa ou a agenda não carregou?
            </span>
            <a
              href={CAL_FALLBACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)] text-[color:var(--bg)] font-medium px-4 py-2.5 transition-colors whitespace-nowrap shadow-sm text-xs sm:text-sm"
            >
              Abrir Google Agenda em Nova Aba &rarr;
            </a>
          </div>

          {/* Summary of what to expect */}
          <div className="mt-12 border-t border-[color:var(--border)] pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div>
              <p className="font-semibold text-sm text-[color:var(--ink)]">
                1. Duração &amp; Formato
              </p>
              <p className="text-xs text-[color:var(--muted)] mt-1 leading-relaxed">
                30 minutos via Google Meet, direto ao ponto com Cesar Werlich.
              </p>
            </div>
            <div>
              <p className="font-semibold text-sm text-[color:var(--ink)]">
                2. Confirmação Instantânea
              </p>
              <p className="text-xs text-[color:var(--muted)] mt-1 leading-relaxed">
                Você receberá o convite com o link da sala no seu e-mail.
              </p>
            </div>
            <div>
              <p className="font-semibold text-sm text-[color:var(--ink)]">
                3. Sem Enrolação
              </p>
              <p className="text-xs text-[color:var(--muted)] mt-1 leading-relaxed">
                Conversa orientada a diagnóstico e direcionamento prático.
              </p>
            </div>
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
