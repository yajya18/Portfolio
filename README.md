# Yajya Arora — Portfolio

A production React + Vite + TypeScript + Tailwind CSS portfolio for Yajya Arora, a
third-year Computer Science Engineering student at Thapar Institute of Engineering
and Technology, working across machine learning, backend engineering, databases,
real-time systems and applied research.

Design direction: **editorial engineering** — premium editorial layout, technical
documentation structure, and restrained motion, built around real project work
rather than decoration. See `DESIGN.md`-style notes below for the token system.

---

## 1. Project Overview

- **Home** — asymmetric identity hero, accurate stat counts, selected work
  (Air Aware, Loopin, Thermal Management), a research preview, contact CTA.
- **Projects** (`/projects`) — filterable archive of all 5 projects.
- **Project detail** (`/projects/:slug`) — full case-study page per project.
- **Research** (`/research`) — academic-style listing (currently 1 active entry).
- **Research detail** (`/research/:slug`) — Research Question → ... → Current Status.
- **Skills** (`/skills`) — domain-grouped taxonomy, no ratings; click a skill with
  a filled outline to see which project/research actually evidences it.
- **About** (`/about`) — bio, education, academic profile, certifications.
- **Contact** (`/contact`) — email + any populated social links.

Every fact on the site is pulled from `src/data/*.ts` — there is no content
hardcoded inside page/component JSX beyond section labels.

---

## 2. Tech Stack

- React 18 + TypeScript
- Vite 5 (build tooling)
- React Router 6 (client-side routing)
- Tailwind CSS 3 (styling, custom design tokens in `tailwind.config.ts`)
- Hand-built inline SVG illustrations (no chart/animation/3D libraries)
- Google Fonts: Fraunces (serif), Manrope (sans), IBM Plex Mono (mono)

No Three.js, WebGL, animation libraries, or UI kits — kept intentionally light.

---

## 3. Project Structure

```
yajya-portfolio/
├── public/
│   ├── favicon.svg
│   ├── _redirects                  # Netlify SPA fallback
│   ├── images/
│   │   ├── projects/<slug>/        # empty — see "Asset Replacement"
│   │   ├── research/5g-mimo/
│   │   └── about/
│   └── Yajya_Arora_Resume.pdf      # NOT included — see "Resume Replacement"
│
├── src/
│   ├── components/
│   │   ├── Navbar/ Footer/ Button/ Container/
│   │   ├── ProjectCard/ ProjectGrid/
│   │   ├── SectionHeading/ TechTag/ StatBlock/
│   │   ├── ArchitectureDiagram/ CaseStudySection/
│   │   ├── SkillsTaxonomy/
│   │   └── visuals/                # hand-built SVG illustrations, one per project
│   ├── data/
│   │   ├── site.ts                 # identity, contact, education, CGPA, LeetCode count
│   │   ├── projects.ts             # all 5 projects + full case-study content
│   │   ├── research.ts             # 5G MIMO research entry
│   │   └── skills.ts               # skill taxonomy + evidence links to projects
│   ├── hooks/
│   │   ├── useDocumentTitle.ts
│   │   └── useReveal.ts            # restrained scroll-reveal (respects reduced motion)
│   ├── layouts/MainLayout.tsx      # Navbar + <Outlet /> + Footer
│   ├── pages/                      # one file per route
│   ├── styles/index.css
│   ├── App.tsx                     # route table
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── postcss.config.js
```

---

## 4. Local Setup

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

---

## 5. Build

```bash
npm run build      # type-checks with tsc, then builds to /dist
npm run preview    # serves the production build locally, for a final check
```

This has been verified to build cleanly with **zero TypeScript errors** and
**zero build warnings** as of this repository's current state.

---

## 6. Environment Variables

None. This is a fully static site with no API keys, backend calls, or secrets.
If you later wire up a real contact form or analytics, document new variables
in a `.env.example` file and load them via `import.meta.env.VITE_*`.

---

## 7. Asset Replacement

Every visual is currently a hand-built, abstract SVG illustration (in
`src/components/visuals/`) chosen to represent each project's real subject
matter (a map for Air Aware, a temperature curve for Thermal Management, a
waveform for Edge Wake-Word, patch-antenna geometry for the 5G MIMO research,
etc.) — not generic AI artwork or stock photography.

To swap in a real screenshot for any project:

1. Add the image file under `public/images/projects/<slug>/` (folders already
   exist for all 5 projects) or `public/images/research/5g-mimo/`.
2. In `src/data/projects.ts` (or `research.ts`), set that project's `image`
   field to the path, e.g. `image: '/images/projects/loopin/dashboard.png'`.
3. `ProjectCard` and `ProjectDetail` automatically prefer `image` over the
   illustration once it's set — no component code changes needed.

