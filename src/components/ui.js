export function container(inner, extra = '') {
  return `<div class="mx-auto w-full max-w-6xl px-5 md:px-8 ${extra}">${inner}</div>`
}

/** Botão primário estilo Unkey: retangular, fundo = texto da página (inverte por tema). */
export function primaryButton(label, href = '#', extra = '') {
  return `<a href="${href}" class="inline-flex h-11 w-full items-center justify-center rounded-md bg-fg px-6 text-sm font-medium tracking-tight text-bg transition duration-200 hover:opacity-85 md:w-auto ${extra}">${label}</a>`
}

/** Botão secundário: borda na cor do texto, fundo transparente. */
export function secondaryButton(label, href = '#', extra = '') {
  return `<a href="${href}" class="inline-flex h-11 w-full items-center justify-center rounded-md border border-fg px-6 text-sm font-medium tracking-tight text-fg transition duration-200 hover:bg-surface md:w-auto ${extra}">${label}</a>`
}

/** Label mono estilo "Branch Overview" / eyebrow de seção. */
export function monoLabel(text, extra = '') {
  return `<p class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted ${extra}">${text}</p>`
}

/** Card estilo terminal: raio pequeno, borda sólida fina, título mono com linha. */
export function cardShell(inner, extra = '') {
  return `<article class="fade-up group relative flex flex-col overflow-hidden rounded-md border border-border bg-surface2 transition duration-200 hover:border-borderstrong ${extra}">${inner}</article>`
}

export function cardTitleRow(label) {
  return `<div class="border-b border-border px-5 py-3"><span class="font-mono text-xs font-medium tracking-[0.12em] text-muted">${label}</span></div>`
}

export function cardBodyText(strong, body) {
  return `<p class="px-5 pb-5 text-sm leading-relaxed text-muted"><strong class="font-medium text-fg">${strong}</strong> ${body}</p>`
}

/** Mock de player de vídeo em linguagem de terminal. */
export function videoMock() {
  return `
    <div class="mx-5 my-5 flex-1 overflow-hidden rounded-md border border-border bg-bg">
      <div class="flex items-center justify-between border-b border-border px-3 py-2">
        <span class="font-mono text-[10px] tracking-[0.12em] text-faint">REC_0247.MP4</span>
        <span class="flex items-center gap-1.5 font-mono text-[10px] text-faint"><span class="h-1.5 w-1.5 rounded-full bg-accent"></span>REC</span>
      </div>
      <div class="relative flex h-36 items-center justify-center md:h-44">
        <span class="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface transition group-hover:border-accent">
          <span class="ml-0.5 block h-0 w-0 border-y-7 border-l-[12px] border-y-transparent border-l-fg"></span>
        </span>
        <div class="absolute inset-x-3 bottom-2.5 flex items-center gap-2">
          <span class="h-0.5 flex-1 bg-border"><span class="block h-0.5 w-1/3 bg-accent"></span></span>
          <span class="font-mono text-[10px] text-faint">02:47</span>
        </div>
      </div>
    </div>
  `
}

/** Mini gráfico de barras estilo "Usage 30 Days". */
export function chartMock() {
  const bars = [35, 55, 42, 70, 62, 88, 76]
  const labels = ['1w', '2w', '3w', '4w', '5w', '6w', '7w']
  return `
    <div class="mx-5 my-5 flex-1 rounded-md border border-border bg-bg p-4">
      <div class="flex h-20 items-end gap-2">
        ${bars
          .map(
            (h, i) =>
              `<span class="flex-1 ${i === 5 ? 'bg-accent' : 'bg-border'}" style="height:${h}%"></span>`,
          )
          .join('')}
      </div>
      <div class="mt-2 flex gap-2">
        ${labels
          .map((l) => `<span class="flex-1 text-center font-mono text-[9px] text-faint">${l}</span>`)
          .join('')}
      </div>
    </div>
  `
}

/** Lista mono estilo "Manage API Keys". */
export function listMock(items) {
  return `
    <div class="mx-5 my-5 flex-1 rounded-md border border-border bg-bg p-1.5 font-mono text-[11px]">
      ${items
        .map(
          (item, i) =>
            i === 1
              ? `<div class="flex items-center justify-between bg-accent px-2.5 py-1.5 text-white"><span>${item}</span><span>ativo</span></div>`
              : `<div class="flex items-center justify-between px-2.5 py-1.5 text-muted"><span>${item}</span><span class="text-faint">ok</span></div>`,
        )
        .join('')}
    </div>
  `
}

/** Paleta de marca (card branding). */
export function paletteMock() {
  return `
    <div class="mx-5 my-5 flex flex-1 items-center gap-2 rounded-md border border-border bg-bg p-4">
      <span class="h-9 w-9 rounded-md bg-accent"></span>
      <span class="h-9 w-9 rounded-md bg-fg"></span>
      <span class="h-9 w-9 rounded-md bg-border"></span>
      <span class="h-9 w-9 rounded-md border border-border bg-surface"></span>
      <span class="ml-auto font-mono text-[10px] tracking-[0.12em] text-faint">BRAND.SYS</span>
    </div>
  `
}
