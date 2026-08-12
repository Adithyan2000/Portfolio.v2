import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ChatbotPopup from "./components/ChatbotPopup";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <Hero />
      <main className="space-y-24">
        <Skills />
        <Projects />
      </main>
      <ChatbotPopup />
    </div>
  );
}
