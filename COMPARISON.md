# Tailwind vs Flutter — same Unkey-structure landing

Two static landings, same screen inventory, different stacks.

| | HTML + CSS + Tailwind | Flutter |
|---|---|---|
| Repo | `alfa_tailwind` | `alfa_flutter` |
| Source | `src/sections/*`, `src/components/ui.js` | `lib/sections/*`, `lib/widgets/ui.dart` |
| Copy | `src/data/copy.js` | `lib/data/copy.dart` |
| Theme | `src/style.css` `@theme` | `lib/theme/alfa_theme.dart` |
| Responsive | `sm:` / `md:` / `lg:` classes | `LayoutBuilder` + `AlfaBreakpoints` |
| Nav mobile | hamburger + `#mobile-nav` JS | `endDrawer` |
| Build | `npm run build` → `dist/` | `flutter build web` → `build/web/` |
| Hosting URL | https://alfa-tailwind.web.app | https://alfa-flutter-web.web.app |

> Note: `alfa-flutter.web.app` was already reserved on another GCP project, so the Flutter site ID is `alfa-flutter-web`.

## Component map

| UI role | Tailwind | Flutter |
|---|---|---|
| Page shell | `#app` + `min-h-svh bg-bg` | `Scaffold` + `CustomScrollView` |
| Header | `sections/header.js` | `HeaderSection` |
| Hero | `sections/hero.js` | `HeroSection` |
| Control plane | `sections/control-plane.js` | `ControlPlaneSection` |
| Build & Deploy | `sections/build-deploy.js` | `BuildDeploySection` |
| Gateway / Built | `sections/gateway.js` | `GatewaySection` / `BuiltForProductionSection` |
| Scale / Observe / Portal / CTA / Footer | `sections/rest.js` | matching widgets in `content_sections.dart` |
| Feature card | `featureCard()` | `FeatureCard` |
| Fake UI panel | `placeholderPanel()` | `PlaceholderPanel` |
| Buttons | `primaryButton` / `secondaryButton` | `AlfaPrimaryButton` / `AlfaSecondaryButton` |
| Grid | CSS grid utilities | `ResponsiveGrid` |

## DX notes (2026 lab)

- **Tailwind:** faster to tweak spacing/color via classes; lighter bundle; JS only for mount + mobile nav + fade-in.
- **Flutter:** stronger structure/typing; same breakpoints need explicit `LayoutBuilder`; larger web payload; true widget tree (not HTML).
- **Shared goal:** mirror [unkey.com](https://www.unkey.com) section order and dark SaaS hierarchy without backend or real assets.

## Secrets

Never commit `.env`. Local Firebase config lives in:

`~/dev/github/.secrets/alfa-firebase.env`
