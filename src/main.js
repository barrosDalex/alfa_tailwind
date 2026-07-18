import './style.css'
import { headerSection, bindHeader } from './sections/header.js'
import { heroSection } from './sections/hero.js'
import { controlPlaneSection } from './sections/control-plane.js'
import { buildDeploySection } from './sections/build-deploy.js'
import {
  gatewaySection,
  builtForProductionSection,
} from './sections/gateway.js'
import {
  scaleSection,
  observeSection,
  developerPortalSection,
  finalCtaSection,
  footerSection,
} from './sections/rest.js'

document.querySelector('#app').innerHTML = `
  <div class="min-h-svh bg-bg text-fg">
    ${headerSection()}
    <main>
      ${heroSection()}
      ${controlPlaneSection()}
      ${buildDeploySection()}
      ${gatewaySection()}
      ${builtForProductionSection()}
      ${scaleSection()}
      ${observeSection()}
      ${developerPortalSection()}
      ${finalCtaSection()}
    </main>
    ${footerSection()}
  </div>
`

bindHeader()

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 },
)

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
