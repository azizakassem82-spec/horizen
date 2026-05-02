import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Target, Lightbulb, Handshake, Zap } from "lucide-react";

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
      <section className="relative" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="text-gold text-sm tracking-widest mb-4">RÔLE STRATÉGIQUE</div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-primary-foreground">
            الرؤية الاستراتيجية <span className="block text-gold mt-2">Horizon 2027</span>
          </h1>
          <p className="mt-6 text-primary-foreground/85 text-lg max-w-3xl mx-auto leading-relaxed">
            مشروع Mostaganem Horizon 2027 يجسّد رؤية صناعية متكاملة لإنتاج الملابس الجاهزة، يقوم على شراكة استثمارية بين الجزائر والولايات المتحدة الأمريكية، وفق عقيدة <span className="text-gold font-bold">USA-AFR GROWTH</span> الهادفة إلى تعزيز التكامل الاقتصادي بين القارتين.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
        {pillars.map((p) => (
          <div key={p.title} className="p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all hover:shadow-[var(--shadow-elegant)]">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-primary" style={{ background: "var(--gradient-gold)" }}>
              <p.icon size={26} />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-3">{p.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}