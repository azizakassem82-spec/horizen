import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/vision", label: "الرؤية الاستراتيجية" },
  { to: "/units", label: "وحدات الإنتاج" },
  { to: "/markets", label: "الأسواق المستهدفة" },
  { to: "/contact", label: "اتصل بنا" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Mostaganem Horizon 2027" width={44} height={44} className="rounded-full" />
          <div className="hidden sm:block">
            <div className="font-display font-bold text-base leading-tight text-primary">Mostaganem Horizon 2027</div>
            <div className="text-[10px] text-gold-deep tracking-[0.2em] mt-0.5">USA · AFR GROWTH</div>
          </div>
        </Link>
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
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setOpen(!open)}
          aria-label="القائمة"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-muted-foreground hover:text-primary"
              activeProps={{ className: "px-3 py-2 text-primary font-bold" }}
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