"use client";

import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "services", "projects", "process", "contact"];

export default function ScrollButtons() {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      let currentIndex = 0;

      sections.forEach((id, index) => {
        if (id === "home") {
          if (currentY < 300) currentIndex = 0;
          return;
        }

        const element = document.getElementById(id);

        if (element && currentY >= element.offsetTop - 220) {
          currentIndex = index;
        }
      });

      setActiveIndex(currentIndex);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const id = sections[index];

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goNextSection = () => {
    const nextIndex = Math.min(activeIndex + 1, sections.length - 1);
    scrollToSection(nextIndex);
  };

  const goPrevSection = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    scrollToSection(prevIndex);
  };

  const isTop = scrollY < 100;
  const isLast = activeIndex === sections.length - 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
      >
        {!isTop && (
          <button
            onClick={goPrevSection}
            aria-label="Önceki bölüme git"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A86A]/30 bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-white"
          >
            <ChevronUp size={20} />
          </button>
        )}

        {!isLast && (
          <button
            onClick={goNextSection}
            aria-label="Sonraki bölüme git"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A86A]/30 bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-white"
          >
            <ChevronDown size={20} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}