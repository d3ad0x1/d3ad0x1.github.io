import React from "react";
import TechnologyCard from "./TechnologyCard";
import { FaDocker, FaChartLine, FaGitAlt } from "react-icons/fa";

const Technologies = () => {
  const cards = [
    {
      icon: <FaDocker />,
      title: "Docker & Containers",
      description:
        "Containerization, virtualization, and scalable deployments",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-400",
    },
    {
      icon: <FaChartLine />,
      title: "Monitoring & Metrics",
      description:
        "Zabbix, Prometheus, and Grafana for infrastructure monitoring",
      gradient: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
      icon: <FaGitAlt />,
      title: "Version Control & CI/CD",
      description: "Git, automation pipelines, and continuous delivery",
      gradient: "bg-gradient-to-r from-purple-500 to-purple-700",
    },
  ];

  return (
    <section
      id="technologies"
      className="py-12 px-6 max-w-[1400px] mx-auto bg-background"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-6">
        Technologies
      </h2>
      <p className="text-textMuted mb-8 max-w-2xl">
        Tools and platforms I rely on to build resilient, observable, and
        maintainable systems.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <TechnologyCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            gradient={card.gradient}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
