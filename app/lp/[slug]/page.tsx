import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm, { ServiceOption } from '../../components/LeadForm';

interface LpConfig {
  slug: string;
  defaultService: ServiceOption;
  pageTitle: string;
  tag: string;
  headline: string;
  subhead: string;
  ctaButtonText: string;
  painPointsTitle: string;
  painPoints: string[];
  deliverablesTitle: string;
  deliverables: { title: string; desc: string }[];
  proofPoints: string[];
  formTitle: string;
  formSubtitle: string;
  formCta: string;
}

const LP_CONFIGS: Record<string, LpConfig> = {
  gtm: {
    slug: 'gtm',
    defaultService: 'gtm',
    pageTitle: 'Máquina de Outbound & GTM B2B',
    tag: 'GTM & Outbound Previsível B2B',
    headline:
      'Estruture sua Máquina de Outbound & GTM B2B sem depender apenas de indicações',
    subhead:
      'Construa um canal repetível e previsível de geração de pipeline. Da infraestrutura de entregabilidade e ICP à cadência de prospecção e transição do founder-led sales.',
    ctaButtonText: 'Estruturar Máquina de Outbound',
    painPointsTitle: 'Gargalos comuns que travam o crescimento de vendas:',
    painPoints: [
      'Dependência excessiva de indicações e networking para bater as metas do mês.',
      'Fundador sobrecarregado conduzindo todas as demos e reuniões sem processos padronizados.',
      'Tentativas de cold email caindo na caixa de spam ou gerando leads desqualificados.',
      'CRM desorganizado, sem métricas claras de velocidade e taxa de conversão por etapa do funil.',
      'Dificuldade e insegurança em como contratar e ramp-upar os primeiros SDRs e Closers.',
    ],
    deliverablesTitle: 'O que desenhamos e implementamos na prática:',
    deliverables: [
      {
        title: 'Infraestrutura Técnica & Deliverability',
        desc: 'Configuração de domínios secundários dedicados, registros SPF, DKIM, DMARC e rotinas de aquecimento para garantir que seus e-mails cheguem à caixa de entrada principal.',
      },
      {
        title: 'Mapeamento Cirúrgico de ICP & Enriquecimento',
        desc: 'Construção do Perfil de Cliente Ideal, critérios de qualificação técnica e listas ultra-segmentadas com contato direto dos tomadores de decisão.',
      },
      {
        title: 'Copywriting de Conversão & Cadências Multi-Canal',
        desc: 'Sequências de abordagem no LinkedIn e e-mail com foco em valor real para o prospect, follow-ups estruturados e testes contínuos de copy.',
      },
      {
        title: 'Arquitetura de CRM & Playbook de Vendas',
        desc: 'Organização do pipeline, automação de etapas, dashboards de conversão e manual passo a passo para delegar as vendas com segurança.',
      },
    ],
    proofPoints: [
      'Mais de 12 anos de experiência em GTM B2B e vendas corporativas de alto ticket.',
      'Foco em métricas reais de negócio: reuniões qualificadas, pipeline gerado e redução do ciclo de vendas.',
      'Atuação prática de quem configura as ferramentas e constrói os processos junto com você.',
    ],
    formTitle: 'Solicitar Estruturação de GTM & Outbound',
    formSubtitle:
      'Preencha o formulário abaixo para receber uma análise preliminar e escolher seu horário para uma conversa de 30 minutos.',
    formCta: 'Avançar para Agendamento da Conversa →',
  },
  operacoes: {
    slug: 'operacoes',
    defaultService: 'coo',
    pageTitle: 'COO Fracionado & Escala para Startups B2B',
    tag: 'COO Fracionado & Escala Operacional',
    headline:
      'COO Fracionado para Startups B2B: Escale da tração inicial ao Series A sem caos operacional',
    subhead:
      'A liderança e a governança de um C-level experiente por uma fração do custo de uma contratação full-time. Alinhe cadência executiva, financeiro, pessoas e processos rumo à próxima rodada.',
    ctaButtonText: 'Conversar com um COO Fracionado',
    painPointsTitle:
      'Sinais de que o crescimento está gerando desordem interna:',
    painPoints: [
      'O fundador virou o maior gargalo da empresa: tudo depende da sua aprovação diária.',
      'Reuniões longas e improdutivas com prioridades que mudam a cada semana.',
      'Visibilidade financeira limitada: incerteza sobre o burn rate real, unit economics e runway.',
      'Gargalos na contratação, onboarding demorado e falta de alinhamento entre as lideranças.',
      'Ansiedade ou insegurança diante de due diligence e checagens de investidores de venture capital.',
    ],
    deliverablesTitle: 'Como atuamos na sua operação:',
    deliverables: [
      {
        title: 'Governança & Rituais Executivos',
        desc: 'Implementação de OKRs acionáveis, cadência semanal de alinhamento executivo, eliminação de reuniões inúteis e prestação de contas transparente.',
      },
      {
        title: 'Controle Financeiro & Projeção de Runway',
        desc: 'Estruturação do fluxo de caixa, acompanhamento rigoroso do burn rate e modelagem de cenários para estender o runway sem surpresas.',
      },
      {
        title: 'Processos Críticos & Autonomia Operacional',
        desc: 'Documentação ágil de fluxos de trabalho e definição de papéis para que a equipe trabalhe com clareza e autonomia sem depender do fundador a todo instante.',
      },
      {
        title: 'Preparação para Captação & Data Room',
        desc: 'Organização antecipada de métricas históricas, contratos, governança e data room para conduzir negociações com VCs a partir de uma posição de força.',
      },
    ],
    proofPoints: [
      'Mais de 12 anos operando e liderando empresas de tecnologia, finanças e escala B2B.',
      'Parceiro executivo direto dos founders na tomada de decisões difíceis e na resolução de conflitos operacionais.',
      'Libera a liderança para focar 100% em visão de produto, clientes e estratégia de longo prazo.',
    ],
    formTitle: 'Solicitar Avaliação de COO Fracionado',
    formSubtitle:
      'Conte-nos sobre seu estágio e momento para avaliarmos o encaixe e abrirmos a agenda para um diagnóstico inicial.',
    formCta: 'Avançar para Agendamento da Conversa →',
  },
  diagnostico: {
    slug: 'diagnostico',
    defaultService: 'diagnostico',
    pageTitle: 'Diagnóstico Operacional & GTM em 2 Semanas',
    tag: 'Sprint Operacional de 2 Semanas',
    headline:
      'Diagnóstico Operacional & GTM em 2 Semanas para Fundadores B2B SaaS',
    subhead:
      'Uma auditoria cirúrgica e imersiva para descobrir exatamente onde sua startup está vazando receita, tempo e caixa — com um roadmap tático de 90 dias pronto para execução.',
    ctaButtonText: 'Solicitar Diagnóstico Operacional',
    painPointsTitle: 'Dúvidas e atritos que resolvemos nesta sprint:',
    painPoints: [
      'A sensação constante de que o time trabalha no limite, mas a receita não cresce na mesma proporção.',
      'Funil de vendas opaco: falta de clareza sobre em qual etapa os prospects estão desistindo.',
      'Cálculos imprecisos de CAC, LTV, Payback e Net Retention Rate mascarando problemas de sustentabilidade.',
      'Muitas frentes abertas ao mesmo tempo e dúvida sobre qual deve ser a prioridade número 1 do trimestre.',
      'Desperdício de recursos com ferramentas caras subutilizadas ou processos manuais desnecessários.',
    ],
    deliverablesTitle: 'O que entregamos ao final das 2 semanas:',
    deliverables: [
      {
        title: 'Auditoria Completa de Funil & Vendas',
        desc: 'Mapeamento ponta a ponta da jornada de aquisição, qualificação, taxas de fechamento e motivos reais de perda de oportunidades.',
      },
      {
        title: 'Raio-X de Unit Economics & Eficiência',
        desc: 'Diagnóstico minucioso de CAC por canal, payback de vendas, churn de receita e eficiência do capital investido na operação.',
      },
      {
        title: 'Entrevistas de Operação & Mapeamento de Gargalos',
        desc: 'Conversas estruturadas com fundadores e líderes para identificar ruídos culturais, falta de alinhamento e desperdício de tempo.',
      },
      {
        title: 'Plano Tático de Ação de 90 Dias',
        desc: 'Entrega de um plano executivo detalhado com ações priorizadas por matriz de esforço x impacto, pronto para ser implementado pelo seu time.',
      },
    ],
    proofPoints: [
      'Sprint intensiva com início imediato e entrega completa em 14 dias corridos.',
      'Conduzido por Cesar Werlich, operador com vasta bagagem na análise de unit economics e métricas de SaaS.',
      '100% voltado à geração de clareza prática e retorno sobre o investimento.',
    ],
    formTitle: 'Solicitar Diagnóstico Operacional',
    formSubtitle:
      'Preencha as informações da sua empresa para avaliarmos a disponibilidade da sprint e escolhermos o melhor horário para alinhamento.',
    formCta: 'Avançar para Agendamento da Conversa →',
  },
};

