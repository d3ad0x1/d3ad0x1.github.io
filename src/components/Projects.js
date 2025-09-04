export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-primary mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-background rounded-lg border border-gray-700 hover:border-primary transition">
          <h3 className="text-2xl font-semibold text-secondary mb-2">Project One</h3>
          <p className="text-textGray">A cool project built with React and TailwindCSS.</p>
        </div>
        <div className="p-6 bg-background rounded-lg border border-gray-700 hover:border-primary transition">
          <h3 className="text-2xl font-semibold text-secondary mb-2">Project Two</h3>
          <p className="text-textGray">Another awesome project with modern design.</p>
        </div>
      </div>
    </section>
  );
}