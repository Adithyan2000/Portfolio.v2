# Adithyan K S — Portfolio v2

A minimal developer portfolio built with Next.js 16, React 19, and Tailwind CSS 4. It brings frontend experience and an ongoing Python backend learning journey together.

## Pages

- `/` — introduction, selected projects, about, skills, and professional experience.
- `/projects` — personal project collection with GitHub links.
- `/projects/fastapi-backend` — current Python/FastAPI learning project.
- `/projects/ai-search` — AI Search Autocomplete.
- `/projects/portfolio` — this website.

The design uses a charcoal palette, green accents, subtle entrance and hover animations, and responsive layouts. Reduced-motion preferences are respected. The portfolio assistant uses a keyboard-accessible native dialog.

## Run locally

Use Node.js 20.9 or newer and npm.

```sh
git clone https://github.com/Adithyan2000/Portfolio.v2.git
cd Portfolio.v2
npm ci
npm run dev
```

Open http://localhost:3000.

For the optional assistant, create `.env.local`:

```env
OPENROUTER_API_KEY=your_api_key
```

Keep this key server-side. The site works without it; the assistant shows a retry/email fallback when unavailable. The existing chat route uses OpenRouter with `openai/gpt-oss-20b:free`.

## Build and check

```sh
npm run build
npm run start
npm run lint
```

## Update content

- `app/data/projects.js` is the shared source for project cards, detail pages, and personal project context in the assistant.
- `app/data/adithyanContext.js` contains professional background for the assistant.
- Home-page experience and skills live in `app/components/Experience.js` and `app/components/Skills.js`.
- `public/profile.jpg` and `public/resume.pdf` are the existing portrait and résumé.

Project previews are labeled illustrations, not live requests. The FastAPI project is described as ongoing learning work.

## Links

- [Portfolio](https://portfolio-v2-sage-three.vercel.app/)
- [GitHub](https://github.com/Adithyan2000)
- [LinkedIn](https://www.linkedin.com/in/adithyanks2000/)
