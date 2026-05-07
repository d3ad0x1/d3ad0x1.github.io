import { motion } from "framer-motion";

export default function SecurityProfiles() {
  return (
    <section className="py-32 bg-[#050505]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">

          <span className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            Platforms
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Security Platforms
          </h2>

        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

            {/* THM */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#0b0b0b]/80 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-10 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.12)] transition"
            >

            {/* Header */}
            <div className="flex items-center justify-between mb-10">

                <div>

                <span className="uppercase tracking-widest text-zinc-500 text-sm">
                    TryHackMe
                </span>

                <h3 className="text-4xl font-bold text-white mt-4">
                    d3ad0x1
                </h3>

                <p className="text-zinc-500 mt-3">
                    [0xE][GUARDIAN]
                </p>

                </div>

                {/* Avatar */}
                <img
                src="https://avatars.githubusercontent.com/u/229807023?v=4"
                alt="avatar"
                className="w-24 h-24 rounded-3xl border border-zinc-800 object-cover"
                />

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">

                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-zinc-500 text-sm">
                    Global Rank
                </p>

                <h4 className="text-3xl font-bold text-white mt-3">
                    #6688
                </h4>

                <p className="text-green-400 text-sm mt-2">
                    Top 1%
                </p>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-zinc-500 text-sm">
                    Completed Rooms
                </p>

                <h4 className="text-3xl font-bold text-white mt-3">
                    244
                </h4>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-zinc-500 text-sm">
                    Badges
                </p>

                <h4 className="text-3xl font-bold text-white mt-3">
                    25
                </h4>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-zinc-500 text-sm">
                    Streak
                </p>

                <h4 className="text-3xl font-bold text-orange-400 mt-3">
                    3 Days
                </h4>
                </div>

            </div>

            {/* Button */}
            <a
                href="https://tryhackme.com/p/d3ad0x1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-blue-500 hover:bg-blue-400 transition rounded-2xl text-white font-medium shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
                View Profile →
            </a>

            </motion.div>

          {/* HTB */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0b0b0b]/80 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-10 hover:border-green-500/40 hover:shadow-[0_0_50px_rgba(34,197,94,0.12)] transition"
          >

            <div className="flex items-center justify-between mb-10">

              <div>

                <span className="uppercase tracking-widest text-zinc-500 text-sm">
                  HackTheBox
                </span>

                <h3 className="text-4xl font-bold text-white mt-4">
                  d3ad0x1
                </h3>

              </div>

              <div className="w-16 h-16 rounded-3xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 text-2xl font-bold">
                HTB
              </div>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-zinc-500 text-sm">
                  Rank
                </p>

                <h4 className="text-3xl font-bold text-white mt-3">
                  Hacker
                </h4>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-zinc-500 text-sm">
                  Machines
                </p>

                <h4 className="text-3xl font-bold text-white mt-3">
                  45
                </h4>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-zinc-500 text-sm">
                  Challenges
                </p>

                <h4 className="text-3xl font-bold text-white mt-3">
                  22
                </h4>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-zinc-500 text-sm">
                  Status
                </p>

                <h4 className="text-3xl font-bold text-green-400 mt-3">
                  Active
                </h4>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}