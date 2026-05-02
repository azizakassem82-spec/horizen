import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowLeft, Factory, Globe2, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
import garments from "@/assets/garments.jpg";
import sewing from "@/assets/sewing.jpg";
import textiles from "@/assets/textiles.jpg";
import exportImg from "@/assets/export.jpg";
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

      {/* Pillars — image cards with elegant shadows */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16 md:mb-20">
          <div className="text-gold-deep text-[11px] tracking-[0.3em] mb-4">ركائز المشروع</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">صناعة جزائرية بمعايير عالمية</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {[
            { icon: Factory, img: sewing, title: "إنتاج متكامل", desc: "خطوط تصنيع حديثة بمواصفات دقيقة وجودة عالية." },
            { icon: Globe2, img: exportImg, title: "أسواق دولية", desc: "الجزائر، إفريقيا، أوروبا والشرق الأوسط." },
            { icon: ShieldCheck, img: textiles, title: "استقلالية الطاقة", desc: "بنية تحتية ذكية والتزام بالابتكار الصناعي." },
          ].map((p, i) => (
            <article
              key={p.title}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-1.5"
              style={{ transform: i === 1 ? "translateY(-8px)" : undefined }}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt="" loading="lazy" width={1200} height={900} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/95 backdrop-blur flex items-center justify-center shadow-[var(--shadow-soft)]">
                  <p.icon size={18} className="text-gold-deep" strokeWidth={1.8} />
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-lg font-bold text-primary mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
              </div>
              {/* gold underline accent on hover */}
              <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-gold-deep scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
            </article>
          ))}
        </div>
      </section>

      {/* Showcase strip — asymmetric image mosaic */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-5 md:gap-6">
            <figure className="md:col-span-7 md:row-span-2 relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3] md:aspect-auto">
              <img src={factory} alt="مصنع الملابس الجاهزة" loading="lazy" width={1600} height={900} className="w-full h-full object-cover" />
              <figcaption className="absolute bottom-0 right-0 left-0 p-6 bg-gradient-to-t from-primary/90 to-transparent text-primary-foreground">
                <div className="text-[10px] tracking-[0.3em] text-gold mb-2">المركب الصناعي</div>
                <div className="font-display font-bold text-xl">خطوط إنتاج بمعايير دولية</div>
              </figcaption>
            </figure>
            <figure className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3]">
              <img src={garments} alt="ملابس جاهزة عالية الجودة" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
            </figure>
            <figure className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3]">
              <img src={textiles} alt="أقمشة عالية الجودة" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
            </figure>
          </div>
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
