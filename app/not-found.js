import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="container section">
      <p className="eyebrow">Page not found</p>
      <div className="section-heading">
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            letterSpacing: "-.055em",
            lineHeight: 1.2,
            marginTop: 20,
          }}
        >
          Nothing here. Plenty to explore.
        </h1>
      </div>
      <p className="section-description">
        This page doesn’t exist, but the next project is just a click away.
      </p>
      <Link className="button button-primary" href="/projects">
        Explore projects
      </Link>
    </main>
  );
}
