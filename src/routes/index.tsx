import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowLeft, ArrowRight, Factory, Globe2, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mostaganem Horizon 2027 — الرئيسية" },
      { name: "description", content: "مشروع إنتاج مشترك بين الجزائر والولايات المتحدة لتصنيع الملابس الجاهزة عالية الجودة، وفق عقيدة USA-AFR GROWTH." },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function Index() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(135deg,rgba(116,92,44,0.12),transparent_50%)] pointer-events-none" />
        <motion.div 
          className="max-w-5xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/dng-logo.png"
            onError={(e) => (e.currentTarget.src = logo)}
            alt="DNG+ Eagle Logo"
            className="mx-auto mb-8 drop-shadow-2xl h-36 md:h-48 object-contain"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <div className="text-gold text-sm md:text-base tracking-[0.25em] mb-4 font-bold">
            {t.hero.badge}
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.15] mb-6 text-white">
            {t.hero.title1}
            <span className="block text-gold mt-2">{t.hero.title2}</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-xl text-white/80 leading-relaxed font-body">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/vision"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold bg-gold text-primary-deep hover:bg-white transition-colors shadow-[var(--shadow-gold)] hover:scale-105"
            >
              {t.hero.btnVision}
              <ArrowIcon size={18} className="transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-md font-bold text-white border border-white/30 hover:border-gold transition-colors hover:bg-white/5"
            >
              {t.hero.btnContact}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="text-gold-deep text-sm md:text-base tracking-[0.25em] mb-4 font-bold">
            {t.pillars.sectionBadge}
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
            {t.pillars.sectionTitle}
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {[
            { icon: Factory, img: "/workers.jpg" },
            { icon: Globe2, img: "/factory-exterior.jpg" },
            { icon: ShieldCheck, img: "/solar.jpg" },
          ].map((p, i) => {
            const item = t.pillars.items[i];
            return (
              <motion.div key={item.title} variants={fadeUp}>
                <article
                  className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={p.img}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/95 backdrop-blur flex items-center justify-center shadow-[var(--shadow-soft)] group-hover:bg-gold-deep transition-colors">
                      <p.icon size={20} className="text-gold-deep group-hover:text-primary transition-colors" strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 right-0 left-0 h-1 bg-gold-deep scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
                </article>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Facilities showcase */}
      <section className="bg-surface border-y border-border py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              {t.facilities.title}
            </h2>
            <div className="w-20 h-1.5 bg-gold-deep mx-auto mt-6 rounded-full" />
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-12 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.figure variants={fadeUp} className="md:col-span-8 md:row-span-2 relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3] md:aspect-auto">
              <img src="/factory-exterior.jpg" alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
              <figcaption className="absolute bottom-0 right-0 left-0 p-8 bg-gradient-to-t from-primary via-primary/80 to-transparent text-primary-foreground">
                <div className="text-sm md:text-base tracking-[0.25em] text-gold mb-3 font-bold">{t.facilities.factory.badge}</div>
                <div className="font-display font-bold text-2xl md:text-3xl">{t.facilities.factory.caption}</div>
              </figcaption>
            </motion.figure>
            
            <motion.figure variants={fadeUp} className="md:col-span-4 relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3]">
              <img src="/office.jpg" alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
              <figcaption className="absolute bottom-0 right-0 left-0 p-6 bg-gradient-to-t from-primary/95 to-transparent text-primary-foreground">
                <div className="font-display font-bold text-lg">{t.facilities.office}</div>
              </figcaption>
            </motion.figure>
            
            <motion.figure variants={fadeUp} className="md:col-span-4 relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3]">
              <img src="/solar.jpg" alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
              <figcaption className="absolute bottom-0 right-0 left-0 p-6 bg-gradient-to-t from-primary/95 to-transparent text-primary-foreground">
                <div className="font-display font-bold text-lg">{t.facilities.solar}</div>
              </figcaption>
            </motion.figure>
            
            <motion.figure variants={fadeUp} className="md:col-span-12 relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] h-64 md:h-96">
              <img src="/workers.jpg" alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
              <figcaption className="absolute bottom-0 right-0 left-0 p-8 bg-gradient-to-t from-primary/95 to-transparent text-primary-foreground">
                <div className="font-display font-bold text-2xl md:text-4xl">{t.facilities.workers}</div>
              </figcaption>
            </motion.figure>
          </motion.div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 overflow-hidden">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="order-2 md:order-1 relative">
            <div className="absolute -right-6 -top-6 text-9xl text-primary/5 font-serif leading-none select-none">"</div>
            <div className="text-gold-deep text-sm md:text-base tracking-[0.25em] mb-6 font-bold relative z-10">
              {t.ceo.badge}
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8 relative z-10 leading-tight">
              {t.ceo.title}
            </h2>
            <div className="w-16 h-1.5 bg-gold-deep mb-10 rounded-full" />
            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed mb-12 italic relative z-10 font-body">
              {t.ceo.quote}
            </p>
            <div className="border-s-4 border-gold-deep ps-6 py-2">
              <div className="font-display font-bold text-primary text-2xl md:text-3xl mb-1">{t.ceo.name}</div>
              <div className="text-gold-deep text-sm md:text-base tracking-[0.2em] mb-2 font-medium">{t.ceo.role}</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">{t.ceo.company}</div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-lift)] group">
              <div className="absolute inset-0 bg-gold/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img
                src="/ceo.jpg"
                alt="Mr. Ad Dennoune - CEO"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-20">
        <motion.div 
          className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {t.stats.map((s) => (
            <motion.div key={s.v} variants={fadeUp} className="text-center group">
              <div className="text-4xl md:text-6xl font-display font-black text-white group-hover:text-gold transition-colors duration-300 drop-shadow-md">{s.k}</div>
              <div className="text-sm md:text-base text-primary-foreground/80 tracking-widest mt-4 font-bold">{s.v}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Doctrine */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-1 bg-gold-deep mx-auto mb-10 rounded-full" />
            <div className="text-gold-deep text-sm md:text-base tracking-[0.25em] mb-8 font-bold">{t.doctrine.badge}</div>
            <p className="text-3xl md:text-5xl font-display text-primary leading-tight font-bold">
              {t.doctrine.quote}
            </p>
            <div className="mt-14 inline-block px-8 py-3 bg-primary text-gold text-sm md:text-base tracking-[0.3em] rounded-full font-bold shadow-lg">
              USA · AFR GROWTH
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
