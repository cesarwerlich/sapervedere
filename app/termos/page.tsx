import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos e Condições de Uso da plataforma e serviços de assessoria executiva da Saper Vedere.',
};

export default function TermosPage() {
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
            href="/terms"
            className="text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors inline-flex items-center gap-1.5"
          >
            English Version →
          </Link>
        </div>

        {/* Page Title & Meta */}
        <header className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[color:var(--accent)] font-semibold mb-2">
            Termos e Condições
          </p>
          <h1 className="text-3xl sm:text-4xl font-display font-medium text-[color:var(--ink)] tracking-tight">
            Termos de Uso
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
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar, navegar ou utilizar o website{' '}
              <strong className="text-[color:var(--ink)]">
                sapervedere.com.br
              </strong>{' '}
              e suas páginas associadas, você concorda expressamente com os
              presentes Termos de Uso e com a nossa{' '}
              <Link
                href="/privacidade"
                className="underline text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] font-medium"
              >
                Política de Privacidade
              </Link>
              . Caso não concorde com qualquer disposição aqui estabelecida,
              solicitamos que não utilize nossas páginas nem submeta informações
              através de nossos formulários.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              2. Natureza dos Serviços e Apresentação Institucional
            </h2>
            <p>
              A{' '}
              <strong className="text-[color:var(--ink)]">Saper Vedere</strong>{' '}
              é uma prática de assessoria executiva, consultoria estratégica e
              atuação como Fractional COO / Operating Partner, liderada por
              Cesar Werlich e direcionada a fundadores e lideranças de empresas
              de tecnologia B2B e B2B SaaS.
            </p>
            <p>
              As páginas deste website têm finalidade primordialmente
              institucional, informativa e de pré-qualificação comercial para
              ofertas como:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-[color:var(--ink)]">
                  Fractional COO & Operating Partner:
                </strong>{' '}
                acompanhamento contínuo de cadência operacional, governança e
                alinhamento executivo.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Máquina de Outbound & GTM:
                </strong>{' '}
                estruturação de processos previsíveis de prospecção, canais de
                aquisição e geração de pipeline.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Diagnóstico Operacional:
                </strong>{' '}
                imersão consultiva de escopo fechado para identificar e desenhar
                planos de correção para gargalos de escala.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              3. Escopo de Consultas, Diagnósticos e Pré-Contrato
            </h2>
            <p>
              O preenchimento de formulários de qualificação, diagnóstico ou
              contato neste site, assim como a realização de chamadas
              introdutórias (discovery calls) ou reuniões diagnósticas:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[color:var(--ink)]">
                  Caráter exploratório:
                </strong>{' '}
                Possui finalidade estritamente avaliativa e pré-contratual,
                destinada a averiguar o alinhamento mútuo (fit) entre as
                necessidades operacionais da sua empresa e a expertise da Saper
                Vedere.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Não constitui consultoria vinculante:
                </strong>{' '}
                Não caracteriza, por si só, prestação formal de consultoria,
                assessoria jurídica, contábil, tributária, financeira ou de
                captação de investimentos regulada.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Ausência de garantia de contratação ou resultados:
                </strong>{' '}
                O envio de informações ou realização de reunião preliminar não
                obriga qualquer das partes a celebrar contrato, tampouco
                representa garantia prévia de alcance de faturamento, captação
                de recursos junto a investidores ou metas numéricas específicas.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Formalização Contratual Específica:
                </strong>{' '}
                Toda e qualquer prestação efetiva de serviços de consultoria ou
                atuação fracionada será regida exclusivamente por instrumento
                particular de prestação de serviços (Contrato de Prestação de
                Serviços / Statement of Work) bilateralmente negociado e
                assinado pelas partes.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              4. Propriedade Intelectual
            </h2>
            <p>
              Todos os elementos que compõem este website — incluindo, sem
              limitação, a marca &ldquo;Saper Vedere&rdquo;, logotipos,
              identidade visual, textos, metodologias operacionais, frameworks
              conceituais, código-fonte, ilustrações e arranjos gráficos — são
              de propriedade exclusiva de Cesar Werlich / Saper Vedere ou foram
              devidamente licenciados para uso no website.
            </p>
            <p>
              É expressamente vedada a cópia, reprodução integral ou parcial,
              modificação, distribuição, exibição pública ou exploração
              comercial desautorizada de qualquer material disponível neste site
              sem consentimento prévio e por escrito.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              5. Conduta do Usuário e Restrições de Uso
            </h2>
            <p>
              Ao interagir com o site e seus formulários, o usuário
              compromete-se a:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Fornecer dados corporativos legítimos, fidedignos e atualizados;
              </li>
              <li>
                Não submeter dados falsos, enganosos ou pertencentes a terceiros
                sem autorização devida;
              </li>
              <li>
                Não utilizar mecanismos automatizados (bots, crawlers, scrapers
                ou scripts) para extração massiva não autorizada de dados ou
                envio abusivo de formulários (spam);
              </li>
              <li>
                Não tentar contornar ou violar mecanismos de segurança da
                aplicação, tais como o sistema Cloudflare Turnstile, barreiras
                anti-spam ou configurações de cabeçalhos;
              </li>
              <li>
                Não introduzir vírus, malwares ou códigos tecnológicos nocivos
                que possam comprometer a integridade da plataforma.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              6. Limitação de Responsabilidade
            </h2>
            <p>
              Os conteúdos, artigos, materiais e estudos disponibilizados neste
              website são oferecidos &ldquo;no estado em que se encontram&rdquo;
              (<em>as is</em>), com finalidade primordialmente educacional e
              informativa.
            </p>
            <p>Na máxima extensão permitida pela legislação aplicável:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                A Saper Vedere não se responsabiliza por decisões de negócio,
                investimentos, contratações, demissões ou alterações
                estratégicas tomadas pelo usuário ou por sua empresa com base
                isolada em conteúdos lidos no website sem acompanhamento
                consultivo formalizado.
              </li>
              <li>
                Embora façamos todos os esforços para manter a disponibilidade e
                integridade das informações, não garantimos que o site
                funcionará ininterruptamente, livre de falhas de conectividade,
                interrupções técnicas causadas por provedores de nuvem ou
                instabilidades de terceiros.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              7. Links Externos e Plataformas de Terceiros
            </h2>
            <p>
              Nosso site pode conter links para ambientes e serviços de
              terceiros, tais como sistemas de agendamento de reuniões (Google
              Calendar, Cal.com), perfis em redes profissionais (LinkedIn) ou
              ferramentas analíticas e de segurança (Cloudflare, PostHog,
              Google).
            </p>
            <p>
              Não exercemos controle sobre o conteúdo, os termos de serviço ou
              as práticas de privacidade de sites e serviços operados por
              terceiros, cabendo ao usuário examinar as respectivas políticas ao
              acessá-los.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              8. Modificações Destes Termos
            </h2>
            <p>
              Reservamo-nos o direito de alterar, complementar ou revisar estes
              Termos de Uso a qualquer tempo. A versão revisada passará a
              vigorar a partir da data de publicação indicada no cabeçalho desta
              página. A continuidade na navegação ou envio de requisições após
              tais alterações implica a aceitação tácita dos novos termos.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              9. Legislação Aplicável e Foro de Eleição
            </h2>
            <p>
              Estes Termos de Uso são regidos, interpretados e executados em
              conformidade com as leis da{' '}
              <strong className="text-[color:var(--ink)]">
                República Federativa do Brasil
              </strong>
              , especialmente o Código Civil Brasileiro e a Lei nº 12.965/2014
              (Marco Civil da Internet).
            </p>
            <p>
              Para dirimir qualquer controvérsia ou litígio oriundo da
              utilização deste website ou da interpretação destes termos, fica
              eleito o{' '}
              <strong className="text-[color:var(--ink)]">
                Foro Central da Comarca de São Paulo, Estado de São Paulo
              </strong>
              , com expressa renúncia a qualquer outro, por mais privilegiado
              que seja ou venha a ser.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              10. Dúvidas e Canal de Atendimento
            </h2>
            <p>
              Caso tenha dúvidas sobre estes Termos de Uso ou deseje entrar em
              contato com a equipe da Saper Vedere, utilize nosso formulário
              oficial disponível na página de{' '}
              <Link
                href="/contato"
                className="underline font-semibold text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
              >
                Contato (/contato)
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-[color:var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[color:var(--muted)]">
          <p>&copy; 2026 Saper Vedere. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/termos"
              className="hover:text-[color:var(--olive)] transition-colors underline"
            >
              Termos de Uso
            </Link>
            <span>·</span>
            <Link
              href="/privacidade"
              className="hover:text-[color:var(--olive)] transition-colors"
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
