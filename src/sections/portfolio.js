import { container, monoLabel } from '../components/ui.js'
import { clientLogos } from '../data/copy.js'

export function renderPortfolio(t) {
  return `
    <section id="portfolio" class="border-t border-border bg-surface2 py-16 md:py-24">
      ${container(`
        <div class="fade-up">
          ${monoLabel(t.portfolio.eyebrow)}
          <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">${t.portfolio.title}</h2>
        </div>
        <div class="fade-up mt-12 grid grid-cols-2 md:grid-cols-4">
          ${clientLogos
            .map(
              (name) => `
                <div class="flex min-h-20 items-center justify-center border border-border px-4 opacity-45 grayscale transition duration-200 hover:opacity-90 hover:grayscale-0 -ml-px -mt-px">
                  <span class="font-mono text-xs font-medium tracking-[0.18em] text-fg">${name}</span>
                </div>`,
            )
            .join('')}
        </div>
      `)}
    </section>
  `
}
