import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Target, Lightbulb, Handshake, Zap } from "lucide-react";
import logo from "@/assets/logo.png";
import factory from "@/assets/factory.jpg";
import sewing from "@/assets/sewing.jpg";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "الرؤية الاستراتيجية — Mostaganem Horizon 2027" },
      { name: "description", content: "رؤية Mostaganem Horizon 2027: شراكة جزائرية–أمريكية وفق عقيدة USA-AFR GROWTH للتصنيع والتصدير." },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  const pillars = [
    { icon: Target, title: "هدف 2027", desc: "بلوغ مرحلة التشغيل الكامل للمركب الصناعي وتصدير الملابس الجاهزة إلى الأسواق المستهدفة." },
    { icon: Handshake, title: "الشراكة الاستراتيجية", desc: "نموذج إنتاج مشترك بين الجزائر والولايات المتحدة الأمريكية وفق عقيدة USA-AFR GROWTH." },
    { icon: Lightbulb, title: "الابتكار الصناعي", desc: "اعتماد أحدث تقنيات النسيج والخياطة الرقمية مع تطوير الكفاءات الوطنية." },
    { icon: Zap, title: "استقلالية الطاقة", desc: "بنية تحتية ذكية تضمن استدامة الإنتاج وتنافسية الكلفة على المستوى الدولي." },
  ];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <img src={logo} alt="" width={64} height={64} className="mx-auto mb-8 opacity-95" />
        <div className="text-gold-deep text-[11px] tracking-[0.3em] mb-5">رؤية استراتيجية</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
          Horizon 2027
        </h1>
        <p className="mt-8 text-muted-foreground leading-loose">
          مشروع Mostaganem Horizon 2027 يجسّد رؤية صناعية متكاملة لإنتاج الملابس الجاهزة، يقوم على شراكة استثمارية بين الجزائر والولايات المتحدة وفق عقيدة <span className="text-primary font-bold">USA-AFR GROWTH</span>.
        </p>
      </section>

      {/* Wide image strip */}
      <section className="max-w-6xl mx-auto px-6">
        <figure className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] aspect-[21/9]">
          <img src={factory} alt="" loading="lazy" width={1600} height={900} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/70 via-primary/10 to-transparent" />
          <figcaption className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-primary-foreground max-w-md">
            <div className="text-[11px] tracking-[0.3em] text-gold mb-3">USA · AFR GROWTH</div>
            <p className="text-lg md:text-2xl font-display leading-relaxed">
              تكامل اقتصادي بين القارتين عبر صناعة الملابس الجاهزة.
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-7">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="group relative bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-8 w-px h-12 bg-gradient-to-b from-gold-deep to-transparent" />
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-secondary text-gold-deep group-hover:bg-primary group-hover:text-gold transition-colors">
              <p.icon size={22} strokeWidth={1.5} />
            </div>
            <h2 className="text-xl font-bold text-primary mb-3">{p.title}</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
          </div>
        ))}
      </section>

      {/* Final image banner */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <figure className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3]">
            <img src={sewing} alt="" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
          </figure>
          <div>
            <div className="text-gold-deep text-[11px] tracking-[0.3em] mb-4">صناعة بمعرفة محلية</div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary leading-snug mb-5">
              من الفكرة إلى التصدير، كل قطعة تُحاك بدقة.
            </h3>
            <p className="text-muted-foreground leading-loose">
              نجمع بين الكفاءة الجزائرية والتقنيات الأمريكية لإنتاج ملابس جاهزة بمواصفات عالمية، تخدم أسواق أربع قارات انطلاقاً من مستغانم.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}