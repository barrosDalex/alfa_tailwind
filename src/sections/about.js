import { container, monoLabel } from '../components/ui.js'

export function renderAbout(t) {
  return `
    <section id="sobre" class="border-t border-border py-16 md:py-24">
      ${container(`
        <div class="fade-up max-w-2xl">
          ${monoLabel(t.about.eyebrow)}
          <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">${t.about.title}</h2>
          <p class="mt-4 text-base leading-relaxed text-muted">${t.about.lead}</p>
        </div>
        <div class="fade-up mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          ${t.about.points
            .map(
              (p) => `
              <article class="rounded-md border border-border bg-surface2 p-6">
                <p class="text-sm leading-relaxed text-muted"><strong class="font-medium text-fg">${p.strong}</strong> ${p.body}</p>
              </article>`,
            )
            .join('')}
        </div>
      `)}
    </section>
  `
}
