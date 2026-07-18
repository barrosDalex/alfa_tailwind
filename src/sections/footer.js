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
                      .map((link) => {
                        const external = link.href.startsWith('http')
                        return `<li><a href="${link.href}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="inline-flex min-h-8 items-center tracking-tight text-muted transition hover:text-fg">${link.label}</a></li>`
                      })
                      .join('')}
                  </ul>
                </div>`,
            )
            .join('')}
        </div>
        <div class="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p class="text-sm tracking-tight text-faint">${t.footer.copyright}</p>
          <span class="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-[11px] font-medium tracking-[0.08em] text-muted">
            <span class="h-2 w-2 rounded-full bg-accent"></span>
            ${t.footer.badge}
          </span>
        </div>
      `)}
    </footer>
  `
}
