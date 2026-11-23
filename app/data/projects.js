export const projects = [
  {
    slug: "fastapi-backend",
    title: "FastAPI Backend",
    category: "Python · Backend development",
    status: "Currently building",
    description:
      "Learning the other side of the stack: a Python API for users and todos, with authentication, relational data, and migrations.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "SQLite"],
    github: "https://github.com/Adithyan2000/fastapi-learning-journey",
    demo: null,
    kind: "api",
    intro:
      "A hands-on learning project that takes a simple todo app beyond the interface. I’m building the API layer, connecting it to a relational database, and learning how authentication and ownership shape backend behavior.",
    features: [
      "Registration and login with password hashing and JWT bearer tokens.",
      "User CRUD endpoints and todo creation, listing, completion, and deletion.",
      "SQLAlchemy models with a one-to-many relationship between users and todos.",
      "Ownership checks on protected todo operations and Pydantic request and response models.",
      "Alembic database migrations, including cascading deletes for a user’s todos.",
    ],
    learning: [
      "Designing clear API routes and choosing meaningful HTTP responses.",
      "Connecting authentication, authorization, and database relationships.",
      "Evolving a database schema without losing track of changes.",
    ],
  },
  {
    slug: "ai-search",
    title: "AI Search Autocomplete",
    category: "AI · Frontend experiment",
    status: "Personal project",
    description:
      "A focused search experience that turns a partial query into useful suggestions with a little help from AI.",
    tags: ["Next.js", "React", "Tailwind CSS", "OpenRouter"],
    github: "https://github.com/Adithyan2000/ai-search-autocomplete",
    demo: "https://ai-search-autocomplete.vercel.app",
    kind: "search",
    intro:
      "An exploration of how a small AI interaction can make an interface more useful. Type a query, pause for a moment, and choose from generated suggestions in a simple, responsive search UI.",
    features: [
      "A 500 ms input debounce that waits for a pause before requesting suggestions.",
      "A Next.js API route that requests generated suggestions through OpenRouter.",
      "Selectable suggestions that fill the search field with a single click.",
      "Loading feedback, responsive styling, and a light and dark theme toggle.",
    ],
    learning: [
      "Handling asynchronous API requests in a React interface.",
      "Keeping API credentials in server-side environment variables.",
      "Balancing useful feedback with a minimal search experience.",
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio v2",
    category: "Web · Personal portfolio",
    status: "Evolving project",
    description:
      "A home for my work, what I’m learning, and the next things I’m building. Made with Next.js and an AI assistant.",
    tags: ["Next.js", "React", "CSS", "OpenRouter"],
    github: "https://github.com/Adithyan2000/Portfolio.v2",
    demo: "https://portfolio-v2-sage-three.vercel.app",
    kind: "portfolio",
    intro:
      "This portfolio brings my frontend experience and current backend learning together. It is a place to explore my projects, read about the ideas behind them, and get in touch.",
    features: [
      "A responsive home page with dedicated project overview and detail pages.",
      "Direct links to project repositories, demos, and my GitHub profile.",
      "An AI assistant that answers questions using my portfolio context.",
      "Subtle interaction feedback and support for reduced-motion preferences.",
    ],
    learning: [
      "Building a consistent visual system across a Next.js application.",
      "Organizing project content for reuse across pages.",
      "Keeping a personal website clear, accessible, and easy to explore.",
    ],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
