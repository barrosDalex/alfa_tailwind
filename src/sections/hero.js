import { copy } from '../data/copy.js'
import { container, primaryButton, secondaryButton, placeholderPanel } from '../components/ui.js'

export function heroSection() {
  const { title, subtitle, primaryCta, secondaryCta } = copy.hero
  return `
    <section class="border-b border-border">
      ${container(`
        <div class="grid gap-10 py-14 md:grid-cols-2 md:items-center md:gap-12 md:py-20">
          <div class="fade-up">
            <h1 class="text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">${title}</h1>
            <p class="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">${subtitle}</p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              ${primaryButton(primaryCta, '#final-cta')}
              ${secondaryButton(secondaryCta, 'https://github.com/barrosDalex/alfa_tailwind')}
            </div>
          </div>
          <div class="fade-up rounded-2xl border border-border bg-surface p-4 md:p-5">
            ${placeholderPanel()}
            <div class="mt-3 grid grid-cols-2 gap-3">
              <div class="rounded-xl border border-border bg-surface-2 p-3">
                <div class="h-2 w-16 rounded bg-border"></div>
                <div class="mt-3 h-8 rounded bg-border/70"></div>
              </div>
              <div class="rounded-xl border border-border bg-surface-2 p-3">
                <div class="h-2 w-20 rounded bg-border"></div>
                <div class="mt-3 h-8 rounded bg-border/50"></div>
              </div>
            </div>
          </div>
        </div>
      `)}
    </section>
  `
}
