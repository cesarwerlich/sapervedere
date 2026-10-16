import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';

export const metadata: Metadata = {
  title: 'Solicitar Diagnóstico & Contato',
  description:
    'Agende uma conversa estratégica de 30 minutos com Cesar Werlich (ex-COO Lightmeter YC W22). Diagnóstico operacional, GTM e escala para fundadores B2B SaaS.',
  openGraph: {
    title: 'Solicitar Diagnóstico & Contato | Saper Vedere',
    description:
      'Diagnóstico operacional e estruturação de GTM para fundadores B2B SaaS com Cesar Werlich (ex-COO Lightmeter YC W22).',
  },
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)] flex flex-col">
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
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left column: Context, how it works, qualification */}
            <div className="lg:col-span-6 space-y-10">
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-[color:var(--accent)]">
                  Diagnóstico &amp; Contato
                </p>
                <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[color:var(--ink)] leading-[1.15]">
                  Agende uma conversa estratégica de 30 minutos.
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[color:var(--ink-soft)] leading-relaxed">
                  Uma sessão direta ao ponto com um operador experiente para
                  mapear onde sua operação está travada e identificar alavancas
                  reais de crescimento.
                </p>
              </div>

              {/* Como funciona */}
              <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-7 space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--ink)]">
                  Como funciona nossa conversa:
                </h2>

                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] text-xs font-bold">
                      1
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[color:var(--ink)]">
                        Raio-X dos gargalos atuais
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                        Entendemos seu modelo de receita, tração, ICP, ciclo de
                        vendas e o que hoje consome mais energia da liderança.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] text-xs font-bold">
                      2
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[color:var(--ink)]">
                        Plano de priorização tática
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                        Sem enrolação de consultoria teórica: apontamos
                        exatamente onde focar nos próximos 90 dias para
                        destravar receita e eficiência.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] text-xs font-bold">
                      3
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[color:var(--ink)]">
                        Alinhamento de próximos passos
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                        Se houver fit mútuo para atuarmos juntos, desenhamos o
                        formato ideal (Sprint ou COO Fracionado). Se não houver,
                        você sai com recomendações práticas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Para quem é */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--ink)] mb-4">
                  Para quem é este contato:
                </h2>
                <ul className="space-y-3 text-sm text-[color:var(--ink-soft)]">
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--accent)] font-bold">
                      ✓
                    </span>
                    <span>
                      <strong>Founders de Startups B2B SaaS</strong> em estágios
                      Bootstrapped com tração, Pré-Seed, Seed ou Series A.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--accent)] font-bold">
                      ✓
                    </span>
                    <span>
                      Empresas com produto no ar buscando{' '}
                      <strong>estruturar máquinas de outbound</strong> e sair da
                      dependência exclusiva de indicações.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--accent)] font-bold">
                      ✓
                    </span>
                    <span>
                      Fundadores sobrecarregados na operação que necessitam de{' '}
                      <strong>
                        governança, processos e cadência executiva
                      </strong>
                      .
                    </span>
                  </li>
                </ul>
              </div>

              {/* Credenciais do Cesar */}
              <div className="border-t border-[color:var(--border)] pt-8">
                <div className="flex items-start gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[color:var(--surface-2)] flex-shrink-0 border border-[color:var(--border-strong)]">
                    <Image
                      src="/cesar-werlich.jpeg"
                      alt="Cesar Werlich"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[color:var(--ink)]">
                      Cesar Werlich
                    </h3>
                    <p className="text-xs sm:text-sm text-[color:var(--muted)]">
                      Fractional COO &amp; Operating Partner · Saper Vedere
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-[color:var(--ink-soft)] leading-relaxed">
                      Ex-Co-founder &amp; COO na <strong>Lightmeter</strong> (Y
                      Combinator W22). Mais de 12 anos operando startups de alta
                      complexidade, construindo infraestruturas de GTM e
                      preparando empresas para rodadas institucionais de
                      captação.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
                  <span className="rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] px-3 py-1 text-[color:var(--ink-soft)]">
                    🚀 Y Combinator W22 Alum
                  </span>
                  <span className="rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] px-3 py-1 text-[color:var(--ink-soft)]">
                    ⚙️ 12+ Anos Operando B2B
                  </span>
                  <span className="rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] px-3 py-1 text-[color:var(--ink-soft)]">
                    📈 GTM, Finanças &amp; Escala
                  </span>
                </div>
              </div>
            </div>

            {/* Right column: Lead Form */}
            <div className="lg:col-span-6">
              <div className="rounded-[var(--radius-xl)] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-10 shadow-sm">
                <LeadForm
                  title="Solicitar Diagnóstico"
                  subtitle="Preencha o formulário rápido abaixo para receber o link de agendamento na sequência."
                  ctaLabel="Continuar para Escolha de Horário →"
                />
              </div>
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
