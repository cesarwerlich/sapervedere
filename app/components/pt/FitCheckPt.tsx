import Section from '../Section';

const goodFit = [
  'Transição de founder-led sales para máquina de GTM/Outbound repetível',
  'Empresas em expansão precisando de cadência de gestão e KPIs de execução',
  'Fundadores sobrecarregados apagando incêndios e buscando destravar a operação',
  'Busca alavancagem operacional real no terreno, não consultoria de apresentações',
];

const notFit = [
  'Times pré-produto ainda debatendo o direcionamento básico da tese',
  'B2C puro, deep tech/hardware pesado ou saúde/biotecnologia regulada',
  'Execução de tarefas operacionais isoladas sem visão estratégica de processos',
  'Fundadores que buscam opiniões sem intenção de delegar ou transformar a rotina',
];

export default function FitCheckPt() {
  return (
    <Section
      id="quando-conversar"
      label="Fit check"
      className="py-24 sm:py-32 bg-[color:var(--surface)]"
    >
      <span id="fit" className="sr-only" tabIndex={-1} aria-hidden />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Perfil de parceria
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
            Quando faz sentido conversar.
          </h2>
          <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
            A parceria gera o máximo de impacto quando já existe tração inicial,
            um gargalo claro de crescimento e fundadores prontos para instalar
            uma rotina operacional mais madura.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg)] p-7 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[color:var(--olive)]/15 text-[color:var(--olive)]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3.5 8.5l3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="font-display text-2xl text-[color:var(--ink)]">
                Excelente encaixe
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {goodFit.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[color:var(--ink-soft)]"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--olive)] flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg)] p-7 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[color:var(--muted)]/15 text-[color:var(--muted)]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <h3 className="font-display text-2xl text-[color:var(--ink)]">
                Provavelmente não é o momento
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {notFit.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[color:var(--muted)]"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--muted)] flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-sm text-[color:var(--muted)] max-w-2xl">
          Se tiver dúvidas sobre o seu estágio, mande uma mensagem rápida. Se
          não for o momento ideal para atuarmos juntos, indico referências ou
          caminhos alternativos.
        </p>
      </div>
    </Section>
  );
}
