"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-8 left-8 z-[60] flex flex-col gap-3">
      <motion.a
        href="https://wa.me/905442030662"
        target="_blank"
        rel="noopener noreferrer"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_15px_40px_rgba(37,211,102,0.35)]
          transition-all
          duration-500
          hover:scale-110
        "
      >
        <MessageCircle size={24} />
      </motion.a>

      <motion.a
        href="tel:+905442030662"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2.5,
          delay: 0.4,
          repeat: Infinity,
        }}
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#17130F]
          text-white
          shadow-[0_15px_40px_rgba(23,19,15,0.25)]
          transition-all
          duration-500
          hover:scale-110
        "
      >
        <Phone size={22} />
      </motion.a>
    </div>
  );
}