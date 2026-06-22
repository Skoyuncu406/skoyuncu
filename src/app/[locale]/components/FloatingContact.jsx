"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/905442030662"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle size={22} />
      </a>

      <a
        href="tel:+905442030662"
        aria-label="Telefon"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F172A] text-white shadow-lg transition hover:scale-105"
      >
        <Phone size={21} />
      </a>
    </div>
  );
}