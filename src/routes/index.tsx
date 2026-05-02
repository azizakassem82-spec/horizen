import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowLeft, ArrowRight, Factory, Globe2, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/lib/LanguageContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mostaganem Horizon 2027 — الرئيسية" },
      { name: "description", content: "مشروع إنتاج مشترك بين الجزائر والولايات المتحدة لتصنيع الملابس الجاهزة عالية الجودة، وفق عقيدة USA-AFR GROWTH." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(135deg,rgba(116,92,44,0.12),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <img
            src="/dng-logo.png"
            onError={(e) => (e.currentTarget.src = logo)}
            alt="DNG+ Eagle Logo"
            className="mx-auto mb-6 drop-shadow-2xl h-36 md:h-44 object-contain"
          />
          <div className="text-gold text-[13px] tracking-[0.35em] mb-4 font-bold">
            {t.hero.badge}
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-4 text-white">
            {t.hero.title1}
            <span className="block text-gold mt-2">{t.hero.title2}</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/80 leading-relaxed font-body">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/vision"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold bg-gold text-primary-deep hover:bg-white transition-colors"
            >
              {t.hero.btnVision}
              <ArrowIcon size={16} className="transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md font-bold text-white border border-white/30 hover:border-gold transition-colors"
            >
              {t.hero.btnContact}
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-16 md:mb-20">
          <div className="text-gold-deep text-[11px] tracking-[0.3em] mb-4">
            {t.pillars.sectionBadge}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            {t.pillars.sectionTitle}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {[
            { icon: Factory, img: "/workers.jpg" },
            { icon: Globe2, img: "/factory-exterior.jpg" },
            { icon: ShieldCheck, img: "/solar.jpg" },
          ].map((p, i) => {
            const item = t.pillars.items[i];
            return (
              <article
                key={item.title}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-1.5"
                style={{ transform: i === 1 ? "translateY(-8px)" : undefined }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/95 backdrop-blur flex items-center justify-center shadow-[var(--shadow-soft)]">
                    <p.icon size={18} className="text-gold-deep" strokeWidth={1.8} />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-gold-deep scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
              </article>
            );
          })}
        </div>
      </section>

      {/* Facilities showcase */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary">
              {t.facilities.title}
            </h2>
            <div className="w-16 h-1 bg-gold-deep mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-12 gap-5 md:gap-6">
            <figure className="md:col-span-8 md:row-span-2 relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3] md:aspect-auto">
              <img src="/factory-exterior.jpg" alt="" loading="lazy" className="w-full h-full object-cover" />
              <figcaption className="absolute bottom-0 right-0 left-0 p-6 bg-gradient-to-t from-primary/95 to-transparent text-primary-foreground">
                <div className="text-[10px] tracking-[0.3em] text-gold mb-2">{t.facilities.factory.badge}</div>
                <div className="font-display font-bold text-xl">{t.facilities.factory.caption}</div>
              </figcaption>
            </figure>
            <figure className="md:col-span-4 relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3]">
              <img src="/office.jpg" alt="" loading="lazy" className="w-full h-full object-cover" />
              <figcaption className="absolute bottom-0 right-0 left-0 p-4 bg-gradient-to-t from-primary/90 to-transparent text-primary-foreground">
                <div className="font-display font-bold text-sm">{t.facilities.office}</div>
              </figcaption>
            </figure>
            <figure className="md:col-span-4 relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3]">
              <img src="/solar.jpg" alt="" loading="lazy" className="w-full h-full object-cover" />
              <figcaption className="absolute bottom-0 right-0 left-0 p-4 bg-gradient-to-t from-primary/90 to-transparent text-primary-foreground">
                <div className="font-display font-bold text-sm">{t.facilities.solar}</div>
              </figcaption>
            </figure>
            <figure className="md:col-span-12 relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] h-64 md:h-80">
              <img src="/workers.jpg" alt="" loading="lazy" className="w-full h-full object-cover" />
              <figcaption className="absolute bottom-0 right-0 left-0 p-6 bg-gradient-to-t from-primary/90 to-transparent text-primary-foreground">
                <div className="font-display font-bold text-xl">{t.facilities.workers}</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
        <img
          src="/ceo.jpg"
          alt="Mr. Ad Dennoune - CEO"
          className="w-full h-full object-cover object-center absolute inset-0"
          style={{ minHeight: "520px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/20" />
        <div
          className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col justify-center"
          style={{ minHeight: "520px" }}
        >
          <div className="max-w-xl">
            <div className="text-gold text-[11px] tracking-[0.35em] mb-4 font-bold">
              {t.ceo.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              {t.ceo.title}
            </h2>
            <div className="w-12 h-1 bg-gold mb-8" />
            <p className="text-white/85 text-lg leading-relaxed mb-10">{t.ceo.quote}</p>
            <div className="border-s-4 border-gold ps-5">
              <div className="font-display font-bold text-white text-2xl">{t.ceo.name}</div>
              <div className="text-gold text-sm tracking-[0.2em] mt-1">{t.ceo.role}</div>
              <div className="text-white/50 text-xs mt-1">{t.ceo.company}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-y-2 border-primary/20 py-14">
          {t.stats.map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">{s.k}</div>
              <div className="text-xs text-muted-foreground tracking-wider mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctrine */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="w-10 h-px bg-gold-deep mx-auto mb-8" />
          <div className="text-gold-deep text-[11px] tracking-[0.3em] mb-6">{t.doctrine.badge}</div>
          <p className="text-2xl md:text-3xl font-display text-primary leading-relaxed">
            {t.doctrine.quote}
          </p>
          <div className="mt-10 text-[11px] tracking-[0.35em] text-gold-deep">USA · AFR GROWTH</div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
