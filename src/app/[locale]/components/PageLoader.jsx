"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F172A] px-6">
      <div className="text-center">
        <div className="mx-auto mb-6 h-[2px] w-28 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-full animate-pulse bg-[#C8A45D]" />
        </div>

        <h1 className="heading-font text-4xl text-white">
          Selçuk Koyuncu
        </h1>

        <p className="mt-3 text-xs font-medium tracking-[0.35em] text-[#C8A45D]">
          PROJECT MANAGEMENT - SOFTWARE DEVELOPTMENT
        </p>
      </div>
    </div>
  );
}