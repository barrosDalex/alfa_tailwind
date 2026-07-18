import { container } from '../components/ui.js'

export function renderFooter(t) {
  return `
    <footer class="border-t border-border py-14 md:py-20">
      ${container(`
        <div class="grid grid-cols-2 gap-10 md:grid-cols-4">
          ${t.footer.columns
            .map(
              (col) => `
                <div>
                  <h3 class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-faint">${col.title}</h3>
                  <ul class="mt-5 space-y-2.5 text-sm">
                    ${col.links
                      .map(
                        (link) =>
                          `<li><a href="#" class="inline-flex min-h-8 items-center tracking-tight text-muted transition hover:text-fg">${link}</a></li>`,
                      )
                      .join('')}
                  </ul>
                </div>`,
            )
            .join('')}
        </div>
        <div class="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p class="text-sm tracking-tight text-faint">${t.footer.copyright}</p>
          <span class="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-[11px] font-medium tracking-[0.08em] text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-accent">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            ${t.footer.badge}
          </span>
        </div>
      `)}
    </footer>
  `
}
