import React from 'react';

const Languages = () => {
  const items = ['JavaScript', 'TypeScript', 'Python'];

  return (
    <div className="w-1/3 p-6 border-2 rounded-xl bg-gray-800 border-yellow-500 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-yellow-500">Languages</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-yellow-400">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
