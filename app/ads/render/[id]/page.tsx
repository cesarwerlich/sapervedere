import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Ad Render Engine — Saper Vedere',
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return [
    { id: 'feed-1' },
    { id: 'feed-2' },
    { id: 'feed-3' },
    { id: 'story-1' },
    { id: 'story-2' },
    { id: 'story-3' },
  ];
}

export default async function AdRenderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id === 'feed-1') {
    return (
      <div className="w-[1080px] h-[1080px] bg-[#f7f3eb] text-[#1a1410] p-20 flex flex-col justify-between relative overflow-hidden font-sans select-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a5c88]/15 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#194162]/10 border border-[#194162]/20 text-[#194162] text-xl font-mono uppercase tracking-wider font-semibold">
            <span>⚡</span>
            <span>Fractional COO · B2B</span>
          </div>

          <h1 className="font-serif text-[68px] leading-[1.12] text-[#194162] mt-16 tracking-tight font-medium">
            &ldquo;Se você tirar 10 dias de férias hoje, sua startup cresce ou
            trava?&rdquo;
          </h1>

          <p className="text-[32px] text-[#554d45] mt-10 leading-relaxed font-sans max-w-[900px]">
            Se cada venda ou decisão ainda precisa do seu ok, você não tem uma
            operação em escala. Virou o maior gargalo dela.
          </p>
        </div>

        <div className="pt-10 border-t-2 border-[#1a1410]/10 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-[#194162] text-white flex items-center justify-center font-serif text-3xl font-bold">
              CW
            </div>
            <div>
              <p className="text-2xl font-bold text-[#194162]">Cesar Werlich</p>
              <p className="text-lg text-[#6b6055] font-mono">
                @cesarwerlich · Ex-COO Lightmeter (YC W22)
              </p>
            </div>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#1a5c88] text-white text-2xl font-medium shadow-xl flex items-center gap-3">
            <span>Falar no WhatsApp</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'feed-2') {
    return (
      <div className="w-[1080px] h-[1080px] bg-[#194162] text-[#f7f3eb] p-20 flex flex-col justify-between relative overflow-hidden font-sans select-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#1a5c88]/40 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />

        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[#6cb3df] text-xl font-mono uppercase tracking-wider font-semibold">
            <span>🤖</span>
            <span>GTM com Agentes de IA</span>
          </div>

          <h1 className="font-serif text-[68px] leading-[1.12] text-white mt-16 tracking-tight font-medium">
            Por que gastar R$ 25k/mês em tarefas que Agentes de IA rodam em 30
            segundos?
          </h1>

          <p className="text-[32px] text-[#f7f3eb]/80 mt-10 leading-relaxed font-sans max-w-[900px]">
            Da prospecção técnica com deliverability blindada à cadência
            comercial. Uma máquina de Outbound sem inchar a folha.
          </p>
        </div>

        <div className="pt-10 border-t-2 border-white/15 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-white">Saper Vedere</p>
            <p className="text-lg text-[#f7f3eb]/60 font-mono">
              Máquina de GTM & Outbound B2B
            </p>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#f7f3eb] text-[#194162] text-2xl font-bold shadow-xl flex items-center gap-3">
            <span>Ver o Diagnóstico</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'feed-3') {
    return (
      <div className="w-[1080px] h-[1080px] bg-[#121110] text-[#f7f3eb] p-20 flex flex-col justify-between relative overflow-hidden font-sans select-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1a5c88]/25 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />

        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#1a5c88]/20 border border-[#1a5c88]/30 text-[#6cb3df] text-xl font-mono uppercase tracking-wider font-semibold">
            <span>⏱️</span>
            <span>Sprint de 14 Dias</span>
          </div>

          <h1 className="font-serif text-[64px] leading-[1.15] text-white mt-14 tracking-tight font-medium">
            Sua startup tem algum destes 3 sintomas?
          </h1>

          <div className="mt-10 space-y-4 text-2xl text-[#f7f3eb]/90 font-mono">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
              <span className="text-red-400 font-bold text-3xl">1.</span>{' '}
              Indicações secaram e o funil oscila todo mês
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
              <span className="text-red-400 font-bold text-3xl">2.</span>{' '}
              Founder ainda faz 100% das vendas na unha
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
              <span className="text-red-400 font-bold text-3xl">3.</span> Time
              ocupado, mas sem metas semanais claras
            </div>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-white/15 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-white">Raio-X de 30 min</p>
            <p className="text-lg text-[#f7f3eb]/60 font-mono">
              Diagnóstico Operacional sem Custo
            </p>
          </div>
          <div className="px-8 py-4 rounded-2xl bg-[#1a5c88] text-white text-2xl font-medium shadow-xl flex items-center gap-3">
            <span>Fazer o Raio-X</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'story-1') {
    return (
      <div className="w-[1080px] h-[1920px] bg-[#f7f3eb] text-[#1a1410] p-24 flex flex-col justify-between relative font-sans select-none">
        <div>
          <div className="text-2xl font-mono uppercase tracking-widest text-[#194162] font-bold">
            Cesar Werlich · Fractional COO
          </div>
          <h1 className="font-serif text-[84px] font-medium text-[#194162] mt-16 leading-[1.1]">
            Você manda na sua startup ou é escravo dela?
          </h1>
          <div className="mt-20 space-y-8 text-3xl text-[#554d45]">
            <div className="p-8 bg-black/[0.04] rounded-3xl border border-black/5 font-medium flex items-center gap-4">
              <span className="text-4xl">❌</span> Agenda cheia de reuniões
              operacionais vazias
            </div>
            <div className="p-8 bg-black/[0.04] rounded-3xl border border-black/5 font-medium flex items-center gap-4">
              <span className="text-4xl">❌</span> Time não toma decisão sem
              você no meio
            </div>
            <div className="p-8 bg-black/[0.04] rounded-3xl border border-black/5 font-medium flex items-center gap-4">
              <span className="text-4xl">❌</span> Zero tempo para pensar em
              estratégia real
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#194162] text-white rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Mudar esse cenário em 30 min</p>
          <p className="text-2xl text-[#f7f3eb]/80 font-mono">
            Toque no link abaixo
          </p>
        </div>
      </div>
    );
  }

  if (id === 'story-2') {
    return (
      <div className="w-[1080px] h-[1920px] bg-[#194162] text-[#f7f3eb] p-24 flex flex-col justify-between relative font-sans select-none">
        <div>
          <div className="text-2xl font-mono uppercase tracking-widest text-[#6cb3df] font-bold">
            Máquina de GTM · Saper Vedere
          </div>
          <h1 className="font-serif text-[80px] font-medium text-white mt-16 leading-[1.1]">
            Quantas reuniões comerciais sua startup fechou esta semana?
          </h1>
          <p className="text-3xl text-[#f7f3eb]/75 mt-10 leading-relaxed">
            Se a resposta for &ldquo;apenas as que vieram por indicação&rdquo;,
            você não tem controle da sua receita.
          </p>
          <div className="mt-20 p-10 bg-white/5 rounded-3xl border border-white/10 space-y-6 text-3xl font-mono text-[#6cb3df]">
            <p>✓ Prospecção multicanal com IA</p>
            <p>✓ Entregabilidade 99% blindada</p>
            <p>✓ Pipeline previsível todo mês</p>
          </div>
        </div>

        <div className="p-10 bg-[#f7f3eb] text-[#194162] rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Construir Canal de Outbound</p>
          <p className="text-2xl text-[#554d45] font-mono">
            Toque para ver como funciona
          </p>
        </div>
      </div>
    );
  }

  if (id === 'story-3') {
    return (
      <div className="w-[1080px] h-[1920px] bg-[#0d0c0a] text-[#f7f3eb] p-24 flex flex-col justify-between relative font-sans select-none">
        <div>
          <div className="text-2xl font-mono uppercase tracking-widest text-[#6cb3df] font-bold">
            Diagnóstico Executivo · 14 Dias
          </div>
          <h1 className="font-serif text-[80px] font-medium text-white mt-16 leading-[1.1]">
            14 dias para mapear todos os gargalos da sua operação.
          </h1>
          <p className="text-3xl text-[#f7f3eb]/70 mt-10 leading-relaxed">
            Para fundadores B2B que precisam de tração antes da próxima rodada.
          </p>
          <div className="mt-20 space-y-6 text-3xl font-mono text-[#f7f3eb]/85">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              🎯 Onde o funil de vendas está vazando
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              📊 Onde o caixa está sendo queimado
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              🗺️ Plano de 90 dias com operador sênior
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#1a5c88] text-white rounded-3xl text-center space-y-3 shadow-2xl">
          <p className="text-4xl font-bold">Solicitar Diagnóstico Rápido</p>
          <p className="text-2xl text-[#f7f3eb]/80 font-mono">
            Conversa de 30 minutos
          </p>
        </div>
      </div>
    );
  }

  notFound();
}
