import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-[#050505]"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            Contact
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Let's Connect
          </h2>

          <p className="text-zinc-400 text-lg leading-8 mt-8 max-w-2xl mx-auto">
            Open for collaboration, infrastructure projects,
            offensive security discussions and pentesting work.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">

            {/* Telegram */}
            <a
              href="https://t.me/d3ad0x1"
              target="_blank"
              rel="noreferrer"
              className="group bg-[#0b0b0b] border border-zinc-800 rounded-3xl p-8 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition"
            >
              <h3 className="text-2xl font-bold text-white">
                Telegram
              </h3>

              <p className="text-zinc-500 mt-4">
                @d3ad0x1
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/victor-litvinov-7a343526a"
              target="_blank"
              rel="noreferrer"
              className="group bg-[#0b0b0b]/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition"
            >
              <h3 className="text-2xl font-bold text-white">
                LinkedIn
              </h3>

              <p className="text-zinc-500 mt-4">
                Victor Litvinov
              </p>
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
}