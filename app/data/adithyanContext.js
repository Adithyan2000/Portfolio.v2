import { projects } from "./projects";

export const adithyanContext = {
  name: "Adithyan K S",

  role: "Frontend Engineer",

  currentFocus:
    "Learning Python backend development through a FastAPI todo application with authentication, SQLAlchemy, SQLite, Pydantic, and Alembic migrations. This is an ongoing learning project.",

  github: "https://github.com/Adithyan2000",

  personalProjects: projects.map(
    ({ title, description, tags, github, status, features }) => ({
      name: title,
      description,
      technologies: tags,
      github,
      status,
      features,
    }),
  ),

  experience: "3 years of professional experience",

  previousCompany: "dbiz.ai",

  previousLocation: "Kochi",

  preferredLocation: "Bangalore",

  salaryExpectation: "10 LPA",

  skills: [
    "React.js",
    "JavaScript",
    "Redux Toolkit",
    "HTML",
    "CSS",
    "Next.js",
    "Drupal CMS",
  ],

  projects: [
    {
      name: "Employee Experience Platform",
      period: "March 2023 - July 2026",
      description: "Enterprise survey platform for HR teams.",
      technologies: ["React.js", "Redux", "REST APIs"],
      contributions: [
        "Built 20+ reusable React components",
        "Developed forms, tables, modals, and UI components",
        "Implemented component memoization",
        "Implemented lazy loading",
      ],
    },

    {
      name: "Feedback360 Analytics Platform",
      description: "Interactive employee performance dashboards.",
      technologies: ["React.js", "Redux", "Ant Design Charts"],
      contributions: [
        "Implemented filtering",
        "Implemented search",
        "Implemented pagination for large datasets",
        "Implemented PDF export",
        "Implemented PowerPoint export",
        "Built reusable dashboard widgets",
      ],
    },

    {
      name: "Survey Management Portal",
      description:
        "Multi-step survey creation and questionnaire management platform.",
      technologies: ["React Hooks", "Redux", "JavaScript"],
      contributions: [
        "Built multi-step survey creation workflow",
        "Implemented dynamic questionnaire management",
        "Implemented autosave",
        "Implemented role-based access control for admins and managers",
        "Optimized rendering of forms with 100+ configurable fields",
      ],
    },
  ],
};
