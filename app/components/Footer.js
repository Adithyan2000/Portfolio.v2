export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-gradient-to-t from-transparent to-slate-900/40">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Adithyan K S
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Adithyan2000/Portfolio.v2"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/50"
            aria-label="GitHub"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-slate-200"
            >
              <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.92 3.18 9.09 7.59 10.56.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.96-3.09.67-3.74-1.49-3.74-1.49-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.07-.67.07-.67 1.09.08 1.66 1.12 1.66 1.12.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.43-2.21 1.12-2.99-.11-.28-.49-1.42.11-2.96 0 0 .92-.29 3.02 1.12a10.45 10.45 0 0 1 2.75-.37c.93 0 1.87.12 2.75.37 2.09-1.41 3.01-1.12 3.01-1.12.6 1.54.22 2.68.11 2.96.7.78 1.12 1.77 1.12 2.99 0 4.28-2.61 5.23-5.09 5.51.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.77.53C19.07 20.83 22.25 16.66 22.25 11.75 22.25 5.48 17.27.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/adithyanks2000/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/50"
            aria-label="LinkedIn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-slate-200"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.98H4.7V24H.3zM8.98 8.98h4.03v2.07h.06c.56-1.06 1.93-2.18 3.98-2.18 4.26 0 5.05 2.8 5.05 6.44V24h-4.4v-8.15c0-1.94-.03-4.44-2.71-4.44-2.71 0-3.12 2.11-3.12 4.29V24H8.98z" />
            </svg>
          </a>

          <a
            href="mailto:ksadithyan.mec@gmail.com"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/50"
            aria-label="Email"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-slate-200"
            >
              <path d="M12 13.5L.75 5.25V18c0 1.1.9 2 2 2h18.5c1.1 0 2-.9 2-2V5.25L12 13.5zM12 11L23.25 3H.75L12 11z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
