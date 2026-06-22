"use client";

import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const sections = ["home", "about", "services", "projects", "process", "contact"];

export default function ScrollButtons() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      let current = 0;

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 180) {
          current = index;
        }
      });

      setActiveIndex(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (index) => {
    const id = sections[index];
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {activeIndex > 0 && (
        <button
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Önceki bölüm"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0F172A]/10 bg-white text-[#0F172A] shadow-lg transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
        >
          <ChevronUp size={21} />
        </button>
      )}

      {activeIndex < sections.length - 1 && (
        <button
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Sonraki bölüm"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0F172A]/10 bg-white text-[#0F172A] shadow-lg transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
        >
          <ChevronDown size={21} />
        </button>
      )}
    </div>
  );
}