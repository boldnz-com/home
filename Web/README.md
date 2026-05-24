# Bold Property Maintenance

A marketing website for **Bold Property Maintenance**, a locally-owned lawn and garden care business based in Palmerston North, New Zealand.

## What it does

- Showcases Bold's services (lawn mowing, hedging, garden maintenance, commercial properties, seasonal packages)
- Explains the company background and community mission
- Provides a contact form so potential customers can request a free quote

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | Netlify Forms |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running locally

```bash
npm install
npm run dev
```

The dev server starts on [http://localhost:3000](http://localhost:3000) (proxied through Netlify CLI on port 8888).

> **Note:** Netlify Forms submissions only work on deployed previews/production — they are not processed in local development.

## Environment Variables

No environment variables are required for the base site. If AI features are added in future, set one of: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`, or `OLLAMA_BASE_URL`.
