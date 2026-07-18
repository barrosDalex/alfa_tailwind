import { copy } from '../data/copy.js'
import { container, featureCard } from '../components/ui.js'

export function controlPlaneSection() {
  const s = copy.controlPlane
  return `
    <section id="${s.id}" class="border-b border-border py-16 md:py-24">
      ${container(`
        <div class="mx-auto max-w-3xl text-center fade-up">
          <h2 class="text-2xl font-semibold tracking-tight text-fg md:text-4xl md:leading-tight">${s.title}</h2>
          <p class="mt-4 text-sm leading-relaxed text-muted md:text-base">${s.lead}</p>
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          ${s.cards.map((card) => featureCard({ ...card, panel: true })).join('')}
        </div>
      `)}
    </section>
  `
}
