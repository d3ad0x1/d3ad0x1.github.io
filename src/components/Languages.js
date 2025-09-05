import React from 'react';
import TechnologyCard from './LanguagesCard';
import { FaReact, FaDatabase, FaRocket } from 'react-icons/fa';

const Technologies = () => {
  const cards = [
    {
      icon: <FaReact />,
      title: 'TypeScript & JavaScript',
      description: 'Frontend and backend web development',
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-400'
    },
    {
      icon: <FaDatabase />,
      title: 'Rust',
      description: 'High-performance and memory-safe systems programming',
      gradient: 'bg-gradient-to-r from-green-400 to-green-600'
    },
    {
      icon: <FaRocket />,
      title: 'PHP & Python',
      description: 'Web backend development and scripting',
      gradient: 'bg-gradient-to-r from-purple-500 to-purple-700'
    }
  ];

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Languages</h2>
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
