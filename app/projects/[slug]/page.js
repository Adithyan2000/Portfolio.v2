import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "../../components/ProjectVisual";
import ProjectCard from "../../components/ProjectCard";
import { getProject, projects } from "../../data/projects";
import "../projects.css";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((item) => item.slug !== slug);

  return (
    <main id="main-content" className="container project-detail-page">
      <nav aria-label="Breadcrumb" className="project-breadcrumb">
        <Link href="/projects">Projects</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{project.title}</span>
      </nav>

      <header className="project-detail-header">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="project-detail-description">{project.description}</p>
        <div className="project-detail-actions">
          <a
            className="button button-primary"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View source on GitHub
          </a>
          {project.demo && (
            <a
              className="button button-secondary"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          )}
          <span
            className={`project-detail-status${project.kind === "api" ? " project-detail-status-active" : ""}`}
          >
            {project.status}
          </span>
        </div>
      </header>

      <div
        className={`project-detail-visual project-detail-visual-${project.kind}`}
      >
        <ProjectVisual kind={project.kind} />
      </div>

      <div className="project-story-layout">
        <aside className="project-facts" aria-label="Project information">
          <div>
            <h2>Built with</h2>
            <ul className="tag-list" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Project type</h2>
            <p>
              {project.kind === "api"
                ? "Backend learning project"
                : "Personal project"}
            </p>
          </div>
          <div>
            <h2>Follow the work</h2>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-text-link"
            >
              Browse the repository
            </a>
          </div>
        </aside>

        <div className="project-story">
          <section aria-labelledby="project-overview-heading">
            <p className="eyebrow">The idea</p>
            <h2 id="project-overview-heading">
              {project.kind === "api"
                ? "Beyond the interface."
                : "A small idea, made tangible."}
            </h2>
            <p>{project.intro}</p>
          </section>

          <section aria-labelledby="project-features-heading">
            <h2 id="project-features-heading">What’s inside</h2>
            <ul className="project-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section
            className="project-learning"
            aria-labelledby="project-learning-heading"
          >
            <p className="eyebrow">Learning by building</p>
            <h2 id="project-learning-heading">What I’m exploring</h2>
            <ul>
              {project.learning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.kind === "api" && (
              <p className="project-learning-note">
                This is an ongoing learning project. The repository documents
                the implementation as it develops.
              </p>
            )}
          </section>
        </div>
      </div>

      <section className="project-more" aria-labelledby="more-projects-heading">
        <div className="projects-collection-heading">
          <h2 id="more-projects-heading">More things I’ve built</h2>
          <Link href="/projects" className="projects-text-link">
            All projects
          </Link>
        </div>
        <div className="project-more-grid">
          {otherProjects.map((item) => (
            <ProjectCard key={item.slug} project={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
