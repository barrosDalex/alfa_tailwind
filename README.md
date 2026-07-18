# alfa_tailwind

Landing page institucional da **Alfa Produções** com estética Unkey (zinc-950, acento azul), construída com **HTML + CSS + Tailwind** (Vite apenas para build/dev). Sem backend.

Hub (`/`) + páginas `/studio` e `/fotos`. Bilíngue PT-BR/EN, tema claro/escuro. Contato WhatsApp e Instagrams no footer.

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

## Instagram content (local)

```bash
# 1ª vez: abre o Chrome, faça login no Instagram e pressione Enter no terminal
python3 scripts/fetch_instagram.py --headed

# Depois (sessão já salva em ~/dev/github/.secrets/ig-playwright-profile/)
python3 scripts/fetch_instagram.py
```

A sessão e o JSON bruto ficam **fora do Git** (`.secrets/`). Só o conteúdo público pode ir para `src/data/instagram.json`.

