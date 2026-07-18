import { container } from '../components/ui.js'

const globeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M2 12h20"></path>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
`

export function renderNavbar(t) {
  const links = (extra) =>
    t.nav
      .map(
        (item) =>
          `<a href="${item.href}" data-nav-link class="${extra} text-zinc-400 transition hover:text-zinc-50">${item.label}</a>`,
      )
      .join('')

  return `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-md">
      ${container(`
        <div class="flex h-16 items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <button id="lang-toggle" type="button" aria-label="Mudar idioma / Change language"
              class="flex min-h-12 min-w-12 items-center justify-center gap-1.5 rounded-full text-zinc-400 transition hover:text-zinc-50">
              ${globeIcon}
              <span class="text-xs font-semibold">${t.langLabel}</span>
            </button>
            <a href="#home" class="flex items-center gap-2 text-sm font-extrabold tracking-tight text-zinc-50">
              <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-black text-white">A</span>
              ${t.brand}
            </a>
          </div>

          <nav class="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Principal">
            ${links('')}
          </nav>

          <div class="flex items-center gap-2">
            <a href="#briefing" class="hidden min-h-11 items-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500 md:inline-flex">${t.cta}</a>
            <button id="menu-open" type="button" aria-label="Abrir menu" aria-expanded="false"
              class="flex min-h-12 min-w-12 items-center justify-center rounded-full text-zinc-300 transition hover:text-zinc-50 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="h-6 w-6">
                <path d="M4 7h16M4 12h16M4 17h16"></path>
              </svg>
            </button>
          </div>
        </div>
      `)}
    </header>

    <div id="mobile-nav" class="fixed inset-0 z-[60] flex flex-col bg-zinc-950 md:hidden" aria-hidden="true">
      <div class="flex h-16 items-center justify-between border-b border-zinc-800/50 px-5">
        <span class="text-sm font-extrabold tracking-tight text-zinc-50">${t.brand}</span>
        <button id="menu-close" type="button" aria-label="Fechar menu"
          class="flex min-h-12 min-w-12 items-center justify-center rounded-full text-zinc-300 transition hover:text-zinc-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="h-6 w-6">
            <path d="M6 6l12 12M18 6L6 18"></path>
          </svg>
        </button>
      </div>
      <nav class="flex flex-1 flex-col gap-2 px-5 py-8 text-lg font-semibold" aria-label="Menu móvel">
        ${links('flex min-h-12 items-center rounded-xl px-3')}
        <a href="#briefing" data-nav-link class="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-base font-semibold text-white transition hover:bg-blue-500">${t.cta}</a>
      </nav>
    </div>
  `
}
