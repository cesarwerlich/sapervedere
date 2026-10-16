import Section from '../Section';

const tags = [
  'Operating Partner',
  'IESE EMBA',
  'MSc Engenharia de Produção',
  'Lean Manufacturing',
  'Automação & IA',
  'PT · EN · ES · DE · IT',
];

export default function AboutPt() {
  return (
    <Section id="about" label="Sobre" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Sobre
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
              Engenheiro na base. Operador na prática.
            </h2>
          </div>

          <div className="md:col-span-8 space-y-4">
            <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">
              Sou o Cesar. Minha formação começa na engenharia e na disciplina
              operacional da Siemens e WEG, onde aprendi o instinto essencial do
              operador: identificar o gargalo, ajustar o sistema e seguir para a
              próxima alavanca.
            </p>
            <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">
              Nos últimos 12 anos, levei essa disciplina para o ecossistema de
              tecnologia e serviços B2B — atuando como fundador, COO e CFO em
              operações de alto crescimento, liderando reestruturações de
              equipes com mais de 90 pessoas, automação de processos críticos e
              máquinas de aquisição outbound.
            </p>
            <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">
              Conheço de perto a rotina de acordar com dezenas de incêndios para
              apagar. Meu trabalho com fundadores consiste em instalar a
              cadência e os sistemas que a empresa precisa para que a liderança
              possa focar na visão de longo prazo em vez do microgerenciamento.
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] px-3 py-1 text-xs text-[color:var(--ink-soft)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
