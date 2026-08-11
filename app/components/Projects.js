function Projects() {
  const projectList = [
    {
      name: "Employee Experience Platform",
      desc: "Enterprise survey platform for HR teams to create, publish and analyze employee feedback surveys",
      tech: ["React.js", "Redux", "REST APIs"],
    },
    {
      name: "Feedback360 Analytics Platform",
      desc: "Interactive employee performance dashboards with filtering, search, pagination and export functionality",
      tech: ["React.js", "Redux", "Ant Design", "jsPDF"],
    },
    {
      name: "Survey Management Portal",
      desc: "Multi-step survey creation workflow with dynamic questionnaire management and role-based access",
      tech: ["React", "Redux Hooks", "JavaScript"],
    },
  ];
  return (
    <div className="bg-gray-900 py-20 px-6 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {projectList.map((project) => (
          <div className="bg-gray-800 p-6 rounded-lg" key={project.name}>
            <div className="text-2xl font-bold mb-4">{project.name}</div>
            <div className="text-gray-300 mb-4">{project.desc}</div>
            <div className="text-sm text-gray-400">
              {project.tech.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
