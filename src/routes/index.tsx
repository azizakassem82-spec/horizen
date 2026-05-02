import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowLeft, Factory, Globe2, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";

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

      {/* Hero — minimal, lots of whitespace */}
      <section className="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-20 md:pb-28 text-center">
        <img src={logo} alt="" width={88} height={88} className="mx-auto mb-10 opacity-95" />
        <div className="text-gold-deep text-[11px] tracking-[0.35em] mb-6">USA · AFR GROWTH</div>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-primary leading-[1.15]">
          Mostaganem
          <span className="block text-gold-deep mt-2">Horizon 2027</span>
        </h1>
        <p className="mt-10 max-w-xl mx-auto text-base md:text-lg text-muted-foreground leading-loose">
          مركب صناعي متكامل لإنتاج الملابس الجاهزة، بشراكة استراتيجية بين الجزائر والولايات المتحدة الأمريكية.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link to="/vision" className="group inline-flex items-center gap-2 px-7 py-3 rounded-md font-bold bg-primary text-primary-foreground hover:bg-primary-deep transition-colors">
            الرؤية الاستراتيجية <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          </Link>
          <Link to="/contact" className="px-7 py-3 rounded-md font-bold text-primary border border-border hover:border-primary transition-colors">
            تواصل للشراكة
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* Pillars — clean, no cards */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-20">
          <div className="text-gold-deep text-[11px] tracking-[0.3em] mb-4">ركائز المشروع</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">صناعة جزائرية بمعايير عالمية</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {[
            { icon: Factory, title: "إنتاج متكامل", desc: "خطوط تصنيع حديثة بمواصفات دقيقة وجودة عالية." },
            { icon: Globe2, title: "أسواق دولية", desc: "الجزائر، إفريقيا، أوروبا والشرق الأوسط." },
            { icon: ShieldCheck, title: "استقلالية الطاقة", desc: "بنية تحتية ذكية والتزام بالابتكار الصناعي." },
          ].map((p) => (
            <div key={p.title} className="text-center md:text-right">
              <p.icon size={28} className="text-gold-deep mx-auto md:mx-0 mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quiet figures */}
      <section className="max-w-5xl mx-auto px-6 pb-24 md:pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-y border-border py-14">
          {[
            { k: "2027", v: "أفق التشغيل" },
            { k: "4", v: "أسواق مستهدفة" },
            { k: "100%", v: "استقلالية الطاقة" },
            { k: "B2B", v: "شراكات مؤسساتية" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">{s.k}</div>
              <div className="text-xs text-muted-foreground tracking-wider mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctrine — measured warm surface */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <div className="w-10 h-px bg-gold-deep mx-auto mb-8" />
          <div className="text-gold-deep text-[11px] tracking-[0.3em] mb-6">عقيدة المشروع</div>
          <p className="text-2xl md:text-3xl font-display text-primary leading-relaxed">
            نموذج إنتاج مشترك جزائري–أمريكي يفتح أبواب القارة الإفريقية على الأسواق العالمية.
          </p>
          <div className="mt-10 text-[11px] tracking-[0.35em] text-gold-deep">USA · AFR GROWTH</div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
