import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground/80 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="" width={44} height={44} className="rounded-full ring-1 ring-gold/40" />
            <div>
              <div className="font-display font-bold text-primary-foreground">Mostaganem Horizon 2027</div>
              <div className="text-xs text-gold tracking-wider">USA · AFR GROWTH</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            مركب صناعي متكامل لإنتاج الملابس الجاهزة عالية الجودة، بشراكة استراتيجية بين الجزائر والولايات المتحدة الأمريكية.
          </p>
        </div>
        <div>
          <h4 className="text-gold font-bold mb-3">المقر</h4>
          <p className="text-sm">مستغانم — الجزائر</p>
          <p className="text-sm mt-1">contact@mostaganem-horizon.dz</p>
        </div>
        <div>
          <h4 className="text-gold font-bold mb-3">الشراكة</h4>
          <p className="text-sm">عقيدة USA-AFR GROWTH</p>
          <p className="text-sm mt-1">B2B · شراكات وتعاقدات كبرى</p>
        </div>
      </div>
      <div className="border-t border-gold/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Mostaganem Horizon 2027. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}