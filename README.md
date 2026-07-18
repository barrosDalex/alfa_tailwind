# alfa_tailwind

Landing page institucional da **Alfa Produções** com estética Unkey (zinc-950, acento azul), construída com **HTML + CSS + Tailwind** (Vite apenas para build/dev). Sem backend.

5 seções: Navbar (toggle PT/EN no globo), Hero, Bento Grid, Portfólio, Footer. Bilíngue PT-BR/EN.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output: `dist/`

## Deploy (Firebase Hosting)

Secrets live **outside** this repo: `~/dev/github/.secrets/alfa-firebase.env`  
Never commit `.env` files.

```bash
npm run build
firebase deploy --only hosting:tailwind
```

Public URL: https://alfa-tailwind.web.app

## Branch

Work on `dev`. Small commits per section.
