"use client";

import { useParams } from "next/navigation";
import { ArrowRight, Sparkle } from "lucide-react";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import FloatingContact from "./components/FloatingContact";
import ScrollButtons from "./components/ScrollButtons";
import CursorGlow from "./components/CursorGlow";

const content = {
  tr: {
    badge: "Proje Yönetimi • Web Geliştirme • Dijital Çözümler",
    heroPanelTitle: "PM + DEV",
    heroMetrics: [
      ["40+", "Proje Deneyimi"],
      ["Uçtan Uca", "Proje Yönetimi"],
      ["SEO + UX", "Performans Odaklı"],
    ],
    heroTitle: "Dijital projeleri fikir aşamasından yayına kadar yönetiyorum.",
    heroDesc:
      "İş hedeflerini doğru analiz ederek web siteleri, özel yazılımlar ve dijital ürünler için uçtan uca çözüm geliştiriyorum.",
    projectsBtn: "Projelerimi İncele",
    contactBtn: "İletişime Geç",

    aboutLabel: "Hakkımda",
    aboutTitle: "Teknik bilgi ile iş hedefleri arasında köprü kuruyorum.",
    aboutDesc:
      "Benim odağım sadece web sitesi yapmak değil; fikri analiz etmek, süreci planlamak, kullanıcı deneyimini düşünmek ve projeyi yayına hazır hale getirmek.",

    servicesLabel: "Hizmetler",
    services: [
      [
        "01",
        "Proje Yönetimi",
        "Keşif, kapsam, zaman planı ve teslim süreçlerini yönetirim.",
      ],
      [
        "02",
        "Web Geliştirme",
        "Modern, hızlı, mobil uyumlu ve SEO odaklı web siteleri geliştiririm.",
      ],
      [
        "03",
        "Yapay Zeka & Otomasyon",
        "İş süreçlerini hızlandıran yapay zeka destekli çözümler tasarlarım.",
      ],
      [
        "04",
        "Dijital Danışmanlık",
        "Markalar için teknik ve stratejik yol haritası oluştururum.",
      ],
    ],

    projectsLabel: "Projeler",
    projectsTitle: "Problemden sonuca giden dijital çözümler.",
    view: "İncele",
    problem: "Problem",
    solution: "Çözüm",
    result: "Sonuç",

    projects: [
      {
        title: "E-Ticaret Platformu",
        site: "https://professional-e-commerce.vercel.app/",
        type: "Web Development",
        problem:
          "Ürün, sepet ve sipariş süreçlerinin yönetilebilir olması gerekiyordu.",
        solution:
          "Admin paneli, ürün yönetimi ve sipariş takibi olan bir yapı geliştirildi.",
        result:
          "Satış odaklı, yönetilebilir ve ölçeklenebilir bir altyapı ortaya çıktı.",
      },
      {
        title: "Premium Kurumsal Site",
        site: "https://premiuminsaat.vercel.app/tr",
        type: "Corporate Website",
        problem:
          "Markanın dijital görünümü kurumsal seviyeyi yeterince yansıtmıyordu.",
        solution:
          "Çok dilli, premium arayüze sahip kurumsal web deneyimi geliştirildi.",
        result:
          "Daha güven veren ve marka algısını güçlendiren bir platform oluşturuldu.",
      },
      {
        title: "Ürün Tanıtım Sitesi",
        site: "https://hediyelik.vercel.app/",
        type: "Product Website",
        problem:
          "Ürünlerin dijitalde estetik ve anlaşılır şekilde sunulması gerekiyordu.",
        solution:
          "Kategori ve ürün odaklı modern bir tanıtım yapısı oluşturuldu.",
        result:
          "Ürünleri öne çıkaran sade ve etkileyici bir web deneyimi sağlandı.",
      },
      {
        title: "Premium Kişisel Website",
        site: "https://hukuk-nine.vercel.app/",
        type: "Personal Brand",
        problem:
          "Kişisel marka algısını güçlendirecek profesyonel bir dijital vitrin gerekiyordu.",
        solution:
          "Hizmet, uzmanlık ve iletişim odaklı premium kişisel web sitesi geliştirildi.",
        result:
          "Güven veren ve profesyonel bir kişisel marka deneyimi oluşturuldu.",
      },
      {
        title: "Uzman Portföy Sitesi",
        site: "https://psikolog-pw3b.vercel.app/",
        type: "Portfolio Website",
        problem:
          "Danışanların bilgiye, hizmetlere ve iletişime kolay ulaşması gerekiyordu.",
        solution:
          "Hizmet, blog, iletişim ve randevu odaklı modern bir yapı tasarlandı.",
        result:
          "Uzmanlık algısını güçlendiren ve iletişimi kolaylaştıran bir platform ortaya çıktı.",
      },
    ],

    processLabel: "Süreç",
    processTitle: "Her başarılı proje, doğru yönetilen bir süreçle başlar.",
    process: ["Keşif", "Planlama", "Geliştirme", "Test", "Yayınlama", "Destek"],

    contactLabel: "İletişim",
    contactTitle: "Bir fikriniz mi var?",
    contactDesc:
      "Yeni bir proje, iş birliği veya dijital dönüşüm süreci hakkında konuşmak isterseniz mesajınızı iletin. En kısa sürede sizinle iletişime geçeceğim.",
    contactCardTitle: "Neler konusunda yardımcı olabilirim?",
    contactServices: [
      "Web sitesi ve yazılım projeleri",
      "Proje yönetimi danışmanlığı",
      "Yapay zeka ve otomasyon çözümleri",
      "Dijital ürün geliştirme süreçleri",
      "Teknik analiz ve yol haritası oluşturma",
    ],

    formName: "Ad Soyad",
    formEmail: "E-posta",
    formSubject: "Konu",
    formMessage: "Mesajınız",
    formNamePlaceholder: "Adınız ve soyadınız",
    formEmailPlaceholder: "ornek@mail.com",
    formSubjectPlaceholder: "Projeniz hakkında kısa bilgi",
    formMessagePlaceholder: "Mesajınızı buraya yazın...",
    sendButton: "Mesajı Gönder",

    phone: "0544 203 06 62",
    mail: "selcuk_kyncu_06@hotmail.com",
    whatsapp: "WhatsApp",
    footer: "Proje Yönetimi • Web Geliştirme • Dijital Çözümler",
  },

  en: {
    badge: "Project Management • Web Development • Digital Solutions",
    heroPanelTitle: "PM + DEV",
    heroMetrics: [
      ["40+", "Project Experience"],
      ["End-to-End", "Project Management"],
      ["SEO + UX", "Performance Focus"],
    ],
    heroTitle: "I manage digital projects from idea to launch.",
    heroDesc:
      "I analyze business goals and build end-to-end digital solutions for websites, custom software and digital products.",
    projectsBtn: "View Projects",
    contactBtn: "Contact Me",

    aboutLabel: "About",
    aboutTitle: "I bridge technical knowledge with business goals.",
    aboutDesc:
      "My focus is not only building websites; I analyze ideas, plan the process, design the user experience and turn projects into launch-ready products.",

    servicesLabel: "Services",
    services: [
      [
        "01",
        "Project Management",
        "I manage discovery, scope, timelines and delivery processes.",
      ],
      [
        "02",
        "Web Development",
        "I build modern, fast, responsive and SEO-focused websites.",
      ],
      [
        "03",
        "AI & Automation",
        "I design AI-powered solutions that accelerate business processes.",
      ],
      [
        "04",
        "Digital Consulting",
        "I create technical and strategic roadmaps for brands.",
      ],
    ],

    projectsLabel: "Projects",
    projectsTitle: "Digital solutions from problem to result.",
    view: "View",
    problem: "Problem",
    solution: "Solution",
    result: "Result",

    projects: [
      {
        title: "E-Commerce Platform",
        site: "https://professional-e-commerce.vercel.app/",
        type: "Web Development",
        problem: "Product, cart and order processes needed to be manageable.",
        solution:
          "An admin panel, product management and order tracking structure was developed.",
        result:
          "A scalable and sales-focused e-commerce infrastructure was created.",
      },
      {
        title: "Premium Corporate Website",
        site: "https://premiuminsaat.vercel.app/tr",
        type: "Corporate Website",
        problem:
          "The brand’s digital presence did not fully reflect its corporate level.",
        solution:
          "A multilingual corporate website with a premium interface was developed.",
        result:
          "A professional platform that strengthens brand perception was created.",
      },
      {
        title: "Product Promotion Website",
        site: "https://hediyelik.vercel.app/",
        type: "Product Website",
        problem:
          "Products needed to be presented clearly and aesthetically online.",
        solution:
          "A modern promotional structure focused on categories and products was created.",
        result:
          "A simple and impressive product presentation experience was delivered.",
      },
      {
        title: "Premium Personal Website",
        site: "https://hukuk-nine.vercel.app/",
        type: "Personal Brand",
        problem:
          "A professional digital presence was needed to strengthen personal brand perception.",
        solution:
          "A premium website focused on services, expertise and communication was developed.",
        result:
          "A trustworthy and professional personal brand experience was created.",
      },
      {
        title: "Professional Portfolio Website",
        site: "https://psikolog-pw3b.vercel.app/",
        type: "Portfolio Website",
        problem:
          "Visitors needed easy access to services, information and contact channels.",
        solution:
          "A modern structure focused on services, blog, contact and appointment flow was designed.",
        result:
          "A platform that strengthens expertise perception and simplifies communication was created.",
      },
    ],

    processLabel: "Process",
    processTitle: "Every successful project starts with a well-managed process.",
    process: ["Discovery", "Planning", "Development", "Testing", "Launch", "Support"],

    contactLabel: "Contact",
    contactTitle: "Have an idea in mind?",
    contactDesc:
      "If you would like to discuss a new project, collaboration, or digital transformation process, send me a message and I will get back to you as soon as possible.",
    contactCardTitle: "How can I help?",
    contactServices: [
      "Websites and software projects",
      "Project management consulting",
      "AI and automation solutions",
      "Digital product development",
      "Technical analysis and roadmap planning",
    ],

    formName: "Full Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formNamePlaceholder: "Your full name",
    formEmailPlaceholder: "example@email.com",
    formSubjectPlaceholder: "Brief information about your project",
    formMessagePlaceholder: "Write your message here...",
    sendButton: "Send Message",

    phone: "0544 203 06 62",
    mail: "selcuk_kyncu_06@hotmail.com",
    whatsapp: "WhatsApp",
    footer: "Project Management • Web Development • Digital Solutions",
  },
};

