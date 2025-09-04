import React from 'react';

const TechnologyCard = ({ icon, title, description, gradient }) => {
  return (
    <div className={`flex flex-col p-6 rounded-2xl bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${gradient} text-white text-xl`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default TechnologyCard;
