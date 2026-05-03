import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/lib/LanguageContext";

import factory from "@/assets/factory.jpg";
import sewing from "@/assets/sewing.jpg";
import textiles from "@/assets/textiles.jpg";
import garments from "@/assets/garments.jpg";
import exportImg from "@/assets/export.jpg";

export const Route = createFileRoute("/units")({
  head: () => ({
    meta: [
      { title: "وحدات إنتاج الملابس الجاهزة — Mostaganem Horizon 2027" },
      { name: "description", content: "سلسلة وحدات إنتاج متخصصة من القص حتى التصدير، بمواصفات عالمية واستقلالية كاملة في الطاقة." },
      { property: "og:title", content: "وحدات إنتاج الملابس الجاهزة — Mostaganem Horizon 2027" },
      { property: "og:description", content: "تعرف على وحدات الإنتاج المتخصصة في Mostaganem Horizon 2027، سلسلة متكاملة من القص إلى التصدير." },
      { property: "og:image", content: "https://mostaganem-horizon.dz/sewing.jpg" },
      { property: "og:url", content: "https://mostaganem-horizon.dz/units" },
    ],
  }),
  component: UnitsPage,
});

function UnitsPage() {
  const { t } = useLanguage();
  const u = t.units;
  const unitImages = [textiles, sewing, garments, factory, garments, exportImg];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <img src="/dng-logo.png" alt="DNG+" className="mx-auto mb-8 h-24 md:h-32 w-auto object-contain drop-shadow-md" />
        <div className="text-gold-deep text-sm md:text-base tracking-[0.25em] mb-5 font-bold">{u.badge}</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">{u.title}</h1>
        <p className="mt-8 text-muted-foreground leading-loose">
          {u.desc}
        </p>
      </section>
      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {u.items.map((item, index) => (
          <article
            key={item.n}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-1.5"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={unitImages[index]} alt="" loading="lazy" width={1200} height={900} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-sm font-display font-bold text-gold-deep tracking-widest shadow-[var(--shadow-soft)]">
                {item.n}
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </div>
            <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-gold-deep scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
          </article>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}