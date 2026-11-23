import { SearchIcon } from "./Icons";

export default function ProjectVisual({ kind }) {
  if (kind === "api")
    return (
      <div
        className="project-visual visual-api"
        role="img"
        aria-label="Illustrative FastAPI request panel showing todo API routes"
      >
        <div className="api-window">
          <div className="window-bar">
            <span className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>todo-api / routes</span>
            <span className="window-label">PYTHON</span>
          </div>
          <div className="api-route">
            <b>POST</b>
            <code>/auth/login</code>
            <span>JWT</span>
          </div>
          <div className="api-route">
            <b className="method-get">GET</b>
            <code>/todos</code>
            <span>JSON</span>
          </div>
          <div className="api-route">
            <b>POST</b>
            <code>/todos</code>
            <span>JSON</span>
          </div>
          <div className="api-code">
            <span className="code-comment">
              # small steps, stronger foundations
            </span>
            <br />
            <span className="code-keyword">from</span> fastapi{" "}
            <span className="code-keyword">import</span> FastAPI
            <br />
            <span className="code-plain">app = FastAPI()</span>
          </div>
        </div>
        <span className="visual-caption">API illustration</span>
      </div>
    );
  if (kind === "search")
    return (
      <div
        className="project-visual visual-search"
        role="img"
        aria-label="Illustrative AI search interface with suggested queries"
      >
        <div className="search-window">
          <div className="mock-search">
            <SearchIcon />
            <span>how to build</span>
            <span className="mock-caret" aria-hidden="true" />
            <kbd>AI</kbd>
          </div>
          <div className="mock-suggestions">
            <div>
              <SearchIcon />
              <span>how to build a REST API</span>
            </div>
            <div>
              <SearchIcon />
              <span>how to build with React</span>
            </div>
            <div>
              <SearchIcon />
              <span>how to build something useful</span>
            </div>
          </div>
        </div>
        <span className="visual-caption">Interface illustration</span>
      </div>
    );
  return (
    <div
      className="project-visual visual-portfolio"
      role="img"
      aria-label="Illustrative preview of the portfolio’s minimal layout"
    >
      <div className="portfolio-window">
        <div className="mini-nav">
          <strong>a.</strong>
          <span>work &nbsp; about &nbsp; contact</span>
        </div>
        <div className="mini-hero">
          <span>DEVELOPER PORTFOLIO</span>
          <strong>
            Good ideas.
            <br />
            <em>Thoughtfully built.</em>
          </strong>
          <i />
        </div>
        <div className="mini-projects">
          <div />
          <div />
          <div />
        </div>
      </div>
      <span className="visual-caption">Interface illustration</span>
    </div>
  );
}
