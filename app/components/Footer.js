import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="contact-block">
          <div>
            <p className="eyebrow">Have something in mind?</p>
            <h2>
              Let’s make it happen<span>.</span>
            </h2>
            <p>
              A project, an opportunity, or a good conversation. My inbox is
              open.
            </p>
          </div>
          <a
            href="mailto:ksadithyan.mec@gmail.com"
            className="button button-primary"
          >
            Say hello
          </a>
        </div>
        <div className="footer-bottom">
          <Link href="/" className="footer-name">
            Adithyan K S<span>Thoughtfully built, always evolving.</span>
          </Link>
          <div className="footer-links">
            <a
              href="https://github.com/Adithyan2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adithyanks2000/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:ksadithyan.mec@gmail.com">Email</a>
          </div>
          <span className="copyright">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