export function generateStaticParams() {
  return [{ slug: 'gtm' }, { slug: 'operacoes' }, { slug: 'diagnostico' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = LP_CONFIGS[slug] || LP_CONFIGS['diagnostico'];

  return {
    title: `${config.pageTitle} | Saper Vedere`,
    description: config.subhead,
    openGraph: {
      title: `${config.pageTitle} | Saper Vedere`,
      description: config.subhead,
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = LP_CONFIGS[slug] || LP_CONFIGS['diagnostico'];

  return (
    <div className="theme-v2-blue theme-6-logo-blue-headings min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)] flex flex-col">
      {/* Distraction-free Header: Logo + direct anchor CTA */}
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

          <a
            href="#form"
            className="inline-flex items-center rounded-full bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)] text-[color:var(--bg)] px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-colors shadow-sm"
          >
            {config.ctaButtonText}
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 border-b border-[color:var(--border)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--accent)]">
                {config.tag}
              </span>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-[color:var(--ink)] leading-[1.12]">
                {config.headline}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[color:var(--ink-soft)] leading-relaxed">
                {config.subhead}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#form"
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)] text-[color:var(--bg)] font-medium py-3.5 px-7 shadow-sm transition-all text-sm sm:text-base text-center"
                >
                  {config.ctaButtonText} &rarr;
                </a>
                <span className="text-xs text-[color:var(--muted)] text-center sm:text-left">
                  ⚡ Diagnóstico de 30 min sem compromisso
                </span>
              </div>
            </div>

            {/* Proof bar */}
            <div className="mt-14 pt-8 border-t border-[color:var(--border)] grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-display font-semibold text-[color:var(--ink)]">
                  12+ anos
                </p>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] mt-0.5">
                  Liderando operações e escala B2B
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-semibold text-[color:var(--ink)]">
                  Mapeamento Real
                </p>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] mt-0.5">
                  Processos, finanças e GTM
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl sm:text-3xl font-display font-semibold text-[color:var(--ink)]">
                  100% Prático
                </p>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] mt-0.5">
                  Sem slides genéricos, direto ao ponto
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points section */}
        <section className="py-16 sm:py-20 bg-[color:var(--surface)]/40 border-b border-[color:var(--border)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-[color:var(--muted)] mb-3">
              Identificação de Desafios
            </h2>
            <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--ink)] tracking-tight mb-8">
              {config.painPointsTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {config.painPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 sm:p-5 rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--bg)]"
                >
                  <span className="flex-shrink-0 text-[color:var(--accent)] font-bold mt-0.5">
                    ✕
                  </span>
                  <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables section */}
        <section className="py-16 sm:py-24 border-b border-[color:var(--border)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-[color:var(--accent)] mb-3">
              Entregáveis &amp; Impacto
            </h2>
            <h3 className="font-display text-2xl sm:text-3xl sm:text-4xl text-[color:var(--ink)] tracking-tight mb-10 max-w-2xl">
              {config.deliverablesTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {config.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)] hover:border-[color:var(--border-strong)] transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)] font-bold text-sm mb-4">
                    {idx + 1}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-[color:var(--ink)] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof / Operator Bio */}
        <section className="py-16 sm:py-20 bg-[color:var(--surface)]/30 border-b border-[color:var(--border)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center md:justify-start">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-[color:var(--border-strong)] shadow-sm">
                  <Image
                    src="/cesar-werlich.jpeg"
                    alt="Cesar Werlich"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-8">
                <p className="text-xs uppercase tracking-[0.18em] font-semibold text-[color:var(--muted)]">
                  Quem conduz o trabalho
                </p>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl text-[color:var(--ink)] tracking-tight">
                  Cesar Werlich · Saper Vedere
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[color:var(--ink-soft)] leading-relaxed">
                  Ao longo de mais de 12 anos, liderei operações, montei
                  máquinas comerciais B2B, estruturei governança financeira e
                  preparei empresas para rodadas de investimento e escala
                  sustentável. Não trabalho como consultor tradicional de
                  apresentações: sou um operador parceiro que senta ao lado dos
                  fundadores para resolver gargalos reais.
                </p>

                <div className="mt-5 space-y-2">
                  {config.proofPoints.map((proof, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-[color:var(--ink-soft)]"
                    >
                      <span className="text-[color:var(--accent)] font-bold">
                        ✓
                      </span>
                      <span>{proof}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Anchor Section */}
        <section
          id="form"
          className="py-16 sm:py-24 bg-[color:var(--bg)] scroll-mt-24"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="rounded-[var(--radius-xl)] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-10 shadow-sm">
              <LeadForm
                defaultService={config.defaultService}
                title={config.formTitle}
                subtitle={config.formSubtitle}
                ctaLabel={config.formCta}
                selectionMode="checkboxes"
              />
            </div>
          </div>
        </section>
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
