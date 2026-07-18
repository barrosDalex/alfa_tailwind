import './style.css'
import { copy } from './data/copy.js'
import { renderNavbar } from './sections/navbar.js'
import { renderHero } from './sections/hero.js'
import { renderBento } from './sections/bento.js'
import { renderPortfolio } from './sections/portfolio.js'
import { renderFooter } from './sections/footer.js'

const LANG_KEY = 'alfa-lang'

function getLang() {
  const stored = localStorage.getItem(LANG_KEY)
  return stored === 'en' ? 'en' : 'pt'
}

function render() {
  const lang = getLang()
  const t = copy[lang]

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  document.querySelector('#app').innerHTML = `
    ${renderNavbar(t)}
    <main>
      ${renderHero(t)}
      ${renderBento(t)}
      ${renderPortfolio(t)}
    </main>
    ${renderFooter(t)}
  `

  bindLangToggle()
  bindMobileNav()
  bindReveals()
}

function bindLangToggle() {
  document.querySelector('#lang-toggle').addEventListener('click', () => {
    localStorage.setItem(LANG_KEY, getLang() === 'pt' ? 'en' : 'pt')
    render()
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

render()
