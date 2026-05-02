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
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="text-gold-deep text-[11px] tracking-[0.3em] mb-5">رؤية استراتيجية</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
          Horizon 2027
        </h1>
        <p className="mt-8 text-muted-foreground leading-loose">
          مشروع Mostaganem Horizon 2027 يجسّد رؤية صناعية متكاملة لإنتاج الملابس الجاهزة، يقوم على شراكة استثمارية بين الجزائر والولايات المتحدة وفق عقيدة <span className="text-primary font-bold">USA-AFR GROWTH</span>.
        </p>
      </section>
      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>
      <section className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-x-12 gap-y-14">
        {pillars.map((p) => (
          <div key={p.title}>
            <p.icon size={28} className="text-gold-deep mb-5" strokeWidth={1.5} />
            <h2 className="text-xl font-bold text-primary mb-2">{p.title}</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
          </div>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}