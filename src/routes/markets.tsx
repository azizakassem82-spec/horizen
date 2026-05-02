import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import logo from "@/assets/logo.png";
import algeria from "@/assets/algeria.jpg";
import africa from "@/assets/africa.jpg";
import europe from "@/assets/europe.jpg";
import middleEast from "@/assets/middle-east.jpg";

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
  { flag: "🇩🇿", img: algeria, title: "الجزائر", tag: "السوق المحلي", desc: "تلبية الطلب الوطني عبر تموين كبرى المؤسسات والمنظومات الرسمية." },
  { flag: "🌍", img: africa, title: "أفريقيا", tag: "ZLECAf", desc: "بوابة المشروع نحو القارة الإفريقية ضمن منطقة التبادل الحر القارية." },
  { flag: "🇪🇺", img: europe, title: "أوروبا", tag: "الاتحاد الأوروبي", desc: "تصدير الملابس الجاهزة إلى أسواق الاتحاد الأوروبي بمعايير الجودة الأوروبية." },
  { flag: "🕌", img: middleEast, title: "الشرق الأوسط", tag: "الخليج والمشرق", desc: "شراكات تجارية ضمن سلاسل التوريد الإقليمية في الخليج والمشرق العربي." },
];

function MarketsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <img src={logo} alt="" width={64} height={64} className="mx-auto mb-8 opacity-95" />
        <div className="text-gold-deep text-[11px] tracking-[0.3em] mb-5">الأسواق</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">المستهدفة</h1>
        <p className="mt-8 text-muted-foreground leading-loose">
          موقع مستغانم الاستراتيجي يجعل المشروع نقطة انطلاق نحو أربعة أسواق رئيسية، بدعم من عقيدة USA-AFR GROWTH.
        </p>
      </section>
      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-7">
        {markets.map((m, i) => (
          <article
            key={m.title}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-2"
            style={{ transform: i % 2 === 1 ? "translateY(24px)" : undefined }}
          >
            <div className="relative h-64 overflow-hidden">
              <img src={m.img} alt="" loading="lazy" width={1200} height={800} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute top-5 right-5 text-4xl drop-shadow-lg">{m.flag}</div>
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] tracking-widest text-gold-deep font-bold">
                {m.tag}
              </div>
              <div className="absolute bottom-5 right-6 text-primary-foreground">
                <h2 className="text-3xl font-display font-bold drop-shadow">{m.title}</h2>
              </div>
            </div>
            <div className="p-7">
              <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
            <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-gold-deep scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
          </article>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}