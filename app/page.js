import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ChatbotPopup from "./components/ChatbotPopup";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Skills />
      <Projects />
      <ChatbotPopup />
    </div>
  );
}