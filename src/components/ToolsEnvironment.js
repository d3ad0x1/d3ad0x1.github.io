import React from "react";
import ToolsEnvironmentCard from "./ToolsEnvironmentCard";
import { FaLinux, FaNetworkWired, FaCogs } from "react-icons/fa";

const ToolsEnvironment = () => {
  const cards = [
    {
      icon: <FaLinux />,
      title: "Linux CLI",
      description:
        "Core environment for system administration and server management",
      gradient: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      icon: <FaNetworkWired />,
      title: "Networking Tools",
      description:
        "SSH, iptables, nmap, and troubleshooting network infrastructure",
      gradient: "bg-gradient-to-r from-blue-600 to-indigo-700",
    },
    {
      icon: <FaCogs />,
      title: "Ansible & Automation",
      description: "Configuration management and automated deployments",
      gradient: "bg-gradient-to-r from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="tools-environment"
      className="py-12 px-6 max-w-[1400px] mx-auto bg-background"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-textMuted mb-6">
        Tools & Environment
      </h2>
      <p className="text-textMuted mb-8 max-w-2xl">
        Day-to-day tools I use to keep systems stable, secure, and easy to
        operate.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <ToolsEnvironmentCard
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

export default ToolsEnvironment;
