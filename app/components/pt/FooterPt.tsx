'use client';

import Image from 'next/image';
import Link from 'next/link';
import { track, Events } from '../../lib/analytics';

export default function FooterPt() {
  const onOutbound = (label: string, href: string) =>
    track(Events.outboundClick, { location: 'footer_pt', label, href });

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)] mt-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <Link href="#top" className="inline-flex items-center">
              <Image
                src="/LogoSaperVedere.png"
                alt="Saper Vedere"
                width={528}
                height={301}
                className="h-14 w-auto object-contain sm:h-16"
                sizes="(max-width: 640px) 150px, 190px"
              />
            </Link>
            <p className="mt-3 text-sm text-[color:var(--muted)] max-w-sm italic font-display">
              &ldquo;Saper Vedere&rdquo; &mdash; saber ver.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="#services"
              className="text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors"
            >
              Como ajudo
            </Link>
            <Link
              href="#companies"
              className="text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors"
            >
              Experiência
            </Link>
            <Link
              href="#about"
              className="text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors"
            >
              Contato
            </Link>
            <Link
              href="/privacidade"
              className="text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors"
            >
              Termos
            </Link>
            <a
              href="https://www.linkedin.com/in/cesarwerlich"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                onOutbound(
                  'LinkedIn',
                  'https://www.linkedin.com/in/cesarwerlich'
                )
              }
              className="text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors"
            >
              LinkedIn
            </a>
            <Link
              href="/en"
              className="text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors font-medium"
            >
              EN
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[color:var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[color:var(--muted)]">
          <span>&copy; 2026 Saper Vedere. Todos os direitos reservados.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacidade" className="hover:underline">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:underline">
              Termos de Uso
            </Link>
            <Link href="/en" className="hover:underline font-medium">
              English (EN)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
