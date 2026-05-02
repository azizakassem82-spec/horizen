import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/markets")({
  head: () => ({
    meta: [
      { title: "الأسواق المستهدفة — Mostaganem Horizon 2027" },
      { name: "description", content: "الأسواق المستهدفة: الجزائر، أفريقيا، أوروبا والشرق الأوسط — تموقع استراتيجي لتصدير الملابس الجاهزة." },
    ],
  }),
  component: MarketsPage,
});

const markets = [
  { flag: "🇩🇿", title: "الجزائر", desc: "السوق المحلي: تلبية الطلب الوطني عبر تموين كبرى المؤسسات والمنظومات الرسمية." },
  { flag: "🌍", title: "أفريقيا", desc: "بوابة المشروع نحو القارة الإفريقية ضمن منطقة التبادل الحر القارية ZLECAf." },
  { flag: "🇪🇺", title: "أوروبا", desc: "تصدير الملابس الجاهزة إلى أسواق الاتحاد الأوروبي بمعايير الجودة الأوروبية." },
  { flag: "🕌", title: "الشرق الأوسط", desc: "شراكات تجارية مع دول الخليج والمشرق العربي ضمن سلاسل التوريد الإقليمية." },
];

function MarketsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-primary-foreground">
            الأسواق <span className="text-gold">المستهدفة</span>
          </h1>
          <p className="mt-6 text-primary-foreground/85 text-lg max-w-3xl mx-auto leading-relaxed">
            موقع مستغانم الاستراتيجي يجعل المشروع نقطة انطلاق نحو أربعة أسواق رئيسية، بدعم من عقيدة USA-AFR GROWTH.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
        {markets.map((m) => (
          <div key={m.title} className="p-10 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all hover:shadow-[var(--shadow-elegant)]">
            <div className="text-6xl mb-4">{m.flag}</div>
            <h2 className="text-3xl font-display font-bold text-primary mb-3">{m.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}