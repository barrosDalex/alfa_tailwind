/** Shared landing copy — Unkey homepage structure (base clone, no real assets). */
export const copy = {
  brand: 'Alfa',
  nav: [
    { label: 'Product', href: '#control-plane' },
    { label: 'Deploy', href: '#build-deploy' },
    { label: 'Gateway', href: '#gateway' },
    { label: 'Docs', href: '#observe' },
  ],
  hero: {
    title: 'The Developer Platform for Modern APIs',
    subtitle:
      'Unifies your infrastructure. Deploy APIs instantly, route traffic through global gateways, and understand usage in one place.',
    primaryCta: 'Start for free',
    secondaryCta: 'View on GitHub',
  },
  controlPlane: {
    id: 'control-plane',
    title: 'Unify your fragmented API stack with a single control plane for access and traffic.',
    lead:
      'Stop assembling your API stack piece by piece. Running APIs at scale usually means juggling hosting, gateways, rate limits, and monitoring across multiple vendors.',
    cards: [
      {
        title: 'Branch Overview',
        body: 'Faster to ship. Go from code to running API in minutes. Test safely, promote when ready, roll back if needed.',
      },
      {
        title: 'Manage API Keys',
        body: 'Safer by default. Protect every endpoint with keys, rate limits, and instant access revocation out of the box.',
      },
      {
        title: 'Control Plane',
        body: 'Simpler to run. One single unified platform for deployments, gateways, and full observability.',
      },
      {
        title: 'Usage 30 Days',
        body: 'Visible from day one. Every request logged. Every decision tracked. Debug issues before users notice.',
      },
    ],
  },
  buildDeploy: {
    id: 'build-deploy',
    eyebrow: 'Build & Deploy',
    title: 'Deploy in minutes. Roll back in seconds. Ship with confidence at any scale.',
    lead: 'Infrastructure that moves with your code. Review changes in preview, then promote the exact version you tested.',
    items: [
      {
        title: 'Connect a repo and push code',
        body: 'Git-based deploys, zero setup. Link your Git repository once and deploy automatically on every push.',
      },
      {
        title: 'Deploy Docker containers',
        body: 'Any language, any framework. Run real containers that stay online, keeping the serverless feel.',
      },
      {
        title: 'Previews for every commit',
        body: 'Test every commit before it ships in a separate environment, then promote when ready.',
      },
      {
        title: 'Ship immutable versions',
        body: 'Instant rollbacks, no guesswork. Switch back instantly without redeploying.',
      },
      {
        title: 'Validate releases automatically',
        body: 'Branch protection & OpenAPI checks flag breaking changes before they hit production.',
      },
    ],
  },
  gateway: {
    id: 'gateway',
    eyebrow: 'Gateway',
    title: 'Protect and control traffic at the edge. Offload access control and rate limiting to global gateways.',
    items: [
      { title: 'Auth + Keys', body: 'Manage API keys end to end and control who can call what.' },
      {
        title: 'Global platform',
        body: 'Edge gateway enforces access and routes requests to the closest instance for low latency.',
      },
      {
        title: 'Rate limits',
        body: 'Set limits per IP, user, or key and enforce them close to your users.',
      },
      {
        title: 'Validation',
        body: 'Enforce request rules early to catch bad traffic before it hits your API.',
      },
      {
        title: 'Analytics',
        body: 'Access real-time insights into your API usage without custom instrumentation.',
      },
    ],
  },
  builtForProduction: {
    id: 'built-for-production',
    eyebrow: 'Built for production',
    cards: [
      {
        title: 'High availability',
        body: 'Multiple replicas in different availability zones so your app survives during outages.',
      },
      {
        title: 'Proactive protection',
        body: 'Take immediate control with the ability to instantly revoke access when threats appear.',
      },
    ],
  },
  scale: {
    id: 'scale',
    eyebrow: 'Scale',
    title: 'Start small, scale to global traffic, and stay protected without managing infrastructure manually.',
    lead: 'Platform that scales with you. Control, routing, and traffic handling are designed for multi-region from day one.',
    cta: 'Read the docs',
    items: [
      { title: 'Multi-region routing', body: 'Route requests to the nearest region for consistently low latency.' },
      { title: 'Automatic scaling', body: 'Capacity follows demand, with no knobs to babysit and no manual ops.' },
      {
        title: 'Predictable pricing',
        body: 'Start free, then scale up when you are ready and keep billing predictable as you grow.',
      },
      {
        title: 'Built-in protection',
        body: 'Lock down access with API keys, edge rate limits, and instant revoke controls.',
      },
    ],
  },
  observe: {
    id: 'observe',
    eyebrow: 'Observe',
    title: 'Stay in sync with your traffic in real time. Every request is logged. Every decision is visible.',
    bullets: [
      'Automatic logs and metrics collection for verifications, rate limits, audit logs, and HTTP traffic.',
      'Spot spikes and unusual patterns — flag anomalies, errors, and performance issues.',
      'Debug and explore in the dashboard. Filter by deployment, user, region, tags, and status.',
      'Query via API from your own systems over verification and analytics data.',
    ],
    cta: 'Read the docs',
  },
  portal: {
    id: 'portal',
    eyebrow: 'AIO Developer Portal',
    title: 'First-class developer experience for your users. API keys, usage, and docs—ready out of the box.',
    items: [
      { title: 'Zero code required', body: 'A fully hosted developer portal with nothing to build or maintain.' },
      { title: 'Beautiful API docs', body: 'OpenAPI-generated documentation, hosted and always in sync.' },
      { title: 'Keys and usage, self-serve', body: 'Users manage API keys and view usage without support requests.' },
    ],
  },
  finalCta: {
    title: 'Turn your API stack into one workflow. Start for free, integrate in minutes, and scale when you need to.',
    cta: 'Start for free',
  },
  footer: {
    columns: [
      {
        title: 'Product',
        links: ['API Keys', 'Gateway', 'Deploy', 'Analytics'],
      },
      {
        title: 'Resources',
        links: ['Docs', 'Blog', 'Changelog', 'Status'],
      },
      {
        title: 'Company',
        links: ['About', 'Careers', 'Contact', 'Open source'],
      },
      {
        title: 'Legal',
        links: ['Privacy', 'Terms', 'Security'],
      },
    ],
    note: 'Alfa · responsive landing base · HTML + Tailwind',
  },
}
