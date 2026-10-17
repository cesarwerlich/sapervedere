import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estúdio de Criativos & Review de Design — Saper Vedere',
  robots: { index: false, follow: false },
};

interface CreativeVariant {
  version: 'V1' | 'V2' | 'V3';
  name: string;
  tagline: string;
  bgDesc: string;
  id: string;
}

const feedCreatives: {
  key: string;
  number: string;
  title: string;
  service: string;
  targetLp: string;
  variants: CreativeVariant[];
}[] = [
  {
    key: 'feed-1',
    number: 'Criativo 01',
    title: 'O Teste das Férias (Armadilha do Fundador)',
    service: 'Fractional COO · B2B',
    targetLp: 'https://sapervedere.com.br/lp/operacoes',
    variants: [
      {
        version: 'V1',
        name: 'Warm Linen Executive',
        tagline:
          'Fundo linho quente #f7f3eb, azul marinho executivo e card de contraste branco',
        bgDesc: 'Tom consultivo premium, estética The Economist / McKinsey',
        id: 'feed-1-v1',
      },
      {
        version: 'V2',
        name: 'Deep Navy Authority',
        tagline:
          'Fundo azul institucional #194162, tipografia serifada branca pura e detalhes azul celeste',
        bgDesc: 'Autoridade corporativa absoluta, padrão enterprise',
        id: 'feed-1-v2',
      },
      {
        version: 'V3',
        name: 'Stark Editorial White',
        tagline:
          'Fundo branco puro #ffffff, moldura slate estruturada e ênfase sublinhada em azul',
        bgDesc:
          'Estilo editorial minimalista, contraste máximo no feed escuro ou claro',
        id: 'feed-1-v3',
      },
    ],
  },
  {
    key: 'feed-2',
    number: 'Criativo 02',
    title: 'Agentes de IA vs. Tarefas Manuais',
    service: 'GTM & Outbound com IA',
    targetLp: 'https://sapervedere.com.br/lp/gtm',
    variants: [
      {
        version: 'V1',
        name: 'Warm Linen Executive',
        tagline:
          'Fundo linho #f7f3eb com cards individuais em branco e marcadores navy',
        bgDesc: 'Equilíbrio entre inovação em IA e elegância executiva',
        id: 'feed-2-v1',
      },
      {
        version: 'V2',
        name: 'Deep Navy Authority',
        tagline:
          'Fundo azul #194162 com cards translúcidos frosted glass e checks em celeste',
        bgDesc:
          'Visual tech moderno sem cair no clichê neon ou fundo preto sujo',
        id: 'feed-2-v2',
      },
      {
        version: 'V3',
        name: 'Stark Editorial White',
        tagline:
          'Fundo branco com cards slate estruturados e checks sólidos navy',
        bgDesc: 'Legibilidade brutal em qualquer brilho de tela de celular',
        id: 'feed-2-v3',
      },
    ],
  },
  {
    key: 'feed-3',
    number: 'Criativo 03',
    title: 'Os 3 Sintomas Operacionais (Raio-X de 14 Dias)',
    service: 'Diagnóstico Operacional',
    targetLp: 'https://sapervedere.com.br/lp/diagnostico',
    variants: [
      {
        version: 'V1',
        name: 'Warm Linen Executive',
        tagline:
          'Fundo linho #f7f3eb, numeração 01/02/03 em badges navy sólidos e texto sans grande',
        bgDesc:
          'Substitui 100% o fundo preto antigo e remove fontes mono ilegíveis',
        id: 'feed-3-v1',
      },
      {
        version: 'V2',
        name: 'Deep Navy Authority',
        tagline:
          'Fundo azul #194162, numeração em celeste brilhante #6cb3df e cards de vidro',
        bgDesc:
          'Alto impacto visual noturno mantendo o tom da marca Saper Vedere',
        id: 'feed-3-v2',
      },
      {
        version: 'V3',
        name: 'Stark Editorial White',
        tagline:
          'Fundo branco editorial, moldura sutil, badges navy e ênfase azulada',
        bgDesc:
          'Visual de relatório executivo com clareza instantânea de escaneamento',
        id: 'feed-3-v3',
      },
    ],
  },
];

