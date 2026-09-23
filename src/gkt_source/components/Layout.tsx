import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { CONTACT, NAV_LINKS } from "../data/site";
import { Icon } from "./ui";

/* ------------------------------------------------------------------ */

const TICKER_ITEMS = [
  "NEA Licensed Operator",
  "bizSAFE Level 3 Certified",
  `24/7 Hotline ${CONTACT.hotlineDisplay}`,
  "20+ Years of Industry Expertise",
  `WhatsApp ${CONTACT.whatsappDisplay}`,
  "Kitchens · Healthcare · Hospitality",
];

function CredentialsTicker() {
  const row = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden border-b border-brass/25 bg-pine-950 py-2 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
      <div className="marquee-track flex w-max items-center gap-8 sm:gap-10">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8 sm:gap-10" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span key={i} className="flex items-center gap-8 sm:gap-10">
                <span className="font-mono text-[9.5px] font-medium tracking-[0.25em] text-sage uppercase whitespace-nowrap sm:text-[10px] sm:tracking-[0.3em]">
                  {item}
                </span>
                <Icon.Diamond className="h-1.5 w-1.5 shrink-0 text-brass" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import { CompanyLogo } from "./CompanyLogo";

/* ------------------------------------------------------------------ */

function Wordmark() {
  return <CompanyLogo size="md" />;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-paper/10 bg-pine-950/95 backdrop-blur-md transition-shadow duration-500",
          scrolled && "shadow-[0_10px_40px_rgba(6,12,9,0.55)]",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-6 sm:px-8 sm:py-4">
          <Wordmark />

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.to} className="group relative">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "u-sweep flex items-center gap-1.5 py-2 font-mono text-[11px] font-medium tracking-[0.22em] uppercase transition-colors",
                        isActive ? "active text-brass-300" : "text-paper/80 hover:text-paper",
                      )
                    }
                  >
                    {link.label}
                    <svg viewBox="0 0 10 6" className="h-1.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                  </NavLink>
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="border border-brass/30 bg-pine-900 p-2 shadow-[0_30px_60px_rgba(6,12,9,0.6)]">
                      {link.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="group/item flex items-center justify-between px-4 py-3 font-body text-sm text-paper/80 transition-colors hover:bg-pine-800 hover:text-brass-300"
                        >
                          {c.label}
                          <Icon.ArrowNE className="h-3 w-3 opacity-0 transition-opacity group-hover/item:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "u-sweep py-2 font-mono text-[11px] font-medium tracking-[0.22em] uppercase transition-colors",
                      isActive ? "active text-brass-300" : "text-paper/80 hover:text-paper",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick direct phone button on mobile */}
            <a
              href={CONTACT.telHref}
              aria-label={`Call ${CONTACT.hotlineDisplay}`}
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center border border-brass/60 text-brass-300 transition-colors hover:bg-brass hover:text-pine-950 lg:hidden"
            >
              <Icon.Phone className="h-4 w-4" />
            </a>

            <a
              href={CONTACT.telHref}
              className="btn-sweep inv hidden items-center gap-2.5 border border-brass/60 px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.2em] text-brass-300 transition-colors hover:text-pine-950 lg:inline-flex"
            >
              <Icon.Phone className="h-3.5 w-3.5" />
              {CONTACT.hotlineDisplay}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 sm:h-11 sm:w-11 flex-col items-center justify-center gap-1.5 border border-paper/20 xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="h-px w-5 bg-paper" />
              <span className="h-px w-5 bg-brass-300" />
              <span className="h-px w-5 bg-paper" />
            </button>
          </div>
        </div>
      </header>

      {/* full-screen mobile menu with safe area insets */}
      <div
        className={cn(
          "fixed inset-0 z-[70] flex flex-col bg-pine-950 pt-safe pb-safe transition-all duration-500 xl:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex items-center justify-between border-b border-paper/10 px-5 py-4 sm:px-8">
          <Wordmark />
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center border border-paper/20 text-paper"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-5 py-6 sm:px-10 sm:py-8" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <div key={link.to} className="border-b border-paper/10">
              <Link
                to={link.to}
                className="group flex items-baseline gap-3.5 py-3.5 sm:gap-4 sm:py-4"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-brass-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl sm:text-3xl font-medium text-paper transition-colors group-hover:text-brass-300">
                  {link.label}
                </span>
              </Link>
              {link.children && (
                <div className="grid gap-1 pb-3 pl-8 sm:pb-4 sm:pl-9">
                  {link.children.map((c) => (
                    <Link key={c.to} to={c.to} className="u-sweep w-fit py-1.5 text-sm text-sage hover:text-paper">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-8 flex flex-col gap-3 pb-6">
            <a
              href={CONTACT.telHref}
              className="inline-flex min-h-[48px] items-center justify-center gap-3 bg-brass px-6 py-3.5 font-mono text-[11px] font-semibold tracking-[0.25em] text-pine-950 uppercase"
            >
              <Icon.Phone className="h-4 w-4" /> Call {CONTACT.hotlineDisplay}
            </a>
            <a
              href={CONTACT.waHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-3 border border-brass/60 px-6 py-3.5 font-mono text-[11px] font-semibold tracking-[0.25em] text-brass-300 uppercase"
            >
              <Icon.WhatsApp className="h-4 w-4" /> WhatsApp {CONTACT.whatsappDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */

function FloatingActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={cn(
        "fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-2.5 mb-safe transition-all duration-500 sm:right-8 sm:bottom-8 sm:gap-3",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <a
        href={CONTACT.waHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="pulse-dot flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-brass text-pine-950 shadow-[0_10px_30px_rgba(6,12,9,0.4)] transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <Icon.WhatsApp className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
      <a
        href={CONTACT.telHref}
        aria-label="Call GKT International"
        className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-brass/60 bg-pine-900 text-brass-300 shadow-[0_10px_30px_rgba(6,12,9,0.4)] transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <Icon.Phone className="h-4 w-4 sm:h-5 sm:w-5" />
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */

import Footer from "./Footer";

/* ------------------------------------------------------------------ */

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [transitionState, setTransitionState] = useState<"active" | "exit" | "enter">("active");
  const pendingChildren = useRef<ReactNode>(children);
  const [displayChildren, setDisplayChildren] = useState(children);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // On route change: exit current → swap → enter new
    pendingChildren.current = children;
    setTransitionState("exit");
    const exitTimer = setTimeout(() => {
      setDisplayChildren(pendingChildren.current);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      setTransitionState("enter");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionState("active");
        });
      });
    }, 220); // matches page-exit transition duration
    return () => clearTimeout(exitTimer);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keep displayed children in sync when no transition is happening
  useEffect(() => {
    if (transitionState === "active") {
      setDisplayChildren(children);
    }
  }, [children, transitionState]);

  return (
    <div className="min-h-screen bg-paper">
      <div className="noise-overlay" aria-hidden="true" />
      <CredentialsTicker />
      <Header />
      <main
        className={cn(
          transitionState === "exit" && "page-exit",
          transitionState === "enter" && "page-enter",
          transitionState === "active" && "page-active",
        )}
      >
        {displayChildren}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
