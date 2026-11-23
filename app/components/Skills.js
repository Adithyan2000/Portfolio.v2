import Image from "next/image";

const skillGroups = [
  {
    title: "The frontend",
    subtitle: "Where I feel at home",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Redux",
      "HTML & CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "The backend",
    subtitle: "What I’m exploring",
    skills: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Pydantic",
      "Alembic",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="about"
      className="section about-section container"
      aria-labelledby="about-heading"
    >
      <div className="about-grid">
        <div className="about-profile">
          <div className="portrait-frame">
            <Image
              src="/profile.jpg"
              alt="Portrait of Adithyan K S"
              fill
              sizes="(max-width: 640px) 220px, 280px"
              className="portrait"
            />
          </div>
          <span className="portrait-caption">Adithyan K S / Developer</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A little about me</p>
          <h2 id="about-heading">
            Curious by nature.
            <br />A builder by practice.
          </h2>
          <p>
            I’m a frontend developer with around three years of experience
            turning complex requirements into interfaces that feel simple. My
            work spans reusable React components, analytics dashboards, and
            survey platforms.
          </p>
          <p>
            These days, I’m following that curiosity beyond the browser. I’m
            learning Python backend development by building a FastAPI todo API,
            working through authentication, data relationships, and migrations.
          </p>
          <a href="/resume.pdf" className="text-link resume-link" download>
            Download my résumé <span className="file-label">PDF</span>
          </a>
        </div>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-heading">
              <h3>{group.title}</h3>
              <span>{group.subtitle}</span>
            </div>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
