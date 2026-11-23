import Link from "next/link";
import ProjectVisual from "./ProjectVisual";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="project-visual-link"
        aria-label={`Explore ${project.title}`}
      >
        <ProjectVisual kind={project.kind} />
      </Link>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span
            className={
              project.kind === "api"
                ? "project-status is-current"
                : "project-status"
            }
          >
            {project.kind === "api" && <span className="status-dot" />}
            {project.status}
          </span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.tags.slice(0, 4).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-card-links">
          <Link href={`/projects/${project.slug}`}>Explore project</Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
          >
            <GithubIcon /> Source code
          </a>
        </div>
      </div>
    </article>
  );
}
