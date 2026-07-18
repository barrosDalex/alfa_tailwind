export function container(inner, extra = '') {
  return `<div class="mx-auto w-full max-w-6xl px-5 md:px-8 ${extra}">${inner}</div>`
}

/** Primary CTA — full-width on mobile (Fitts), auto on md+. 48px min hit target. */
export function primaryButton(label, href = '#', extra = '') {
  return `<a href="${href}" class="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto ${extra}">${label}</a>`
}

export function secondaryButton(label, href = '#', extra = '') {
  return `<a href="${href}" class="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-zinc-800/70 bg-zinc-900/40 px-6 text-sm font-semibold text-zinc-50 backdrop-blur-md transition hover:border-zinc-600 md:w-auto ${extra}">${label}</a>`
}

export function eyebrow(text) {
  return `<p class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">${text}</p>`
}

/** Card surface — zinc-900/40 + translucent border + blur (Unkey style). */
export function cardShell(inner, extra = '') {
  return `<article class="fade-up group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 backdrop-blur-md transition hover:border-zinc-700/70 ${extra}">${inner}</article>`
}

export function blueGlow(position = '-top-32 left-1/2 -translate-x-1/2') {
  return `<div aria-hidden="true" class="pointer-events-none absolute ${position} h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-2xl"></div>`
}

/** Fake minimal video player (no assets). */
export function videoMock() {
  return `
    <div class="mt-6 overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-950">
      <div class="flex items-center gap-1.5 border-b border-zinc-800/60 px-3 py-2">
        <span class="h-2 w-2 rounded-full bg-zinc-700"></span>
        <span class="h-2 w-2 rounded-full bg-zinc-700"></span>
        <span class="h-2 w-2 rounded-full bg-zinc-700"></span>
      </div>
      <div class="relative flex h-40 items-center justify-center md:h-48">
        <span class="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 transition group-hover:border-blue-500/60">
          <span class="ml-1 block h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-zinc-300"></span>
        </span>
        <div class="absolute inset-x-4 bottom-3 flex items-center gap-2">
          <span class="h-1 flex-1 rounded bg-zinc-800"><span class="block h-1 w-1/3 rounded bg-blue-500/70"></span></span>
          <span class="text-[10px] text-zinc-500">02:47</span>
        </div>
      </div>
    </div>
  `
}

/** Minimal CSS engagement bars. */
export function chartMock() {
  const bars = [35, 55, 42, 70, 62, 88, 76]
  return `
    <div class="mt-6 flex h-24 items-end gap-2">
      ${bars
        .map(
          (h, i) =>
            `<span class="flex-1 rounded-t bg-gradient-to-t from-blue-600/40 to-blue-400/70 transition group-hover:from-blue-600/60 group-hover:to-blue-300" style="height:${h}%${i === bars.length - 1 ? ';opacity:.95' : ''}"></span>`,
        )
        .join('')}
    </div>
  `
}
