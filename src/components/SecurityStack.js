import { motion } from "framer-motion";

const stack = [
  {
    title: "Web Pentesting",
    description:
      "Burp Suite, ffuf, OWASP, authentication testing, API assessment",
  },
  {
    title: "Infrastructure",
    description:
      "Linux servers, Docker, virtualization, networking and hardening",
  },
  {
    title: "Active Directory",
    description:
      "SMB enumeration, Kerberos, BloodHound, privilege escalation",
  },
  {
    title: "Monitoring",
    description:
      "Zabbix, Grafana, observability and infrastructure analysis",
  },
  {
    title: "Development",
    description:
      "React, PHP, Python, automation and internal tooling",
  },
  {
    title: "Telecom",
    description:
      "GPON, OLT systems, splitters and telecom infrastructure",
  },
];

export default function SecurityStack() {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20">
          <span className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            Stack
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Offensive Security Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {stack.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group bg-[#0b0b0b]/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)] transition"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 text-xl font-bold">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-bold text-white mt-8">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-8 mt-5">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}