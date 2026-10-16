import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms and Conditions of Service governing the use of Saper Vedere website and advisory diagnostic platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)] theme-v2-blue theme-6-logo-blue-headings">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        {/* Navigation / Header controls */}
        <div className="flex items-center justify-between pb-8 border-b border-[color:var(--border)] mb-12">
          <Link
            href="/en"
            className="text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors inline-flex items-center gap-1.5"
          >
            ← Back to home
          </Link>
          <Link
            href="/termos"
            className="text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors inline-flex items-center gap-1.5"
          >
            Versão em Português →
          </Link>
        </div>

        {/* Page Title & Meta */}
        <header className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[color:var(--accent)] font-semibold mb-2">
            Terms & Conditions
          </p>
          <h1 className="text-3xl sm:text-4xl font-display font-medium text-[color:var(--ink)] tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Effective Date: October 16, 2026 · Saper Vedere (sapervedere.com.br)
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-[color:var(--ink-soft)] leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or interacting with{' '}
              <strong className="text-[color:var(--ink)]">
                sapervedere.com.br
              </strong>{' '}
              and its associated pages, you unconditionally agree to be bound by
              these Terms of Service and our{' '}
              <Link
                href="/privacy"
                className="underline text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] font-medium"
              >
                Privacy Policy
              </Link>
              . If you do not agree with any part of these terms, please refrain
              from using this website or submitting information via our online
              forms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              2. Nature of Services and Advisory Scope
            </h2>
            <p>
              <strong className="text-[color:var(--ink)]">Saper Vedere</strong>{' '}
              provides executive advisory, growth architecture, and Fractional
              COO / Operating Partner services led by Cesar Werlich for
              technology founders and B2B SaaS leadership teams.
            </p>
            <p>
              The content and pages of this website serve educational,
              informational, and commercial pre-qualification purposes regarding
              our core service models:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-[color:var(--ink)]">
                  Fractional COO & Operating Partner:
                </strong>{' '}
                high-touch ongoing operational cadence, leadership alignment,
                and execution governance.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Outbound & GTM Engine:
                </strong>{' '}
                systematic outbound sales infrastructure, lead generation
                architecture, and acquisition channel playbook.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Operational Diagnostic:
                </strong>{' '}
                time-boxed consultative evaluation designed to identify and
                resolve systemic bottlenecks before scaling.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              3. Diagnostic Inquiry Scope & Non-Binding Inquiries
            </h2>
            <p>
              Submitting an operational inquiry, pre-qualification form, or
              booking a preliminary discovery call on this website is governed
              by the following provisions:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[color:var(--ink)]">
                  Exploratory Intent:
                </strong>{' '}
                Preliminary inquiries and discovery sessions are strictly
                evaluative and pre-contractual, designed to gauge mutual fit
                between your operational challenges and our advisory
                methodology.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  No Legal, Financial, or Regulatory Advice:
                </strong>{' '}
                Information shared during preliminary discussions does not
                constitute formal legal, tax, accounting, or regulated
                securities investment advice.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  No Guaranteed Outcomes:
                </strong>{' '}
                Form submissions or discovery conversations create no binding
                commitment on either party to execute an agreement, nor do they
                constitute an express or implied guarantee of specific
                commercial revenue, investor fundraising success, or corporate
                milestones.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Formal Written Engagement:
                </strong>{' '}
                All binding consultative services, deliverables, fee structures,
                and deliverables are exclusively governed by a separate,
                bilateral Master Services Agreement (MSA) or Statement of Work
                (SOW) executed by authorized representatives of both parties.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              4. Intellectual Property Rights
            </h2>
            <p>
              All materials, trademarks, logos, texts, proprietary operational
              frameworks, methodology diagrams, source code, and visual
              identities published on this website are the exclusive
              intellectual property of Cesar Werlich / Saper Vedere or are used
              under appropriate license.
            </p>
            <p>
              You may not copy, reproduce, distribute, republish, create
              derivative works from, or commercially exploit any content from
              this website without prior written authorization from Saper
              Vedere.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              5. Acceptable Use and User Obligations
            </h2>
            <p>
              When utilizing this website and its inquiry mechanisms, you agree
              to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Provide accurate, genuine, and verifiable business contact
                information;
              </li>
              <li>
                Refrain from submitting fraudulent inquiries or impersonating
                other individuals or entities;
              </li>
              <li>
                Refrain from deploying automated scripts, web scrapers, bots, or
                automated form submitters;
              </li>
              <li>
                Respect technical perimeter defenses, including Cloudflare
                Turnstile verification and rate-limiting controls;
              </li>
              <li>
                Avoid transmitting malicious software, exploit payloads, or any
                code intended to disrupt website availability.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              6. Disclaimers and Limitation of Liability
            </h2>
            <p>
              The materials, articles, and frameworks on this website are
              provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              basis without warranties of any kind, whether express or implied.
            </p>
            <p>To the fullest extent permitted by applicable law:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Saper Vedere shall not be held liable for any direct, indirect,
                incidental, consequential, or special damages resulting from
                business decisions made based solely upon general website
                commentary prior to a formal consulting engagement.
              </li>
              <li>
                We do not warrant that the website will operate completely
                uninterrupted, bug-free, or invulnerable to unforeseen cloud
                infrastructure outages.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              7. Third-Party Integrations and External Links
            </h2>
            <p>
              Our website may link to or incorporate external third-party
              software, including meeting scheduling tools (Google Calendar,
              Cal.com), security providers (Cloudflare), analytics services
              (PostHog, Google), and professional networks (LinkedIn).
            </p>
            <p>
              We do not control and are not responsible for the availability,
              terms of service, or privacy practices of external third-party
              applications. Your interactions with such services are governed by
              their respective terms.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              8. Modifications to These Terms
            </h2>
            <p>
              We reserve the right to amend these Terms of Service at any time.
              When revisions are made, the updated version will be posted
              directly to this page with an updated &ldquo;Effective
              Date&rdquo;. Your continued use of the website after such changes
              denotes acceptance of the revised terms.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              9. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of the{' '}
              <strong className="text-[color:var(--ink)]">
                Federative Republic of Brazil
              </strong>
              .
            </p>
            <p>
              Any legal dispute, claim, or controversy arising out of or
              relating to these terms or your use of this website shall be
              submitted to the exclusive jurisdiction of the judicial district
              of{' '}
              <strong className="text-[color:var(--ink)]">
                São Paulo, State of São Paulo, Brazil
              </strong>
              , waiving any other jurisdiction however privileged.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              10. Contact and Questions
            </h2>
            <p>
              If you have questions or inquiries regarding these Terms of
              Service, please reach out via our official{' '}
              <Link
                href="/contato"
                className="underline font-semibold text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
              >
                Contact page (/contato)
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-[color:var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[color:var(--muted)]">
          <p>&copy; 2026 Saper Vedere. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/terms"
              className="hover:text-[color:var(--olive)] transition-colors underline"
            >
              Terms of Service
            </Link>
            <span>·</span>
            <Link
              href="/privacy"
              className="hover:text-[color:var(--olive)] transition-colors"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              href="/contato"
              className="hover:text-[color:var(--olive)] transition-colors"
            >
              Contact
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
