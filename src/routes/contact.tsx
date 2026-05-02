import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MapPin, Building2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "اتصل بنا — Mostaganem Horizon 2027" },
      { name: "description", content: "تواصل مع فريق Mostaganem Horizon 2027 لشراكات وتعاقدات B2B في صناعة الملابس الجاهزة." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-primary-foreground">
            اتصل <span className="text-gold">بنا</span>
          </h1>
          <p className="mt-6 text-primary-foreground/85 text-lg">للشراكات والتعاقدات الكبرى B2B</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-6">
          {[
            { icon: MapPin, title: "المقر", v: "مستغانم — الجزائر" },
            { icon: Mail, title: "البريد الإلكتروني", v: "contact@mostaganem-horizon.dz" },
            { icon: Building2, title: "نوع التعاون", v: "شراكات مؤسساتية · تعاقدات تصدير" },
          ].map((c) => (
            <div key={c.title} className="flex gap-4 p-5 rounded-xl bg-card border border-border">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center text-primary shrink-0" style={{ background: "var(--gradient-gold)" }}>
                <c.icon size={20} />
              </div>
              <div>
                <div className="font-bold text-primary">{c.title}</div>
                <div className="text-muted-foreground text-sm mt-1">{c.v}</div>
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-elegant)] space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-bold text-primary block mb-2">الاسم الكامل</label>
              <input required className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
            </div>
            <div>
              <label className="text-sm font-bold text-primary block mb-2">المؤسسة</label>
              <input className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
            </div>
          </div>
          <div>
            <label className="text-sm font-bold text-primary block mb-2">البريد الإلكتروني</label>
            <input type="email" required className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
          </div>
          <div>
            <label className="text-sm font-bold text-primary block mb-2">الرسالة</label>
            <textarea required rows={5} className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none" />
          </div>
          <button type="submit" className="w-full py-3.5 rounded-md font-bold text-primary shadow-[var(--shadow-gold)] hover:scale-[1.01] transition-transform" style={{ background: "var(--gradient-gold)" }}>
            {sent ? "✓ تم الإرسال — سنعاود التواصل معكم" : "إرسال الطلب"}
          </button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}