const work = [
  {
    title: "Employee Experience Platform",
    description:
      "Reusable React components and responsive workflows for enterprise employee feedback.",
    tags: "React · Redux · REST APIs",
  },
  {
    title: "Feedback360 Analytics",
    description:
      "Interactive dashboards with search, filtering, and document export workflows.",
    tags: "React · Ant Design · Data visualization",
  },
  {
    title: "Survey Management Portal",
    description:
      "Multi-step forms, dynamic questionnaires, and role-based access for survey teams.",
    tags: "React Hooks · Redux · JavaScript",
  },
];

export default function Experience() {
  return (
    <section
      className="section container experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Professional experience</p>
          <h2 id="experience-heading">Built for real people.</h2>
        </div>
        <p className="experience-note">Frontend work at dbiz.ai</p>
      </div>
      <div className="experience-list">
        {work.map((item) => (
          <article className="experience-row" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.tags}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
