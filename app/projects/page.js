import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "./projects.css";

export const metadata = {
  title: "Projects",
  description:
    "Explore Adithyan’s projects: a Python and FastAPI backend, AI search autocomplete, and a Next.js portfolio.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="container projects-page">
      <header className="projects-intro">
        <p className="eyebrow">Projects & experiments</p>
        <h1>
          Built with curiosity.
          <br />
          <span>Improved with practice.</span>
        </h1>
        <div className="projects-intro-bottom">
          <p>
            From thoughtful interfaces to the APIs behind them. A selection of
            personal projects, experiments, and work in progress.
          </p>
          <a
            className="button button-secondary"
            href="https://github.com/Adithyan2000"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore my GitHub
          </a>
        </div>
      </header>

      <section
        className="projects-current"
        aria-labelledby="current-focus-heading"
      >
        <div>
          <p className="projects-focus-label">Current focus</p>
          <h2 id="current-focus-heading">Going deeper with Python.</h2>
        </div>
        <p>
          I’m learning backend development by building a FastAPI application:
          working with authentication, relational data, and database migrations.
        </p>
        <Link href="/projects/fastapi-backend" className="projects-text-link">
          Explore the backend project
        </Link>
      </section>

      <section
        className="projects-collection"
        aria-labelledby="project-collection-heading"
      >
        <div className="projects-collection-heading">
          <h2 id="project-collection-heading">Selected projects</h2>
          <span>Always a work in progress.</span>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
