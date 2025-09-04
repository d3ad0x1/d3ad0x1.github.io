import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold text-primary mb-4"
      >
        Hello, I'm d3ad0x1
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-xl text-textGray max-w-xl"
      >
        I build modern web apps with React and love minimalistic design.
      </motion.p>
    </section>
  );
}
