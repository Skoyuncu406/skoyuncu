"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const labels = {
  tr: {
    about: "Hakkımda",
    services: "Hizmetler",
    projects: "Projeler",
    process: "Süreç",
    contact: "İletişim",
    lang: "EN",
  },
  en: {
    about: "About",
    services: "Services",
    projects: "Projects",
    process: "Process",
    contact: "Contact",
    lang: "TR",
  },
};

export default function Navbar() {
  const { locale } = useParams();
  const pathname = usePathname();

  const currentLocale = locale === "en" ? "en" : "tr";
  const targetLocale = currentLocale === "tr" ? "en" : "tr";
  const t = labels[currentLocale];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const languageHref = pathname.startsWith(`/${currentLocale}`)
    ? pathname.replace(`/${currentLocale}`, `/${targetLocale}`)
    : `/${targetLocale}`;

  const menu = [
    { label: t.about, href: "#about" },
    { label: t.services, href: "#services" },
    { label: t.projects, href: "#projects" },
    { label: t.process, href: "#process" },
    { label: t.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 z-50 w-full px-4 transition-all duration-500 ${
        scrolled ? "top-2 py-2" : "top-0 py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 transition-all duration-500 md:px-7 ${
          scrolled
            ? "h-14 border-[#0F172A]/10 bg-white/95 shadow-xl backdrop-blur-xl"
            : "h-20 border-white/40 bg-white/70 backdrop-blur-md"
        }`}
      >
        <Link
          href={`/${currentLocale}`}
          onClick={closeMenu}
          className={`heading-font tracking-tight text-[#0F172A] transition-all duration-500 ${
            scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
          }`}
        >
          Selçuk Koyuncu
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-[#0F172A] transition-colors duration-300 hover:text-[#C8A45D]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={languageHref}
            className="rounded-full border border-[#0F172A]/10 px-5 py-2 text-sm font-semibold text-[#0F172A] transition-colors duration-300 hover:border-[#C8A45D] hover:text-[#C8A45D]"
          >
            {t.lang}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menüyü aç/kapat"
          className={`flex items-center justify-center rounded-full border border-[#0F172A]/10 bg-white text-[#0F172A] transition-all duration-500 md:hidden ${
            scrolled ? "h-10 w-10" : "h-11 w-11"
          }`}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-[2px] rounded-full bg-current transition-all duration-300 ${
                scrolled ? "w-4" : "w-5"
              } ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-[2px] rounded-full bg-current transition-all duration-300 ${
                scrolled ? "w-3" : "w-4"
              } ${open ? "opacity-0" : "ml-auto"}`}
            />
            <span
              className={`h-[2px] rounded-full bg-current transition-all duration-300 ${
                scrolled ? "w-4" : "w-5"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-[#0F172A]/10 bg-white p-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-5 py-4 text-center text-lg font-semibold text-[#0F172A] transition-colors hover:bg-[#F8F8F6] hover:text-[#C8A45D]"
              >
                {item.label}
              </a>
            ))}

            <Link
              href={languageHref}
              onClick={closeMenu}
              className="mt-3 rounded-full bg-[#0F172A] px-5 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-[#C8A45D]"
            >
              {currentLocale === "tr" ? "English" : "Türkçe"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}