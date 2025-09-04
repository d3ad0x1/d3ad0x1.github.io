import React from 'react';
import TechnologyCard from './TechnologyCard';
import { FaReact, FaDatabase, FaRocket } from 'react-icons/fa';

const Technologies = () => {
  const cards = [
    {
      icon: <FaReact />,
      title: 'React & Node.js',
      description: 'Frontend framework and backend runtime environment',
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-400'
    },
    {
      icon: <FaDatabase />,
      title: 'Databases',
      description: 'Relational database management (MySQL, SQLite3)',
      gradient: 'bg-gradient-to-r from-green-400 to-green-600'
    },
    {
      icon: <FaRocket />,
      title: 'DevOps',
      description: 'Continuous integration, deployment, and version control',
      gradient: 'bg-gradient-to-r from-purple-500 to-purple-700'
    }
  ];

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Technologies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
};

export default Technologies;
