# Tailwind vs Flutter — Alfa Produções (estética Unkey)

Duas landings estáticas, mesmo inventário de 5 seções, stacks diferentes. Bilíngue PT/EN com toggle no globo do app bar.

| | HTML + CSS + Tailwind | Flutter |
|---|---|---|
| Repo | `alfa_tailwind` | `alfa_flutter` |
| Source | `src/sections/*`, `src/components/ui.js` | `lib/sections/*`, `lib/widgets/ui.dart` |
| Copy PT/EN | `src/data/copy.js` (`copy.pt` / `copy.en`) | `lib/data/copy.dart` (`copyPt` / `copyEn`) |
| Estado de idioma | `localStorage['alfa-lang']` + re-render | `ValueNotifier<String>` + `ValueListenableBuilder` |
| Theme | zinc-950/blue via classes + `src/style.css` | `lib/theme/alfa_theme.dart` (`AlfaColors`) |
| Responsivo | mobile-first, `md:` / `lg:` | `MediaQuery` + `AlfaBreakpoints` + `LayoutBuilder` |
| Nav mobile | hamburger → slide-over `#mobile-nav` (JS vanilla) | `endDrawer` tela cheia |
| Build | `npm run build` → `dist/` | `flutter build web` → `build/web/` |
| Hosting URL | https://alfa-tailwind.web.app | https://alfa-flutter-web.web.app |

> Nota: `alfa-flutter.web.app` já estava reservado em outro projeto GCP, então o site ID do Flutter é `alfa-flutter-web`.

## Mapa de seções (5)

| Seção | Tailwind | Flutter |
|---|---|---|
| Navbar (globo PT/EN, logo, links, CTA) | `sections/navbar.js` | `AlfaNavbar` + `AlfaMobileDrawer` (`sections/navbar.dart`) |
| Hero (destaque azul, 2 CTAs, glow) | `sections/hero.js` | `HeroSection` (`sections/hero.dart`) |
| Bento Grid (4 cards, mocks) | `sections/bento.js` | `BentoSection` (`sections/bento.dart`) |
| Portfólio (logos grayscale) | `sections/portfolio.js` | `PortfolioSection` (`sections/portfolio.dart`) |
| Footer (4 col. desktop / 2 mobile + selo) | `sections/footer.js` | `FooterSection` (`sections/footer.dart`) |

## Mapa de componentes

| Papel de UI | Tailwind | Flutter |
|---|---|---|
| Container de seção | `container()` | `SectionShell` |
| Botões | `primaryButton` / `secondaryButton` | `AlfaPrimaryButton` / `AlfaSecondaryButton` |
| Card bento (hover na borda) | `cardShell()` | `BentoCard` |
| Glow azul | `blueGlow()` (gradient + blur) | `BlueGlow` (`RadialGradient`) |
| Mock de player de vídeo | `videoMock()` | `VideoMock` |
| Mini gráfico de barras | `chartMock()` | `ChartMock` |
| Logo tipográfico de cliente | inline em `portfolio.js` | `LogoBlock` |
| Eyebrow (rótulo azul) | `eyebrow()` | `Eyebrow` |

## Notas de DX

- **Tailwind:** ajustes de espaçamento/cor mais rápidos por classe; bundle leve; JS só para render, idioma, slide-over e reveals.
- **Flutter:** tipagem forte na copy (classes em vez de objetos soltos); breakpoints exigem `LayoutBuilder` explícito; payload web maior.
- **Meta comum:** estética Unkey (zinc-950, superfícies translúcidas, acento azul) com branding e conteúdo da Alfa Produções.

## Secrets

Nunca commitar `.env`. Configuração local do Firebase fica em:

`~/dev/github/.secrets/alfa-firebase.env`