**Placeholders to replace when real assets are available:**
- `public/images/projects/loopin/` — currently empty
- `public/images/projects/air-aware/` — currently empty
- `public/images/projects/thermal-management/` — currently empty
- `public/images/projects/twitter-clone/` — currently empty
- `public/images/projects/edge-wake-word/` — currently empty
- `public/images/research/5g-mimo/` — currently empty
- `public/images/about/` — currently empty (no portrait is used by default;
  the About page is typography-led by design)
- `public/Yajya_Arora_Resume.pdf` — **not included, see section 9**
- Open Graph social-preview image (optional) — add
  `public/og-image.png` (1200×630) and an `<meta property="og:image">`
  tag in `index.html` if you want a rich social preview card.

---

## 8. Adding a Project

Open `src/data/projects.ts` and append an object matching the `Project` type:

```ts
{
  id: 'my-project',
  number: '06',
  slug: 'my-project',
  title: 'My Project',
  tagline: 'One-line description',
  shortDescription: 'Card-length description.',
  description: 'Longer overview paragraph.',
  categories: ['Software'],           // from: Software, ML, Backend, Databases, Systems, IoT
  technologies: ['Tech A', 'Tech B'],
  featured: false,                    // true = eligible for homepage curation
  size: 'small',                      // 'large' | 'medium' | 'small' — controls archive grid span
  visual: 'loopin',                   // reuse an existing SVG key, or add a new one (see below)
  architecture: [{ label: 'Flow', stages: ['A', 'B', 'C'] }],
  caseStudy: {
    overview: '...', problem: '...', approach: '...',
    implementation: ['...'], keyDecisions: [{ title: '...', detail: '...' }],
    results: '...', lessons: '...',
  },
}
```

It will automatically appear in `/projects` (respecting its `categories` for
filtering) and, if you also add it to the relevant lookup in `Home.tsx`,
on the homepage.

To add a new illustration instead of reusing one: create a component in
`src/components/visuals/`, export it from `src/components/visuals/index.tsx`,
and register it in the `visualMap` under a new key that matches your
project's `visual` field.

---

## 9. Adding Research

Open `src/data/research.ts` and append an object matching the `Research`
type — it follows the academic structure (Research Question → Engineering
Background → Simulation Method → Dataset Generation → ML Method → Validation
→ Current Status) rather than the product case-study structure used for
projects. It will automatically appear on `/research`.

---

## 10. Resume Replacement

The site expects a real resume at:

```
public/Yajya_Arora_Resume.pdf
```

This file is **intentionally not included** — no resume content was provided,
and one should not be fabricated. Add the real PDF at that exact path and the
"Resume ↗" (homepage) and "Download résumé ↗" (Contact page) links will work
immediately; no code changes are needed. Until the file is added, those links
will 404.

---

## 11. Changing Social Links

Open `src/data/site.ts`:

```ts
socials: {
  github: '',     // e.g. 'https://github.com/yourhandle'
  linkedin: '',   // e.g. 'https://linkedin.com/in/yourhandle'
  leetcode: '',   // e.g. 'https://leetcode.com/yourhandle'
},
```

These are left empty because no verified URLs were provided. The Contact page
and Footer only render a link when its value is non-empty — nothing fabricated
is ever shown. `email` in the same file is already set to the real address.

**Other editable fields in `site.ts`:**
- `cgpa` — currently `"8.74/10"` (the more recent of two resume drafts, which
  listed `8.7/10` and `8.74/10`). Change this one string if needed.
- `leetcodeCount` — currently `"180+"` (the more recent of two resume drafts,
  which listed `150+` and `180+`).
- `education` — institution, location, degree, duration, year.
- `certifications` — array of `{ name, provider, status }`.
- `resumeUrl` — path the resume links point to.

---

## 12. Deployment

This is a static single-page app (client-side routing), so any static host
works, but **all routes must fall back to `index.html`**, or deep links like
`/projects/loopin` will 404 on a hard refresh.

- **Netlify** — `public/_redirects` is already included
  (`/*  /index.html  200`). Build command `npm run build`, publish directory
  `dist`.
- **Vercel** — auto-detects Vite + handles SPA fallback; no extra config
  needed. Build command `npm run build`, output directory `dist`.
- **GitHub Pages** — needs either a hash router or a 404.html-based fallback
  trick, and a `base` path set in `vite.config.ts` if deploying to a
  `username.github.io/repo-name` subpath. Not configured by default since it
  depends on the target repo name.

```bash
npm run build     # outputs to /dist
```

Upload the contents of `/dist` to your host of choice.

---

## Final Verification

- ✅ `npm install` completes cleanly
- ✅ `npm run dev` serves the app
- ✅ `npm run build` completes with **zero TypeScript errors**
- ✅ `npm run preview` serves the production build; all routes (including
  nested project/research routes and an unknown route) return `200` via SPA
  fallback
- ✅ "Finovo" and the stress-management project do not appear anywhere in
  source or build output (verified via full-repo search)
- ✅ No fabricated GitHub/LinkedIn/LeetCode URLs anywhere in source
