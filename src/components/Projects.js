import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Dockdash",
    description:
      "Terminal-inspired Docker dashboard for managing containers, images and infrastructure environments with a modern UI.",
    tech: [
      "Docker",
      "React",
      "FastAPI",
      "Infrastructure",
    ],
    github: "https://github.com/d3ad0x1/Dockdash",
  },

  {
    id: "02",
    title: "ufw-watch",
    description:
      "Lightweight monitoring utility for real-time UFW log analysis with colored alerts and infrastructure visibility.",
    tech: [
      "Linux",
      "UFW",
      "Security",
      "Bash",
    ],
    github: "https://github.com/d3ad0x1/ufw-watch",
  },

  {
    id: "03",
    title: "ufw-auto-block",
    description:
      "Automated firewall blocking tool for detecting suspicious activity and dynamically banning malicious IP ranges.",
    tech: [
      "Automation",
      "Linux",
      "Firewall",
      "Security",
    ],
    github: "https://github.com/d3ad0x1/ufw-auto-block",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-24">
          <span className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            Projects
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Featured Security & Infrastructure Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="group bg-[#0b0b0b]/80 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-10 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition"
            >

              <div className="grid lg:grid-cols-[120px_1fr] gap-10">

                {/* Number */}
                <div className="flex lg:justify-center">
                  <div className="w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 text-2xl font-bold">
                    {project.id}
                  </div>
                </div>

                {/* Content */}
                <div>

                  <h3 className="text-4xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-lg leading-8 mt-6 max-w-3xl">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mt-8">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-10">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-blue-500 hover:bg-blue-400 transition rounded-2xl text-white font-medium shadow-[0_0_30px_rgba(59,130,246,0.25)]"
                    >
                      View Project
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}