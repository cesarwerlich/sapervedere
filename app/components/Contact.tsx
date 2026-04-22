"use client";

import Section from "./Section";
import { track, Events } from "../lib/analytics";

const CAL_EMBED =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0bthjlEmSeiF4N8Hu9B9knW7OvOqCVfvDyzNERqgHTz295Fx5mnYOnly9kH9ckBteoAlvT0Wtj?gv=true";
const CAL_SHORT = "https://calendar.app.google/UrbapWUStc9WCJcF7";
const EMAIL = "cesar@sapervedere.com.br";
const LINKEDIN = "https://www.linkedin.com/in/cesarwerlich";

export default function Contact() {
  const onOutbound = (label: string, href: string) =>
    track(Events.outboundClick, { location: "contact", label, href });

  return (
    <Section id="contact" label="Contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Left: pitch + direct links */}
          <div className="md:col-span-5">
            <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Let&rsquo;s talk
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
              Book a 30-min call.
            </h2>
            <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
              Tell me where your company is, what&rsquo;s blocking you, and
              what you&rsquo;re hoping to unlock. I&rsquo;ll tell you
              straight whether I can help &mdash; or who in my network might
              be a better fit.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={CAL_SHORT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onOutbound("Open calendar (new tab)", CAL_SHORT)}
                className="group flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 transition-colors hover:border-[color:var(--border-strong)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                      <path
                        d="M4 6h12M4 6v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6M7 3v4M13 3v4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-medium text-[color:var(--ink)]">
                      Schedule on Google Calendar
                    </div>
                    <div className="text-xs text-[color:var(--muted)]">
                      30 minutes · video call
                    </div>
                  </div>
                </div>
                <svg
                  className="text-[color:var(--muted)] group-hover:text-[color:var(--olive)] transition-colors"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                onClick={() => onOutbound("Email", EMAIL)}
                className="group flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 transition-colors hover:border-[color:var(--border-strong)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                      <path
                        d="M3 6l7 5 7-5M3 6v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6M3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-medium text-[color:var(--ink)]">
                      Email me directly
                    </div>
                    <div className="text-xs text-[color:var(--muted)]">
                      {EMAIL}
                    </div>
                  </div>
                </div>
                <svg
                  className="text-[color:var(--muted)] group-hover:text-[color:var(--olive)] transition-colors"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onOutbound("LinkedIn", LINKEDIN)}
                className="group flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 transition-colors hover:border-[color:var(--border-strong)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.24 18h4.52V7.75H.24V18zM8.94 7.75h4.33v1.4h.06c.6-1.13 2.07-2.33 4.27-2.33 4.56 0 5.4 3 5.4 6.9V18H18.5v-3.96c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V18H9.17V7.75h-.23z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-medium text-[color:var(--ink)]">
                      Connect on LinkedIn
                    </div>
                    <div className="text-xs text-[color:var(--muted)]">
                      linkedin.com/in/cesarwerlich
                    </div>
                  </div>
                </div>
                <svg
                  className="text-[color:var(--muted)] group-hover:text-[color:var(--olive)] transition-colors"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: embedded calendar */}
          <div className="md:col-span-7">
            <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)] p-2 sm:p-3 h-full">
              <iframe
                src={CAL_EMBED}
                title="Schedule a call with Cesar"
                loading="lazy"
                className="w-full h-[620px] rounded-[var(--radius-md)] border-0"
                onLoad={() =>
                  track(Events.sectionView, {
                    section: "calendar_iframe_loaded",
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
