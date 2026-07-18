import './style.css'
import { copy } from './data/copy.js'
import { renderNavbar } from './sections/navbar.js'
import { renderHero } from './sections/hero.js'
import { renderBento } from './sections/bento.js'
import { renderPortfolio } from './sections/portfolio.js'
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

function render() {
  const lang = getLang()
  const theme = getTheme()
  const t = copy[lang]

  applyTheme(theme)
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  document.querySelector('#app').innerHTML = `
    ${renderNavbar(t, theme)}
    <main>
      ${renderHero(t)}
      ${renderBento(t)}
      ${renderPortfolio(t)}
    </main>
    ${renderFooter(t)}
  `

  bindToggles()
  bindMobileNav()
  bindReveals()
  bindHeroWords()
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
  const setOpen = (open) => {
    panel.classList.toggle('open', open)
    panel.setAttribute('aria-hidden', String(!open))
    openBtn.setAttribute('aria-expanded', String(open))
    document.body.style.overflow = open ? 'hidden' : ''
  }

  openBtn.addEventListener('click', () => setOpen(true))
  document.querySelector('#menu-close').addEventListener('click', () => setOpen(false))
  panel.querySelectorAll('[data-nav-link]').forEach((link) => {
    link.addEventListener('click', () => setOpen(false))
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

/** Ciclo das palavras mono do hero (seta azul destaca uma por vez). */
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

render()
