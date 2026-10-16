import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Saper Vedere. Learn how we collect, process, and protect business data in compliance with GDPR and LGPD standards.',
};

export default function PrivacyPage() {
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
            href="/privacidade"
            className="text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors inline-flex items-center gap-1.5"
          >
            Versão em Português →
          </Link>
        </div>

        {/* Page Title & Meta */}
        <header className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[color:var(--accent)] font-semibold mb-2">
            Governance & Data Protection
          </p>
          <h1 className="text-3xl sm:text-4xl font-display font-medium text-[color:var(--ink)] tracking-tight">
            Privacy Policy
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
              1. Overview and Data Controller
            </h2>
            <p>
              This Privacy Policy explains how personal and corporate data is
              collected, processed, and protected on{' '}
              <strong className="text-[color:var(--ink)]">
                sapervedere.com.br
              </strong>{' '}
              and its associated advisory and diagnostic funnels, operated by{' '}
              <strong className="text-[color:var(--ink)]">Saper Vedere</strong>,
              an executive advisory and operational partnership initiative led
              by Cesar Werlich (Fractional COO & Operating Partner for B2B SaaS
              founders).
            </p>
            <p>
              Saper Vedere acts as the Data Controller responsible for your
              personal data. We are committed to rigorous data privacy standards
              in compliance with the European Union&apos;s{' '}
              <strong className="text-[color:var(--ink)]">
                General Data Protection Regulation (GDPR - Regulation EU
                2016/679)
              </strong>{' '}
              and the Brazilian{' '}
              <strong className="text-[color:var(--ink)]">
                General Personal Data Protection Law (LGPD - Law No.
                13,709/2018)
              </strong>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              2. Data We Collect
            </h2>
            <p>
              We collect only the minimum necessary information required to
              evaluate B2B advisory fit, schedule discovery sessions, and
              maintain a secure browsing experience:
            </p>
            <div className="rounded-lg bg-[color:var(--surface)] border border-[color:var(--border)] p-5 space-y-4">
              <h3 className="font-semibold text-[color:var(--ink)] text-base">
                A. Information You Voluntarily Provide (Diagnostic & Contact
                Forms)
              </h3>
              <p className="text-sm">
                When you submit an inquiry through our pre-qualification
                diagnostic forms or contact page (available at{' '}
                <Link
                  href="/contato"
                  className="underline text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
                >
                  /contato
                </Link>{' '}
                or campaign landing pages{' '}
                <code className="text-xs bg-[color:var(--surface-2)] px-1.5 py-0.5 rounded">
                  /lp/[slug]
                </code>
                ), we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Full Name:
                  </strong>{' '}
                  to personalize communication and identify you during discovery
                  calls.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Work / Business Email:
                  </strong>{' '}
                  primary channel for professional correspondence and calendar
                  invites.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Business Phone / WhatsApp:
                  </strong>{' '}
                  for urgent scheduling adjustments and direct founder
                  coordination.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Company Name & URL:
                  </strong>{' '}
                  to review the business model and market context before our
                  discussion.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Company Stage & Operating Metrics:
                  </strong>{' '}
                  fundraising stage (e.g., Bootstrapped, Pre-seed, Seed, Series
                  A), ARR bracket, or team size, to verify whether our
                  Fractional COO engagement model matches your operational
                  needs.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Operational & GTM Challenges:
                  </strong>{' '}
                  optional qualitative context regarding outbound machinery,
                  organizational cadence, or fundraising readiness.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-[color:var(--surface)] border border-[color:var(--border)] p-5 space-y-4">
              <h3 className="font-semibold text-[color:var(--ink)] text-base">
                B. Technical and Telemetry Data Collected Automatically
              </h3>
              <p className="text-sm">
                When you browse our website, limited technical and telemetry
                data may be recorded automatically:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  IP address (with anonymization masks applied in analytics
                  tooling).
                </li>
                <li>
                  Marketing attribution and campaign parameters (
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
                  Device, operating system, browser type, and display
                  resolution.
                </li>
                <li>
                  Page visits, time spent per section, and engagement with
                  call-to-action buttons.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              3. Cookies and Tracking Technologies
            </h2>
            <p>
              We utilize cookies, session identifiers, and conversion pixels to
              monitor site performance, measure the efficacy of B2B advertising,
              and defend against automated abuse:
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-[color:var(--ink)]">
                  Google Analytics 4 (GA4) & Google Tag Manager (GTM):
                </strong>{' '}
                Used to aggregate anonymous session telemetry, evaluate content
                engagement, and optimize site structure.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Google Ads Conversion Tracking:
                </strong>{' '}
                Measures the efficiency of acquisition campaigns across Google
                search and partner networks.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Meta Pixel & Conversions API (CAPI):
                </strong>{' '}
                Measures conversion performance and B2B engagement from Meta
                advertising platforms (Instagram and Facebook).
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">PostHog:</strong>{' '}
                Client and funnel analytics. PostHog is served via our
                first-party reverse proxy (
                <code className="text-xs bg-[color:var(--surface-2)] px-1.5 py-0.5 rounded">
                  /ingest/*
                </code>
                ) to protect user telemetry integrity and avoid cross-site
                tracking contamination.
              </li>
            </ul>
            <p className="text-sm">
              You can configure your browser to reject cookies or install
              privacy extensions to block tracking scripts. Basic informational
              pages will remain accessible without cookies.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              4. Purposes and Legal Bases for Processing
            </h2>
            <p>
              We process personal data only when an applicable legal basis
              exists under GDPR Article 6 and LGPD Article 7:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[color:var(--border)]">
                <thead>
                  <tr className="bg-[color:var(--surface)] text-[color:var(--ink)]">
                    <th className="p-3 border border-[color:var(--border)] font-semibold">
                      Purpose
                    </th>
                    <th className="p-3 border border-[color:var(--border)] font-semibold">
                      Categories of Data
                    </th>
                    <th className="p-3 border border-[color:var(--border)] font-semibold">
                      Legal Basis (GDPR / LGPD)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[color:var(--border)]">
                  <tr>
                    <td className="p-3 border border-[color:var(--border)]">
                      B2B lead qualification and advisory fit assessment
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Name, business email, company, stage, metrics
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Pre-contractual measures (GDPR 6(1)(b) / LGPD 7(V))
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[color:var(--border)]">
                      Scheduling diagnostic meetings & discovery calls
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Name, business email, phone/WhatsApp
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Pre-contractual measures (GDPR 6(1)(b) / LGPD 7(V))
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[color:var(--border)]">
                      Fraud prevention, security, and anti-bot defense
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      IP address, request headers, security tokens
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Legitimate interests (GDPR 6(1)(f) / LGPD 7(IX))
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[color:var(--border)]">
                      Aggregated analytics and website optimization
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Aggregated telemetry, analytics cookies, UTMs
                    </td>
                    <td className="p-3 border border-[color:var(--border)]">
                      Legitimate interests / Consent (GDPR 6(1)(a)/(f) / LGPD
                      7(I)/(IX))
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              5. Data Sharing, Sub-processors, and Bot Security
            </h2>
            <p>
              We maintain a strict{' '}
              <strong className="text-[color:var(--ink)]">
                no-sale policy
              </strong>
              : we never sell, rent, or trade your personal data to third
              parties. We share data solely with trusted technical service
              providers essential for platform operations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[color:var(--ink)]">
                  Cloudflare Turnstile:
                </strong>{' '}
                Intelligent, privacy-preserving anti-bot verification ensuring
                our forms remain protected from automated abuse without
                intrusive captcha friction.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Hosting & Cloud Infrastructure:
                </strong>{' '}
                Industry-standard cloud providers (such as Vercel and secure
                database/webhook infrastructure) featuring modern end-to-end TLS
                1.3 encryption in transit and AES-256 encryption at rest.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Calendar & Scheduling Systems:
                </strong>{' '}
                Google Calendar or Cal.com to manage booked discovery
                appointments selected directly by you.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              6. Data Retention and Deletion
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill
              the specific purposes for which it was collected, or to comply
              with applicable statutory retention requirements:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Inquiries that do not proceed to an advisory engagement or
                mutual commercial relationship are periodically pruned or
                permanently anonymized.
              </li>
              <li>
                Web server connection logs are retained for statutory periods
                (such as the 6-month log retention requirement under Brazilian
                Internet law) to guarantee forensic security.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              7. Your Rights as a Data Subject (GDPR & LGPD)
            </h2>
            <p>
              Under both the GDPR (Articles 15-22) and LGPD (Article 18), you
              possess explicit statutory rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-[color:var(--ink)]">
                  Right of Access:
                </strong>{' '}
                Obtain confirmation on whether your data is being processed and
                receive a copy.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Right to Rectification:
                </strong>{' '}
                Request correction of inaccurate, incomplete, or outdated
                information.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):
                </strong>{' '}
                Request deletion of your personal data where statutory grounds
                exist.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Right to Restriction of Processing:
                </strong>{' '}
                Limit the scope of data processing in designated situations.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Right to Data Portability:
                </strong>{' '}
                Receive your data in a structured, commonly used
                machine-readable format.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Right to Object:
                </strong>{' '}
                Object to processing based on legitimate interests or direct
                communication.
              </li>
              <li>
                <strong className="text-[color:var(--ink)]">
                  Withdrawal of Consent:
                </strong>{' '}
                Revoke any previously granted consent at any time without
                penalty.
              </li>
            </ul>
            <div className="rounded-lg bg-[color:var(--surface)] border border-[color:var(--border)] p-5 mt-4">
              <h3 className="font-semibold text-[color:var(--ink)] text-base mb-2">
                Exercising Your Rights
              </h3>
              <p className="text-sm">
                To submit any data rights request or ask questions about our
                compliance program, please reach out through our{' '}
                <Link
                  href="/contato"
                  className="underline font-semibold text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
                >
                  Contact page (/contato)
                </Link>
                . We will review and fulfill your request within the statutory
                timeframe.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-[color:var(--ink)]">
              8. Changes to This Policy
            </h2>
            <p>
              We may revise this Privacy Policy periodically to reflect
              technological adjustments or legal updates. The &ldquo;Effective
              Date&rdquo; at the top of this document indicates when changes
              take effect. Continued use of our site following updates indicates
              acknowledgement of the modified terms.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-[color:var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[color:var(--muted)]">
          <p>&copy; 2026 Saper Vedere. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/terms"
              className="hover:text-[color:var(--olive)] transition-colors"
            >
              Terms of Service
            </Link>
            <span>·</span>
            <Link
              href="/privacy"
              className="hover:text-[color:var(--olive)] transition-colors underline"
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
