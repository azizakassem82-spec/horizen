import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import factory from "@/assets/factory.jpg";
import sewing from "@/assets/sewing.jpg";
import textiles from "@/assets/textiles.jpg";
import garments from "@/assets/garments.jpg";
import exportImg from "@/assets/export.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/units")({
  head: () => ({
    meta: [
      { title: "وحدات إنتاج الملابس الجاهزة — Mostaganem Horizon 2027" },
      { name: "description", content: "وحدات تصنيع الملابس الجاهزة: قص، خياطة، تشطيب، مراقبة الجودة وتعبئة بمواصفات عالمية." },
    ],
  }),
  component: UnitsPage,
});

const units = [
  { n: "01", img: textiles, title: "وحدة القص الرقمي", desc: "أنظمة CAD/CAM لقص دقيق للأقمشة بأقل نسبة هدر." },
  { n: "02", img: sewing, title: "وحدة الخياطة الصناعية", desc: "خطوط خياطة آلية بطاقة إنتاج عالية ومرونة في الموديلات." },
  { n: "03", img: garments, title: "وحدة التشطيب والكي", desc: "معالجات نهائية للأقمشة لضمان مظهر احترافي وجودة ملمس." },
  { n: "04", img: factory, title: "مراقبة الجودة", desc: "بروتوكولات صارمة وفق المعايير الدولية ISO قبل التعبئة." },
  { n: "05", img: garments, title: "التعبئة والتغليف", desc: "تجهيز الشحنات وفق متطلبات كل سوق تصديري." },
  { n: "06", img: exportImg, title: "اللوجستيك والتصدير", desc: "ربط مباشر بالموانئ والمنافذ الدولية لتسريع التسليم." },
];

function UnitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <img src={logo} alt="" width={64} height={64} className="mx-auto mb-8 opacity-95" />
        <div className="text-gold-deep text-[11px] tracking-[0.3em] mb-5">وحدات الإنتاج</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">الملابس الجاهزة</h1>
        <p className="mt-8 text-muted-foreground leading-loose">
          سلسلة وحدات إنتاج متخصصة من القص حتى التصدير، بمواصفات عالمية واستقلالية كاملة في الطاقة.
        </p>
      </section>
      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {units.map((u) => (
          <article
            key={u.n}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-1.5"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={u.img} alt="" loading="lazy" width={1200} height={900} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[11px] font-display font-bold text-gold-deep tracking-widest shadow-[var(--shadow-soft)]">
                {u.n}
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-lg font-bold text-primary mb-2">{u.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{u.desc}</p>
            </div>
            <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-gold-deep scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
          </article>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}