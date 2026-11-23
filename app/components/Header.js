"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Adithyan K S — home">
          <span className="brand-mark">
            a<span>.</span>
          </span>
          <span className="brand-name">
            adithyan<span className="muted"> / developer</span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          <Link
            href="/projects"
            aria-current={pathname.startsWith("/projects") ? "page" : undefined}
          >
            Projects
          </Link>
          <Link href="/#about">About</Link>
          <a className="nav-contact" href="mailto:ksadithyan.mec@gmail.com">
            Let’s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
