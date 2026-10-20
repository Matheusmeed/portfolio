import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Matheus Medeiros — Frontend Engineer",
    description:
      "Frontend engineer building fast, immersive products with React, Next.js and TypeScript.",
  },
  a11y: {
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main",
    language: "Language",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    resume: "Résumé",
  },
  hero: {
    eyebrow: "Matheus Medeiros · Frontend Engineer",
    title: "From the first click to the closed deal.",
    lead: "I build fast, immersive products with React, Next.js and TypeScript. Recently: 764 homes in 360° without the wait, and proposals that tell brokers what buyers looked at.",
    primary: "See my work",
    secondary: "Download résumé",
    availability: "Open to remote roles · Brazil (UTC-3)",
    email: "Email",
  },
  spin: {
    label: "Drag to spin",
    frame: "Frame",
    valueText: "Frame {frame} of {total}",
    alt: "Wireframe house on a turntable",
    caption: "A wireframe stand-in for the 150-frame spins I build for real homes.",
  },
  sections: {
    work: { label: "01 — Work", title: "Selected work" },
    experience: { label: "02 — Experience", title: "Experience" },
    skills: { label: "03 — Skills", title: "Skills" },
    about: { label: "04 — About", title: "About" },
    contact: { label: "05 — Contact", title: "Let’s talk" },
  },
  readCase: "Read the case",
  cases: [
    {
      slug: "360-homes",
      number: "01",
      client: "Elephant Skin",
      title: "764 homes in 360°, without the wait",
      summary:
        "An interactive presentation for a residential community with 764 homes. Buyers explore the masterplan, open any home in a 360° spin made of 150 frames, and compare homes side by side.",
      stats: [
        { value: "114,600", label: "images in a single experience" },
        { value: "up to 40%", label: "shorter load times" },
        { value: "up to 30%", label: "higher engagement" },
      ],
      tags: ["Web Workers", "SVG", "Performance"],
      intro:
        "An interactive presentation for a residential community with 764 homes. Buyers explore the masterplan, open any home in a 360° spin made of 150 frames, and compare homes side by side. That’s 114,600 images in a single experience.",
      facts: [
        { label: "Role", value: "Frontend Engineer" },
        { label: "Company", value: "Elephant Skin" },
        { label: "Focus", value: "Performance · SVG · Web Workers" },
      ],
      media: {
        type: "placeholder",
        label: "[Screen recording: masterplan → spin → comparison]",
      },
      challenge: [
        "A single spin is 55–60 MB even in WebP, so the whole community adds up to over 40 GB of images. Comparing two homes means loading two spins at once.",
        "Downloading everything up front was out of the question, and loading each spin only when opened would leave buyers staring at a loader. Every spin had to feel instant, and the interface had to stay responsive while images kept downloading.",
      ],
      steps: [
        {
          title: "Interactive masterplan",
          body: "I made all 764 homes clickable with an SVG layer over the masterplan. Clicking a home opens its 360° spin, and a comparison mode puts different homes side by side.",
        },
        {
          title: "Priority loading",
          body: "I preloaded the first frames of the spin during the initial page load, so buyers can start rotating while the rest are still arriving, instead of waiting for all 150.",
        },
        {
          title: "Loading off the main thread",
          body: "I moved the download of the remaining frames to a Web Worker, so it never competes with rendering or user input.",
        },
      ],
      results: {
        metrics: [
          { prefix: "Up to", value: "40%", label: "shorter load times" },
          { prefix: "Up to", value: "30%", label: "higher user engagement" },
        ],
        summary:
          "Buyers start rotating any home without waiting for its full 55–60 MB spin, and the interface stays responsive while the rest loads in the background.",
      },
    },
    {
      slug: "proposals",
      number: "02",
      client: "Elephant Skin · BEES",
      title: "Proposals that report back",
      summary:
        "Brokers build proposals inside the presentation, buyers open them without logging in, and every visit becomes a readable history for the broker.",
      stats: [
        { value: "11", label: "clients on the BEES platform" },
        { value: "2 GB", label: "of attachments per proposal" },
      ],
      tags: ["Product", "Tracking", "API contracts"],
      intro:
        "BEES is Elephant Skin’s platform for real estate developers, used by 11 clients. Buyers explore each development in an interactive presentation (masterplan, 360° spins, floor plans, galleries) on the developer’s website and on touchscreens at the sales center, while brokers manage leads and sales in a separate CRM.",
      facts: [
        { label: "Role", value: "Frontend Engineer" },
        { label: "Company", value: "Elephant Skin" },
        { label: "Platform", value: "BEES" },
        { label: "Focus", value: "Product · Tracking · API contracts" },
      ],
      media: {
        type: "placeholder",
        label: "[Screenshots: proposal builder → buyer view → activity history]",
      },
      challenge: [
        "A sale starts in the presentation, but the decision happens later, away from the broker. The proposal had to become part of the product: the broker builds it inside the presentation, the buyer opens it in the same experience, and it reports back what the buyer actually looked at.",
        "We couldn’t ask the buyer to log in, and tracking could never get in the way of the experience.",
      ],
      steps: [
        {
          title: "Proposal builder inside the presentation",
          body: "From any apartment or lot, brokers set the buyer, price, a payment plan split into stages with installments and discounts, an expiration date, and up to three tabs of images, videos and PDFs (2 GB per proposal, with upload progress).",
        },
        {
          title: "A link that opens the experience",
          body: "The buyer lands right on their unit: apartments open in the 360° spin, lots on the masterplan. Links opened on the wrong route redirect automatically, and expired proposals get their own screen.",
        },
        {
          title: "Tracking that never gets in the way",
          body: "A single click listener at the root of the proposal describes whatever was clicked, from `data-track` and `aria-label` down to an image’s file name, so new buttons are tracked with no extra code. Double clicks count once, reloads within 30 minutes don’t count as new opens, and events go out in order through a queue. Failures are swallowed: a lost event is better than a proposal that doesn’t open.",
        },
        {
          title: "A history brokers can read",
          body: "Raw events become visits, and each visit is a tree of section → album → image with repeat counts, plus signals such as “asked to talk on WhatsApp” and the most viewed sections. The same parser runs in the presentation and in the CRM, so both tell the same story. Edits get their own history, grouped by person and summarized (“+3 files · 1 new tab · reordered”).",
        },
        {
          title: "Contracts that fail safe",
          body: "I wrote the API contracts and handled some of the PHP changes myself. An edit that doesn’t mention attachments never touches them, files are only deleted by explicit ID, and files are removed from storage before their database rows, so nothing is left orphaned.",
        },
      ],
      results: {
        highlights: [
          "Brokers see when each proposal was opened, how many times, and what the buyer looked at, in both the presentation and the CRM.",
          "For the buyer, nothing changes: no login, no wait and no new way for the proposal to fail.",
        ],
      },
    },
  ],
  experience: [
    {
      period: "Dec 2023 – Present",
      org: "Elephant Skin",
      detail: "Frontend Engineer · Miami, FL (remote)",
      text: "Leading frontend development for real estate platforms, including BEES, used by 11 clients: interactive presentations with masterplans and 360° spins, and the proposal and lead tools brokers use to sell.",
    },
    {
      period: "Oct 2021 – Nov 2023",
      org: "Luby",
      detail: "Frontend Developer · São Paulo (remote)",
      text: "Built React and Next.js apps for multiple client platforms, reduced load times by up to 35%, cut delays in internal processes by up to 30%, and mentored junior developers.",
    },
    {
      period: "2020 – 2023",
      org: "Universidade Paulista (UNIP)",
      text: "Bachelor’s degree in Computer Science.",
    },
  ],
  skills: [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS"] },
    {
      name: "Interfaces",
      items: ["Styled Components", "Tailwind CSS", "Canvas", "SVG", "Google Maps API", "Accessibility"],
    },
    { name: "Performance", items: ["Code splitting", "Lazy loading", "Web Workers", "Image preloading"] },
    { name: "Workflow", items: ["REST APIs", "Jest", "Git & GitHub", "Claude Code", "Cursor"] },
  ],
  about: [
    "I’m a frontend engineer from Guarujá, Brazil, with 5+ years building for the web and a degree in Computer Science. At Elephant Skin, I build the interactive presentations and sales tools behind BEES, a real estate platform. Before that, I spent two years at Luby shipping React and Next.js apps for different clients and mentoring junior developers.",
    "I enjoy making heavy, complex interfaces feel simple, like a 360° spin that responds the moment you touch it. I work closely with designers, backend developers and product managers, and I incorporate AI tools like Claude Code into my workflow to improve speed and productivity.",
  ],
  contact: {
    label: "Contact",
    text: "I’m open to remote frontend roles, full-time or contract. Send me an email or a message on LinkedIn.",
    location: "Guarujá, Brazil · UTC-3",
    resume: "Download résumé (PDF)",
  },
  casePage: {
    back: "All work",
    media: "Project media",
    challenge: "The challenge",
    steps: "What I did",
    results: "Results",
    next: "Next case",
    previous: "Previous case",
  },
  footer: { backToTop: "Back to top" },
  notFound: {
    title: "Page not found",
    text: "This page doesn’t exist or has moved.",
    cta: "Back to home",
  },
};
