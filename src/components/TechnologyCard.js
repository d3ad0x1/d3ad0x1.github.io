import React from "react";

const TechnologyCard = ({ icon, title, description, gradient }) => {
  return (
    <div className="flex flex-col p-6 rounded-2xl bg-surface border border-borderSoft hover:border-primary/70 shadow-sm transform transition duration-300 hover:scale-[1.02] hover:shadow-md">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${gradient} text-white text-xl`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-textMain mb-2">{title}</h3>
      <p className="text-textMuted text-sm">{description}</p>
    </div>
  );
};

export default TechnologyCard;
