import React, { useEffect, useState } from 'react';
import { FaCodeBranch, FaStar } from 'react-icons/fa';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const username = "d3ad0x1"; // 🔹 твой GitHub username

  // Список репозиториев, которые НЕ надо выводить
  const excludeRepos = ["d3ad0x1.github.io", "old-test", "secret-project"];

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`)
      .then((res) => res.json())
      .then((data) => {
        // Фильтруем по исключённым
        const filtered = data.filter(
          (repo) => !excludeRepos.includes(repo.name)
        );
        setRepos(filtered);
      })
      .catch((err) => console.error(err));
  }, [username]);

  return (
    <section id="projects" className="py-20 px-6 max-w-[1400px] mx-auto bg-background">
      <h2 className="text-4xl font-bold text-primary mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="flex flex-col p-6 rounded-2xl bg-background border border-gray-700 hover:border-primary shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-lg font-bold text-secondary mb-2">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h3>
            <p className="text-textGray text-sm flex-grow">
              {repo.description || "No description provided."}
            </p>
            <div className="flex items-center justify-between mt-4 text-sm text-textGray">
              <span className="flex items-center gap-2">
                <FaStar /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-2">
                <FaCodeBranch /> {repo.forks_count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
