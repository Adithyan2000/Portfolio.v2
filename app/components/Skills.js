function Skills() {
  const skills = [
    "React.js",
    "JavaScript",
    "Redux Toolkit",
    "HTML/CSS",
    "Drupal",
    "Responsive Design",
  ];

  return (
    <section className="px-6 pt-8 pb-0 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300/80">
            Skills & expertise
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Built for modern frontend work.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Core technologies and capabilities used to craft polished,
            high-performance web applications.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="rounded-[1.5rem] border border-slate-800/90 bg-slate-900/85 p-5 text-center shadow-[0_15px_40px_-32px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-sky-500/10 motion-reduce:transition-none animate-[fadeInUp_0.45s_ease-out_forwards] opacity-0"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className="text-base font-semibold text-slate-100">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
