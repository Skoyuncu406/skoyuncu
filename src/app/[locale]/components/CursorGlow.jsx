"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 h-[320px] w-[320px] rounded-full"
      style={{
        left: position.x - 160,
        top: position.y - 160,
        background:
          "radial-gradient(circle, rgba(96,165,250,0.18) 0%, rgba(96,165,250,0.08) 40%, transparent 75%)",
        filter: "blur(30px)",
        transition: "left 0.15s linear, top 0.15s linear",
      }}
    />
  );
}