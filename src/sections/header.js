import { copy } from '../data/copy.js'
import { primaryButton, secondaryButton } from '../components/ui.js'

export function headerSection() {
  const links = copy.nav
    .map(
      (item) =>
        `<a href="${item.href}" class="text-sm font-medium text-muted-2 transition hover:text-fg">${item.label}</a>`,
    )
    .join('')

  return `
    <header class="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div class="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 md:h-16 md:px-8">
        <a href="#" class="text-base font-semibold tracking-tight text-fg">${copy.brand}</a>
        <nav class="hidden items-center gap-7 md:flex">${links}</nav>
        <div class="hidden items-center gap-3 md:flex">
          ${secondaryButton(copy.hero.secondaryCta, 'https://github.com/barrosDalex/alfa_tailwind')}
          ${primaryButton(copy.hero.primaryCta, '#final-cta')}
        </div>
        <button type="button" id="nav-toggle" class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg md:hidden" aria-label="Open menu">
          <span class="block h-0.5 w-4 bg-fg"></span>
        </button>
      </div>
      <div id="mobile-nav" class="hidden border-t border-border bg-bg px-5 py-4 md:hidden">
        <div class="flex flex-col gap-3">
          ${copy.nav.map((item) => `<a href="${item.href}" class="text-sm font-medium text-muted-2">${item.label}</a>`).join('')}
          <div class="mt-2 flex flex-col gap-2">
            ${secondaryButton(copy.hero.secondaryCta, 'https://github.com/barrosDalex/alfa_tailwind')}
            ${primaryButton(copy.hero.primaryCta, '#final-cta')}
          </div>
        </div>
      </div>
    </header>
  `
}

export function bindHeader() {
  const toggle = document.getElementById('nav-toggle')
  const panel = document.getElementById('mobile-nav')
  if (!toggle || !panel) return
  toggle.addEventListener('click', () => {
    panel.classList.toggle('hidden')
  })
  panel.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => panel.classList.add('hidden'))
  })
}
