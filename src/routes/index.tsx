import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowLeft, Factory, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import factory from "@/assets/factory.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mostaganem Horizon 2027 — الرئيسية" },
      { name: "description", content: "مشروع إنتاج مشترك بين الجزائر والولايات المتحدة لتصنيع الملابس الجاهزة عالية الجودة، وفق عقيدة USA-AFR GROWTH." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.92 }} />
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs tracking-widest mb-8">
            <Sparkles size={14} /> USA · AFR GROWTH
          </div>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-tight">
            Mostaganem
            <span className="block bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
              Horizon 2027
            </span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
            مركب صناعي متكامل لإنتاج الملابس الجاهزة عالية الجودة، ثمرة شراكة استراتيجية بين الجزائر والولايات المتحدة الأمريكية.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/vision" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-bold text-primary shadow-[var(--shadow-gold)] transition-transform hover:scale-105" style={{ background: "var(--gradient-gold)" }}>
              الرؤية الاستراتيجية <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link to="/contact" className="px-7 py-3.5 rounded-md font-bold text-primary-foreground border border-gold/40 hover:bg-gold/10 transition-colors">
              تواصل للشراكة
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] border border-border">
          {[
            { k: "2027", v: "أفق التشغيل الكامل" },
            { k: "4", v: "أسواق مستهدفة" },
            { k: "100%", v: "استقلالية الطاقة" },
            { k: "B2B", v: "شراكات مؤسساتية" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-black text-primary">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-gold text-sm tracking-widest mb-3">ركائز المشروع</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">صناعة جزائرية بمعايير عالمية</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Factory, title: "وحدات إنتاج متكاملة", desc: "خطوط تصنيع حديثة للملابس الجاهزة بمواصفات دقيقة وجودة عالية." },
            { icon: Globe2, title: "أسواق دولية", desc: "تموقع استراتيجي يخدم الجزائر، إفريقيا، أوروبا والشرق الأوسط." },
            { icon: ShieldCheck, title: "استقلالية الطاقة", desc: "بنية تحتية ذكية مع التزام بالابتكار الصناعي والاستدامة." },
          ].map((p) => (
            <div key={p.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-primary" style={{ background: "var(--gradient-gold)" }}>
                <p.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctrine banner */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <img src={factory} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" width={1600} height={900} loading="lazy" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="text-gold text-sm tracking-[0.3em] mb-4">— عقيدة المشروع —</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-snug">
            “نموذج إنتاج مشترك جزائري–أمريكي يفتح أبواب القارة الإفريقية على الأسواق العالمية.”
          </h2>
          <div className="mt-6 text-gold tracking-widest font-bold">USA · AFR GROWTH</div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
