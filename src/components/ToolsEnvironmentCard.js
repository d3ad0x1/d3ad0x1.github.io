import React from 'react';

const ToolsEnvironmentCard = ({ icon, title, description, gradient }) => {
  return (
    <div className="flex flex-col p-6 rounded-2xl bg-background border border-gray-700 hover:border-primary shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${gradient} text-white text-xl`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-secondary mb-2">{title}</h3>
      <p className="text-textGray text-sm">{description}</p>
    </div>
  );
};

export default ToolsEnvironmentCard;
