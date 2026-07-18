import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-svh bg-[radial-gradient(ellipse_at_top,_#e8dfc8_0%,_#f4f0e6_55%,_#eef5ef_100%)]">
    <header class="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
      <a href="#" class="font-display text-2xl font-bold tracking-tight text-ink">Alfa</a>
      <nav class="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
        <a class="hover:text-ink" href="#features">Features</a>
        <a class="hover:text-ink" href="#about">About</a>
        <a class="hover:text-ink" href="#cta">Contact</a>
      </nav>
      <a
        href="#cta"
        class="rounded-full bg-moss px-4 py-2 text-sm font-semibold text-cream transition hover:bg-ink"
      >
        Get started
      </a>
    </header>

    <main>
      <section class="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:items-center md:px-8 md:pb-24 md:pt-16">
        <div>
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-moss">
            Responsive landing test
          </p>
          <h1 class="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Build fast. Look sharp. Stay simple.
          </h1>
          <p class="mt-5 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
            A clean Tailwind playground for testing layout, spacing, and
            breakpoints across phone, tablet, and desktop.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#features"
              class="rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold text-cream transition hover:bg-moss"
            >
              See features
            </a>
            <a
              href="#about"
              class="rounded-full border border-ink/15 bg-white/50 px-6 py-3 text-center text-sm font-semibold text-ink transition hover:border-ink/40"
            >
              Learn more
            </a>
          </div>
        </div>

        <div
          class="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-[linear-gradient(145deg,#2f6b4f_0%,#1a3d2c_55%,#14221a_100%)] p-8 text-cream shadow-xl shadow-moss/20 min-h-64 md:min-h-80"
        >
          <div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-leaf/30 blur-2xl"></div>
          <div class="absolute -bottom-16 left-8 h-48 w-48 rounded-full bg-sand/20 blur-3xl"></div>
          <p class="relative text-sm uppercase tracking-[0.2em] text-leaf">Alfa Tailwind</p>
          <h2 class="relative mt-4 font-display text-3xl font-bold sm:text-4xl">
            Mobile-first by default.
          </h2>
          <p class="relative mt-4 max-w-sm text-cream/75">
            Resize the browser and watch the grid, type, and CTAs adapt without
            fighting the layout.
          </p>
        </div>
      </section>

      <section id="features" class="border-y border-ink/10 bg-white/40">
        <div class="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
          ${[
            ['Fluid layout', 'Stack on mobile, split on tablet, expand on desktop.'],
            ['Readable type', 'Display + body fonts scaled for every screen size.'],
            ['Quick iterate', 'Vite + Tailwind so you can tweak and reload fast.'],
          ]
            .map(
              ([title, copy]) => `
            <article class="rounded-3xl border border-ink/10 bg-cream/80 p-6">
              <h3 class="font-display text-xl font-bold text-ink">${title}</h3>
              <p class="mt-2 text-sm leading-relaxed text-ink/65">${copy}</p>
            </article>
          `,
            )
            .join('')}
        </div>
      </section>

      <section id="about" class="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
        <h2 class="font-display text-3xl font-bold text-ink sm:text-4xl">Made for testing</h2>
        <p class="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
          This repo is a public sandbox for responsive landing-page experiments
          with Tailwind CSS. Swap copy, colors, and sections freely.
        </p>
      </section>

      <section id="cta" class="px-5 pb-20 md:px-8">
        <div class="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] bg-ink px-8 py-10 text-cream md:flex-row md:items-center">
          <div>
            <h2 class="font-display text-2xl font-bold sm:text-3xl">Ready to tweak?</h2>
            <p class="mt-2 text-cream/70">Clone the repo and start editing <code class="text-leaf">src/main.js</code>.</p>
          </div>
          <a
            href="https://github.com/barrosDalex/alfa_tailwind"
            class="rounded-full bg-leaf px-6 py-3 text-sm font-semibold text-ink transition hover:bg-cream"
          >
            Open on GitHub
          </a>
        </div>
      </section>
    </main>

    <footer class="border-t border-ink/10 px-5 py-6 text-center text-sm text-ink/50 md:px-8">
      Alfa Tailwind · responsive landing test
    </footer>
  </div>
`
