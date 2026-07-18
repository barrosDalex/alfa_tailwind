import { container, eyebrow, cardShell, videoMock, chartMock } from '../components/ui.js'

export function renderBento(t) {
  const c = t.bento.cards

  const cardTitle = (title) =>
    `<h3 class="text-lg font-extrabold tracking-tight text-zinc-50">${title}</h3>`
  const cardBody = (body) => `<p class="mt-3 text-sm leading-relaxed text-zinc-400">${body}</p>`

  return `
    <section id="servicos" class="relative py-20 md:py-28">
      ${container(`
        <div class="fade-up max-w-2xl">
          ${eyebrow(t.bento.eyebrow)}
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-zinc-50 md:text-4xl">${t.bento.title}</h2>
          <p class="mt-4 text-base leading-relaxed text-zinc-400">${t.bento.lead}</p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-fr" id="mentorias">
          ${cardShell(`${cardTitle(c.audiovisual.title)}${cardBody(c.audiovisual.body)}${videoMock()}`, 'md:col-span-2')}
          ${cardShell(
            `${cardTitle(c.sites.title)}${cardBody(c.sites.body)}
             <ul class="mt-6 space-y-3 text-sm text-zinc-400">
               <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span>Landing pages</li>
               <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span>E-commerce</li>
               <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span>Mentoria in-company</li>
               <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span>Workshops</li>
             </ul>`,
            'md:row-span-2',
          )}
          ${cardShell(`${cardTitle(c.branding.title)}${cardBody(c.branding.body)}
            <div class="mt-6 flex gap-2">
              <span class="h-8 w-8 rounded-lg bg-blue-600"></span>
              <span class="h-8 w-8 rounded-lg bg-indigo-500"></span>
              <span class="h-8 w-8 rounded-lg bg-zinc-700"></span>
              <span class="h-8 w-8 rounded-lg border border-zinc-700 bg-zinc-900"></span>
            </div>`)}
          ${cardShell(`${cardTitle(c.social.title)}${cardBody(c.social.body)}${chartMock()}`)}
        </div>
      `)}
    </section>
  `
}
