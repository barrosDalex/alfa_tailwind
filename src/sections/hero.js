import { container, primaryButton, secondaryButton, blueGlow } from '../components/ui.js'

export function renderHero(t) {
  return `
    <section id="home" class="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28">
      ${blueGlow('-top-24 left-1/2 h-96 w-[36rem] -translate-x-1/2')}
      ${container(`
        <div class="fade-up mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 class="text-4xl font-extrabold tracking-tight text-zinc-50 md:text-6xl">
            ${t.hero.titleBefore}<span class="text-blue-500">${t.hero.titleHighlight}</span>${t.hero.titleAfter}
          </h1>
          <p class="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">${t.hero.subtitle}</p>
          <div class="mt-10 flex w-full flex-col gap-3 md:w-auto md:flex-row md:gap-4" id="briefing">
            ${primaryButton(t.hero.primary, '#briefing')}
            ${secondaryButton(t.hero.secondary, '#portfolio')}
          </div>
        </div>
      `)}
    </section>
  `
}
