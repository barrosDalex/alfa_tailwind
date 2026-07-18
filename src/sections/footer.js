import { container } from '../components/ui.js'

export function renderFooter(t) {
  return `
    <footer class="py-16 md:py-20">
      ${container(`
        <div class="grid grid-cols-2 gap-10 md:grid-cols-4">
          ${t.footer.columns
            .map(
              (col) => `
                <div>
                  <h3 class="text-sm font-extrabold tracking-tight text-zinc-50">${col.title}</h3>
                  <ul class="mt-4 space-y-3 text-sm">
                    ${col.links
                      .map(
                        (link) =>
                          `<li><a href="#" class="inline-flex min-h-8 items-center text-zinc-400 transition hover:text-zinc-50">${link}</a></li>`,
                      )
                      .join('')}
                  </ul>
                </div>`,
            )
            .join('')}
        </div>
        <div class="mt-14 flex flex-col items-start justify-between gap-4 border-t border-zinc-800/50 pt-8 md:flex-row md:items-center">
          <p class="text-sm text-zinc-500">${t.footer.copyright}</p>
          <span class="inline-flex items-center gap-2 rounded-full border border-zinc-800/60 bg-zinc-900/40 px-4 py-2 text-xs font-semibold text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-blue-500">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            ${t.footer.badge}
          </span>
        </div>
      `)}
    </footer>
  `
}
