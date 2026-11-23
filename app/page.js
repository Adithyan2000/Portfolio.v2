import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
