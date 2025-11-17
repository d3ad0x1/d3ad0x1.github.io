import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MATRIX_CHARS = "01#@$%&*+=<>/?".split("");
const MATRIX_COUNT = 120;

function getRandomChar() {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
}

export default function Hero() {
  const fullText =
    "I'm a passionate system administrator and DevOps engineer. I manage servers, networks, and infrastructure with precision and efficiency.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 bg-background overflow-hidden">
      {/* === Matrix background === */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: MATRIX_COUNT }).map((_, i) => {
          const isPrimary = Math.random() < 0.4; // часть символов фиолетовые
          const left = Math.random() * 100; // позиция по X
          const delay = -Math.random() * 15; // отрицательная задержка — все в разной фазе

          return (
            <span
              key={i}
              className={`matrix-char ${
                isPrimary ? "text-primary" : "text-textMuted"
              }`}
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
              }}
            >
              {getRandomChar()}
            </span>
          );
        })}
      </div>

      {/* === Контент поверх === */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-textMuted mb-6"
        >
          Hi, I'm d3ad0x1
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-lg md:text-2xl text-textMuted max-w-2xl min-h-[100px]"
        >
          {displayedText}
          <span className="text-primary">|</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="mt-8"
        >
          <a
            href="#projects"
            className="px-6 py-3 border border-borderSoft text-textMuted rounded-lg font-semibold hover:bg-borderSoft/30 transition shadow-sm hover:shadow-md"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
