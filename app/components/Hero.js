import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-intro entrance">
        <Image
          src="/profile.jpg"
          alt="Adithyan K S"
          width={44}
          height={44}
          className="intro-avatar"
        />
        <span>Hi, I’m Adithyan. A developer who cares about the details.</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy entrance">
          <p className="eyebrow">Frontend developer · Exploring backend</p>
          <h1 id="hero-title">
            Thoughtful interfaces.
            <br />
            <span>Solid foundations.</span>
          </h1>
          <p className="hero-description">
            I build clean, intuitive experiences with React. Now, I’m going
            deeper with Python and FastAPI to understand what makes them work.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/projects">
              Explore my work
            </Link>
            <a
              className="button button-secondary"
              href="https://github.com/Adithyan2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>
        <div
          className="hero-system entrance"
          aria-label="Current focus: connecting frontend interfaces to Python APIs and databases"
        >
          <div className="system-heading">
            <span className="eyebrow">Connecting the pieces</span>
            <span className="system-symbol" aria-hidden="true">
              +
            </span>
          </div>
          <div className="system-node">
            <span className="node-icon" aria-hidden="true">
              &lt;/&gt;
            </span>
            <div>
              <strong>The interface</strong>
              <span>React · Next.js</span>
            </div>
            <span className="node-note">CRAFT</span>
          </div>
          <div className="system-connector" aria-hidden="true">
            <span />
            request / response
          </div>
          <div className="system-node node-active">
            <span className="node-icon" aria-hidden="true">
              {"{ }"}
            </span>
            <div>
              <strong>The backend</strong>
              <span>Python · FastAPI</span>
            </div>
            <span className="node-note">EXPLORING</span>
          </div>
          <div className="system-connector" aria-hidden="true">
            <span />
            models / migrations
          </div>
          <div className="system-node">
            <span className="node-icon" aria-hidden="true">
              ≡
            </span>
            <div>
              <strong>The data</strong>
              <span>SQLAlchemy · SQLite</span>
            </div>
          </div>
          <div className="system-caption">
            <span className="status-dot" /> Learning by building, one layer at a
            time.
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>Interfaces, APIs, and everything in between.</span>
        <a href="#selected-work">Take a look around</a>
      </div>
    </section>
  );
}
