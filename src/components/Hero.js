import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const fullText = "I'm a passionate system administrator and DevOps engineer. I manage servers, networks, and infrastructure with precision and efficiency.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40); // скорость печати
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-background">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-bold text-primary mb-6"
      >
        Hi, I'm d3ad0x1
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-xl md:text-2xl text-textGray max-w-2xl min-h-[100px]"
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
          className="px-6 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-secondary transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}
