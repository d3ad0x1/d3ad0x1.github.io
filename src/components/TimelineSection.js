import { motion } from "framer-motion";

const timelineItems = [
  {
    id: "01",
    category: "Experience",
    title: "Infrastructure & System Administration",
    description:
      "Managing Linux servers, Docker infrastructure, networking and enterprise systems.",
  },
  {
    id: "02",
    category: "Pentesting",
    title: "Web & Infrastructure Security",
    description:
      "Web application testing, Active Directory enumeration and infrastructure assessment.",
  },
  {
    id: "03",
    category: "Development",
    title: "React / PHP / Automation",
    description:
      "Building internal systems, telecom tools and automation platforms.",
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative py-32 bg-[#050505]"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="mb-24">
          <span className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            Timeline
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Experience & Skills
          </h2>
        </div>

        <div className="space-y-24">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-20 border-l border-zinc-800"
            >
              {/* Number */}
              <div className="absolute -left-6 top-0 w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold shadow-lg">
                {item.id}
              </div>

              {/* Content */}
              <span className="uppercase tracking-widest text-zinc-500 text-sm">
                {item.category}
              </span>

              <h3 className="text-4xl font-bold text-white mt-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-lg leading-8 mt-6 max-w-3xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}