"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 210,
        y: position.y - 210,
      }}
      transition={{
        type: "spring",
        damping: 35,
        stiffness: 120,
        mass: 0.4,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[45] h-[420px] w-[420px] rounded-full bg-gradient-to-r from-[#C9A86A]/200 to-[#8B5E1E]/10 blur-[130px] mix-blend-multiply"
    />
  );
}