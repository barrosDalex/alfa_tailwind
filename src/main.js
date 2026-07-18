import './style.css'
import { copy, contact } from './data/copy.js'
import { renderNavbar } from './sections/navbar.js'
import { renderHero } from './sections/hero.js'
import { renderAbout } from './sections/about.js'
import { renderBento } from './sections/bento.js'
import { renderBrands, renderProcess, renderContact } from './sections/brands.js'
import { renderPortfolio } from './sections/portfolio.js'
import { renderServicePage } from './sections/service-page.js'
import { renderFooter } from './sections/footer.js'

const LANG_KEY = 'alfa-lang'
const THEME_KEY = 'alfa-theme'

let heroTimer = null

function getLang() {
  const stored = localStorage.getItem(LANG_KEY)
  return stored === 'en' ? 'en' : 'pt'
}

function getTheme() {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

function currentPath() {
  const p = window.location.pathname.replace(/\/+$/, '') || '/'
  return p
}

function renderHome(t) {
  return `
    ${renderHero(t)}
    ${renderAbout(t)}
    ${renderBento(t)}
    ${renderBrands(t)}
    ${renderProcess(t)}
    ${renderPortfolio(t)}
    ${renderContact(t)}
  `
}

function render() {
  const lang = getLang()
  const theme = getTheme()
  const t = copy[lang]
  const path = currentPath()

  applyTheme(theme)
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'

  let main = ''
  if (path === '/studio') {
    document.title = `${t.studio.eyebrow} — ${t.brand}`
    main = renderServicePage(t.studio, contact.instagrams[1].href)
  } else if (path === '/fotos') {
    document.title = `${t.fotos.eyebrow} — ${t.brand}`
    main = renderServicePage(t.fotos, contact.instagrams[2].href)
  } else {
    document.title = `${t.brand} — ${t.hero.titleBefore}${t.hero.titleHighlight}${t.hero.titleAfter}`
    main = renderHome(t)
  }

  document.querySelector('#app').innerHTML = `
    ${renderNavbar(t, theme)}
    <main>${main}</main>
    ${renderFooter(t)}
  `

  bindToggles()
  bindMobileNav()
  bindInternalLinks()
  bindReveals()
  bindHeroWords()
  scrollToHash()
}

function bindToggles() {
  const toggleLang = () => {
    localStorage.setItem(LANG_KEY, getLang() === 'pt' ? 'en' : 'pt')
    render()
  }
  const toggleTheme = () => {
    localStorage.setItem(THEME_KEY, getTheme() === 'dark' ? 'light' : 'dark')
    render()
  }

  document.querySelectorAll('#lang-toggle, #lang-toggle-m').forEach((el) => {
    el.addEventListener('click', toggleLang)
  })
  document.querySelectorAll('#theme-toggle, #theme-toggle-m').forEach((el) => {
    el.addEventListener('click', toggleTheme)
  })
}

function bindMobileNav() {
  const panel = document.querySelector('#mobile-nav')
  const openBtn = document.querySelector('#menu-open')
  if (!panel || !openBtn) return
  const setOpen = (open) => {
    panel.classList.toggle('open', open)
    panel.setAttribute('aria-hidden', String(!open))
    openBtn.setAttribute('aria-expanded', String(open))
    document.body.style.overflow = open ? 'hidden' : ''
  }

  openBtn.addEventListener('click', () => setOpen(true))
  document.querySelector('#menu-close')?.addEventListener('click', () => setOpen(false))
  panel.querySelectorAll('[data-nav-link]').forEach((link) => {
    link.addEventListener('click', () => setOpen(false))
  })
}

/** SPA: intercepta links internos / /studio /fotos e hashes. */
function bindInternalLinks() {
  document.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute('href') || ''
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) return
    if (!(href.startsWith('/') || href.startsWith('#'))) return

    a.addEventListener('click', (e) => {
      // deixa abrir em nova aba normalmente
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      e.preventDefault()

      if (href.startsWith('#')) {
        const onHome = currentPath() === '/'
        if (!onHome) {
          history.pushState({}, '', `/${href}`)
          render()
          return
        }
        history.pushState({}, '', href)
        scrollToHash()
        return
      }

      history.pushState({}, '', href)
      render()
      window.scrollTo(0, 0)
    })
  })
}

function scrollToHash() {
  const hash = window.location.hash
  if (!hash) return
  requestAnimationFrame(() => {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function bindReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
}

function bindHeroWords() {
  if (heroTimer) clearInterval(heroTimer)
  const rows = [...document.querySelectorAll('[data-hero-row]')]
  if (rows.length === 0) return
  let active = 0
  heroTimer = setInterval(() => {
    rows[active].classList.remove('is-active')
    active = (active + 1) % rows.length
    rows[active].classList.add('is-active')
  }, 1800)
}

window.addEventListener('popstate', () => render())
render()
