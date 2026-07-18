import { container, monoLabel, primaryButton, secondaryButton } from '../components/ui.js'
import { contact, igStats } from '../data/copy.js'

export function renderBrands(t) {
  const cards = contact.instagrams
    .map((ig) => {
      const stats = igStats[ig.handle] || {}
      const isExternalPath = ig.path !== '/'
      const pageCta =
        ig.path === '/studio'
          ? t.brands.ctaStudio
          : ig.path === '/fotos'
            ? t.brands.ctaFotos
            : null

      return `
        <article class="fade-up flex flex-col rounded-md border border-border bg-surface2 p-6">
          <p class="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">${ig.tag}</p>
          <h3 class="mt-3 font-display text-xl font-semibold tracking-tight text-fg">${ig.label}</h3>
          <p class="mt-1 font-mono text-xs text-muted">@${ig.handle}</p>
          <div class="mt-6 flex gap-6 font-mono text-xs text-faint">
            <span><strong class="text-fg">${stats.followers ?? '—'}</strong> ${t.brands.followers}</span>
            <span><strong class="text-fg">${stats.posts ?? '—'}</strong> ${t.brands.posts}</span>
          </div>
          <div class="mt-8 flex flex-col gap-2 sm:flex-row">
            ${
              pageCta
                ? `<a href="${ig.path}" class="inline-flex h-11 items-center justify-center rounded-md bg-fg px-5 text-sm font-medium tracking-tight text-bg transition hover:opacity-85">${pageCta}</a>`
                : ''
            }
            <a href="${ig.href}" target="_blank" rel="noopener noreferrer" class="inline-flex h-11 items-center justify-center rounded-md border border-fg px-5 text-sm font-medium tracking-tight text-fg transition hover:bg-surface">${t.brands.ctaIg}</a>
          </div>
        </article>`
    })
    .join('')

  return `
    <section id="ecossistema" class="border-t border-border py-16 md:py-24">
      ${container(`
        <div class="fade-up max-w-2xl">
          ${monoLabel(t.brands.eyebrow)}
          <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">${t.brands.title}</h2>
          <p class="mt-4 text-base leading-relaxed text-muted">${t.brands.lead}</p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">${cards}</div>
      `)}
    </section>
  `
}

export function renderProcess(t) {
  return `
    <section id="metodo" class="border-t border-border bg-surface2 py-16 md:py-24">
      ${container(`
        <div class="fade-up max-w-2xl">
          ${monoLabel(t.process.eyebrow)}
          <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">${t.process.title}</h2>
        </div>
        <div class="fade-up mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          ${t.process.steps
            .map(
              (s) => `
              <article class="border border-border bg-bg p-5">
                <p class="font-mono text-xs text-accent">${s.n}</p>
                <h3 class="mt-3 font-display text-lg font-semibold tracking-tight text-fg">${s.title}</h3>
                <p class="mt-2 text-sm leading-relaxed text-muted">${s.body}</p>
              </article>`,
            )
            .join('')}
        </div>
      `)}
    </section>
  `
}

export function renderContact(t) {
  return `
    <section id="contato" class="border-t border-border py-16 md:py-24">
      ${container(`
        <div class="fade-up mx-auto max-w-2xl text-center">
          ${monoLabel(t.contact.eyebrow)}
          <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">${t.contact.title}</h2>
          <p class="mt-4 text-base leading-relaxed text-muted">${t.contact.lead}</p>
          <p class="mt-6 font-mono text-sm text-muted">${t.contact.phoneLabel}: <a class="text-fg underline-offset-4 hover:underline" href="tel:${contact.phoneTel}">${contact.phoneDisplay}</a></p>
          <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            ${primaryButton(t.contact.primary, contact.whatsapp)}
            ${secondaryButton(t.contact.secondary, `tel:${contact.phoneTel}`)}
          </div>
        </div>
      `)}
    </section>
  `
}
