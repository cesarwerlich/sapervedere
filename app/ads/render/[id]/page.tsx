import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Ad Render Engine — Saper Vedere',
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return [
    // Defaults
    { id: 'feed-1' },
    { id: 'feed-2' },
    { id: 'feed-3' },
    { id: 'story-1' },
    { id: 'story-2' },
    { id: 'story-3' },
    { id: 'cover' },
    // V1 — Warm Linen Executive
    { id: 'feed-1-v1' },
    { id: 'feed-2-v1' },
    { id: 'feed-3-v1' },
    { id: 'story-1-v1' },
    { id: 'story-2-v1' },
    { id: 'story-3-v1' },
    // V2 — Deep Navy Authority
    { id: 'feed-1-v2' },
    { id: 'feed-2-v2' },
    { id: 'feed-3-v2' },
    { id: 'story-1-v2' },
    { id: 'story-2-v2' },
    { id: 'story-3-v2' },
    // V3 — Stark Editorial White
    { id: 'feed-1-v3' },
    { id: 'feed-2-v3' },
    { id: 'feed-3-v3' },
    { id: 'story-1-v3' },
    { id: 'story-2-v3' },
    { id: 'story-3-v3' },
  ];
}

export default async function AdRenderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // ==========================================
  // FEED 1: O Teste das Férias (Fractional COO)
  // ==========================================

  // Feed 1 — V1: Warm Linen Executive (Default)
  if (id === 'feed-1' || id === 'feed-1-v1') {
    return (
      <div className="w-[1080px] h-[1080px] bg-[#f7f3eb] text-[#194162] p-12 flex flex-col justify-between relative overflow-hidden font-sans select-none">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#1a5c88]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        {/* Top Tag */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#194162]/10 border border-[#194162]/20 text-[#194162] text-xl font-mono uppercase tracking-wider font-semibold">
            <span>⚡</span>
            <span>Fractional COO · B2B</span>
          </div>

          <h1
            className="font-serif text-[76px] leading-[1.08] mt-8 tracking-tight font-medium"
            style={{ color: '#194162' }}
          >
            &ldquo;Se você tirar 14 dias de férias hoje, sua empresa cresce ou
            trava?&rdquo;
          </h1>
        </div>

        {/* Main Pain Card */}
        <div className="relative z-10 bg-white p-8 rounded-3xl border border-[#194162]/15 shadow-xl">
          <p className="text-[34px] leading-relaxed text-[#1e293b] font-normal">
            Se cada decisão, venda e entrega ainda depende do seu ok, você não
            tem uma operação escalável.{' '}
            <span className="font-semibold text-[#194162]">
              Virou o maior gargalo dela.
            </span>
          </p>
        </div>

        {/* Footer Bar */}
        <div className="relative z-10 pt-6 border-t-2 border-[#194162]/15 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Saper Vedere"
              className="w-16 h-16 rounded-2xl bg-[#194162] p-2 shadow-md"
            />
            <div>
              <p className="text-2xl font-bold text-[#194162]">Cesar Werlich</p>
              <p className="text-base text-[#64748b] font-mono">
                @cesarwerlich · Fractional COO
              </p>
            </div>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#194162] text-white text-2xl font-bold shadow-xl flex items-center gap-3">
            <span>Ver Como Funciona</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  // Feed 1 — V2: Deep Navy Authority
  if (id === 'feed-1-v2') {
    return (
      <div className="w-[1080px] h-[1080px] bg-[#194162] text-white p-12 flex flex-col justify-between relative overflow-hidden font-sans select-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1a5c88]/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[#6cb3df] text-xl font-mono uppercase tracking-wider font-semibold">
            <span>⚡</span>
            <span>Fractional COO · B2B</span>
          </div>

          <div
            className="font-serif text-[76px] leading-[1.08] mt-8 tracking-tight font-medium"
            style={{ color: '#ffffff' }}
          >
            &ldquo;Se você tirar 14 dias de férias hoje, sua empresa cresce ou
            trava?&rdquo;
          </div>
        </div>

        <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          <p className="text-[34px] leading-relaxed text-[#f7f3eb] font-light">
            Se cada decisão, venda e entrega ainda depende do seu ok, você não
            tem uma operação escalável.{' '}
            <span className="font-semibold text-white underline decoration-[#6cb3df]">
              Virou o maior gargalo dela.
            </span>
          </p>
        </div>

        <div className="relative z-10 pt-6 border-t-2 border-white/20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Saper Vedere"
              className="w-16 h-16 rounded-2xl bg-white p-2 shadow-md"
            />
            <div>
              <p className="text-2xl font-bold text-white">Cesar Werlich</p>
              <p className="text-base text-[#6cb3df] font-mono">
                @cesarwerlich · Fractional COO
              </p>
            </div>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#f7f3eb] text-[#194162] text-2xl font-bold shadow-xl flex items-center gap-3">
            <span>Ver Como Funciona</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  // Feed 1 — V3: Stark Editorial White
  if (id === 'feed-1-v3') {
    return (
      <div className="w-[1080px] h-[1080px] bg-white text-[#0f172a] p-12 flex flex-col justify-between relative overflow-hidden font-sans select-none border-8 border-slate-100">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-100 border border-slate-300 text-[#194162] text-xl font-mono uppercase tracking-wider font-bold">
            <span>⚡</span>
            <span>Fractional COO · B2B</span>
          </div>

          <div
            className="font-serif text-[76px] leading-[1.08] mt-8 tracking-tight font-medium"
            style={{ color: '#0f172a' }}
          >
            &ldquo;Se você tirar 14 dias de férias hoje, sua empresa cresce ou{' '}
            <span className="text-[#1a5c88] underline decoration-4">
              trava?
            </span>
            &rdquo;
          </div>
        </div>

        <div className="relative z-10 bg-[#f8fafc] p-8 rounded-3xl border border-slate-200 shadow-md">
          <p className="text-[34px] leading-relaxed text-[#334155] font-normal">
            Se cada venda e decisão ainda depende do seu ok diário, você não tem
            uma operação. Virou o maior gargalo dela.
          </p>
        </div>

        <div className="relative z-10 pt-6 border-t-2 border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Saper Vedere"
              className="w-16 h-16 rounded-2xl bg-[#194162] p-2"
            />
            <div>
              <p className="text-2xl font-bold text-[#0f172a]">Cesar Werlich</p>
              <p className="text-base text-slate-500 font-mono">
                @cesarwerlich · Fractional COO
              </p>
            </div>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#1a5c88] text-white text-2xl font-bold shadow-xl flex items-center gap-3">
            <span>Destravar Operação</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // FEED 2: GTM com Agentes de IA
  // ==========================================

  // Feed 2 — V1: Warm Linen Executive
  if (id === 'feed-2-v1') {
    return (
      <div className="w-[1080px] h-[1080px] bg-[#f7f3eb] text-[#194162] p-12 flex flex-col justify-between relative overflow-hidden font-sans select-none">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#194162]/10 border border-[#194162]/20 text-[#194162] text-xl font-mono uppercase tracking-wider font-semibold">
            <span>🤖</span>
            <span>GTM & Outbound com IA</span>
          </div>

          <h1
            className="font-serif text-[70px] leading-[1.1] mt-8 tracking-tight font-medium"
            style={{ color: '#194162' }}
          >
            Por que gastar R$ 25k/mês em tarefas manuais que Agentes de IA rodam
            em 30 segundos?
          </h1>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-[#194162]/15 shadow-md flex items-center gap-5 text-2xl font-sans text-[#1e293b]">
            <span className="w-10 h-10 rounded-xl bg-[#194162]/10 text-[#194162] flex items-center justify-center font-bold text-xl">
              ✓
            </span>
            <span>Prospecção técnica e enriquecimento de decisores B2B</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#194162]/15 shadow-md flex items-center gap-5 text-2xl font-sans text-[#1e293b]">
            <span className="w-10 h-10 rounded-xl bg-[#194162]/10 text-[#194162] flex items-center justify-center font-bold text-xl">
              ✓
            </span>
            <span>Cold outreach com entregabilidade 99% blindada</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#194162]/15 shadow-md flex items-center gap-5 text-2xl font-sans text-[#1e293b]">
            <span className="w-10 h-10 rounded-xl bg-[#194162]/10 text-[#194162] flex items-center justify-center font-bold text-xl">
              ✓
            </span>
            <span>Pipeline previsível de reuniões sem inchar a folha</span>
          </div>
        </div>

        <div className="relative z-10 pt-6 border-t-2 border-[#194162]/15 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#194162]">Saper Vedere</p>
            <p className="text-base text-[#64748b] font-mono">
              Máquina de GTM & Outbound
            </p>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#194162] text-white text-2xl font-bold shadow-xl flex items-center gap-3">
            <span>Construir Máquina</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  // Feed 2 — V2: Deep Navy Authority (Default)
  if (id === 'feed-2' || id === 'feed-2-v2') {
    return (
      <div className="w-[1080px] h-[1080px] bg-[#194162] text-white p-12 flex flex-col justify-between relative overflow-hidden font-sans select-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#1a5c88]/40 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[#6cb3df] text-xl font-mono uppercase tracking-wider font-semibold">
            <span>🤖</span>
            <span>GTM & Outbound com IA</span>
          </div>

          <div
            className="font-serif text-[72px] leading-[1.1] mt-8 tracking-tight font-medium"
            style={{ color: '#ffffff' }}
          >
            Por que gastar R$ 25k/mês em tarefas que Agentes de IA rodam em 30
            segundos?
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex items-center gap-5 text-2xl font-sans text-white">
            <span className="w-10 h-10 rounded-xl bg-[#6cb3df]/20 text-[#6cb3df] flex items-center justify-center font-bold text-xl">
              ✓
            </span>
            <span>Prospecção técnica e enriquecimento de decisores B2B</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex items-center gap-5 text-2xl font-sans text-white">
            <span className="w-10 h-10 rounded-xl bg-[#6cb3df]/20 text-[#6cb3df] flex items-center justify-center font-bold text-xl">
              ✓
            </span>
            <span>Cold outreach com entregabilidade 99% blindada</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex items-center gap-5 text-2xl font-sans text-white">
            <span className="w-10 h-10 rounded-xl bg-[#6cb3df]/20 text-[#6cb3df] flex items-center justify-center font-bold text-xl">
              ✓
            </span>
            <span>Pipeline previsível de reuniões sem inchar a folha</span>
          </div>
        </div>

        <div className="relative z-10 pt-6 border-t-2 border-white/20 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-white">Saper Vedere</p>
            <p className="text-base text-[#6cb3df] font-mono">
              Máquina de GTM & Outbound
            </p>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#f7f3eb] text-[#194162] text-2xl font-bold shadow-xl flex items-center gap-3">
            <span>Construir Máquina</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  // Feed 2 — V3: Stark Editorial White
  if (id === 'feed-2-v3') {
    return (
      <div className="w-[1080px] h-[1080px] bg-white text-[#0f172a] p-12 flex flex-col justify-between relative overflow-hidden font-sans select-none border-8 border-slate-100">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-100 border border-slate-300 text-[#194162] text-xl font-mono uppercase tracking-wider font-bold">
            <span>🤖</span>
            <span>GTM & Outbound com IA</span>
          </div>

          <div
            className="font-serif text-[70px] leading-[1.1] mt-8 tracking-tight font-medium"
            style={{ color: '#0f172a' }}
          >
            Por que gastar R$ 25k/mês em tarefas manuais que{' '}
            <span className="text-[#1a5c88]">Agentes de IA</span> rodam em 30
            segundos?
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 flex items-center gap-5 text-2xl font-sans text-[#1e293b]">
            <span className="w-10 h-10 rounded-xl bg-[#194162] text-white flex items-center justify-center font-bold text-xl">
              ✓
            </span>
            <span>Prospecção técnica e enriquecimento de decisores B2B</span>
          </div>
          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 flex items-center gap-5 text-2xl font-sans text-[#1e293b]">
            <span className="w-10 h-10 rounded-xl bg-[#194162] text-white flex items-center justify-center font-bold text-xl">
              ✓
            </span>
            <span>Cold outreach com entregabilidade 99% blindada</span>
          </div>
          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 flex items-center gap-5 text-2xl font-sans text-[#1e293b]">
            <span className="w-10 h-10 rounded-xl bg-[#194162] text-white flex items-center justify-center font-bold text-xl">
              ✓
            </span>
            <span>Pipeline previsível sem inchar a folha de pagamento</span>
          </div>
        </div>

        <div className="relative z-10 pt-6 border-t-2 border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#0f172a]">Saper Vedere</p>
            <p className="text-base text-slate-500 font-mono">
              Máquina de GTM & Outbound
            </p>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#194162] text-white text-2xl font-bold shadow-xl flex items-center gap-3">
            <span>Construir Máquina</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // FEED 3: Os 3 Sintomas B2B (Redesenhado do Zero)
  // ==========================================

  // Feed 3 — V1: Warm Linen Executive (NOVO DEFAULT — Alto Contraste & Sans Grande)
  if (id === 'feed-3' || id === 'feed-3-v1') {
    return (
      <div className="w-[1080px] h-[1080px] bg-[#f7f3eb] text-[#194162] p-12 flex flex-col justify-between relative overflow-hidden font-sans select-none">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#194162]/10 border border-[#194162]/20 text-[#194162] text-xl font-mono uppercase tracking-wider font-semibold">
            <span>⏱️</span>
            <span>Diagnóstico Operacional</span>
          </div>

          <h1
            className="font-serif text-[72px] leading-[1.08] mt-8 tracking-tight font-medium"
            style={{ color: '#194162' }}
          >
            Sua empresa B2B tem algum destes 3 sintomas?
          </h1>
        </div>

        {/* 3 Clean, Highly Legible Cards (NO MONO, NO BLACK!) */}
        <div className="relative z-10 space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-[#194162]/15 shadow-md flex items-center gap-6">
            <span className="w-14 h-14 rounded-2xl bg-[#194162] text-white flex items-center justify-center font-bold text-2xl shrink-0">
              01
            </span>
            <p className="text-[28px] text-[#1e293b] leading-snug font-normal">
              Indicações secaram e a receita oscila mês a mês sem
              previsibilidade.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#194162]/15 shadow-md flex items-center gap-6">
            <span className="w-14 h-14 rounded-2xl bg-[#194162] text-white flex items-center justify-center font-bold text-2xl shrink-0">
              02
            </span>
            <p className="text-[28px] text-[#1e293b] leading-snug font-normal">
              Sócios e fundadores ainda fazem 100% das vendas e decisões na
              unha.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#194162]/15 shadow-md flex items-center gap-6">
            <span className="w-14 h-14 rounded-2xl bg-[#194162] text-white flex items-center justify-center font-bold text-2xl shrink-0">
              03
            </span>
            <p className="text-[28px] text-[#1e293b] leading-snug font-normal">
              Equipe ocupada o dia todo, mas sem metas semanais e rotina de
              gestão.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 pt-6 border-t-2 border-[#194162]/15 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#194162]">
              Raio-X de 30 min
            </p>
            <p className="text-base text-[#64748b] font-mono">
              Diagnóstico Operacional sem Custo
            </p>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#194162] text-white text-2xl font-bold shadow-xl flex items-center gap-3">
            <span>Fazer Diagnóstico</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  // Feed 3 — V2: Deep Navy Authority (Azul Saper Vedere, Zero Preto!)
  if (id === 'feed-3-v2') {
    return (
      <div className="w-[1080px] h-[1080px] bg-[#194162] text-white p-12 flex flex-col justify-between relative overflow-hidden font-sans select-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1a5c88]/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[#6cb3df] text-xl font-mono uppercase tracking-wider font-semibold">
            <span>⏱️</span>
            <span>Diagnóstico Operacional</span>
          </div>

          <div
            className="font-serif text-[72px] leading-[1.08] mt-8 tracking-tight font-medium"
            style={{ color: '#ffffff' }}
          >
            Sua empresa B2B tem algum destes 3 sintomas?
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex items-center gap-6 shadow-xl">
            <span className="w-14 h-14 rounded-2xl bg-[#6cb3df] text-[#194162] flex items-center justify-center font-bold text-2xl shrink-0">
              01
            </span>
            <p className="text-[28px] text-white leading-snug font-normal">
              Indicações secaram e a receita oscila mês a mês sem
              previsibilidade.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex items-center gap-6 shadow-xl">
            <span className="w-14 h-14 rounded-2xl bg-[#6cb3df] text-[#194162] flex items-center justify-center font-bold text-2xl shrink-0">
              02
            </span>
            <p className="text-[28px] text-white leading-snug font-normal">
              Sócios e fundadores ainda fazem 100% das vendas e decisões na
              unha.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex items-center gap-6 shadow-xl">
            <span className="w-14 h-14 rounded-2xl bg-[#6cb3df] text-[#194162] flex items-center justify-center font-bold text-2xl shrink-0">
              03
            </span>
            <p className="text-[28px] text-white leading-snug font-normal">
              Equipe ocupada o dia todo, mas sem metas semanais e rotina de
              gestão.
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-6 border-t-2 border-white/20 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-white">Raio-X de 30 min</p>
            <p className="text-base text-[#6cb3df] font-mono">
              Diagnóstico Operacional sem Custo
            </p>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#f7f3eb] text-[#194162] text-2xl font-bold shadow-xl flex items-center gap-3">
            <span>Fazer Diagnóstico</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  // Feed 3 — V3: Stark Editorial White
  if (id === 'feed-3-v3') {
    return (
      <div className="w-[1080px] h-[1080px] bg-white text-[#0f172a] p-12 flex flex-col justify-between relative overflow-hidden font-sans select-none border-8 border-slate-100">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-100 border border-slate-300 text-[#194162] text-xl font-mono uppercase tracking-wider font-bold">
            <span>⏱️</span>
            <span>Diagnóstico Operacional</span>
          </div>

          <div
            className="font-serif text-[72px] leading-[1.08] mt-8 tracking-tight font-medium"
            style={{ color: '#0f172a' }}
          >
            Sua empresa B2B tem algum destes{' '}
            <span className="text-[#1a5c88] underline decoration-4">
              3 sintomas?
            </span>
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 flex items-center gap-6 shadow-sm">
            <span className="w-14 h-14 rounded-2xl bg-[#194162] text-white flex items-center justify-center font-bold text-2xl shrink-0">
              01
            </span>
            <p className="text-[28px] text-[#1e293b] leading-snug font-normal">
              Indicações secaram e a receita oscila mês a mês sem
              previsibilidade.
            </p>
          </div>

          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 flex items-center gap-6 shadow-sm">
            <span className="w-14 h-14 rounded-2xl bg-[#194162] text-white flex items-center justify-center font-bold text-2xl shrink-0">
              02
            </span>
            <p className="text-[28px] text-[#1e293b] leading-snug font-normal">
              Sócios e fundadores ainda fazem 100% das vendas e decisões na
              unha.
            </p>
          </div>

          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 flex items-center gap-6 shadow-sm">
            <span className="w-14 h-14 rounded-2xl bg-[#194162] text-white flex items-center justify-center font-bold text-2xl shrink-0">
              03
            </span>
            <p className="text-[28px] text-[#1e293b] leading-snug font-normal">
              Equipe ocupada o dia todo, mas sem metas semanais e rotina de
              gestão.
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-6 border-t-2 border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#0f172a]">
              Raio-X de 30 min
            </p>
            <p className="text-base text-slate-500 font-mono">
              Diagnóstico Operacional sem Custo
            </p>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#1a5c88] text-white text-2xl font-bold shadow-xl flex items-center gap-3">
            <span>Fazer Diagnóstico</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // STORIES FORMAT (9:16 — 1080 x 1920)
  // ==========================================

  // Story 1 — V1: Warm Linen Executive (Default)
  if (id === 'story-1' || id === 'story-1-v1') {
    return (
      <div className="w-[1080px] h-[1920px] bg-[#f7f3eb] text-[#194162] p-16 flex flex-col justify-between relative font-sans select-none">
        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#194162]/10 border border-[#194162]/20 text-[#194162] text-2xl font-mono uppercase tracking-wider font-semibold">
            <span>Cesar Werlich · Fractional COO</span>
          </div>

          <h1
            className="font-serif text-[88px] leading-[1.08] mt-16 tracking-tight font-medium"
            style={{ color: '#194162' }}
          >
            Você manda na sua empresa ou virou escravo da operação?
          </h1>

          <div className="mt-20 space-y-8">
            <div className="p-8 bg-white rounded-3xl border border-[#194162]/15 shadow-lg flex items-center gap-6">
              <span className="text-4xl text-rose-600 font-bold shrink-0">
                ✕
              </span>
              <p className="text-3xl text-[#1e293b] font-normal leading-snug">
                Agenda sufocada com reuniões operacionais vazias
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-[#194162]/15 shadow-lg flex items-center gap-6">
              <span className="text-4xl text-rose-600 font-bold shrink-0">
                ✕
              </span>
              <p className="text-3xl text-[#1e293b] font-normal leading-snug">
                Equipe não decide nada sem você no meio
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-[#194162]/15 shadow-lg flex items-center gap-6">
              <span className="text-4xl text-rose-600 font-bold shrink-0">
                ✕
              </span>
              <p className="text-3xl text-[#1e293b] font-normal leading-snug">
                Zero tempo para pensar no crescimento estratégico
              </p>
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#194162] text-white rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Mudar esse cenário em 30 min</p>
          <p className="text-2xl text-[#6cb3df] font-mono">
            Toque no link abaixo
          </p>
        </div>
      </div>
    );
  }

  // Story 1 — V2: Deep Navy Authority
  if (id === 'story-1-v2') {
    return (
      <div className="w-[1080px] h-[1920px] bg-[#194162] text-white p-16 flex flex-col justify-between relative font-sans select-none">
        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[#6cb3df] text-2xl font-mono uppercase tracking-wider font-semibold">
            <span>Cesar Werlich · Fractional COO</span>
          </div>

          <div
            className="font-serif text-[88px] leading-[1.08] mt-16 tracking-tight font-medium"
            style={{ color: '#ffffff' }}
          >
            Você manda na sua empresa ou virou escravo da operação?
          </div>

          <div className="mt-20 space-y-8">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl flex items-center gap-6">
              <span className="text-4xl text-rose-400 font-bold shrink-0">
                ✕
              </span>
              <p className="text-3xl text-white font-normal leading-snug">
                Agenda sufocada com reuniões operacionais vazias
              </p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl flex items-center gap-6">
              <span className="text-4xl text-rose-400 font-bold shrink-0">
                ✕
              </span>
              <p className="text-3xl text-white font-normal leading-snug">
                Equipe não decide nada sem você no meio
              </p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl flex items-center gap-6">
              <span className="text-4xl text-rose-400 font-bold shrink-0">
                ✕
              </span>
              <p className="text-3xl text-white font-normal leading-snug">
                Zero tempo para pensar no crescimento estratégico
              </p>
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#f7f3eb] text-[#194162] rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Mudar esse cenário em 30 min</p>
          <p className="text-2xl text-[#194162]/80 font-mono">
            Toque no link abaixo
          </p>
        </div>
      </div>
    );
  }

  // Story 1 — V3: Stark Editorial White
  if (id === 'story-1-v3') {
    return (
      <div className="w-[1080px] h-[1920px] bg-white text-[#0f172a] p-16 flex flex-col justify-between relative font-sans select-none border-[16px] border-slate-100">
        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-100 border border-slate-300 text-[#194162] text-2xl font-mono uppercase tracking-wider font-bold">
            <span>Cesar Werlich · Fractional COO</span>
          </div>

          <div
            className="font-serif text-[88px] leading-[1.08] mt-16 tracking-tight font-medium"
            style={{ color: '#0f172a' }}
          >
            Você manda na sua empresa ou virou{' '}
            <span className="text-[#1a5c88] underline decoration-4">
              escravo
            </span>{' '}
            da operação?
          </div>

          <div className="mt-20 space-y-8">
            <div className="p-8 bg-[#f8fafc] rounded-3xl border border-slate-200 shadow-md flex items-center gap-6">
              <span className="text-4xl text-rose-600 font-bold shrink-0">
                ✕
              </span>
              <p className="text-3xl text-[#1e293b] font-normal leading-snug">
                Agenda sufocada com reuniões operacionais vazias
              </p>
            </div>
            <div className="p-8 bg-[#f8fafc] rounded-3xl border border-slate-200 shadow-md flex items-center gap-6">
              <span className="text-4xl text-rose-600 font-bold shrink-0">
                ✕
              </span>
              <p className="text-3xl text-[#1e293b] font-normal leading-snug">
                Equipe não decide nada sem você no meio
              </p>
            </div>
            <div className="p-8 bg-[#f8fafc] rounded-3xl border border-slate-200 shadow-md flex items-center gap-6">
              <span className="text-4xl text-rose-600 font-bold shrink-0">
                ✕
              </span>
              <p className="text-3xl text-[#1e293b] font-normal leading-snug">
                Zero tempo para pensar no crescimento estratégico
              </p>
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#1a5c88] text-white rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Mudar esse cenário em 30 min</p>
          <p className="text-2xl text-white/80 font-mono">
            Toque no link abaixo
          </p>
        </div>
      </div>
    );
  }

  // Story 2 — V1: Warm Linen Executive
  if (id === 'story-2-v1') {
    return (
      <div className="w-[1080px] h-[1920px] bg-[#f7f3eb] text-[#194162] p-16 flex flex-col justify-between relative font-sans select-none">
        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#194162]/10 border border-[#194162]/20 text-[#194162] text-2xl font-mono uppercase tracking-wider font-semibold">
            <span>Máquina de GTM · Saper Vedere</span>
          </div>

          <h1
            className="font-serif text-[84px] leading-[1.08] mt-16 tracking-tight font-medium"
            style={{ color: '#194162' }}
          >
            Quantas reuniões comerciais sua empresa fechou esta semana?
          </h1>

          <p className="text-3xl text-[#334155] mt-8 leading-relaxed">
            Se a resposta for &ldquo;apenas as que vieram por indicação&rdquo;,
            você não tem controle da sua receita.
          </p>

          <div className="mt-16 space-y-6">
            <div className="p-8 bg-white rounded-3xl border border-[#194162]/15 shadow-md flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">✓</span>
              <span>Prospecção técnica multicanal com IA</span>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-[#194162]/15 shadow-md flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">✓</span>
              <span>Entregabilidade 99% blindada</span>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-[#194162]/15 shadow-md flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">✓</span>
              <span>Pipeline previsível de reuniões todo mês</span>
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#194162] text-white rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Construir Canal de Outbound</p>
          <p className="text-2xl text-[#6cb3df] font-mono">
            Toque para ver como funciona
          </p>
        </div>
      </div>
    );
  }

  // Story 2 — V2: Deep Navy Authority (Default)
  if (id === 'story-2' || id === 'story-2-v2') {
    return (
      <div className="w-[1080px] h-[1920px] bg-[#194162] text-white p-16 flex flex-col justify-between relative font-sans select-none">
        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[#6cb3df] text-2xl font-mono uppercase tracking-wider font-semibold">
            <span>Máquina de GTM · Saper Vedere</span>
          </div>

          <div
            className="font-serif text-[84px] leading-[1.08] mt-16 tracking-tight font-medium"
            style={{ color: '#ffffff' }}
          >
            Quantas reuniões comerciais sua empresa fechou esta semana?
          </div>

          <p className="text-3xl text-[#f7f3eb]/80 mt-8 leading-relaxed">
            Se a resposta for &ldquo;apenas as que vieram por indicação&rdquo;,
            você não tem controle da sua receita.
          </p>

          <div className="mt-16 space-y-6">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center gap-6 text-3xl font-sans text-white">
              <span className="text-[#6cb3df] font-bold">✓</span>
              <span>Prospecção técnica multicanal com IA</span>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center gap-6 text-3xl font-sans text-white">
              <span className="text-[#6cb3df] font-bold">✓</span>
              <span>Entregabilidade 99% blindada</span>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center gap-6 text-3xl font-sans text-white">
              <span className="text-[#6cb3df] font-bold">✓</span>
              <span>Pipeline previsível de reuniões todo mês</span>
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#f7f3eb] text-[#194162] rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Construir Canal de Outbound</p>
          <p className="text-2xl text-[#194162]/80 font-mono">
            Toque para ver como funciona
          </p>
        </div>
      </div>
    );
  }

  // Story 2 — V3: Stark Editorial White
  if (id === 'story-2-v3') {
    return (
      <div className="w-[1080px] h-[1920px] bg-white text-[#0f172a] p-16 flex flex-col justify-between relative font-sans select-none border-[16px] border-slate-100">
        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-100 border border-slate-300 text-[#194162] text-2xl font-mono uppercase tracking-wider font-bold">
            <span>Máquina de GTM · Saper Vedere</span>
          </div>

          <div
            className="font-serif text-[84px] leading-[1.08] mt-16 tracking-tight font-medium"
            style={{ color: '#0f172a' }}
          >
            Quantas reuniões comerciais sua empresa fechou{' '}
            <span className="text-[#1a5c88] underline decoration-4">
              esta semana?
            </span>
          </div>

          <p className="text-3xl text-slate-600 mt-8 leading-relaxed">
            Se a resposta for &ldquo;apenas as que vieram por indicação&rdquo;,
            você não tem controle da sua receita.
          </p>

          <div className="mt-16 space-y-6">
            <div className="p-8 bg-[#f8fafc] rounded-3xl border border-slate-200 shadow-sm flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">✓</span>
              <span>Prospecção técnica multicanal com IA</span>
            </div>
            <div className="p-8 bg-[#f8fafc] rounded-3xl border border-slate-200 shadow-sm flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">✓</span>
              <span>Entregabilidade 99% blindada</span>
            </div>
            <div className="p-8 bg-[#f8fafc] rounded-3xl border border-slate-200 shadow-sm flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">✓</span>
              <span>Pipeline previsível sem inchar a folha</span>
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#1a5c88] text-white rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Construir Canal de Outbound</p>
          <p className="text-2xl text-white/80 font-mono">
            Toque para ver como funciona
          </p>
        </div>
      </div>
    );
  }

  // Story 3 — V1: Warm Linen Executive (Default)
  if (id === 'story-3' || id === 'story-3-v1') {
    return (
      <div className="w-[1080px] h-[1920px] bg-[#f7f3eb] text-[#194162] p-16 flex flex-col justify-between relative font-sans select-none">
        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#194162]/10 border border-[#194162]/20 text-[#194162] text-2xl font-mono uppercase tracking-wider font-semibold">
            <span>Diagnóstico Executivo · 14 Dias</span>
          </div>

          <h1
            className="font-serif text-[84px] leading-[1.08] mt-16 tracking-tight font-medium"
            style={{ color: '#194162' }}
          >
            14 dias para mapear todos os gargalos da sua operação.
          </h1>

          <p className="text-3xl text-[#334155] mt-8 leading-relaxed">
            Para fundadores e sócios B2B que precisam de tração, previsibilidade
            e margem saudável.
          </p>

          <div className="mt-16 space-y-6">
            <div className="p-8 bg-white rounded-3xl border border-[#194162]/15 shadow-md flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">🎯</span>
              <span>Onde o funil de vendas está vazando receita</span>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-[#194162]/15 shadow-md flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">📊</span>
              <span>Onde o caixa e as horas do time estão sendo queimados</span>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-[#194162]/15 shadow-md flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">🗺️</span>
              <span>Plano de 90 dias com operador sênior no terreno</span>
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#194162] text-white rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Solicitar Diagnóstico Rápido</p>
          <p className="text-2xl text-[#6cb3df] font-mono">
            Conversa de 30 minutos
          </p>
        </div>
      </div>
    );
  }

  // Story 3 — V2: Deep Navy Authority
  if (id === 'story-3-v2') {
    return (
      <div className="w-[1080px] h-[1920px] bg-[#194162] text-white p-16 flex flex-col justify-between relative font-sans select-none">
        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[#6cb3df] text-2xl font-mono uppercase tracking-wider font-semibold">
            <span>Diagnóstico Executivo · 14 Dias</span>
          </div>

          <div
            className="font-serif text-[84px] leading-[1.08] mt-16 tracking-tight font-medium"
            style={{ color: '#ffffff' }}
          >
            14 dias para mapear todos os gargalos da sua operação.
          </div>

          <p className="text-3xl text-[#f7f3eb]/80 mt-8 leading-relaxed">
            Para fundadores e sócios B2B que precisam de tração, previsibilidade
            e margem saudável.
          </p>

          <div className="mt-16 space-y-6">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center gap-6 text-3xl font-sans text-white">
              <span className="text-[#6cb3df] font-bold">🎯</span>
              <span>Onde o funil de vendas está vazando receita</span>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center gap-6 text-3xl font-sans text-white">
              <span className="text-[#6cb3df] font-bold">📊</span>
              <span>Onde o caixa e as horas do time estão sendo queimados</span>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center gap-6 text-3xl font-sans text-white">
              <span className="text-[#6cb3df] font-bold">🗺️</span>
              <span>Plano de 90 dias com operador sênior no terreno</span>
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#f7f3eb] text-[#194162] rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Solicitar Diagnóstico Rápido</p>
          <p className="text-2xl text-[#194162]/80 font-mono">
            Conversa de 30 minutos
          </p>
        </div>
      </div>
    );
  }

  // Story 3 — V3: Stark Editorial White
  if (id === 'story-3-v3') {
    return (
      <div className="w-[1080px] h-[1920px] bg-white text-[#0f172a] p-16 flex flex-col justify-between relative font-sans select-none border-[16px] border-slate-100">
        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-100 border border-slate-300 text-[#194162] text-2xl font-mono uppercase tracking-wider font-bold">
            <span>Diagnóstico Executivo · 14 Dias</span>
          </div>

          <div
            className="font-serif text-[84px] leading-[1.08] mt-16 tracking-tight font-medium"
            style={{ color: '#0f172a' }}
          >
            14 dias para mapear{' '}
            <span className="text-[#1a5c88] underline decoration-4">
              todos os gargalos
            </span>{' '}
            da sua operação.
          </div>

          <p className="text-3xl text-slate-600 mt-8 leading-relaxed">
            Para fundadores e sócios B2B que precisam de tração, previsibilidade
            e margem saudável.
          </p>

          <div className="mt-16 space-y-6">
            <div className="p-8 bg-[#f8fafc] rounded-3xl border border-slate-200 shadow-sm flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">🎯</span>
              <span>Onde o funil de vendas está vazando receita</span>
            </div>
            <div className="p-8 bg-[#f8fafc] rounded-3xl border border-slate-200 shadow-sm flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">📊</span>
              <span>Onde o caixa e as horas do time estão sendo queimados</span>
            </div>
            <div className="p-8 bg-[#f8fafc] rounded-3xl border border-slate-200 shadow-sm flex items-center gap-6 text-3xl font-sans text-[#1e293b]">
              <span className="text-[#194162] font-bold">🗺️</span>
              <span>Plano de 90 dias com operador sênior no terreno</span>
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#1a5c88] text-white rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Solicitar Diagnóstico Rápido</p>
          <p className="text-2xl text-white/80 font-mono">
            Conversa de 30 minutos
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // FACEBOOK COVER BANNER (1640 x 624)
  // ==========================================
  if (id === 'cover') {
    return (
      <div className="w-[1640px] h-[624px] bg-[#0c1c2b] text-[#f7f3eb] relative overflow-hidden font-sans select-none flex flex-col justify-between p-14">
        <div className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-[#1a5c88]/45 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-32 left-1/4 w-[550px] h-[550px] bg-[#194162]/55 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-60" />

        <div className="relative z-10 max-w-[1360px] w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Saper Vedere"
              className="w-14 h-14 rounded-xl border border-white/25 shadow-xl object-contain bg-[#194162]"
            />
            <div>
              <span
                className="font-serif text-3xl font-semibold tracking-[0.18em] uppercase block"
                style={{ color: '#ffffff' }}
              >
                Saper Vedere
              </span>
              <span className="block text-xs font-mono tracking-widest text-[#6cb3df] uppercase mt-0.5 font-medium">
                Fractional COO & Operating Partner
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span
              className="text-sm font-mono uppercase tracking-wider font-semibold"
              style={{ color: '#ffffff' }}
            >
              Empresas B2B · Fundadores & Sócios
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-[1360px] w-full mx-auto my-auto py-2">
          <div
            className="font-serif text-[54px] leading-[1.12] tracking-tight font-medium max-w-[1140px]"
            style={{ color: '#ffffff' }}
          >
            O operador que fundadores trazem para escalar sem caos operacional.
          </div>
          <p
            className="text-[24px] mt-4 leading-relaxed font-light max-w-[1020px]"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Destrave sua máquina de GTM & Outbound, estabeleça cadência de
            gestão e alinhe indicadores para crescer com previsibilidade.
          </p>
        </div>

        <div className="relative z-10 max-w-[1360px] w-full mx-auto pt-5 border-t border-white/15 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-sm font-mono">
              <span className="text-[#6cb3df] font-bold">01</span>
              <span className="font-sans font-medium text-white">
                Máquina de GTM & Outbound
              </span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-sm font-mono">
              <span className="text-[#6cb3df] font-bold">02</span>
              <span className="font-sans font-medium text-white">
                Escala Operacional & KPIs
              </span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-sm font-mono">
              <span className="text-[#6cb3df] font-bold">03</span>
              <span className="font-sans font-medium text-white">
                Eficiência Operacional & Margem
              </span>
            </div>
          </div>

          <div
            className="flex items-center gap-2 font-mono text-lg font-semibold"
            style={{ color: '#6cb3df' }}
          >
            <span>sapervedere.com.br</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  notFound();
}
