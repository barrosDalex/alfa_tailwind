import { container, primaryButton, secondaryButton } from '../components/ui.js'

const arrowSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="h-[0.9em] w-[0.9em]">
    <path d="M4 12h15"></path>
    <path d="M13 5l7 7-7 7"></path>
  </svg>
`

export function renderHero(t) {
  const wordRows = t.hero.words
    .map(
      (word, i) => `
        <div class="hero-row flex items-center gap-3 text-muted ${i === 0 ? 'is-active' : ''}" data-hero-row>
          <span class="hero-arrow shrink-0">${arrowSvg}</span>
          <span class="font-mono text-4xl font-medium tracking-tight md:text-6xl">${word}</span>
        </div>`,
    )
    .join('')

  return `
    <section id="home" class="noise relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      ${container(`
        <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
          <div class="fade-up order-2 md:order-1">
            <h1 class="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fg md:text-[3.5rem]">
              ${t.hero.titleBefore}<span class="text-accent">${t.hero.titleHighlight}</span>${t.hero.titleAfter}
            </h1>
            <p class="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">${t.hero.subtitle}</p>
          <div class="mt-9 flex flex-col gap-3 md:flex-row md:gap-3" id="briefing">
            ${primaryButton(t.hero.primary, '/#contato')}
            ${secondaryButton(t.hero.secondary, '/#servicos')}
          </div>
          </div>
          <div class="fade-up order-1 flex flex-col gap-2 md:order-2 md:items-start md:pl-8" aria-hidden="true">
            ${wordRows}
          </div>
        </div>
      `)}
    </section>
  `
}
