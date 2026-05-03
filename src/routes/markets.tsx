import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/lib/LanguageContext";

import algeria from "@/assets/algeria.jpg";
import africa from "@/assets/africa.jpg";
import europe from "@/assets/europe.jpg";
import middleEast from "@/assets/middle-east.jpg";

export const Route = createFileRoute("/markets")({
  head: () => ({
    meta: [
      { title: "الأسواق المستهدفة — Mostaganem Horizon 2027" },
      { name: "description", content: "الأسواق المستهدفة: الجزائر، أفريقيا، أوروبا والشرق الأوسط — تموقع استراتيجي لتصدير الملابس الجاهزة." },
      { property: "og:title", content: "الأسواق المستهدفة — Mostaganem Horizon 2027" },
      { property: "og:description", content: "الأسواق الرئيسية التي يستهدفها المشروع انطلاقًا من موقع مستغانم الاستراتيجي." },
      { property: "og:image", content: "https://mostaganem-horizon.dz/africa.jpg" },
      { property: "og:url", content: "https://mostaganem-horizon.dz/markets" },
    ],
  }),
  component: MarketsPage,
});

function MarketsPage() {
  const { t } = useLanguage();
  const m = t.markets;
  const marketImages = [algeria, africa, europe, middleEast];
  const originalFlags = ["🇩🇿", "🌍", "🇪🇺", "🕌"];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <img src="/dng-logo.png" alt="DNG+" className="mx-auto mb-8 h-24 md:h-32 w-auto object-contain drop-shadow-md" />
        <div className="text-gold-deep text-sm md:text-base tracking-[0.25em] mb-5 font-bold">{m.badge}</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">{m.title}</h1>
        <p className="mt-8 text-muted-foreground leading-loose">
          {m.desc}
        </p>
      </section>
      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-7">
        {m.items.map((item, i) => (
          <article
            key={item.title}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-2"
            style={{ transform: i % 2 === 1 ? "translateY(24px)" : undefined }}
          >
            <div className="relative h-64 overflow-hidden">
              <img src={marketImages[i]} alt="" loading="lazy" width={1200} height={800} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute top-5 right-5 text-4xl drop-shadow-lg">{originalFlags[i]}</div>
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-xs md:text-sm tracking-widest text-gold-deep font-bold">
                {item.tag}
              </div>
              <div className="absolute bottom-5 right-6 text-primary-foreground">
                <h2 className="text-3xl font-display font-bold drop-shadow">{item.title}</h2>
              </div>
            </div>
            <div className="p-7">
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
            <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-gold-deep scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
          </article>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}