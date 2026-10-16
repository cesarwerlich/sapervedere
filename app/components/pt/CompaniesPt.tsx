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

        <div className="mt-10 rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg)] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl tracking-tight text-[color:var(--ink)]">
              Trajetória &amp; Governança
            </h3>
            <p className="mt-2 text-sm text-[color:var(--muted)] max-w-xl leading-relaxed">
              Mais de 12 anos liderando operações, estruturando frentes de GTM e
              apoiando fundadores em fases críticas de crescimento e captação.
              Histórico detalhado, cases e recomendações no LinkedIn.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/cesarwerlich"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] px-5 py-3 text-sm font-medium text-[color:var(--ink)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors whitespace-nowrap self-start sm:self-center"
          >
            Ver perfil no LinkedIn &rarr;
          </a>
        </div>
      </div>
    </Section>
  );
}
