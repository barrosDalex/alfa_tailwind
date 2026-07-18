import { copy } from '../data/copy.js'
import { container, sectionEyebrow } from '../components/ui.js'

export function buildDeploySection() {
  const s = copy.buildDeploy
  return `
    <section id="${s.id}" class="border-b border-border py-16 md:py-24">
      ${container(`
        <div class="max-w-3xl fade-up">
          ${sectionEyebrow(s.eyebrow)}
          <h2 class="text-2xl font-semibold tracking-tight text-fg md:text-4xl md:leading-tight">${s.title}</h2>
          <p class="mt-4 text-sm leading-relaxed text-muted md:text-base">${s.lead}</p>
        </div>
        <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          ${s.items
            .map(
              (item, i) => `
            <article class="fade-up rounded-2xl border border-border bg-surface p-5 ${i === s.items.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}">
              <div class="mb-4 h-8 w-8 rounded-lg border border-border bg-surface-2"></div>
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
