const globeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4.5 w-4.5">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M2 12h20"></path>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
`

const sunIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" class="h-4.5 w-4.5">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
  </svg>
`

const moonIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4.5 w-4.5">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
  </svg>
`

export function renderNavbar(t, theme) {
  const desktopLinks = t.nav
    .map(
      (item) =>
        `<a href="${item.href}" data-nav-link class="inline-flex h-full items-center px-3 text-[0.8125rem] font-medium tracking-tight text-barfg/70 transition hover:text-barfg">${item.label}</a>`,
    )
    .join('')

  return `
    <header class="fixed inset-x-0 top-0 z-50 pt-2.5">
      <div class="mx-auto flex w-full max-w-6xl items-stretch gap-1 px-3 md:px-5">
        <!-- Segmento principal: logo + links (barra invertida, estilo Unkey) -->
        <div class="flex h-11 flex-1 items-center justify-between bg-bar pl-4 pr-2 text-barfg">
          <a href="/" class="flex min-h-11 items-center gap-2.5">
            <span class="flex h-6 w-6 items-center justify-center rounded-[4px] bg-accent font-mono text-[11px] font-bold text-white">A</span>
            <span class="font-display text-[0.9375rem] font-bold tracking-tight text-barfg">${t.brand}</span>
          </a>
          <nav class="hidden h-full items-center md:flex" aria-label="Principal">
            ${desktopLinks}
          </nav>
        </div>

        <!-- Globo PT/EN -->
        <button id="lang-toggle" type="button" aria-label="Mudar idioma / Change language"
          class="hidden h-11 min-w-12 items-center justify-center gap-1.5 bg-bar px-3 text-barfg transition hover:opacity-90 md:flex">
          ${globeIcon}
          <span class="font-mono text-xs font-medium">${t.langLabel}</span>
        </button>

        <!-- Sol/Lua -->
        <button id="theme-toggle" type="button" aria-label="${t.themeToggle}"
          class="hidden h-11 min-w-12 items-center justify-center bg-bar px-3 text-barfg transition hover:opacity-90 md:flex">
          ${theme === 'dark' ? sunIcon : moonIcon}
        </button>

        <!-- CTA: caixa na cor da página com borda (padrão "Sign Up") -->
        <a href="/#contato" class="hidden h-11 items-center border border-bar bg-bg px-5 text-[0.8125rem] font-medium tracking-tight text-fg transition hover:bg-surface md:inline-flex">${t.cta}</a>

        <!-- Hamburger mobile -->
        <button id="menu-open" type="button" aria-label="Abrir menu" aria-expanded="false"
          class="flex h-11 min-w-12 items-center justify-center bg-bar px-3 text-barfg md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="h-5 w-5">
            <path d="M4 7h16M4 12h16M4 17h16"></path>
          </svg>
        </button>
      </div>
    </header>

    <!-- Slide-over mobile: invertido (branco no dark), estilo menu do Unkey -->
    <div id="mobile-nav" class="fixed inset-0 z-[60] flex flex-col bg-bar text-barfg md:hidden" aria-hidden="true">
      <div class="flex h-14 items-center justify-between border-b px-5" style="border-color: color-mix(in srgb, var(--c-bar-fg) 15%, transparent)">
        <span class="font-display text-[0.9375rem] font-bold tracking-tight">${t.brand}</span>
        <button id="menu-close" type="button" aria-label="Fechar menu"
          class="flex h-12 w-12 items-center justify-center text-barfg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="h-6 w-6">
            <path d="M6 6l12 12M18 6L6 18"></path>
          </svg>
        </button>
      </div>
      <nav class="flex flex-1 flex-col gap-1 px-5 py-8" aria-label="Menu móvel">
        ${t.nav
          .map(
            (item) =>
              `<a href="${item.href}" data-nav-link class="flex min-h-12 items-center text-lg font-medium tracking-tight">${item.label}</a>`,
          )
          .join('')}
        <div class="mt-6 flex items-center gap-2">
          <button id="lang-toggle-m" type="button" aria-label="Mudar idioma / Change language"
            class="flex h-12 flex-1 items-center justify-center gap-2 border font-mono text-xs font-medium" style="border-color: color-mix(in srgb, var(--c-bar-fg) 25%, transparent)">
            ${globeIcon}
            <span>${t.langLabel}</span>
          </button>
          <button id="theme-toggle-m" type="button" aria-label="${t.themeToggle}"
            class="flex h-12 flex-1 items-center justify-center border" style="border-color: color-mix(in srgb, var(--c-bar-fg) 25%, transparent)">
            ${theme === 'dark' ? sunIcon : moonIcon}
          </button>
        </div>
        <a href="/#contato" data-nav-link class="mt-3 inline-flex h-12 items-center justify-center bg-barfg text-sm font-medium tracking-tight text-bar">${t.cta}</a>
      </nav>
    </div>
  `
}
