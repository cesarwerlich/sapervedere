'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { track, Events } from '../../lib/analytics';

const links = [
  { href: '#servicos', label: 'Como ajudo' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

export default function NavPt() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const trackNavClick = (label: string) =>
    track(Events.ctaClick, { location: 'nav_pt', label });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[color:var(--bg)]/80 border-b border-[color:var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-20 flex items-center justify-between">
        <Link
          href="#inicio"
          className="flex items-center group"
          onClick={() => trackNavClick('logo')}
          aria-label="Saper Vedere — início"
        >
          <Image
            src="/LogoSaperVedere.png"
            alt="Saper Vedere"
            width={528}
            height={301}
            priority
            className="h-11 w-auto object-contain sm:h-12"
            sizes="(max-width: 640px) 140px, 170px"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => trackNavClick(l.label)}
              className="px-3 py-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--olive)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/en"
            onClick={() => trackNavClick('Language Switcher (EN)')}
            aria-label="English version"
            className="ml-1 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)] hover:text-[color:var(--ink)] border border-[color:var(--border)] rounded-md transition-colors"
          >
            EN
          </Link>
          <Link
            href="/contato"
            onClick={() => trackNavClick('Solicitar Diagnóstico (nav)')}
            className="ml-3 inline-flex items-center rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] px-4 py-2 text-sm font-medium hover:bg-[color:var(--accent-hover)] transition-colors"
          >
            Solicitar Diagnóstico
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-[color:var(--border)] text-[color:var(--ink)]"
          aria-label="Alternar menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Alternar menu</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden
          >
            {open ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--bg)]">
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => {
                  trackNavClick(l.label);
                  setOpen(false);
                }}
                className="py-3 text-base text-[color:var(--ink)] border-b border-[color:var(--border)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/en"
              onClick={() => {
                trackNavClick('Language Switcher (EN mobile)');
                setOpen(false);
              }}
              className="py-3 text-base text-[color:var(--ink)] border-b border-[color:var(--border)] flex items-center justify-between"
            >
              <span>English</span>
              <span className="text-xs uppercase font-semibold text-[color:var(--muted)] border border-[color:var(--border)] px-2 py-0.5 rounded">
                EN
              </span>
            </Link>
            <Link
              href="/contato"
              onClick={() => {
                trackNavClick('Solicitar Diagnóstico (mobile)');
                setOpen(false);
              }}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] px-5 py-3 text-sm font-medium hover:bg-[color:var(--accent-hover)] transition-colors"
            >
              Solicitar Diagnóstico
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
