import {
  container,
  monoLabel,
  cardShell,
  cardTitleRow,
  cardBodyText,
  videoMock,
  chartMock,
  listMock,
  paletteMock,
} from '../components/ui.js'

export function renderBento(t) {
  const c = t.bento.cards

  return `
    <section id="servicos" class="border-t border-border py-16 md:py-24">
      ${container(`
        <div class="fade-up max-w-2xl">
          ${monoLabel(t.bento.eyebrow)}
          <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">${t.bento.title}</h2>
          <p class="mt-4 text-base leading-relaxed text-muted">${t.bento.lead}</p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-fr" id="mentorias">
          ${cardShell(
            `${cardTitleRow(c.audiovisual.label)}${videoMock()}${cardBodyText(c.audiovisual.strong, c.audiovisual.body)}`,
            'md:col-span-2',
          )}
          ${cardShell(
            `${cardTitleRow(c.sites.label)}${listMock(['landing_pages', 'e-commerce', 'mentoria_in-company', 'workshops'])}${cardBodyText(c.sites.strong, c.sites.body)}`,
            'md:row-span-2',
          )}
          ${cardShell(`${cardTitleRow(c.branding.label)}${paletteMock()}${cardBodyText(c.branding.strong, c.branding.body)}`)}
          ${cardShell(`${cardTitleRow(c.social.label)}${chartMock()}${cardBodyText(c.social.strong, c.social.body)}`)}
        </div>
      `)}
    </section>
  `
}
