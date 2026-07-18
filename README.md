# alfa_tailwind

Static Unkey-structure landing page built with **HTML + CSS + Tailwind** (Vite for build/dev only). No backend.

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
