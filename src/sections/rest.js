import { copy } from '../data/copy.js'
import { container, primaryButton, sectionEyebrow } from '../components/ui.js'

export function scaleSection() {
  const s = copy.scale
  return `
    <section id="${s.id}" class="border-b border-border py-16 md:py-24">
      ${container(`
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between fade-up">
          <div class="max-w-3xl">
            ${sectionEyebrow(s.eyebrow)}
            <h2 class="text-2xl font-semibold tracking-tight text-fg md:text-4xl md:leading-tight">${s.title}</h2>
            <p class="mt-4 text-sm leading-relaxed text-muted md:text-base">${s.lead}</p>
          </div>
          ${primaryButton(s.cta, '#observe')}
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          ${s.items
            .map(
              (item) => `
            <article class="fade-up rounded-2xl border border-border bg-surface p-5">
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

export function observeSection() {
  const s = copy.observe
  return `
    <section id="${s.id}" class="border-b border-border py-16 md:py-24">
      ${container(`
        <div class="grid gap-10 md:grid-cols-2 md:items-start">
          <div class="fade-up">
            ${sectionEyebrow(s.eyebrow)}
            <h2 class="text-2xl font-semibold tracking-tight text-fg md:text-4xl md:leading-tight">${s.title}</h2>
            <div class="mt-6">${primaryButton(s.cta, '#portal')}</div>
          </div>
          <ul class="fade-up space-y-4">
            ${s.bullets
              .map(
                (b) => `
              <li class="rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted md:text-[15px]">
                <span class="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-muted-2 align-middle"></span>${b}
              </li>
            `,
              )
              .join('')}
          </ul>
        </div>
      `)}
    </section>
  `
}

export function developerPortalSection() {
  const s = copy.portal
  return `
    <section id="${s.id}" class="border-b border-border py-16 md:py-24">
      ${container(`
        <div class="max-w-3xl fade-up">
          ${sectionEyebrow(s.eyebrow)}
          <h2 class="text-2xl font-semibold tracking-tight text-fg md:text-4xl md:leading-tight">${s.title}</h2>
        </div>
        <div class="mt-10 grid gap-4 md:grid-cols-3">
          ${s.items
            .map(
              (item) => `
            <article class="fade-up rounded-2xl border border-border bg-surface p-5 md:p-6">
              <div class="mb-4 h-8 w-8 rounded-full border border-border bg-surface-2"></div>
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

export function finalCtaSection() {
  const s = copy.finalCta
  return `
    <section id="final-cta" class="border-b border-border py-16 md:py-24">
      ${container(`
        <div class="fade-up flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-surface px-6 py-10 md:flex-row md:items-center md:px-10">
          <h2 class="max-w-2xl text-2xl font-semibold tracking-tight text-fg md:text-3xl">${s.title}</h2>
          ${primaryButton(s.cta, '#')}
        </div>
      `)}
    </section>
  `
}

export function footerSection() {
  const s = copy.footer
  return `
    <footer class="py-14 md:py-16">
      ${container(`
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          ${s.columns
            .map(
              (col) => `
            <div>
              <h3 class="text-sm font-semibold text-fg">${col.title}</h3>
              <ul class="mt-4 space-y-2">
                ${col.links.map((l) => `<li><a href="#" class="text-sm text-muted transition hover:text-fg">${l}</a></li>`).join('')}
              </ul>
            </div>
          `,
            )
            .join('')}
        </div>
        <p class="mt-12 border-t border-border pt-6 text-center text-xs text-muted">${s.note}</p>
      `)}
    </footer>
  `
}
