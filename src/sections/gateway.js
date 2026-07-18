import { copy } from '../data/copy.js'
import { container, sectionEyebrow } from '../components/ui.js'

export function gatewaySection() {
  const s = copy.gateway
  return `
    <section id="${s.id}" class="border-b border-border py-16 md:py-24">
      ${container(`
        <div class="max-w-3xl fade-up">
          ${sectionEyebrow(s.eyebrow)}
          <h2 class="text-2xl font-semibold tracking-tight text-fg md:text-4xl md:leading-tight">${s.title}</h2>
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${s.items
            .map(
              (item) => `
            <article class="fade-up rounded-2xl border border-border bg-surface p-5">
              <div class="mb-4 h-2 w-10 rounded bg-border-strong"></div>
              <h3 class="text-base font-semibold text-fg">${item.title}</h3>
              <p class="mt-2 text-sm leading-relaxed text-muted">${item.body}</p>
            </article>
          `,
            )
            .join('')}
        </div>
      `)}
    </section>
  `
}

export function builtForProductionSection() {
  const s = copy.builtForProduction
  return `
    <section id="${s.id}" class="border-b border-border py-16 md:py-24">
      ${container(`
        ${sectionEyebrow(s.eyebrow)}
        <div class="mt-4 grid gap-4 md:grid-cols-2">
          ${s.cards
            .map(
              (card) => `
            <article class="fade-up rounded-2xl border border-border bg-surface p-6 md:p-8">
              <h3 class="text-xl font-semibold text-fg">${card.title}</h3>
              <p class="mt-3 text-sm leading-relaxed text-muted md:text-base">${card.body}</p>
            </article>
          `,
            )
            .join('')}
        </div>
      `)}
    </section>
  `
}
