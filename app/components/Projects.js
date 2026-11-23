import Link from "next/link";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="selected-work"
      className="section container"
      aria-labelledby="work-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="work-heading">A few things I’ve built.</h2>
        </div>
        <Link className="text-link" href="/projects">
          View all projects <span className="count-label">03</span>
        </Link>
      </div>
      <p className="section-description">
        From the first interaction to the API behind it. A collection of
        personal projects and things I’m learning along the way.
      </p>
      <div className="project-grid">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
