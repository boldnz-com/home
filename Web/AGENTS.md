# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A marketing website for **Bold Property Maintenance** — a Palmerston North lawn and garden care business. Built with TanStack Start and deployed on Netlify.

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

## Directory Structure

```
├── public/
│   ├── contact-form.html  # Static form skeleton — required for Netlify Forms build-time detection
│   └── favicon.ico
├── src/
│   ├── data/
│   │   └── products.ts    # Unused product template data (can be removed)
│   ├── routes/
│   │   ├── __root.tsx     # Root layout: HTML shell, SEO metadata
│   │   └── index.tsx      # Main page: header, hero, services, about, contact form, footer
│   ├── router.tsx         # TanStack Router setup
│   └── styles.css         # Tailwind CSS 4 imports + global styles
├── netlify.toml           # Build config: vite build, dist/client publish dir
├── vite.config.ts         # Vite plugins: TanStack Start, Tailwind, Netlify
└── tsconfig.json          # TypeScript: strict mode, @/* alias for src/*
```

## Key Concepts

### Single-Page Architecture

All content lives in `src/routes/index.tsx` as a single scrollable page with anchor-linked nav sections: `#services`, `#about`, `#contact`.

### Netlify Forms

The contact form uses **Netlify Forms** via AJAX fetch. Two parts are required:

1. **`public/contact-form.html`** — a hidden static HTML form that Netlify scans at build time to register the form. Every field must be listed here.
2. **`ContactForm` component** in `index.tsx` — submits via `fetch('/contact-form.html', { method: 'POST', ... })` with `application/x-www-form-urlencoded` encoding and a hidden `form-name` field.

> If you add new fields to the React form, you **must** also add them to `public/contact-form.html`.

### Styling

Uses Tailwind CSS 4 utility classes. Brand colours:
- Dark green: `#1a4d2e` (header, section headings, footer background)
- Mid green: `#2d7a3a` (hero gradient end)
- Lime green: `#7cb342` (CTAs, accents, links)
- Darkest footer: `#0d2818`

### TypeScript

Strict mode, `@/` alias resolves to `src/`.

## Development Commands

```bash
npm run dev      # Start dev server (port 3000, proxied to 8888 via Netlify CLI)
npm run build    # Production build
npm run preview  # Preview production build
```

## Conventions

- Components: PascalCase
- Routes: file-based in `src/routes/`
- Tailwind CSS utility classes directly on JSX elements
- React hooks for local state
