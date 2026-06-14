"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useParams } from "next/navigation";
import { ArrowRight, Sparkle } from "lucide-react";
import Navbar from "./components/Navbar";
import ScrollButtons from "./components/ScrollButtons";
import CursorGlow from "./components/CursorGlow";
import FloatingContact from "./components/FloatingContact";
import PageLoader from "./components/PageLoader";

const smoothTransition = {
  duration: 1.45,
  ease: [0.22, 1, 0.36, 1],
};

const sectionAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.12 },
  transition: {
    duration: 1.1,
    ease: [0.22, 1, 0.36, 1],
  },
};

const content = {
  tr: {
    badge: "Web Tasarım • Yazılım • Yapay Zeka Destekli Çözümler",
    heroTitle1: "Dijital projeleri",
    heroTitle2: "fikir aşamasından",
    heroTitle3: "yayına kadar yönetiyorum.",
    heroDesc:
      "Web siteleri, özel yazılımlar ve dijital ürünler için strateji, proje yönetimi ve geliştirme süreçlerini uçtan uca yönetiyorum.",
    projectsBtn: "Projelerimi İncele",
    contactBtn: "Benimle Çalışın",

    aboutLabel: "Hakkımda",
    aboutTitle: "Teknik bilgi ile iş hedefleri arasında köprü kuruyorum.",
    aboutDesc:
      "Benim odağım sadece web sitesi geliştirmek değil; fikri doğru analiz etmek, süreci planlamak, kullanıcı deneyimini düşünmek ve projeyi yayına hazır bir ürüne dönüştürmek.",

    servicesLabel: "Hizmetler",
    services: [
      [
        "01",
        "Proje Yönetimi",
        "Keşif, kapsam, zaman planı, önceliklendirme ve yayın sürecini kontrollü şekilde yönetirim.",
      ],
      [
        "02",
        "Web Geliştirme",
        "Modern, hızlı, mobil uyumlu ve SEO odaklı web siteleri geliştiririm.",
      ],
      [
        "03",
        "Yapay Zeka & Otomasyon",
        "İş süreçlerini hızlandıran yapay zeka destekli çözümler ve otomasyonlar tasarlarım.",
      ],
      [
        "04",
        "Dijital Danışmanlık",
        "Markaların dijitalde doğru konumlanması için teknik ve stratejik yol haritası oluştururum.",
      ],
    ],

    projectsLabel: "Projeler",
    projectsTitle:
      "Sadece tasarım değil, problemden sonuca giden dijital çözümler.",
    projects: [
      {
        title: "E-Ticaret Platformu",
        site: "https://e-ticaret-livid-five.vercel.app/",
        type: "Web Development",
        desc: "Ürün, sepet, sipariş ve admin yönetimi olan satış odaklı dijital platform.",
      },
      {
        title: "Premium Kurumsal Site",
        site: "https://premiuminsaat.vercel.app/tr",
        type: "Corporate Website",
        desc: "Çok dilli, güçlü marka algısı oluşturan modern kurumsal web sitesi.",
      },
      {
        title: "Ürün Tanıtım Sitesi",
        site: "https://hediyelik.vercel.app/",
        type: "Product Website",
        desc: "Ürün odaklı, etkileyici görsellerle desteklenen tanıtım sitesi.",
      },
      {
        title: "Premium Kişisel Website",
        site: "https://hukuk-nine.vercel.app/",
        type: "Portfolio / Personal Brand",
        desc: "Kişisel marka, hizmet tanıtımı ve iletişim odaklı profesyonel web çözümü.",
      },
      {
        title: "Uzman Portföy Sitesi",
        site: "https://psikolog-pw3b.vercel.app/",
        type: "Portfolio / Product Brand",
        desc: "Kişisel marka, hizmet tanıtımı ve iletişim odaklı profesyonel web çözümü.",
      },
    ],

    processLabel: "Çalışma Sürecim",
    processTitle: "Her başarılı proje, doğru yönetilen bir süreçle başlar.",
    processSteps: ["Keşif", "Planlama", "Geliştirme", "Test", "Yayınlama", "Destek"],

    contactTitle:
      "Bir fikriniz varsa, onu birlikte güçlü bir dijital projeye dönüştürelim.",
    contactButton: "Benimle İletişime Geç",

    footerDesc: "Proje Yönetimi • Web Geliştirme • Dijital Çözümler",
  },

  en: {
    badge: "Web Design • Software • AI-Powered Solutions",
    heroTitle1: "Managing digital projects",
    heroTitle2: "from idea",
    heroTitle3: "to launch.",
    heroDesc:
      "I manage strategy, project management and development processes end-to-end for websites, custom software and digital products.",
    projectsBtn: "View Projects",
    contactBtn: "Work With Me",

    aboutLabel: "About",
    aboutTitle: "I bridge technical knowledge with business goals.",
    aboutDesc:
      "My focus is not only building websites; I analyze ideas, plan the process, design the user experience and turn projects into launch-ready digital products.",

    servicesLabel: "Services",
    services: [
      [
        "01",
        "Project Management",
        "I manage discovery, scope, timelines, prioritization and launch processes in a controlled way.",
      ],
      [
        "02",
        "Web Development",
        "I build modern, fast, responsive and SEO-focused websites.",
      ],
      [
        "03",
        "AI & Automation",
        "I design AI-powered solutions and automations that accelerate business processes.",
      ],
      [
        "04",
        "Digital Consulting",
        "I create technical and strategic roadmaps for brands to position themselves better digitally.",
      ],
    ],

    projectsLabel: "Projects",
    projectsTitle:
      "Not just design, but digital solutions from problem to result.",
    projects: [
      {
        title: "E-Commerce Platform",
        site: "https://e-ticaret-livid-five.vercel.app/",
        type: "Web Development",
        desc: "A sales-focused digital platform with product, cart, order and admin management.",
      },
      {
        title: "Premium Corporate Website",
        site: "https://premiuminsaat.vercel.app/tr",
        type: "Corporate Website",
        desc: "A multilingual modern corporate website that strengthens brand perception.",
      },
      {
        title: "Professional Portfolio Website",
        site: "https://psikolog-pw3b.vercel.app/",
        type: "Portfolio / Personal Brand",
        desc: "A professional web solution focused on personal branding, service presentation and contact.",
      },
      {
        title: "Product Promotion Website",
        site: "https://hediyelik.vercel.app/",
        type: "Product Website",
        desc: "A product-focused website with compelling visuals and promotional content.",
      },
      {
        title: "Premium Personal Website",
        site: "https://hukuk-nine.vercel.app/",
        type: "Portfolio / Personal Brand",
        desc: "A professional web solution focused on personal branding, service presentation and contact.",
      },
    ],

    processLabel: "Process",
    processTitle: "Every successful project starts with a well-managed process.",
    processSteps: ["Discovery", "Planning", "Development", "Testing", "Launch", "Support"],

    contactTitle:
      "If you have an idea, let’s turn it into a strong digital project together.",
    contactButton: "Contact Me",

    footerDesc: "Project Management • Web Development • Digital Solutions",
  },
};

