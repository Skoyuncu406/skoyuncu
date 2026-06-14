"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
  const { locale } = useParams();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const currentLocale = locale || "tr";
  const targetLocale = currentLocale === "tr" ? "en" : "tr";

  const languageHref = pathname.startsWith(`/${currentLocale}`)
    ? pathname.replace(`/${currentLocale}`, `/${targetLocale}`)
    : `/${targetLocale}`;

  const menuItems =
    currentLocale === "tr"
      ? [
          { id: "about", label: "Hakkımda", href: "#about" },
          { id: "services", label: "Hizmetler", href: "#services" },
          { id: "projects", label: "Projeler", href: "#projects" },
          { id: "process", label: "Süreç", href: "#process" },
          { id: "contact", label: "İletişim", href: "#contact" },
        ]
      : [
          { id: "about", label: "About", href: "#about" },
          { id: "services", label: "Services", href: "#services" },
          { id: "projects", label: "Projects", href: "#projects" },
          { id: "process", label: "Process", href: "#process" },
          { id: "contact", label: "Contact", href: "#contact" },
        ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = menuItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 170 && rect.bottom >= 170;
      });

      setActive(current?.id || "home");
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [menuItems]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full px-4 transition-all duration-700 md:px-6 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-full border transition-all duration-700 ${
            scrolled
              ? "border-[#C9A86A]/25 bg-white/85 shadow-[0_20px_60px_rgba(23,19,15,0.12)] backdrop-blur-2xl"
              : "border-white/35 bg-white/35 backdrop-blur-xl"
          }`}
        >
          <div
            className={`flex w-full items-center justify-between transition-all duration-700 ${
              scrolled ? "h-16 px-6" : "h-20 px-8"
            }`}
          >
            <Link
              href={`/${currentLocale}`}
              onClick={closeMenu}
              className="group relative"
            >
              <span className="heading-font relative z-10 text-2xl tracking-tight transition duration-500 group-hover:text-[#8B5E1E]">
                Selçuk Koyuncu
              </span>

              <span className="absolute -inset-3 rounded-full bg-[#C9A86A]/0 blur-xl transition duration-700 group-hover:bg-[#C9A86A]/25" />
            </Link>

            <div className="hidden items-center gap-9 md:flex">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`group relative text-[15px] font-semibold tracking-wide transition duration-500 ${
                    active === item.id ? "text-[#8B5E1E]" : "text-[#17130F]"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>

                  <span className="absolute -inset-x-3 -inset-y-2 rounded-full bg-[#C9A86A]/0 blur-xl transition duration-700 group-hover:bg-[#C9A86A]/20" />

                  <span
                    className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8B5E1E] to-[#C9A86A] transition-all duration-500 ${
                      active === item.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href={languageHref}
                className="group relative overflow-hidden rounded-full border border-[#17130F]/10 bg-white/60 px-5 py-2 text-sm font-medium backdrop-blur-md"
              >
                <span className="relative z-10 transition duration-500 group-hover:text-white">
                  {currentLocale === "tr" ? "EN" : "TR"}
                </span>
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#8B5E1E] to-[#C9A86A] transition-transform duration-500 group-hover:translate-y-0" />
              </Link>
            </div>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className="group relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#17130F]/10 bg-white/65 shadow-[0_10px_30px_rgba(23,19,15,0.08)] backdrop-blur-xl transition duration-500 hover:scale-105 hover:border-[#C9A86A]/40 md:hidden"
              aria-label="Menüyü aç/kapat"
            >
              <span className="absolute inset-0 rounded-full bg-[#C9A86A]/0 blur-lg transition duration-700 group-hover:bg-[#C9A86A]/25" />

              <div className="relative flex flex-col gap-1.5">
                <span
                  className={`h-[2px] w-5 rounded-full bg-[#17130F] transition-all duration-500 ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-4 rounded-full bg-[#17130F] transition-all duration-500 ${
                    open ? "opacity-0" : "ml-auto"
                  }`}
                />
                <span
                  className={`h-[2px] w-5 rounded-full bg-[#17130F] transition-all duration-500 ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#17130F]/45 px-6 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 90, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 90, scale: 0.96 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex w-full max-w-md flex-col items-center gap-7 rounded-[2.5rem] border border-white/50 bg-[#F4EDE3]/92 px-8 py-12 text-center shadow-2xl"
            >
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className={`heading-font relative text-xl tracking-tight transition-all duration-700 hover:scale-105 hover:text-[#8B5E1E] ${
                    active === item.id ? "text-[#8B5E1E]" : "text-[#17130F]"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <Link
                href={languageHref}
                onClick={closeMenu}
                className="mt-4 w-full rounded-full bg-[#17130F] px-8 py-4 text-sm font-medium text-white transition duration-500 hover:bg-[#8B5E1E]"
              >
                {currentLocale === "tr" ? "English" : "Türkçe"}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}