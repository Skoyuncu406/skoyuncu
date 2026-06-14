"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F4EDE3] px-6"
        >
          <div className="relative flex w-full max-w-[90%] flex-col items-center justify-center px-6 text-center">
            <div className="absolute h-48 w-48 rounded-full bg-[#C9A86A]/20 blur-3xl" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative h-24 w-24 rounded-full border-2 border-[#C9A86A]/25 border-t-[#8B5E1E]"
            />

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="heading-font mt-10 text-center text-4xl text-[#17130F] sm:text-5xl"
            >
              Selçuk Koyuncu
            </motion.h1>

            <p className="mt-3 max-w-xs text-center text-xs tracking-[0.35em] text-[#8B5E1E] sm:max-w-none sm:tracking-[0.45em]">
              PROJECT MANAGEMENT • DEVELOPMENT
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}