const storyCreatives: {
  key: string;
  number: string;
  title: string;
  variants: CreativeVariant[];
}[] = [
  {
    key: 'story-1',
    number: 'Story 01',
    title: 'Manda na empresa ou virou escravo da operação?',
    variants: [
      {
        version: 'V1',
        name: 'Warm Linen',
        tagline: 'Fundo linho quente #f7f3eb com cards brancos de dores',
        bgDesc: 'Contraste suave e refinado para Stories',
        id: 'story-1-v1',
      },
      {
        version: 'V2',
        name: 'Deep Navy',
        tagline: 'Fundo azul #194162 com cards translúcidos e CTA linho',
        bgDesc: 'Impacto total em tela cheia 9:16',
        id: 'story-1-v2',
      },
      {
        version: 'V3',
        name: 'Stark White',
        tagline: 'Fundo branco puro com moldura slate e CTA azul corporativo',
        bgDesc: 'Máxima luminosidade vertical',
        id: 'story-1-v3',
      },
    ],
  },
  {
    key: 'story-2',
    number: 'Story 02',
    title: 'Quantas reuniões comerciais sua empresa fechou esta semana?',
    variants: [
      {
        version: 'V1',
        name: 'Warm Linen',
        tagline: 'Fundo linho com cards brancos e checks navy',
        bgDesc: 'Leitura rápida de 3 segundos',
        id: 'story-2-v1',
      },
      {
        version: 'V2',
        name: 'Deep Navy',
        tagline: 'Fundo azul marinho com texto branco e destaques celestes',
        bgDesc: 'Padrão premium institucional',
        id: 'story-2-v2',
      },
      {
        version: 'V3',
        name: 'Stark White',
        tagline: 'Fundo branco estruturado com ênfase no hook comercial',
        bgDesc: 'Clareza cristalina em trânsito',
        id: 'story-2-v3',
      },
    ],
  },
  {
    key: 'story-3',
    number: 'Story 03',
    title: '14 dias para mapear todos os gargalos operacionais',
    variants: [
      {
        version: 'V1',
        name: 'Warm Linen',
        tagline: 'Fundo linho com 3 entregáveis e botão navy',
        bgDesc: 'Foco na proposta de valor do diagnóstico',
        id: 'story-3-v1',
      },
      {
        version: 'V2',
        name: 'Deep Navy',
        tagline: 'Fundo azul marinho com cards de entregáveis translúcidos',
        bgDesc: 'Autoridade visual imediata',
        id: 'story-3-v2',
      },
      {
        version: 'V3',
        name: 'Stark White',
        tagline:
          'Fundo branco editorial com destaques navy e CTA de agendamento',
        bgDesc: 'Estética limpa sem distrações',
        id: 'story-3-v3',
      },
    ],
  },
];

