import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade e Proteção de Dados da Saper Vedere. Conheça como coletamos, tratamos e protegemos seus dados em conformidade com a LGPD e GDPR.',
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)] theme-v2-blue theme-6-logo-blue-headings">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        {/* Navigation / Header controls */}
        <div className="flex items-center justify-between pb-8 border-b border-[color:var(--border)] mb-12">
          <Link
            href="/"
            className="text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors inline-flex items-center gap-1.5"
          >
            ← Voltar para o início
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors inline-flex items-center gap-1.5"
          >
            English Version →
          </Link>
        </div>

        {/* Page Title & Meta */}
        <header className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[color:var(--accent)] font-semibold mb-2">
            Governança & Proteção de Dados
          </p>
          <h1 className="text-3xl sm:text-4xl font-display font-medium text-[color:var(--ink)] tracking-tight">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Última atualização: 16 de outubro de 2026 · Saper Vedere
            (sapervedere.com.br)
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-[color:var(--ink-soft)] leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              1. Visão Geral e Identificação do Controlador
            </h2>
            <p>
              A presente Política de Privacidade regula o tratamento de dados
              pessoais no âmbito do website{' '}
              <strong className="text-[color:var(--ink)]">
                sapervedere.com.br
              </strong>{' '}
              e de suas páginas de diagnóstico e conversão, operadas pela{' '}
              <strong className="text-[color:var(--ink)]">Saper Vedere</strong>,
              iniciativa de assessoria executiva e consultoria operacional
              liderada por Cesar Werlich (Fractional COO & Operating Partner
              para fundadores de B2B SaaS).
            </p>
            <p>
              A Saper Vedere atua como Controladora dos dados pessoais tratados
              neste website, adotando as melhores práticas de segurança da
              informação e governança em integral conformidade com a{' '}
              <strong className="text-[color:var(--ink)]">
                Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº
                13.709/2018)
              </strong>{' '}
              e, subsidiariamente, com o{' '}
              <strong className="text-[color:var(--ink)]">
                General Data Protection Regulation (GDPR - Regulamento UE
                2016/679)
              </strong>{' '}
              para visitantes e parceiros internacionais.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              2. Dados Pessoais Coletados
            </h2>
            <p>
              Coletamos apenas as informações estritamente necessárias para
              qualificar oportunidades de consultoria empresarial B2B, responder
              a solicitações de contato e aprimorar a experiência técnica da
              plataforma:
            </p>
            <div className="rounded-lg bg-[color:var(--surface)] border border-[color:var(--border)] p-5 space-y-4">
              <h3 className="font-semibold text-[color:var(--ink)] text-base">
                A. Dados fornecidos ativamente pelo usuário (Formulários de
                Diagnóstico e Contato)
              </h3>
              <p className="text-sm">
                Ao preencher nossos formulários de pré-qualificação, diagnóstico
                operacional ou solicitação de contato (disponíveis em{' '}
                <Link
                  href="/contato"
                  className="underline text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
                >
                  /contato
                </Link>{' '}
                ou em páginas de campanha{' '}
                <code className="text-xs bg-[color:var(--surface-2)] px-1.5 py-0.5 rounded">
                  /lp/[slug]
                </code>
                ), poderemos coletar:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Nome completo:
                  </strong>{' '}
                  para identificação e comunicação personalizada.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    E-mail corporativo:
                  </strong>{' '}
                  canal primário de correspondência profissional e envio de
                  convites de reunião.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Telefone / WhatsApp comercial:
                  </strong>{' '}
                  alinhamento ágil e confirmação de agendamentos.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Nome da empresa e website:
                  </strong>{' '}
                  contextualização do modelo de negócio.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Estágio da empresa e métricas contextuais:
                  </strong>{' '}
                  faixa de faturamento, tamanho de time ou rodada de
                  investimento (ex.: Bootstrapped, Pre-seed, Seed, Series A),
                  utilizadas para averiguar a aderência do nosso modelo de
                  atuação.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Desafios operacionais e GTM:
                  </strong>{' '}
                  relatos voluntários sobre gargalos de processo, contratações
                  ou canais de aquisição.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-[color:var(--surface)] border border-[color:var(--border)] p-5 space-y-4">
              <h3 className="font-semibold text-[color:var(--ink)] text-base">
                B. Dados técnicos e de telemetria coletados automaticamente
              </h3>
              <p className="text-sm">
                Ao navegar pelo site, dados de telemetria podem ser coletados
                automaticamente para garantir integridade técnica e mensurar a
                audiência das páginas:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  Endereço IP (com máscaras de anonimização aplicadas em
                  ferramentas de analytics quando suportado).
                </li>
                <li>
                  Parâmetros de campanha e atribuição de tráfego de marketing
                  (ex.:{' '}
                  <code className="text-xs bg-[color:var(--surface-2)] px-1.5 py-0.5 rounded">
                    utm_source
                  </code>
                  ,{' '}
                  <code className="text-xs bg-[color:var(--surface-2)] px-1.5 py-0.5 rounded">
                    utm_campaign
                  </code>
                  ,{' '}
                  <code className="text-xs bg-[color:var(--surface-2)] px-1.5 py-0.5 rounded">
                    utm_medium
                  </code>
                  ).
                </li>
                <li>
                  Características do dispositivo, tipo de navegador, sistema
                  operacional e resolução de tela.
                </li>
                <li>
                  Páginas visitadas, tempo de permanência e interações com
                  botões de chamada para ação (CTAs).
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              3. Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Utilizamos cookies, identificadores de sessão e pixels de
              conversão para analisar tendências de acesso, mensurar o retorno
              de campanhas publicitárias e proteger nosso ambiente contra
              tráfego automatizado abusivo. As tecnologias empregadas incluem:
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-[color:var(--ink)]">
                  Google Analytics 4 (GA4) & Google Tag Manager (GTM):
                </strong>{' '}
                Permitem a agregação estatística de sessões de navegação, taxas
                de rejeição e páginas mais acessadas, auxiliando no planejamento
                de conteúdo.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">Google Ads:</strong>{' '}
                Mensuração de conversões oriundas de pesquisas patrocinadas para
                otimização da relevância de anúncios de serviços de consultoria.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Meta Pixel & Conversions API (CAPI):
                </strong>{' '}
                Atribuição de campanhas em plataformas da Meta (Instagram e
                Facebook), medindo ações de geração de lead e interesse
                comercial B2B.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">PostHog:</strong>{' '}
                Plataforma de análise de produto e funis de conversão. O PostHog
                opera em nosso site via proxy reverso em rotas próprias (
                <code className="text-xs bg-[color:var(--surface-2)] px-1.5 py-0.5 rounded">
                  /ingest/*
                </code>
                ), assegurando que os dados não sejam interceptados
                indevidamente por intermediários.
              </li>
            </ul>
            <p className="text-sm">
              Você pode desabilitar o armazenamento de cookies ajustando as
              preferências do seu navegador ou instalando extensões de
              privacidade e opt-out. Note que algumas funcionalidades do site
              podem operar com limitações caso os cookies sejam estritamente
              bloqueados.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              4. Finalidades e Bases Legais do Tratamento (LGPD)
            </h2>
            <p>
              Todo tratamento de dados realizado pela Saper Vedere possui amparo
              em bases legais expressas no Artigo 7º da LGPD:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[color:var(--border)]">
                <thead>
                  <tr className="bg-[color:var(--surface)] text-[color:var(--ink)]">
                    <th className="p-3 border border-[color:var(--border)] font-semibold">
                      Finalidade
                    </th>
                    <th className="p-3 border border-[color:var(--border)] font-semibold">
                      Dados Utilizados
                    </th>
                    <th className="p-3 border border-[color:var(--border)] font-semibold">
                      Base Legal (LGPD)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[color:var(--border)]">
                  <tr>
                    <td className="p-3 border border-[color:var(--border)]">
                      Qualificação de leads B2B e avaliação de perfil
                      operacional
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Nome, e-mail corporativo, empresa, estágio e desafios
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Procedimentos preliminares a contrato (Art. 7º, V)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[color:var(--border)]">
                      Agendamento e realização de reuniões de diagnóstico
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Nome, e-mail corporativo, telefone/WhatsApp
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Procedimentos preliminares a contrato (Art. 7º, V)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[color:var(--border)]">
                      Prevenção a fraudes e proteção anti-bot
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      IP, cabeçalhos de requisição e tokens de segurança
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Legítimo interesse do controlador (Art. 7º, IX)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[color:var(--border)]">
                      Métricas analíticas, otimização de campanhas e site
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Telemetria agregada, cookies analíticos, UTMs
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Legítimo interesse (Art. 7º, IX) e Consentimento (Art. 7º,
                      I)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              5. Compartilhamento, Segurança e Prestadores de Serviços
            </h2>
            <p>
              A Saper Vedere{' '}
              <strong className="text-[color:var(--ink)]">
                não vende, não aluga e não comercializa
              </strong>{' '}
              dados pessoais sob nenhuma circunstância. O compartilhamento
              ocorre exclusivamente com prestadores de infraestrutura
              tecnológica necessários para a operação do serviço:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[color:var(--ink)]">
                  Cloudflare Turnstile:
                </strong>{' '}
                Serviço de verificação inteligente anti-spam que protege nossos
                formulários contra ataques automatizados e scripts maliciosos de
                preenchimento em massa, sem recorrer a captchas visuais
                invasivos.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Hospedagem e Infraestrutura em Nuvem:
                </strong>{' '}
                Provedores líderes de mercado (como Vercel e provedores de banco
                de dados/webhooks seguros), todos com padrões internacionais de
                criptografia em trânsito (TLS 1.3) e em repouso.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Plataformas de Agendamento e Comunicação:
                </strong>{' '}
                Sistemas de calendário (Google Calendar / Cal.com) para
                sincronização de horários escolhidos pelo próprio usuário.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              6. Retenção e Descarte Seguro de Dados
            </h2>
            <p>
              Os dados coletados são mantidos pelo período estritamente
              necessário para cumprir as finalidades para as quais foram
              solicitados:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Contatos que não evoluírem para contratação de consultoria ou
                que não demonstrarem interesse comercial mútuo poderão ser
                excluídos ou anonimizados periodicamente.
              </li>
              <li>
                Registros de acesso a aplicações (endereço IP, data e hora) são
                guardados pelo prazo mínimo legal de 6 meses, em conformidade
                com o Artigo 15 do Marco Civil da Internet (Lei nº 12.965/2014).
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              7. Direitos do Titular de Dados (Art. 18 da LGPD)
            </h2>
            <p>
              Em observância ao Artigo 18 da LGPD e aos Artigos 15 a 22 do GDPR,
              você tem o direito de solicitar a qualquer momento, de forma
              simples e gratuita:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Confirmação da existência de tratamento dos seus dados pessoais;
              </li>
              <li>Acesso aos dados pessoais sob nossa guarda;</li>
              <li>
                Correção de dados incompletos, inexatos ou desatualizados;
              </li>
              <li>
                Anonimização, bloqueio ou eliminação de dados desnecessários,
                excessivos ou tratados em desconformidade com a lei;
              </li>
              <li>
                Portabilidade dos dados a outro fornecedor de serviços ou
                produtos;
              </li>
              <li>
                Eliminação de dados pessoais tratados com base no seu
                consentimento prévio;
              </li>
              <li>
                Informação sobre entidades públicas e privadas com as quais
                realizamos uso compartilhado;
              </li>
              <li>Revogação do consentimento concedido anteriormente.</li>
            </ul>
            <div className="rounded-lg bg-[color:var(--surface)] border border-[color:var(--border)] p-5 mt-4">
              <h3 className="font-semibold text-[color:var(--ink)] text-base mb-2">
                Como exercer seus direitos
              </h3>
              <p className="text-sm">
                Para solicitar qualquer um dos direitos acima ou esclarecer
                dúvidas sobre esta Política, você pode enviar uma mensagem
                detalhada diretamente pela nossa página de{' '}
                <Link
                  href="/contato"
                  className="underline font-semibold text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
                >
                  Contato (/contato)
                </Link>
                . Responderemos à sua requisição no prazo legal com a máxima
                presteza.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              8. Alterações a Esta Política
            </h2>
            <p>
              Esta Política de Privacidade poderá ser atualizada periodicamente
              para refletir evoluções regulatórias, técnicas ou operacionais. A
              data da versão mais recente estará sempre informada no topo deste
              documento. Recomendamos a consulta periódica desta página.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-[color:var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[color:var(--muted)]">
          <p>&copy; 2026 Saper Vedere. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/termos"
              className="hover:text-[color:var(--olive)] transition-colors"
            >
              Termos de Uso
            </Link>
            <span>·</span>
            <Link
              href="/privacidade"
              className="hover:text-[color:var(--olive)] transition-colors underline"
            >
              Política de Privacidade
            </Link>
            <span>·</span>
            <Link
              href="/contato"
              className="hover:text-[color:var(--olive)] transition-colors"
            >
              Contato
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
