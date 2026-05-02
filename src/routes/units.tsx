import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import factory from "@/assets/factory.jpg";

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
  { n: "01", title: "وحدة القص الرقمي", desc: "أنظمة CAD/CAM لقص دقيق للأقمشة بأقل نسبة هدر." },
  { n: "02", title: "وحدة الخياطة الصناعية", desc: "خطوط خياطة آلية بطاقة إنتاج عالية ومرونة في الموديلات." },
  { n: "03", title: "وحدة التشطيب والكي", desc: "معالجات نهائية للأقمشة لضمان مظهر احترافي وجودة ملمس." },
  { n: "04", title: "مراقبة الجودة", desc: "بروتوكولات صارمة وفق المعايير الدولية ISO قبل التعبئة." },
  { n: "05", title: "التعبئة والتغليف", desc: "تجهيز الشحنات وفق متطلبات كل سوق تصديري." },
  { n: "06", title: "اللوجستيك والتصدير", desc: "ربط مباشر بالموانئ والمنافذ الدولية لتسريع التسليم." },
];

function UnitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative overflow-hidden">
        <img src={factory} alt="" className="absolute inset-0 w-full h-full object-cover" width={1600} height={900} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.9 }} />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-primary-foreground">
            وحدات إنتاج <span className="text-gold">الملابس الجاهزة</span>
          </h1>
          <p className="mt-6 text-primary-foreground/85 text-lg max-w-3xl mx-auto leading-relaxed">
            مركب صناعي متكامل يضم سلسلة وحدات إنتاج متخصصة، من القص حتى التصدير، بمواصفات عالمية واستقلالية كاملة في الطاقة.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {units.map((u) => (
          <article key={u.n} className="relative p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
            <div className="absolute top-6 left-6 text-5xl font-display font-black text-gold/20">{u.n}</div>
            <h3 className="text-xl font-bold text-primary mb-3 mt-8">{u.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{u.desc}</p>
          </article>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}