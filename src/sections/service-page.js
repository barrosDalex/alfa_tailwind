import { container, monoLabel, primaryButton, secondaryButton } from '../components/ui.js'
import { contact } from '../data/copy.js'

const arrowSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="h-[0.9em] w-[0.9em]">
    <path d="M4 12h15"></path>
    <path d="M13 5l7 7-7 7"></path>
  </svg>
`

function wordStack(words) {
  return words
    .map(
      (word, i) => `
      <div class="hero-row flex items-center gap-3 text-muted ${i === 0 ? 'is-active' : ''}" data-hero-row>
        <span class="hero-arrow shrink-0">${arrowSvg}</span>
        <span class="font-mono text-3xl font-medium tracking-tight md:text-5xl">${word}</span>
      </div>`,
    )
    .join('')
}

/** Página de serviço (/studio ou /fotos). */
export function renderServicePage(page, igHref) {
  const sections = page.sections
    .map((s, idx) => {
      const items = s.items
        ? `<ul class="mt-6 space-y-2">${s.items
            .map(
              (item) =>
                `<li class="flex items-center gap-2 font-mono text-xs tracking-[0.08em] text-muted"><span class="h-1.5 w-1.5 rounded-full bg-accent"></span>${item}</li>`,
            )
            .join('')}</ul>`
        : ''

      return `
        <section class="border-t border-border py-16 md:py-20">
          ${container(`
            <div class="fade-up max-w-2xl ${idx % 2 === 1 ? 'md:ml-auto md:text-right' : ''}">
              ${monoLabel(s.eyebrow)}
              <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">${s.title}</h2>
              <p class="mt-4 text-base leading-relaxed text-muted">${s.body}</p>
              ${items}
            </div>
          `)}
        </section>`
    })
    .join('')

  return `
    <section class="noise relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      ${container(`
        <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
          <div class="fade-up order-2 md:order-1">
            ${monoLabel(page.eyebrow)}
            <h1 class="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fg md:text-[3.25rem]">
              ${page.titleBefore}<span class="text-accent">${page.titleHighlight}</span>${page.titleAfter}
            </h1>
            <p class="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">${page.subtitle}</p>
            <div class="mt-9 flex flex-col gap-3 md:flex-row md:gap-3">
              ${primaryButton(page.igCta, igHref)}
              ${secondaryButton(page.back, '/')}
            </div>
            <p class="mt-6 font-mono text-xs text-faint">
              <a class="hover:text-fg" href="${contact.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp ${contact.phoneDisplay}</a>
            </p>
          </div>
          <div class="fade-up order-1 flex flex-col gap-2 md:order-2 md:items-start md:pl-8" aria-hidden="true">
            ${wordStack(page.words)}
          </div>
        </div>
      `)}
    </section>
    ${sections}
    <section id="contato" class="border-t border-border py-16">
      ${container(`
        <div class="fade-up flex flex-col items-start justify-between gap-6 rounded-md border border-border bg-surface2 p-8 md:flex-row md:items-center">
          <div>
            <p class="font-mono text-xs uppercase tracking-[0.16em] text-faint">Briefing</p>
            <p class="mt-2 font-display text-xl font-semibold text-fg">${contact.phoneDisplay}</p>
          </div>
          <div class="flex flex-col gap-2 sm:flex-row">
            ${primaryButton('WhatsApp', contact.whatsapp)}
            ${secondaryButton(page.back, '/')}
          </div>
        </div>
      `)}
    </section>
  `
}
