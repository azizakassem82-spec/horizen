// ============================================================
// Translations for Mostaganem Horizon 2027
// Languages: Arabic (ar) | French (fr) | English (en)
// ============================================================

export type Lang = "ar" | "fr" | "en";

export const translations = {
  ar: {
    dir: "rtl" as const,
    // Nav
    nav: {
      home: "الرئيسية",
      vision: "الرؤية الاستراتيجية",
      units: "وحدات الإنتاج",
      markets: "الأسواق المستهدفة",
      contact: "اتصل بنا",
    },
    // Hero
    hero: {
      badge: "USA · AFR GROWTH",
      title1: "Mostaganem",
      title2: "Horizon 2027",
      subtitle:
        "مركب صناعي متكامل لإنتاج الملابس الجاهزة، بشراكة استراتيجية بين الجزائر والولايات المتحدة الأمريكية.",
      btnVision: "الرؤية الاستراتيجية",
      btnContact: "تواصل للشراكة",
    },
    // Pillars
    pillars: {
      sectionBadge: "ركائز المشروع",
      sectionTitle: "صناعة جزائرية بمعايير عالمية",
      items: [
        { title: "إنتاج متكامل", desc: "خطوط تصنيع حديثة بمواصفات دقيقة وجودة عالية." },
        { title: "أسواق دولية", desc: "الجزائر، إفريقيا، أوروبا والشرق الأوسط." },
        { title: "استقلالية الطاقة", desc: "بنية تحتية ذكية والتزام بالابتكار الصناعي." },
      ],
    },
    // Facilities
    facilities: {
      title: "المنشآت والمرافق",
      factory: { badge: "DNG+ SPA", caption: "مصنع مستغانم للملابس الجاهزة" },
      office: "مكاتب الإدارة والاستقبال",
      solar: "وحدة استقلالية الطاقة",
      workers: "خطوط الإنتاج واللوجستيك",
    },
    // CEO
    ceo: {
      badge: "عقيدة المشروع",
      title: "رسالة المؤسس والمدير التنفيذي",
      quote:
        '"لقد صممنا مشروع Mostaganem Horizon 2027 ليكون أكثر من مجرد مصنع؛ إنه رؤية استراتيجية تجسد الشراكة القوية والواعدة بين الجزائر والولايات المتحدة الأمريكية وفق مبادئ USA-AFR GROWTH."',
      name: "Ad Dennoune",
      role: "CEO · Founder & Innovator",
      company: "DENNOUNE GROUP · DNG+ SPA",
    },
    // Stats
    stats: [
      { k: "2027", v: "أفق التشغيل" },
      { k: "4", v: "أسواق مستهدفة" },
      { k: "100%", v: "استقلالية الطاقة" },
      { k: "B2B", v: "شراكات مؤسساتية" },
    ],
    // Doctrine
    doctrine: {
      badge: "عقيدة المشروع",
      quote:
        "نموذج إنتاج مشترك جزائري–أمريكي يفتح أبواب القارة الإفريقية على الأسواق العالمية.",
    },
    // Footer
    footer: {
      description:
        "مركب صناعي متكامل لإنتاج الملابس الجاهزة، بشراكة استراتيجية بين الجزائر والولايات المتحدة الأمريكية.",
      hqTitle: "المقر",
      hqLine1: "مستغانم — الجزائر",
      hqLine2: "DNG+ SPA · Usine de Mostaganem",
      partnerTitle: "الشراكة",
      partnerLine1: "عقيدة USA-AFR GROWTH",
      partnerLine2: "B2B · شراكات وتعاقدات كبرى",
      partnerLine3: "الجزائر · إفريقيا · أوروبا · الشرق الأوسط",
      copyright: "جميع الحقوق محفوظة",
    },
    // Contact
    contact: {
      title: "اتصل",
      titleHighlight: "بنا",
      subtitle: "للشراكات والتعاقدات الكبرى B2B",
      hq: "المقر",
      hqVal: "مستغانم — الجزائر",
      email: "البريد الإلكتروني",
      emailVal: "contact@mostaganem-horizon.dz",
      cooperation: "نوع التعاون",
      cooperationVal: "شراكات مؤسساتية · تعاقدات تصدير",
      name: "الاسم الكامل",
      company: "المؤسسة",
      emailField: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال الطلب",
      sent: "✓ تم الإرسال — سنعاود التواصل معكم",
    },
  },

  fr: {
    dir: "ltr" as const,
    nav: {
      home: "Accueil",
      vision: "Vision Stratégique",
      units: "Unités de Production",
      markets: "Marchés Cibles",
      contact: "Contactez-nous",
    },
    hero: {
      badge: "USA · AFR GROWTH",
      title1: "Mostaganem",
      title2: "Horizon 2027",
      subtitle:
        "Un complexe industriel intégré de confection, dans le cadre d'un partenariat stratégique entre l'Algérie et les États-Unis d'Amérique.",
      btnVision: "Vision Stratégique",
      btnContact: "Partenariat",
    },
    pillars: {
      sectionBadge: "PILIERS DU PROJET",
      sectionTitle: "Industrie algérienne aux standards mondiaux",
      items: [
        { title: "Production Intégrée", desc: "Lignes de fabrication modernes avec des normes de précision et une haute qualité." },
        { title: "Marchés Internationaux", desc: "Algérie, Afrique, Europe et Moyen-Orient." },
        { title: "Autonomie Énergétique", desc: "Infrastructure intelligente et engagement envers l'innovation industrielle." },
      ],
    },
    facilities: {
      title: "Installations & Équipements",
      factory: { badge: "DNG+ SPA", caption: "Usine de Mostaganem — Confection" },
      office: "Direction & Accueil",
      solar: "Unité d'Autonomie Énergétique",
      workers: "Lignes de Production & Logistique",
    },
    ceo: {
      badge: "DOCTRINE DU PROJET",
      title: "Message du Fondateur & PDG",
      quote:
        '"Nous avons conçu Mostaganem Horizon 2027 pour être bien plus qu\'une usine ; c\'est une vision stratégique incarnant le puissant partenariat entre l\'Algérie et les États-Unis selon les principes de l\'USA-AFR GROWTH."',
      name: "Ad Dennoune",
      role: "PDG · Fondateur & Innovateur",
      company: "DENNOUNE GROUP · DNG+ SPA",
    },
    stats: [
      { k: "2027", v: "Horizon opérationnel" },
      { k: "4", v: "Marchés ciblés" },
      { k: "100%", v: "Autonomie énergétique" },
      { k: "B2B", v: "Partenariats institutionnels" },
    ],
    doctrine: {
      badge: "DOCTRINE",
      quote:
        "Un modèle de co-production algéro-américain ouvrant les portes du continent africain sur les marchés mondiaux.",
    },
    footer: {
      description:
        "Complexe industriel intégré de confection, partenariat stratégique Algérie–États-Unis.",
      hqTitle: "Siège",
      hqLine1: "Mostaganem — Algérie",
      hqLine2: "DNG+ SPA · Usine de Mostaganem",
      partnerTitle: "Partenariat",
      partnerLine1: "Doctrine USA-AFR GROWTH",
      partnerLine2: "B2B · Grands contrats & partenariats",
      partnerLine3: "Algérie · Afrique · Europe · Moyen-Orient",
      copyright: "Tous droits réservés",
    },
    contact: {
      title: "Contactez-",
      titleHighlight: "nous",
      subtitle: "Partenariats & Grands contrats B2B",
      hq: "Siège",
      hqVal: "Mostaganem — Algérie",
      email: "Email",
      emailVal: "contact@mostaganem-horizon.dz",
      cooperation: "Type de coopération",
      cooperationVal: "Partenariats institutionnels · Contrats export",
      name: "Nom complet",
      company: "Entreprise",
      emailField: "Email",
      message: "Message",
      send: "Envoyer la demande",
      sent: "✓ Envoyé — Nous vous contacterons bientôt",
    },
  },

  en: {
    dir: "ltr" as const,
    nav: {
      home: "Home",
      vision: "Strategic Vision",
      units: "Production Units",
      markets: "Target Markets",
      contact: "Contact Us",
    },
    hero: {
      badge: "USA · AFR GROWTH",
      title1: "Mostaganem",
      title2: "Horizon 2027",
      subtitle:
        "An integrated industrial complex for garment manufacturing, built on a strategic partnership between Algeria and the United States of America.",
      btnVision: "Strategic Vision",
      btnContact: "Partnership Inquiry",
    },
    pillars: {
      sectionBadge: "PROJECT PILLARS",
      sectionTitle: "Algerian Industry to World Standards",
      items: [
        { title: "Integrated Production", desc: "Modern manufacturing lines with precision specifications and high quality." },
        { title: "International Markets", desc: "Algeria, Africa, Europe and the Middle East." },
        { title: "Energy Independence", desc: "Smart infrastructure and commitment to industrial innovation." },
      ],
    },
    facilities: {
      title: "Facilities & Infrastructure",
      factory: { badge: "DNG+ SPA", caption: "Mostaganem Garment Factory" },
      office: "Management & Reception Office",
      solar: "Energy Autonomy Unit",
      workers: "Production Lines & Logistics",
    },
    ceo: {
      badge: "PROJECT DOCTRINE",
      title: "Message from the Founder & CEO",
      quote:
        '"We designed Mostaganem Horizon 2027 to be far more than a factory — it is a strategic vision embodying the powerful partnership between Algeria and the United States under the principles of USA-AFR GROWTH."',
      name: "Ad Dennoune",
      role: "CEO · Founder & Innovator",
      company: "DENNOUNE GROUP · DNG+ SPA",
    },
    stats: [
      { k: "2027", v: "Operational Horizon" },
      { k: "4", v: "Target Markets" },
      { k: "100%", v: "Energy Independence" },
      { k: "B2B", v: "Institutional Partnerships" },
    ],
    doctrine: {
      badge: "DOCTRINE",
      quote:
        "A joint Algerian-American production model opening the doors of the African continent to global markets.",
    },
    footer: {
      description:
        "Integrated garment manufacturing complex — strategic partnership between Algeria and the United States.",
      hqTitle: "Headquarters",
      hqLine1: "Mostaganem — Algeria",
      hqLine2: "DNG+ SPA · Usine de Mostaganem",
      partnerTitle: "Partnership",
      partnerLine1: "USA-AFR GROWTH Doctrine",
      partnerLine2: "B2B · Major contracts & partnerships",
      partnerLine3: "Algeria · Africa · Europe · Middle East",
      copyright: "All rights reserved",
    },
    contact: {
      title: "Contact",
      titleHighlight: "Us",
      subtitle: "B2B Partnerships & Major Contracts",
      hq: "Headquarters",
      hqVal: "Mostaganem — Algeria",
      email: "Email",
      emailVal: "contact@mostaganem-horizon.dz",
      cooperation: "Type of Cooperation",
      cooperationVal: "Institutional partnerships · Export contracts",
      name: "Full Name",
      company: "Company",
      emailField: "Email",
      message: "Message",
      send: "Send Request",
      sent: "✓ Sent — We will get back to you shortly",
    },
  },
} as const;

export type Translations = typeof translations.ar;
