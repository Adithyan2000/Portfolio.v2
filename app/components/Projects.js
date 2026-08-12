function Projects() {
  const projectList = [
    {
      name: "Employee Experience Platform",
      desc: "Enterprise survey platform for HR teams to create, publish and analyze employee feedback surveys.",
      tech: ["React.js", "Redux", "REST APIs"],
    },
    {
      name: "Feedback360 Analytics Platform",
      desc: "Interactive employee performance dashboards with search, filtering, and export workflows.",
      tech: ["React.js", "Redux", "Ant Design", "jsPDF"],
    },
    {
      name: "Survey Management Portal",
      desc: "Multi-step survey creation workflow with dynamic questionnaires and role-based access.",
      tech: ["React", "Redux Hooks", "JavaScript"],
    },
  ];

  return (
    <section id="projects" className="px-6 pb-24 pt-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300/80">
            Selected work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Projects built with clarity and scale.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            A showcase of modern frontend applications with thoughtful UX,
            reusable architecture, and polished delivery.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40"
            >
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300/85">
                Featured project
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {project.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700/70 bg-slate-950/80 px-3 py-1 text-[0.78rem] font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
