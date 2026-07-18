import { container, eyebrow } from '../components/ui.js'
import { clientLogos } from '../data/copy.js'

export function renderPortfolio(t) {
  return `
    <section id="portfolio" class="border-y border-zinc-800/50 bg-zinc-900/20 py-20 md:py-24">
      ${container(`
        <div class="fade-up text-center">
          ${eyebrow(t.portfolio.eyebrow)}
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-zinc-50 md:text-4xl">${t.portfolio.title}</h2>
        </div>
        <div class="fade-up mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          ${clientLogos
            .map(
              (name) => `
                <div class="flex min-h-20 items-center justify-center rounded-xl border border-zinc-800/50 bg-zinc-900/40 px-4 grayscale opacity-40 backdrop-blur-md transition hover:opacity-80">
                  <span class="text-sm font-extrabold tracking-[0.15em] text-zinc-300">${name}</span>
                </div>`,
            )
            .join('')}
        </div>
      `)}
    </section>
  `
}
