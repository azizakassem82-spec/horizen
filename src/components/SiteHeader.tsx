import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/translations";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "ar", label: "العربية", flag: "🇩🇿" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

export function SiteHeader() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/vision", label: t.nav.vision },
    { to: "/units", label: t.nav.units },
    { to: "/markets", label: t.nav.markets },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  const currentLang = LANGS.find((l) => l.code === lang)!;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/dng-logo.png"
            onError={(e) => (e.currentTarget.src = logo)}
            alt="DNG+ Horizon 2027"
            className="h-12 md:h-14 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <div className="font-display font-bold text-base leading-tight text-primary">
              Mostaganem Horizon 2027
            </div>
            <div className="text-[10px] text-gold-deep tracking-[0.2em] mt-0.5">
              USA · AFR GROWTH
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "px-4 py-2 text-sm text-primary font-bold rounded-md" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Language switcher + mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-md border border-border bg-background hover:border-gold hover:text-primary transition-colors text-sm font-medium text-muted-foreground"
              aria-label="Change language"
            >
              <span>{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.label}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown */}
            {langOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setLangOpen(false)}
                />
                <div className="absolute top-full mt-2 end-0 z-20 bg-background border border-border rounded-xl shadow-[var(--shadow-card)] overflow-hidden min-w-[150px]">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-secondary ${
                        lang === l.code
                          ? "text-primary font-bold bg-secondary"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                      {lang === l.code && (
                        <span className="ms-auto w-2 h-2 rounded-full bg-gold-deep" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              activeProps={{ className: "px-3 py-2.5 rounded-md text-primary font-bold bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}