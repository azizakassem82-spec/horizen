import { useLanguage } from "@/lib/LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-primary text-primary-foreground mt-0">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src="/dng-logo.png" alt="DNG+" className="h-14 w-auto object-contain" />
            <div>
              <div className="font-display font-bold text-white text-sm leading-tight">
                Mostaganem Horizon 2027
              </div>
              <div className="text-[10px] text-gold tracking-[0.2em] mt-0.5">
                USA · AFR GROWTH
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/70">{f.description}</p>
        </div>

        {/* HQ */}
        <div>
          <h4 className="text-gold font-bold mb-4 text-sm tracking-widest uppercase">
            {f.hqTitle}
          </h4>
          <p className="text-sm text-white/80">{f.hqLine1}</p>
          <p className="text-sm mt-2 text-white/80">{f.hqLine2}</p>
          <p className="text-sm mt-2 text-white/60">contact@mostaganem-horizon.dz</p>
        </div>

        {/* Partnership */}
        <div>
          <h4 className="text-gold font-bold mb-4 text-sm tracking-widest uppercase">
            {f.partnerTitle}
          </h4>
          <p className="text-sm text-white/80">{f.partnerLine1}</p>
          <p className="text-sm mt-2 text-white/80">{f.partnerLine2}</p>
          <p className="text-sm mt-2 text-white/80">{f.partnerLine3}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Mostaganem Horizon 2027 · DNG+ SPA. {f.copyright}.
      </div>
    </footer>
  );
}