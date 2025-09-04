import React from 'react';

const ToolsEnvironment = () => {
  const items = ['VS Code', 'Git', 'Docker'];

  return (
    <div className="w-1/3 p-6 border-2 rounded-xl bg-gray-800 border-purple-700 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Tools & Environment</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-purple-400">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsEnvironment;
