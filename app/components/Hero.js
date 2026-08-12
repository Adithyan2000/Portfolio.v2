import Image from "next/image";

function Hero() {
  const bio =
    "Frontend Developer with nearly 3 years of experience building scalable, responsive interfaces using React.js and modern JavaScript. I create reusable component systems, integrate APIs, and deliver polished web experiences with strong attention to design and performance.";

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-24 sm:px-10 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-400/10 to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-8">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-sm shadow-slate-950/20">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
            Premium developer portfolio
          </span> */}

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">
              Frontend Developer
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Adithyan K S
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {bio}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-3xl border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/40 sm:max-w-md">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-fuchsia-500/10 opacity-60 transition-opacity duration-1000 group-hover:opacity-100" />
          <div className="relative space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-sky-500/30 shadow-lg sm:h-20 sm:w-20">
                <Image
                  src="/profile.jpg"
                  alt="Adithyan K S"
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm text-slate-400">Hello, I'm</p>
                <h3 className="text-lg font-semibold text-white">
                  Adithyan K S
                </h3>
                <p className="text-xs text-slate-400">Frontend Developer</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                Software strengths
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Polished UI systems
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "React.js",
                "Component Design",
                "Responsive Layouts",
                "API Integration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