export default function HomeClient() {
  const { locale } = useParams();
  const t = content[locale === "en" ? "en" : "tr"];

  return (
    <main className="min-h-screen bg-[#F8F8F6] text-[#0F172A]">
      <CursorGlow />
      <PageLoader />
      <Navbar />
      <FloatingContact />
      <ScrollButtons />

      <section
        id="home"
        className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-40"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A_1px,transparent_1px),linear-gradient(to_bottom,#0F172A_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.035]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0F172A]/10 bg-white px-5 py-3 text-sm font-semibold text-[#C8A45D]">
              <Sparkle size={16} />
              {t.badge}
            </div>

            <h1 className="heading-font max-w-5xl text-5xl leading-[1.06] tracking-tight md:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#475569] md:text-xl">
              {t.heroDesc}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0F172A] px-8 py-4 font-semibold text-white transition hover:bg-[#C8A45D]"
              >
                {t.projectsBtn}
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#0F172A]/15 bg-white px-8 py-4 font-semibold text-[#0F172A] transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
              >
                {t.contactBtn}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#0F172A]/10 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A45D]">
              {t.heroPanelTitle}
            </span>

            <div className="mt-8 grid gap-6">
              {t.heroMetrics.map((metric) => (
                <Metric key={metric[1]} title={metric[0]} text={metric[1]} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>{t.aboutLabel}</SectionLabel>

          <h2 className="heading-font mt-8 max-w-5xl text-4xl leading-tight md:text-6xl">
            {t.aboutTitle}
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#475569]">
            {t.aboutDesc}
          </p>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>{t.servicesLabel}</SectionLabel>

          <div className="mt-12 border-y border-[#0F172A]/10">
            {t.services.map((item) => (
              <div
                key={item[0]}
                className="grid gap-5 border-b border-[#0F172A]/10 py-9 last:border-b-0 md:grid-cols-[100px_1fr_1.2fr_auto] md:items-center"
              >
                <span className="font-semibold text-[#C8A45D]">{item[0]}</span>
                <h3 className="heading-font text-3xl md:text-4xl">
                  {item[1]}
                </h3>
                <p className="leading-8 text-[#475569]">{item[2]}</p>
                <ArrowRight className="hidden text-[#C8A45D] md:block" size={22} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>{t.projectsLabel}</SectionLabel>

          <h2 className="heading-font mt-8 max-w-5xl text-4xl leading-tight md:text-6xl">
            {t.projectsTitle}
          </h2>

          <div className="mt-14 space-y-10">
            {t.projects.map((project) => (
              <a
                key={project.title}
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-t border-[#0F172A]/10 pt-10"
              >
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A45D]">
                      {project.type}
                    </span>

                    <h3 className="heading-font mt-4 text-4xl leading-tight md:text-6xl">
                      {project.title}
                    </h3>

                    <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#0F172A]/10 bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] transition group-hover:border-[#C8A45D] group-hover:text-[#C8A45D]">
                      {t.view}
                      <ArrowRight size={16} />
                    </span>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <CaseItem title={t.problem} text={project.problem} />
                    <CaseItem title={t.solution} text={project.solution} />
                    <CaseItem title={t.result} text={project.result} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#0F172A] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A45D]">
            {t.processLabel}
          </span>

          <h2 className="heading-font mt-8 max-w-5xl text-4xl leading-tight md:text-6xl">
            {t.processTitle}
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-6">
            {t.process.map((step, index) => (
              <div key={step} className="border-t border-white/15 pt-6">
                <span className="text-[#C8A45D]">0{index + 1}</span>
                <h3 className="heading-font mt-4 text-2xl">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A45D]">
              {t.contactLabel}
            </span>

            <h2 className="heading-font mt-6 text-4xl leading-tight text-[#0F172A] md:text-6xl">
              {t.contactTitle}
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              {t.contactDesc}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="rounded-[2rem] border border-[#0F172A]/10 bg-[#F8F8F6] p-8">
                <h3 className="heading-font text-3xl text-[#0F172A]">
                  {t.contactCardTitle}
                </h3>

                <ul className="mt-8 space-y-5 text-[#475569]">
                  {t.contactServices.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <form className="rounded-[2rem] border border-[#0F172A]/10 bg-white p-8 shadow-sm">
              <div className="grid gap-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                    {t.formName}
                  </label>

                  <input
                    type="text"
                    placeholder={t.formNamePlaceholder}
                    className="w-full rounded-xl border border-[#0F172A]/10 px-4 py-4 outline-none transition focus:border-[#C8A45D]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                    {t.formEmail}
                  </label>

                  <input
                    type="email"
                    placeholder={t.formEmailPlaceholder}
                    className="w-full rounded-xl border border-[#0F172A]/10 px-4 py-4 outline-none transition focus:border-[#C8A45D]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                    {t.formSubject}
                  </label>

                  <input
                    type="text"
                    placeholder={t.formSubjectPlaceholder}
                    className="w-full rounded-xl border border-[#0F172A]/10 px-4 py-4 outline-none transition focus:border-[#C8A45D]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                    {t.formMessage}
                  </label>

                  <textarea
                    rows={6}
                    placeholder={t.formMessagePlaceholder}
                    className="w-full rounded-xl border border-[#0F172A]/10 px-4 py-4 outline-none transition focus:border-[#C8A45D]"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-[#0F172A] px-8 py-4 font-semibold text-white transition hover:bg-[#C8A45D]"
                >
                  {t.sendButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#0F172A]/10 bg-white px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h3 className="heading-font text-3xl">Selçuk Koyuncu</h3>
          <p className="text-[#475569]">{t.footer}</p>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({ children }) {
  return (
    <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A45D]">
      {children}
    </span>
  );
}

function Metric({ title, text }) {
  return (
    <div className="border-t border-[#0F172A]/10 pt-5">
      <h3 className="heading-font text-4xl text-[#0F172A]">{title}</h3>
      <p className="mt-2 text-sm text-[#475569]">{text}</p>
    </div>
  );
}

function CaseItem({ title, text }) {
  return (
    <div className="border-t border-[#0F172A]/10 pt-5">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A45D]">
        {title}
      </span>
      <p className="mt-4 text-sm leading-7 text-[#475569]">{text}</p>
    </div>
  );
}