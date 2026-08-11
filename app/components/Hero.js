function Hero() {
  const bio =
    "Frontend Developer with nearly 3 years of professional experience, specializing in building scalable and responsive user interfaces using React.js and JavaScript (ES6+) I have hands-on experience developing reusable React components, managing application state using Redux, and integrating REST APIs to deliver performant web applications. I focus on clean UI architecture, component reusability, and maintainable frontend code. Alongside frontend development, I have experience working with backend and CMS-driven systems and am currently strengthening my skills in Node.js and Express to move into Full Stack (React + Node.js) roles.";
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-20 gap-6">
      <h1 className="text-6xl">Adithyan K S</h1>
      <h2 className="text-2xl">Frontend Developer</h2>
      <p className="text-lg"> {bio}</p>
      <a
        href="/resume.pdf"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Download
      </a>
    </div>
  );
}

export default Hero;