export default function HomeClient() {
  const { locale } = useParams();
  const isTr = locale === "tr";
  const t = content[isTr ? "tr" : "en"];

  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 700], [0, 120]);
  const heroScale = useTransform(scrollY, [0, 700], [1, 1.08]);
  const heroTextY = useTransform(scrollY, [0, 700], [0, -70]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F4EDE3] text-[#17130F]">
      <PageLoader />
      <Navbar />
      <CursorGlow />
      <FloatingContact />
      <ScrollButtons />

      <section id="home" className="relative min-h-screen overflow-hidden px-6 py-10">
        <motion.div
          style={{
            backgroundImage: "url('/hero.png')",
            y: heroY,
            scale: heroScale,
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />

        <div className="absolute inset-0 bg-[#F4EDE3]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4EDE3]/85 via-[#F4EDE3]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4EDE3] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center">
          <motion.div
            style={{ y: heroTextY, opacity: heroOpacity }}
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smoothTransition}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.3 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C9A86A]/40 bg-white/45 px-5 py-3 text-sm font-medium text-[#7A5A24] backdrop-blur-md"
            >
              <Sparkle size={16} />
              {t.badge}
            </motion.div>

            <h1 className="heading-font text-5xl leading-[1.10] tracking-tight md:text-7xl">
              {t.heroTitle1}{" "}
              <span className="gold-gradient">{t.heroTitle2}</span>{" "}
              {t.heroTitle3}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.6 }}
              className="mt-8 max-w-2xl text-xl font-medium leading-9 text-[#51483F]"
            >
              {t.heroDesc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.9 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#17130F] px-8 py-4 font-medium text-white shadow-xl transition-all duration-700 hover:-translate-y-1 hover:bg-[#8B5E1E]"
              >
                {t.projectsBtn}
                <ArrowRight
                  size={18}
                  className="transition duration-700 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#17130F]/15 bg-white/55 px-8 py-4 font-medium text-[#17130F] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white"
              >
                {t.contactBtn}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="about"
        className="bg-[#F4EDE3] px-6 py-45"
        {...sectionAnimation}
      >
        <div className="mx-auto max-w-7xl">
          <span className="section-label">{t.aboutLabel}</span>

          <h2 className="heading-font mt-8 max-w-5xl text-4xl leading-tight md:text-7xl">
            {t.aboutTitle}
          </h2>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-[#5F554B]">
            {t.aboutDesc}
          </p>
        </div>
      </motion.section>

      <section id="services" className="bg-[#EFE4D5] px-6 py-30">
        <div className="mx-auto max-w-7xl">
          <motion.span className="section-label" {...sectionAnimation}>
            {t.servicesLabel}
          </motion.span>

          <div className="mt-5">
  {t.services.map((item) => (
    <div
      key={item[0]}
      className="group border-t border-[#17130F]/10 py-12 transition-all duration-700 last:border-b md:hover:border-[#C9A86A]"
    >
      <div className="grid gap-6 md:grid-cols-[120px_1fr_1fr] md:items-start">
        <span className="text-sm text-[#8B5E1E]">{item[0]}</span>
        <h3 className="heading-font text-4xl transition-all duration-700 md:group-hover:translate-x-4 md:group-hover:text-[#8B5E1E]">
          {item[1]}
        </h3>
        <p className="text-lg leading-8 text-[#5F554B]">{item[2]}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <motion.section
        id="projects"
        className="bg-[#F4EDE3] px-6 pt-25 pb-20"
        {...sectionAnimation}
      >
        <div className="mx-auto max-w-7xl">
          <span className="section-label">{t.projectsLabel}</span>

          <h2 className="heading-font mt-4 mb-8 max-w-5xl text-4xl leading-tight md:text-7xl">
            {t.projectsTitle}
          </h2>

         <div className="mt-20 space-y-8">
  {t.projects.map((project) => (
    <a
      key={project.title}
      href={project.site}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-[2rem] border border-[#17130F]/10 bg-white/35 p-8 backdrop-blur-md transition-all duration-700 md:hover:-translate-y-2 md:hover:border-[#C9A86A]/50 md:hover:bg-white/55"
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#C9A86A]/20 blur-3xl transition duration-700 md:group-hover:bg-[#C9A86A]/35" />

      <div className="relative grid gap-8 md:grid-cols-[1fr_1.5fr_auto] md:items-center">
        <span className="text-sm uppercase tracking-[0.3em] text-[#8B5E1E]">
          {project.type}
        </span>

        <div>
          <h3 className="heading-font text-4xl md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl leading-8 text-[#5F554B]">
            {project.desc}
          </p>
        </div>

        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#17130F] text-white transition duration-700 md:group-hover:bg-[#8B5E1E]">
          <ArrowRight size={20} />
        </span>
      </div>
    </a>
  ))}
</div>
        </div>
      </motion.section>

      <motion.section
        id="process"
        className="bg-[#17130F] px-6 pt-25 pb-20 text-white"
        {...sectionAnimation}
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C9A86A]">
            {t.processLabel}
          </span>

          <h2 className="heading-font mt-8 max-w-5xl text-4xl leading-tight md:text-7xl">
            {t.processTitle}
          </h2>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {t.processSteps.map((step, index) => (
              <div
                key={step}
                className="group border-t border-white/15 pt-8 transition-all duration-700 md:hover:-translate-y-2 md:hover:border-[#C9A86A]"
              >
                <span className="text-[#C9A86A]">0{index + 1}</span>
                <h3 className="heading-font mt-4 text-3xl transition-all duration-700 md:group-hover:text-[#C9A86A]">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="bg-[#F4EDE3] px-6 py-25"
        {...sectionAnimation}
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font max-w-5xl text-4xl leading-tight md:text-7xl">
            {t.contactTitle}
          </h2>

          <a
            href="mailto:selcuk_kyncu_06@hotmail.com"
            className="mt-12 inline-flex rounded-full bg-[#17130F] px-8 py-4 font-medium text-white transition-all duration-700 hover:-translate-y-1 hover:bg-[#8B5E1E]"
          >
            {t.contactButton}
          </a>
        </div>
      </motion.section>

      <footer className="border-t border-[#17130F]/10 bg-[#EFE4D5] px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="heading-font text-3xl">Selçuk Koyuncu</h3>
            <p className="mt-2 text-[#5F554B]">{t.footerDesc}</p>
          </div>

          <div className="flex gap-4">
            <SocialIcon href="mailto:selcuk_kyncu_06@hotmail.com" label="E-posta">
              <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Zm8 8 8-5H4l8 5Zm0 2L4 10v7h16v-7l-8 5Z" />
            </SocialIcon>

            <SocialIcon href="#" label="Web sitesi">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 9h-3.02a15.7 15.7 0 0 0-1.16-5.01A8.03 8.03 0 0 1 18.93 11ZM12 4.04c.83 1.2 1.53 3.37 1.78 6.96h-3.56C10.47 7.41 11.17 5.24 12 4.04ZM4.26 13h3.83c.12 1.95.44 3.75.92 5.14A8.02 8.02 0 0 1 4.26 13Zm3.83-2H4.26a8.02 8.02 0 0 1 4.75-5.14A18.7 18.7 0 0 0 8.09 11ZM12 19.96c-.83-1.2-1.53-3.37-1.78-6.96h3.56C13.53 16.59 12.83 18.76 12 19.96Zm3-1.82c.48-1.39.8-3.19.92-5.14h3.02A8.03 8.03 0 0 1 15 18.14Z" />
            </SocialIcon>

            <SocialIcon href="#" label="GitHub">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.01c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.91v2.84c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </SocialIcon>

            <SocialIcon href="#" label="LinkedIn">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.4 8h4.2v13H.4V8Zm7.2 0h4v1.78h.06c.56-1.06 1.93-2.18 3.98-2.18 4.26 0 5.04 2.8 5.04 6.44V21h-4.2v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V21h-4.2V8Z" />
            </SocialIcon>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#17130F]/10 bg-white/70 transition-all duration-500 hover:-translate-y-1 hover:bg-[#17130F] hover:text-white"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}