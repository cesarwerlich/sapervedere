export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Saper Vedere — COO Fracionado &amp; Operating Partner</title>
    <link>https://sapervedere.com.br</link>
    <description>Advisory executivo, Máquina de GTM &amp; Outbound e Diagnóstico Operacional para fundadores B2B SaaS.</description>
    <language>pt-BR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://sapervedere.com.br/feed.xml" rel="self" type="application/rss+xml" />
    <item>
      <title>Máquina de Outbound &amp; GTM B2B</title>
      <link>https://sapervedere.com.br/lp/gtm</link>
      <guid>https://sapervedere.com.br/lp/gtm</guid>
      <description>Estruture sua máquina de vendas outbound sem depender apenas de indicações.</description>
      <pubDate>Fri, 16 Oct 2026 00:00:00 GMT</pubDate>
    </item>
    <item>
      <title>COO Fracionado para Startups B2B</title>
      <link>https://sapervedere.com.br/lp/operacoes</link>
      <guid>https://sapervedere.com.br/lp/operacoes</guid>
      <description>Escale da tração inicial ao Series A sem caos operacional.</description>
      <pubDate>Fri, 16 Oct 2026 00:00:00 GMT</pubDate>
    </item>
    <item>
      <title>Diagnóstico Operacional &amp; GTM em 2 Semanas</title>
      <link>https://sapervedere.com.br/lp/diagnostico</link>
      <guid>https://sapervedere.com.br/lp/diagnostico</guid>
      <description>Sprint intensivo de diagnóstico para destravar crescimento e margem.</description>
      <pubDate>Fri, 16 Oct 2026 00:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
