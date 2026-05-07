import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MATRIX_CHARS = "01#@$%&*+=<>/?".split("");
const MATRIX_COUNT = 80;

function getRandomChar() {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
}

export default function Hero() {
  const fullText =
    "Pentester • System Administrator • Infrastructure Engineer";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center">

      {/* === Background Glow === */}
      <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

      {/* === Matrix Background === */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: MATRIX_COUNT }).map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 10;

          return (
            <span
              key={i}
              className="matrix-char text-blue-500"
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                filter: "blur(0.5px)",
              }}
            >
              {getRandomChar()}
            </span>
          );
        })}
      </div>

      {/* === Content === */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-[0.3em] text-zinc-500 text-sm"
          >
            Offensive Security
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mt-6 leading-tight"
          >
            Hi, I'm <span className="text-blue-500">d3ad0x1</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-xl text-zinc-400 mt-8 max-w-2xl min-h-[60px]"
          >
            {displayedText}
            <span className="text-blue-500 animate-pulse">|</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex flex-wrap gap-4 mt-12"
          >
            <a
              href="#writeups"
              className="px-7 py-4 bg-blue-500 hover:bg-blue-400 transition rounded-2xl text-white font-medium shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >
              View Write-ups
            </a>

            <a
              href="#contact"
              className="px-7 py-4 border border-zinc-800 hover:border-blue-500/40 hover:bg-zinc-900 transition rounded-2xl text-zinc-300"
            >
              Contact Me
            </a>
          </motion.div>

        </div>

        {/* RIGHT TERMINAL */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="hidden lg:block"
        >

          <div className="bg-[#0b0b0b]/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-[0_0_60px_rgba(59,130,246,0.12)]">

            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-6 font-mono text-sm">

              <div>
                <span className="text-blue-500">$</span>{" "}
                <span className="text-zinc-500">whoami</span>

                <p className="text-white mt-2">
                  d3ad0x1
                </p>
              </div>

              <div>
                <span className="text-blue-500">$</span>{" "}
                <span className="text-zinc-500">specialization</span>

                <ul className="mt-3 space-y-2 text-zinc-300">
                  <li>• Web Pentest</li>
                  <li>• Active Directory</li>
                  <li>• Infrastructure</li>
                  <li>• Linux</li>
                  <li>• Networking</li>
                </ul>
              </div>

              <div>
                <span className="text-blue-500">$</span>{" "}
                <span className="text-zinc-500">status</span>

                <p className="text-green-400 mt-2">
                  online
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}