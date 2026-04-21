"use client";

import Image from "next/image";
import Link from "next/link";
import { track, Events } from "../lib/analytics";

export default function Footer() {
  const year = new Date().getFullYear();
  const onOutbound = (label: string, href: string) =>
    track(Events.outboundClick, { location: "footer", label, href });

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)] mt-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <Link href="#top" className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              <span className="font-display text-base tracking-tight text-[color:var(--ink)]">
                Saper Vedere
              </span>
            </Link>
            <p className="mt-3 text-sm text-[color:var(--muted)] max-w-sm italic font-display">
              &ldquo;Saper vedere&rdquo; &mdash; to know how to see.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="#services"
              className="text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors"
            >
              Work with me
            </Link>
            <Link
              href="#companies"
              className="text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#about"
              className="text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors"
            >
              About
            </Link>
            <a
              href="https://www.linkedin.com/in/cesarwerlich"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                onOutbound("LinkedIn", "https://www.linkedin.com/in/cesarwerlich")
              }
              className="text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:cesardw@gmail.com"
              onClick={() => onOutbound("Email", "cesardw@gmail.com")}
              className="text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors"
            >
              Email
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[color:var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[color:var(--muted)]">
          <span>&copy; {year} Cesar Werlich &middot; Saper Vedere</span>
          <span>Built in Next.js, deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
