import Section from '../Section';

const contexts = [
  {
    title: 'Startups B2B SaaS Venture-Backed',
    detail:
      'Da tração inicial ao crescimento, estruturando processos de GTM, operações e governança antes que a complexidade sobrecarregue a operação.',
  },
  {
    title: 'Startups Lideradas por Fundadores',
    detail:
      'Apoiando a transição de um modelo dependente do heroísmo do founder para uma cadência com autonomia, rituais claros e delegação real.',
  },
  {
    title: 'Momentos de Transição e Escala',
    detail:
      'Reestruturações pós-M&A, alinhamento entre áreas sob alta pressão e foco em geração de caixa e eficiência operacional.',
  },
];

const trackRecord = [
  {
    role: 'Co-fundador & COO',
    company: 'Lightmeter (YC W22)',
    focus:
      'B2B SaaS open-source, captação internacional e operação distribuída.',
  },
  {
    role: 'Direção de Operações & Estratégia',
    company: 'Avantia',
    focus:
      'Escala de operações de tecnologia corporativa e governança em ambiente de alto crescimento.',
  },
  {
    role: 'Liderança de Operações & Mercado',
    company: 'Cianet',
    focus:
      'Transição operacional, expansão de mercado B2B e alinhamento de entregas.',
  },
  {
    role: 'Engenharia de Produção & Lean',
    company: 'Siemens & WEG',
    focus:
      'Fundamentos práticos de Lean Manufacturing, gestão de gargalos e disciplina de processos.',
  },
];

export default function CompaniesPt() {
  return (
    <Section
      id="companies"
      label="Experiência"
      className="py-24 sm:py-32 bg-[color:var(--surface)]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Contexto Operacional
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
            Construído em ambientes reais de operação.
          </h2>
          <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
            O fio condutor não é discurso teórico. É ajudar empresas em
            crescimento a construir sistemas, cadência e responsabilidade para
            escalar com previsibilidade e sem caos.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {contexts.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg)] p-6"
            >
              <h3 className="font-display text-2xl tracking-tight text-[color:var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[color:var(--ink-soft)]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg)] p-6 sm:p-8">
          <h3 className="font-display text-2xl sm:text-3xl tracking-tight text-[color:var(--ink)]">
            Histórico &amp; Empresas
          </h3>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Experiência direta em startups aceleradas pelo Y Combinator,
            scale-ups e grandes referências industriais.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {trackRecord.map((item) => (
              <div
                key={item.company}
                className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-4"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-semibold text-[color:var(--ink)] text-base">
                    {item.company}
                  </span>
                  <span className="text-xs text-[color:var(--accent)] font-medium">
                    {item.role}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[color:var(--ink-soft)] leading-relaxed">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