export default function AdsPreviewPage() {
  return (
    <div className="min-h-screen bg-[#070b11] text-[#f7f3eb] p-6 sm:p-12 font-sans selection:bg-[#1a5c88] selection:text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <header className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a5c88]/30 border border-[#1a5c88]/50 text-[#6cb3df] text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-[#6cb3df] animate-pulse" />
              <span>
                Senior Designer Creative Direction · Meta Ads Pack 2026
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif mt-4 font-normal text-white tracking-tight">
              Galeria Comparativa de Criativos (V1, V2, V3)
            </h1>
            <p className="text-base text-[#f7f3eb]/80 mt-3 max-w-3xl leading-relaxed">
              Redesenho completo com foco em <strong>ocupação do frame</strong>,{' '}
              <strong>eliminação de preto/azul escuro ilegível</strong>,
              substituição de fontes mono pequenas por tipografia sem serifa
              grande (28px a 34px), e 3 arquétipos visuais de alta conversão
              para escolha.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/facebook-cover.jpg"
              target="_blank"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono text-[#6cb3df] transition-colors"
            >
              Ver Capa Facebook (1640x624) →
            </Link>
          </div>
        </header>

        {/* Senior Designer Critique Card */}
        <div className="p-8 rounded-3xl bg-[#0f172a] border border-[#1e293b] shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎨</span>
            <h2 className="text-xl sm:text-2xl font-serif text-white">
              Diagnóstico do Senior Designer: O que foi corrigido
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-[#1e293b]/50 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold block">
                01. Problema: Fundo Preto & Azul Ilegível
              </span>
              <p className="text-white font-medium">Contraste Quase Nulo</p>
              <p className="text-[#94a3b8] leading-relaxed">
                Fundos escuros (`#121110` / preto) combinados com títulos ou
                botões em azul marinho (`#194162`) geram taxa de rejeição alta
                porque não possuem contraste mínimo WCAG AA em telas móveis com
                reflexo de luz.
              </p>
              <p className="text-emerald-400 font-medium pt-1">
                ✓ Solução: Fundo preto 100% extinto. Agora usamos Warm Linen
                (#f7f3eb), Deep Navy (#194162 com texto branco puro) ou Stark
                White (#ffffff).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1e293b]/50 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold block">
                02. Problema: Bullet Points & Fonte Mono
              </span>
              <p className="text-white font-medium">
                Texto Apertado e Difícil de Ler
              </p>
              <p className="text-[#94a3b8] leading-relaxed">
                Fontes monoespaçadas (`font-mono`) funcionam bem para código em
                terminal, mas em anúncios de feed de celular parecem borradas,
                estreitas e frias.
              </p>
              <p className="text-emerald-400 font-medium pt-1">
                ✓ Solução: Substituição por Geist Sans 28px–34px com peso
                regular/médio e numerações em badges destacadas (01, 02, 03).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1e293b]/50 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold block">
                03. Problema: Ocupação do Frame
              </span>
              <p className="text-white font-medium">
                Bordas Excessivas e Espaço Vazio
              </p>
              <p className="text-[#94a3b8] leading-relaxed">
                Paddings de 80px a 96px comprimiam o conteúdo útil para menos de
                65% da tela, reduzindo o impacto visual de parada de rolagem
                (scroll-stopping).
              </p>
              <p className="text-emerald-400 font-medium pt-1">
                ✓ Solução: Padding reduzido para 48px/56px e títulos expandidos
                para 72px–88px, ocupando 85% a 90% do frame com autoridade.
              </p>
            </div>
          </div>
        </div>

        {/* FEED CREATIVES SECTION */}
        <section className="space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-[#6cb3df] uppercase tracking-wider block">
                Formato Quadrado (1:1 — 1080 x 1080)
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white mt-1">
                Criativos de Feed: Escolha o seu visual favorito
              </h2>
            </div>
            <p className="text-xs text-[#94a3b8] font-mono">
              Arquivos .jpg de alta resolução (150-180 KB cada) prontos para
              upload
            </p>
          </div>

          {feedCreatives.map((group) => (
            <div key={group.key} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#0f172a] p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-[#1a5c88] text-white text-xs font-bold font-mono">
                    {group.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  <span className="text-xs text-[#94a3b8] font-mono hidden md:inline">
                    · {group.service}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#6cb3df]">
                  Destino: {group.targetLp}
                </div>
              </div>

              {/* 3 Variants Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {group.variants.map((v) => (
                  <div
                    key={v.id}
                    className="flex flex-col gap-4 bg-[#0a0f18] p-5 rounded-3xl border border-white/10 hover:border-[#1a5c88] transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-xs font-bold">
                          {v.version}
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {v.name}
                        </span>
                      </div>
                      <Link
                        href={`/ads/render/${v.id}`}
                        target="_blank"
                        className="text-[11px] font-mono text-[#6cb3df] hover:underline"
                      >
                        Abrir renderizador ↗
                      </Link>
                    </div>

                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/ads/${v.id}.jpg`}
                        alt={`${group.title} - ${v.name}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="space-y-2 text-xs">
                      <p className="text-[#94a3b8] leading-relaxed">
                        {v.tagline}
                      </p>
                      <p className="text-[#64748b] font-mono text-[11px]">
                        Estilo: {v.bgDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <Link
                        href={`/ads/${v.id}.jpg`}
                        target="_blank"
                        download
                        className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium font-mono flex items-center gap-1.5 transition-colors"
                      >
                        <span>Download JPG</span>
                        <span>↓</span>
                      </Link>
                      <Link
                        href={`/ads/${v.id}.png`}
                        target="_blank"
                        download
                        className="px-3 py-2 rounded-xl bg-transparent hover:bg-white/5 text-[#94a3b8] text-xs font-medium font-mono transition-colors"
                      >
                        PNG Alta Res
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* STORIES CREATIVES SECTION */}
        <section className="space-y-16 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-[#6cb3df] uppercase tracking-wider block">
                Formato Vertical (9:16 — 1080 x 1920)
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white mt-1">
                Criativos de Stories &amp; Reels: 3 Arquétipos
              </h2>
            </div>
            <p className="text-xs text-[#94a3b8] font-mono">
              Consumo rápido em 3 segundos com sticker/link de clique
            </p>
          </div>

          {storyCreatives.map((group) => (
            <div key={group.key} className="space-y-6">
              <div className="flex items-center gap-3 bg-[#0f172a] p-4 rounded-2xl border border-white/10">
                <span className="px-3 py-1 rounded-lg bg-[#1a5c88] text-white text-xs font-bold font-mono">
                  {group.number}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
              </div>

              {/* 3 Variants Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {group.variants.map((v) => (
                  <div
                    key={v.id}
                    className="flex flex-col gap-4 bg-[#0a0f18] p-5 rounded-3xl border border-white/10 hover:border-[#1a5c88] transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-xs font-bold">
                          {v.version}
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {v.name}
                        </span>
                      </div>
                      <Link
                        href={`/ads/render/${v.id}`}
                        target="_blank"
                        className="text-[11px] font-mono text-[#6cb3df] hover:underline"
                      >
                        Abrir renderizador ↗
                      </Link>
                    </div>

                    <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/ads/${v.id}.jpg`}
                        alt={`${group.title} - ${v.name}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {v.tagline}
                    </p>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <Link
                        href={`/ads/${v.id}.jpg`}
                        target="_blank"
                        download
                        className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium font-mono flex items-center gap-1.5 transition-colors"
                      >
                        <span>Download JPG</span>
                        <span>↓</span>
                      </Link>
                      <Link
                        href={`/ads/${v.id}.png`}
                        target="_blank"
                        download
                        className="px-3 py-2 rounded-xl bg-transparent hover:bg-white/5 text-[#94a3b8] text-xs font-medium font-mono transition-colors"
                      >
                        PNG Alta Res
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Global Brand Kit Guide */}
        <section className="p-8 rounded-3xl bg-[#0f172a] border border-[#1e293b] space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif text-white">
                Onde configurar a &ldquo;Promoção da Marca&rdquo; (Brand Kit)
                Globalmente no Meta
              </h2>
              <p className="text-xs text-[#94a3b8] font-mono mt-1">
                Evite ter que preencher logo, cores e tom toda vez que criar um
                anúncio
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-6 rounded-2xl bg-[#1e293b]/40 border border-white/5 space-y-3">
              <span className="text-xs font-mono text-[#6cb3df] font-semibold uppercase">
                Método 1: Meta Business Suite (Global do Portfólio)
              </span>
              <p className="text-white font-medium">
                Configuração no Portfólio Bumerang
              </p>
              <ol className="list-decimal list-inside space-y-2 text-[#94a3b8] leading-relaxed">
                <li>
                  Acesse o <strong>Meta Business Suite</strong> em{' '}
                  <a
                    href="https://business.facebook.com/latest/settings"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#6cb3df] underline"
                  >
                    business.facebook.com/latest/settings
                  </a>
                  .
                </li>
                <li>
                  No menu lateral esquerdo, clique em{' '}
                  <strong>Identidade da Marca</strong> (ou{' '}
                  <strong>Controles da Marca / Brand Assets</strong>).
                </li>
                <li>
                  Adicione o logotipo oficial de Saper Vedere (use o arquivo{' '}
                  <code className="text-white bg-white/10 px-1 py-0.5 rounded">
                    public/icon.png
                  </code>
                  ).
                </li>
                <li>
                  Defina as cores oficiais da marca:
                  <ul className="list-disc list-inside pl-4 mt-1 space-y-1 text-white font-mono text-xs">
                    <li>
                      Primária: <span className="text-[#6cb3df]">#194162</span>{' '}
                      (Azul Saper Vedere)
                    </li>
                    <li>
                      Secundária:{' '}
                      <span className="text-[#6cb3df]">#1a5c88</span> (Azul
                      Acento)
                    </li>
                    <li>
                      Fundo: <span className="text-[#6cb3df]">#f7f3eb</span>{' '}
                      (Linho Quente)
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-2xl bg-[#1e293b]/40 border border-white/5 space-y-3">
              <span className="text-xs font-mono text-[#6cb3df] font-semibold uppercase">
                Método 2: Direto no Criador do Gerenciador de Anúncios
              </span>
              <p className="text-white font-medium">
                Salvar como Predefinição em 1 Clique
              </p>
              <ol className="list-decimal list-inside space-y-2 text-[#94a3b8] leading-relaxed">
                <li>
                  No Gerenciador de Anúncios, selecione qualquer anúncio de
                  Saper Vedere e clique em <strong>Editar</strong>.
                </li>
                <li>
                  Na seção <strong>Promoção da Marca</strong> (onde você viu os
                  campos vazios), clique em preencher.
                </li>
                <li>
                  Insira o Tom de Voz:{' '}
                  <code className="text-white bg-white/10 px-1.5 py-0.5 rounded text-xs">
                    &ldquo;Autoritativo, direto, pragmático e executivo.&rdquo;
                  </code>
                </li>
                <li>
                  Estilo Visual:{' '}
                  <code className="text-white bg-white/10 px-1.5 py-0.5 rounded text-xs">
                    &ldquo;Elegância executiva, alto contraste azul marinho e
                    linho, sem exageros gráficos.&rdquo;
                  </code>
                </li>
                <li>
                  Marque a caixa:{' '}
                  <strong>
                    &ldquo;Definir predefinições de marca para este anúncio e
                    anúncios futuros&rdquo;
                  </strong>{' '}
                  e salve. A partir daí, todos os novos anúncios herdarão esses
                  ativos automaticamente!
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
