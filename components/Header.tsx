"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import { localHref, navFor, switchHref, ui, type Lang } from "@/lib/i18n";
import { Logo } from "./Logo";

function LangSwitch({ lang, pathname, className = "" }: { lang: Lang; pathname: string; className?: string }) {
  const t = ui[lang];
  const item = (to: Lang, label: string) =>
    to === lang ? (
      <span aria-current="true" className="text-lime">
        {label}
      </span>
    ) : (
      // Plain <a>: FR and EN use different root layouts, so this is a full page load anyway.
      <a href={switchHref(pathname, to)} hrefLang={to} lang={to} className="text-paper/70 hover:text-paper">
        {label}
      </a>
    );
  return (
    <nav aria-label={t.switchLabel} className={`flex items-center gap-2 text-sm font-bold ${className}`}>
      {item("fr", "FR")}
      <span aria-hidden="true" className="text-line">
        |
      </span>
      {item("en", "EN")}
    </nav>
  );
}

export function Header({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const nav = navFor(lang);
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const strip = (p: string) => p.replace(/\/$/, "") || "/";
  const home = strip(localHref(lang, "/"));
  const isActive = (href: string) => {
    const h = strip(href);
    const p = strip(pathname);
    return h === home ? p === home : p.startsWith(h);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-10">
        <Link href={localHref(lang, "/")} className="rounded-sm" aria-label={t.homeLabel}>
          <Logo />
        </Link>

        <nav aria-label={t.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative rounded-sm px-3 py-2 text-sm font-semibold text-paper/80 transition-colors hover:text-paper aria-[current=page]:text-paper aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-lime"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch lang={lang} pathname={pathname} />
          <a
            href={site.phoneHref}
            className="hidden min-h-11 items-center gap-2 rounded-md bg-lime px-4 text-sm font-bold text-ink transition-colors hover:bg-paper sm:inline-flex"
          >
            <Phone aria-hidden="true" className="size-4" />
            {site.phoneDisplay}
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            <span className="sr-only">{open ? t.closeMenu : t.openMenu}</span>
          </button>
        </div>
      </div>

      <nav id="mobile-menu" aria-label={t.mainNav} hidden={!open} className="border-t border-line bg-ink lg:hidden">
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="display flex min-h-14 items-center border-b border-line text-4xl text-paper/85 aria-[current=page]:text-lime"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-5">
            <a
              href={site.phoneHref}
              className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-lime px-5 font-bold text-ink"
            >
              <Phone aria-hidden="true" className="size-4" />
              {t.callCoach} · {site.phoneDisplay}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
