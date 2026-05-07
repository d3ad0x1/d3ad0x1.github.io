import { motion } from "framer-motion";

export default function TerminalSection() {
  return (
    <section className="relative py-32 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <span className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            Terminal
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Interactive Console
          </h2>
        </div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0b0b0b]/80 backdrop-blur-xl border border-zinc-800 rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.12)]"
        >

          {/* Topbar */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-800 bg-zinc-950">

            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />

            <span className="ml-4 text-zinc-500 text-sm font-mono">
              root@d3ad0x1:~
            </span>

          </div>

          {/* Content */}
          <div className="p-8 md:p-12 font-mono text-sm md:text-base space-y-10">

            {/* whoami */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">$</span>

                <span className="text-zinc-400">
                  whoami
                </span>
              </div>

              <p className="text-white mt-4 pl-6">
                d3ad0x1
              </p>
            </div>

            {/* skills */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">$</span>

                <span className="text-zinc-400">
                  skills
                </span>
              </div>

              <div className="mt-4 pl-6 grid md:grid-cols-2 gap-3 text-zinc-300">

                <div>• Web Pentesting</div>
                <div>• Active Directory</div>
                <div>• Infrastructure Security</div>
                <div>• Linux Administration</div>
                <div>• Networking</div>
                <div>• Docker & Containers</div>

              </div>
            </div>

            {/* current focus */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">$</span>

                <span className="text-zinc-400">
                  current_focus
                </span>
              </div>

              <p className="text-zinc-300 mt-4 pl-6 leading-8">
                Offensive security research, infrastructure tooling,
                telecom systems and automation.
              </p>
            </div>

            {/* status */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">$</span>

                <span className="text-zinc-400">
                  status
                </span>
              </div>

              <p className="text-green-400 mt-4 pl-6">
                online
              </p>
            </div>

            {/* cursor */}
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-blue-500">$</span>

              <span className="animate-pulse">
                █
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}