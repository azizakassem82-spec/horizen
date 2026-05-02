import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="" width={40} height={40} className="rounded-full" />
            <div>
              <div className="font-display font-bold text-primary text-sm">Mostaganem Horizon 2027</div>
              <div className="text-[10px] text-gold-deep tracking-[0.2em] mt-0.5">USA · AFR GROWTH</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            مركب صناعي متكامل لإنتاج الملابس الجاهزة، بشراكة استراتيجية بين الجزائر والولايات المتحدة.
          </p>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-3 text-sm">المقر</h4>
          <p className="text-sm text-muted-foreground">مستغانم — الجزائر</p>
          <p className="text-sm mt-1 text-muted-foreground">contact@mostaganem-horizon.dz</p>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-3 text-sm">الشراكة</h4>
          <p className="text-sm text-muted-foreground">عقيدة USA-AFR GROWTH</p>
          <p className="text-sm mt-1 text-muted-foreground">B2B · شراكات وتعاقدات كبرى</p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mostaganem Horizon 2027. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}