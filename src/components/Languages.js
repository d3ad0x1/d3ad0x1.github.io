import React from "react";
import LanguagesCard from "./LanguagesCard";
import { FaLinux, FaPython, FaPhp, FaTerminal } from "react-icons/fa";

const Languages = () => {
  const cards = [
    {
      icon: <FaLinux />,
      title: "Unix & Linux Systems",
      description:
        "System administration, server management, and shell environments",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-400",
    },
    {
      icon: <FaTerminal />,
      title: "Shell scripting",
      description: "Automation, system tasks, and DevOps workflows",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-600",
    },
    {
      icon: (
        <div className="flex gap-2">
          <FaPhp />
          <FaPython />
        </div>
      ),
      title: "PHP & Python",
      description: "Web backend development and scripting",
      gradient: "bg-gradient-to-r from-purple-500 to-purple-700",
    },
  ];

  return (
    <section
      id="languages"
      className="py-12 px-6 max-w-[1400px] mx-auto bg-background"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-6">
        Languages
      </h2>
      <p className="text-textMuted mb-8 max-w-2xl">
        Core technologies I use daily for building reliable backend systems,
        automation, and infrastructure tooling.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <LanguagesCard
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

export default Languages;
