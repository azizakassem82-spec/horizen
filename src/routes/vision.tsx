import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Target, Lightbulb, Handshake, Zap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

import factory from "@/assets/factory.jpg";
import sewing from "@/assets/sewing.jpg";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "الرؤية الاستراتيجية — Mostaganem Horizon 2027" },
      { name: "description", content: "مشروع Mostaganem Horizon 2027 يجسّد الإرادة الصارمة نحو التكامل الاقتصادي بين الجزائر والولايات المتحدة الأمريكية، لإنشاء قطب صناعي مرجعي في إفريقيا لإنتاج وتصدير الملابس الجاهزة." },
      { property: "og:title", content: "الرؤية الاستراتيجية — Mostaganem Horizon 2027" },
      { property: "og:description", content: "اكتشف مشروع Mostaganem Horizon 2027، رؤية استراتيجية لصناعة الملابس بمعايير دولية تجسد الشراكة الجزائرية-الأمريكية." },
      { property: "og:image", content: "https://mostaganem-horizon.dz/factory-exterior.jpg" },
      { property: "og:url", content: "https://mostaganem-horizon.dz/vision" },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  const { t } = useLanguage();
  const v = t.vision;
  const icons = [Target, Handshake, Lightbulb, Zap];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <img src="/dng-logo.png" alt="DNG+" className="mx-auto mb-8 h-24 md:h-32 w-auto object-contain drop-shadow-md" />
        <div className="text-gold-deep text-sm md:text-base tracking-[0.25em] mb-5 font-bold">{v.badge}</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
          {v.title}
        </h1>
        <p className="mt-8 text-muted-foreground leading-loose">
          {v.desc}
        </p>
      </section>

      {/* Wide image strip */}
      <section className="max-w-6xl mx-auto px-6">
        <figure className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] aspect-[21/9]">
          <img src={factory} alt="" loading="lazy" width={1600} height={900} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/70 via-primary/10 to-transparent" />
          <figcaption className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-primary-foreground max-w-md">
            <div className="text-sm md:text-base tracking-[0.25em] text-gold mb-3 font-bold">{v.imgBadge}</div>
            <p className="text-lg md:text-2xl font-display leading-relaxed">
              {v.imgText}
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-7">
        {v.features.map((f, index) => {
          const Icon = icons[index];
          return (
            <div
              key={f.title}
              className="group relative bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-8 w-px h-12 bg-gradient-to-b from-gold-deep to-transparent" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-secondary text-gold-deep group-hover:bg-primary group-hover:text-gold transition-colors">
                {Icon && <Icon size={22} strokeWidth={1.5} />}
              </div>
              <h2 className="text-xl font-bold text-primary mb-3">{f.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
            </div>
          );
        })}
      </section>

      {/* Final image banner */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <figure className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3]">
            <img src={sewing} alt="" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
          </figure>
          <div>
            <div className="text-gold-deep text-sm md:text-base tracking-[0.25em] mb-4 font-bold">{v.localKnowHowBadge}</div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary leading-snug mb-5">
              {v.localKnowHowTitle}
            </h3>
            <p className="text-muted-foreground leading-loose">
              {v.localKnowHowDesc}
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}