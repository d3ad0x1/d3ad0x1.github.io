import React, { useEffect, useState } from "react";
import { FaCodeBranch, FaStar } from "react-icons/fa";

const excludeRepos = ["d3ad0x1.github.io", "old-test", "secret-project"];

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const username = "d3ad0x1";

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (repo) => !excludeRepos.includes(repo.name)
        );
        setRepos(filtered);
      })
      .catch((err) => console.error(err));
  }, [username]);

  return (
    <section
      id="projects"
      className="py-12 px-6 max-w-[1400px] mx-auto bg-background"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-textHeading mb-6">
        Projects
      </h2>
      <p className="text-textMuted mb-8 max-w-2xl">
        A selection of public repositories that showcase my work with
        automation, security, monitoring, and infrastructure tooling.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="flex flex-col p-6 rounded-2xl bg-surface border border-borderSoft hover:border-primary/70 shadow-sm transform transition duration-300 hover:scale-[1.02] hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-textMain mb-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {repo.name}
              </a>
            </h3>
            <p className="text-textMuted text-sm flex-grow">
              {repo.description || "No description provided."}
            </p>
            <div className="flex items-center justify-between mt-4 text-sm text-textMuted">
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
