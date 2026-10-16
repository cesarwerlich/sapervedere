import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estúdio de Criativos de Anúncios — Saper Vedere',
  robots: { index: false, follow: false },
};

export default function AdsPreviewPage() {
  return (
    <div className="min-h-screen bg-[#090807] text-[#f7f3eb] p-6 sm:p-12 font-sans selection:bg-[#1a5c88] selection:text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="border-b border-[#f7f3eb]/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a5c88]/20 border border-[#1a5c88]/30 text-[#6cb3df] text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-[#6cb3df] animate-pulse" />
              <span>CMO Creative Direction · Meta Ads Pack</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif mt-3 font-normal text-white tracking-tight">
              Criativos de Alta Conversão para Instagram (@cesarwerlich)
            </h1>
            <p className="text-sm text-[#f7f3eb]/70 mt-2 max-w-2xl">
              Hooks cirúrgicos de interrupção de padrão, menos texto de
              currículo, foco em dores viscerais de fundadores e Agentes de IA.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#f7f3eb]/50 font-mono">
              Tokens: #194162 · #1a5c88 · #f7f3eb
            </span>
          </div>
        </header>

        {/* FEED FORMAT (1:1 — 1080 x 1080) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1a5c88]" />
              Formato Feed (1:1 — 1080 x 1080)
            </h2>
            <span className="text-xs text-[#f7f3eb]/50 font-mono">
              Quadrado · Scroll-Stopping
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ad 1: O Teste das Férias */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#f7f3eb]/60">
                <span>Criativo 01 · A Armadilha do Fundador</span>
                <span className="text-[#6cb3df]">Ângulo Operacional</span>
              </div>
              <div
                id="ad-feed-operacoes"
                className="w-full aspect-square bg-[#f7f3eb] text-[#1a1410] p-8 sm:p-10 flex flex-col justify-between rounded-2xl shadow-2xl border border-black/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#1a5c88]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#194162]/10 border border-[#194162]/15 text-[#194162] text-[11px] font-mono uppercase tracking-wider font-semibold">
                    <span>⚡</span>
                    <span>Fractional COO · B2B</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl leading-[1.15] text-[#194162] mt-6 tracking-tight font-medium">
                    &ldquo;Se você tirar 10 dias de férias hoje, sua startup
                    cresce ou trava?&rdquo;
                  </h3>

                  <p className="text-sm text-[#554d45] mt-4 leading-relaxed font-sans">
                    Se cada venda ou decisão ainda precisa do seu ok, você não
                    tem uma operação em escala. Virou o maior gargalo dela.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1a1410]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#194162] text-white flex items-center justify-center font-serif text-sm font-bold">
                      CW
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#194162]">
                        Cesar Werlich
                      </p>
                      <p className="text-[10px] text-[#6b6055] font-mono">
                        @cesarwerlich
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-[#1a5c88] text-white text-xs font-medium shadow-md flex items-center gap-1.5 hover:bg-[#194162] transition-colors">
                    <span>Falar no WhatsApp</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad 2: Agentes de IA & GTM */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#f7f3eb]/60">
                <span>Criativo 02 · Agentes de IA & Outbound</span>
                <span className="text-[#6cb3df]">Mais Atrativo em 2026</span>
              </div>
              <div
                id="ad-feed-gtm"
                className="w-full aspect-square bg-[#194162] text-[#f7f3eb] p-8 sm:p-10 flex flex-col justify-between rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden"
              >
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#1a5c88]/40 rounded-full blur-3xl -mr-12 -mb-12 pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#6cb3df] text-[11px] font-mono uppercase tracking-wider font-semibold">
                    <span>🤖</span>
                    <span>GTM com Agentes de IA</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl leading-[1.15] text-white mt-6 tracking-tight font-medium">
                    Por que gastar R$ 25k/mês em tarefas que Agentes de IA rodam
                    em 30 segundos?
                  </h3>

                  <p className="text-sm text-[#f7f3eb]/80 mt-4 leading-relaxed">
                    Da prospecção técnica com deliverability blindada à cadência
                    comercial. Uma máquina de Outbound sem inchar a folha.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Saper Vedere
                    </p>
                    <p className="text-[10px] text-[#f7f3eb]/60 font-mono">
                      Máquina de GTM
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-[#f7f3eb] text-[#194162] text-xs font-semibold shadow-md flex items-center gap-1.5 hover:bg-white transition-colors">
                    <span>Ver o Diagnóstico</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad 3: O Raio-X dos 3 Sintomas */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#f7f3eb]/60">
                <span>Criativo 03 · O Raio-X Operacional</span>
                <span className="text-[#6cb3df]">Alta Identificação</span>
              </div>
              <div
                id="ad-feed-diagnostico"
                className="w-full aspect-square bg-[#121110] text-[#f7f3eb] p-8 sm:p-10 flex flex-col justify-between rounded-2xl shadow-2xl border border-white/15 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-48 h-48 bg-[#1a5c88]/25 rounded-full blur-3xl -ml-10 -mt-10 pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a5c88]/20 border border-[#1a5c88]/30 text-[#6cb3df] text-[11px] font-mono uppercase tracking-wider font-semibold">
                    <span>⏱️</span>
                    <span>Sprint de 14 Dias</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-[27px] leading-[1.2] text-white mt-5 tracking-tight font-medium">
                    Sua startup tem algum destes 3 sintomas?
                  </h3>

                  <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#f7f3eb]/85 font-mono">
                    <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2">
                      <span className="text-red-400 font-bold">1.</span>{' '}
                      Indicações secaram e o funil oscila
                    </div>
                    <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2">
                      <span className="text-red-400 font-bold">2.</span> Founder
                      faz 100% das vendas na unha
                    </div>
                    <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2">
                      <span className="text-red-400 font-bold">3.</span> Time
                      ocupado, mas sem metas claras
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Raio-X de 30 min
                    </p>
                    <p className="text-[10px] text-[#f7f3eb]/60 font-mono">
                      Sem custo inicial
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-[#1a5c88] text-white text-xs font-medium shadow-md flex items-center gap-1.5 hover:bg-[#236e9f] transition-colors">
                    <span>Fazer o Raio-X</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STORIES / REELS 1080x1920 (9:16) */}
        <section className="space-y-6 pt-12 border-t border-[#f7f3eb]/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1a5c88]" />
              Formato Stories &amp; Reels (9:16 — 1080 x 1920)
            </h2>
            <span className="text-xs text-[#f7f3eb]/50 font-mono">
              Vertical · Consumo em 3s
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
            {/* Story 1 */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-[#f7f3eb]/60">
                Story 01 · A Pergunta Difícil
              </span>
              <div
                id="ad-story-operacoes"
                className="w-full aspect-[9/16] bg-[#f7f3eb] text-[#1a1410] p-6 sm:p-8 flex flex-col justify-between rounded-2xl shadow-2xl border border-black/5 relative"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#194162] font-semibold">
                    Cesar Werlich · Fractional COO
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-[#194162] mt-4 leading-tight">
                    Você manda na sua startup ou é escravo dela?
                  </h4>
                  <div className="mt-8 space-y-3 text-xs text-[#554d45]">
                    <div className="p-3 bg-black/[0.04] rounded-xl border border-black/5 font-medium">
                      ❌ Agenda cheia de reuniões operacionais vazias
                    </div>
                    <div className="p-3 bg-black/[0.04] rounded-xl border border-black/5 font-medium">
                      ❌ Time não toma decisão sem você no meio
                    </div>
                    <div className="p-3 bg-black/[0.04] rounded-xl border border-black/5 font-medium">
                      ❌ Zero tempo para pensar em estratégia real
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#194162] text-white rounded-xl text-center space-y-1 shadow-lg">
                  <p className="text-xs font-semibold">
                    Mudar esse cenário em 30 min
                  </p>
                  <p className="text-[10px] text-[#f7f3eb]/80 font-mono">
                    Toque no link abaixo
                  </p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-[#f7f3eb]/60">
                Story 02 · IA no Outbound
              </span>
              <div
                id="ad-story-gtm"
                className="w-full aspect-[9/16] bg-[#194162] text-[#f7f3eb] p-6 sm:p-8 flex flex-col justify-between rounded-2xl shadow-2xl border border-white/10"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#6cb3df] font-semibold">
                    Máquina de GTM · Saper Vedere
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-white mt-4 leading-tight">
                    Quantas reuniões comerciais sua startup fechou esta semana?
                  </h4>
                  <p className="text-xs text-[#f7f3eb]/75 mt-3">
                    Se a resposta for &ldquo;apenas as que vieram por
                    indicação&rdquo;, você não tem controle da sua receita.
                  </p>
                  <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 text-xs font-mono text-[#6cb3df]">
                    <p>✓ Prospecção multicanal</p>
                    <p>✓ Entregabilidade 99%</p>
                    <p>✓ Pipeline previsível</p>
                  </div>
                </div>

                <div className="p-4 bg-[#f7f3eb] text-[#194162] rounded-xl text-center space-y-1 shadow-lg">
                  <p className="text-xs font-semibold">
                    Construir Canal de Outbound
                  </p>
                  <p className="text-[10px] text-[#554d45] font-mono">
                    Toque para ver como funciona
                  </p>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-[#f7f3eb]/60">
                Story 03 · Sprint 14 Dias
              </span>
              <div
                id="ad-story-diagnostico"
                className="w-full aspect-[9/16] bg-[#0d0c0a] text-[#f7f3eb] p-6 sm:p-8 flex flex-col justify-between rounded-2xl shadow-2xl border border-white/15"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#6cb3df] font-semibold">
                    Diagnóstico Executivo
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-white mt-4 leading-tight">
                    14 dias para mapear todos os gargalos da sua operação.
                  </h4>
                  <div className="mt-8 space-y-2 text-xs font-mono text-[#f7f3eb]/80">
                    <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">
                      🎯 Onde o funil está vazando
                    </div>
                    <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">
                      📊 Onde o caixa está sendo queimado
                    </div>
                    <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">
                      🗺️ Plano de 90 dias com operador sênior
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#1a5c88] text-white rounded-xl text-center space-y-1 shadow-lg">
                  <p className="text-xs font-semibold">
                    Solicitar Diagnóstico Rápido
                  </p>
                  <p className="text-[10px] text-[#f7f3eb]/80 font-mono">
                    Conversa de 30 minutos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
