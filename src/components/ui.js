export function container(inner, extraClass = '') {
  return `<div class="mx-auto w-full max-w-6xl px-5 md:px-8 ${extraClass}">${inner}</div>`
}

export function primaryButton(label, href = '#') {
  return `<a href="${href}" class="inline-flex items-center justify-center rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-muted-2">${label}</a>`
}

export function secondaryButton(label, href = '#') {
  return `<a href="${href}" class="inline-flex items-center justify-center rounded-full border border-border-strong bg-transparent px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-muted-2 hover:bg-surface">${label}</a>`
}

export function featureCard({ title, body, panel = false }) {
  return `
    <article class="fade-up flex flex-col rounded-2xl border border-border bg-surface p-5 md:p-6">
      ${panel ? placeholderPanel() : ''}
      <h3 class="mt-4 text-base font-semibold text-fg md:text-lg">${title}</h3>
      <p class="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">${body}</p>
    </article>
  `
}

export function placeholderPanel() {
  return `
    <div class="mb-1 overflow-hidden rounded-xl border border-border bg-surface-2 p-3">
      <div class="mb-3 flex items-center gap-1.5">
        <span class="h-2 w-2 rounded-full bg-border-strong"></span>
        <span class="h-2 w-2 rounded-full bg-border-strong"></span>
        <span class="h-2 w-2 rounded-full bg-border-strong"></span>
        <span class="ml-2 h-2 flex-1 rounded bg-border"></span>
      </div>
      <div class="space-y-2">
        <div class="h-2 w-4/5 rounded bg-border"></div>
        <div class="h-2 w-3/5 rounded bg-border"></div>
        <div class="mt-3 grid grid-cols-3 gap-2">
          <div class="h-10 rounded-lg bg-border/80"></div>
          <div class="h-10 rounded-lg bg-border/60"></div>
          <div class="h-10 rounded-lg bg-border/40"></div>
        </div>
      </div>
    </div>
  `
}

export function sectionEyebrow(text) {
  return `<p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">${text}</p>`
}
