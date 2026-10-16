import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prévia de Criativos de Anúncios — Saper Vedere',
  robots: { index: false, follow: false },
};

export default function AdsPreviewPage() {
  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#f7f3eb] p-6 sm:p-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="border-b border-[#f7f3eb]/10 pb-6">
          <span className="text-xs uppercase tracking-widest text-[#1a5c88] font-mono font-semibold">
            Meta Ads Creative Studio
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif mt-2 font-normal text-white">
            Criativos de Alta Conversão B2B (1:1 Feed & 9:16 Stories)
          </h1>
          <p className="text-sm text-[#f7f3eb]/70 mt-2 max-w-2xl">
            Criativos desenhados com os tokens institucionais da Saper Vedere
            para veiculação no Instagram com a conta @cesarwerlich.
          </p>
        </header>

        {/* FEED ADS 1080x1080 (1:1) */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1a5c88]" />
            Formato Feed (1:1 — 1080 x 1080)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ad 1: Operações */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-[#f7f3eb]/60">
                Criativo 01 — COO Fracionado
              </span>
              <div
                id="ad-feed-operacoes"
                className="w-full aspect-square bg-[#f7f3eb] text-[#1a1410] p-8 sm:p-10 flex flex-col justify-between rounded-2xl shadow-2xl border border-black/5 relative overflow-hidden"
              >
                {/* Background accent glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#1a5c88]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#194162]/10 border border-[#194162]/15 text-[#194162] text-[11px] font-mono uppercase tracking-wider font-semibold">
                    <span>⚡</span>
                    <span>COO Fracionado & Operating Partner</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-[26px] leading-tight text-[#194162] mt-6 tracking-tight font-medium">
                    &ldquo;Se todas as decisões precisam do seu ok, você não tem
                    uma empresa em escala. Tem um gargalo com o seu nome.&rdquo;
                  </h3>

                  <p className="text-xs sm:text-sm text-[#554d45] mt-4 leading-relaxed">
                    Cadência executiva, KPIs e governança de runway para
                    fundadores B2B SaaS crescerem sem contratar um executivo de
                    R$ 40k/mês.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1a1410]/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#194162]">
                      Cesar Werlich
                    </p>
                    <p className="text-[10px] text-[#6b6055] font-mono">
                      Ex-COO Lightmeter (YC W22)
                    </p>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-lg bg-[#1a5c88] text-white text-xs font-medium shadow-sm flex items-center gap-1.5">
                    <span>Solicitar Diagnóstico</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad 2: GTM & Outbound */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-[#f7f3eb]/60">
                Criativo 02 — Máquina de GTM & Outbound
              </span>
              <div
                id="ad-feed-gtm"
                className="w-full aspect-square bg-[#194162] text-[#f7f3eb] p-8 sm:p-10 flex flex-col justify-between rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden"
              >
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#1a5c88]/30 rounded-full blur-3xl -mr-10 -mb-10 pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-[11px] font-mono uppercase tracking-wider font-semibold">
                    <span>🎯</span>
                    <span>Máquina de Outbound B2B</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-[26px] leading-tight text-white mt-6 tracking-tight font-medium">
                    Indicações são ótimas para validar o produto. Mas são
                    péssimas para bater metas com previsibilidade.
                  </h3>

                  <p className="text-xs sm:text-sm text-[#f7f3eb]/75 mt-4 leading-relaxed">
                    Construa um canal proprietário de reuniões qualificadas:
                    entregabilidade técnica, ICP cirúrgico e cadência comercial
                    para passar o bastão.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Saper Vedere
                    </p>
                    <p className="text-[10px] text-[#f7f3eb]/60 font-mono">
                      Pré-Seed ao Series A
                    </p>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-lg bg-[#f7f3eb] text-[#194162] text-xs font-semibold shadow-sm flex items-center gap-1.5">
                    <span>Estruturar GTM</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad 3: Diagnóstico em 2 Semanas */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-[#f7f3eb]/60">
                Criativo 03 — Sprint Diagnóstico (14 Dias)
              </span>
              <div
                id="ad-feed-diagnostico"
                className="w-full aspect-square bg-[#0d0c0a] text-[#f7f3eb] p-8 sm:p-10 flex flex-col justify-between rounded-2xl shadow-2xl border border-white/15 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-48 h-48 bg-[#1a5c88]/20 rounded-full blur-3xl -ml-10 -mt-10 pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a5c88]/20 border border-[#1a5c88]/30 text-[#6cb3df] text-[11px] font-mono uppercase tracking-wider font-semibold">
                    <span>⏱️</span>
                    <span>Sprint Executivo de 14 Dias</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-[26px] leading-tight text-white mt-6 tracking-tight font-medium">
                    Onde a sua startup está vazando receita e tempo da
                    liderança?
                  </h3>

                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#f7f3eb]/80 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="text-[#6cb3df]">✓</span> Auditoria
                      completa de gargalos no funil
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#6cb3df]">✓</span> Análise de unit
                      economics &amp; runway
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#6cb3df]">✓</span> Plano tático de
                      ação de 90 dias
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Diagnóstico Rápido
                    </p>
                    <p className="text-[10px] text-[#f7f3eb]/60 font-mono">
                      Direto com o Operador
                    </p>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-lg bg-[#1a5c88] text-white text-xs font-medium shadow-sm flex items-center gap-1.5">
                    <span>Verificar Vagas</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STORIES / REELS 1080x1920 (9:16) */}
        <section className="space-y-6 pt-12 border-t border-[#f7f3eb]/10">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1a5c88]" />
            Formato Stories &amp; Reels (9:16 — 1080 x 1920)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
            {/* Story 1 */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-[#f7f3eb]/60">
                Story 01 — Operações
              </span>
              <div
                id="ad-story-operacoes"
                className="w-full aspect-[9/16] bg-[#f7f3eb] text-[#1a1410] p-6 sm:p-8 flex flex-col justify-between rounded-2xl shadow-2xl border border-black/5"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#194162] font-semibold">
                    Saper Vedere · Operações
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#194162] mt-4 leading-tight">
                    Você é o fundador da sua startup ou o maior gargalo dela?
                  </h4>
                  <div className="mt-6 space-y-3 text-xs text-[#554d45]">
                    <p className="p-3 bg-black/[0.03] rounded-lg border border-black/5">
                      ❌ Toda resposta técnica ou comercial depende de você
                    </p>
                    <p className="p-3 bg-black/[0.03] rounded-lg border border-black/5">
                      ❌ Falta cadência semanal e KPIs operacionais claros
                    </p>
                    <p className="p-3 bg-black/[0.03] rounded-lg border border-black/5">
                      ❌ Risco de queimar runway sem previsibilidade
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#194162] text-white rounded-xl text-center space-y-1">
                  <p className="text-xs font-semibold">COO Fracionado B2B</p>
                  <p className="text-[10px] text-[#f7f3eb]/80 font-mono">
                    Toque para agendar conversa de 30 min
                  </p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-[#f7f3eb]/60">
                Story 02 — Outbound B2B
              </span>
              <div
                id="ad-story-gtm"
                className="w-full aspect-[9/16] bg-[#194162] text-[#f7f3eb] p-6 sm:p-8 flex flex-col justify-between rounded-2xl shadow-2xl border border-white/10"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#6cb3df] font-semibold">
                    Saper Vedere · GTM
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-white mt-4 leading-tight">
                    Por que suas prospecções de Outbound não viram reuniões?
                  </h4>
                  <div className="mt-6 space-y-3 text-xs text-[#f7f3eb]/80">
                    <p className="p-3 bg-white/5 rounded-lg border border-white/10">
                      ⚠️ SPF, DKIM ou DMARC mal configurados caindo em spam
                    </p>
                    <p className="p-3 bg-white/5 rounded-lg border border-white/10">
                      ⚠️ Mensagens genéricas que não tocam na dor do decisor
                    </p>
                    <p className="p-3 bg-white/5 rounded-lg border border-white/10">
                      ⚠️ Falta de cadência multicanal e CRM estruturado
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#f7f3eb] text-[#194162] rounded-xl text-center space-y-1">
                  <p className="text-xs font-semibold">
                    Estruture sua Máquina de GTM
                  </p>
                  <p className="text-[10px] text-[#554d45] font-mono">
                    Arraste para cima ou toque no link
                  </p>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-[#f7f3eb]/60">
                Story 03 — Sprint 14 Dias
              </span>
              <div
                id="ad-story-diagnostico"
                className="w-full aspect-[9/16] bg-[#0d0c0a] text-[#f7f3eb] p-6 sm:p-8 flex flex-col justify-between rounded-2xl shadow-2xl border border-white/15"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#6cb3df] font-semibold">
                    Saper Vedere · Sprint
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-white mt-4 leading-tight">
                    Diagnóstico Operacional em 2 Semanas
                  </h4>
                  <p className="text-xs text-[#f7f3eb]/70 mt-2">
                    Para fundadores B2B que precisam de tração antes da próxima
                    rodada.
                  </p>
                  <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 text-xs font-mono text-[#f7f3eb]/80">
                    <p>🎯 Mapeamento de gargalos</p>
                    <p>📊 Auditoria de unit economics</p>
                    <p>🗺️ Plano tático de 90 dias</p>
                  </div>
                </div>

                <div className="p-4 bg-[#1a5c88] text-white rounded-xl text-center space-y-1">
                  <p className="text-xs font-semibold">Solicitar Diagnóstico</p>
                  <p className="text-[10px] text-[#f7f3eb]/80 font-mono">
                    Vagas limitadas por mês
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
