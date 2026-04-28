# How Craig Yappert's Personal Site Works

A plain-language explanation of the technology choices, architecture, and how the interactive pieces work.

---

## The Big Idea: No Build Step

Most modern web apps require a "build" — you run a command that compiles and bundles your code before it can run in a browser. This site skips that entirely.

Instead, the browser itself compiles the code on the fly. The tradeoff: slightly slower first load, but you can edit a file, push to GitHub, and the site is live in ~30 seconds with zero tooling.

---

## How It's Hosted

The site lives in a GitHub repository named `craig-yappert.github.io`. GitHub has a feature called **GitHub Pages** that automatically serves the files in that repo as a public website. The URL (`https://craig-yappert.github.io`) matches the repo name — that's GitHub's convention for personal/org sites.

Deploying is just: **edit files → git commit → git push**. GitHub Pages picks up the changes automatically.

A file called `.nojekyll` sits in the root of the repo. This tells GitHub Pages to serve all files as-is, rather than running them through Jekyll (GitHub's default static site generator). Without it, certain file paths might be blocked.

---

## The Technology Stack

**React** — a JavaScript library from Meta for building user interfaces. Instead of writing HTML that changes over time, you describe what the UI should look like at any moment and React handles the updates. The site is built as a series of React "components" — self-contained pieces of UI.

**Babel** — a JavaScript compiler. Normally React's JSX syntax (HTML-looking code inside JavaScript) isn't valid in a browser. Babel translates it into plain JavaScript the browser understands. On this site, Babel runs *in the browser* via a script tag, so there's no compile step needed beforehand.

**CSS with custom properties** — the styling is split across multiple CSS files, one per section. A `?v=N` version number is appended to each stylesheet URL (e.g. `styles/hero.css?v=9`). This is a cache-busting technique — when you change the number, browsers discard their cached copy and fetch the fresh file.

---

## How the Files Are Organized

```
index.html          The single entry point. Loads fonts, CSS, React, Babel,
                    and all component files.

styles.css          Global design tokens — colors, typography, spacing,
                    nav and footer styles.

styles/             Per-section stylesheets. Each component has its own file
                    so styles don't bleed between sections.

components/         React components, one per section of the page.

assets/             Portrait photos.

papers/             Resume, case study PDFs, and HTML one-pagers.
```

---

## How the Page Loads

1. The browser fetches `index.html`.
2. The `<head>` loads Google Fonts (Fraunces, Inter Tight, JetBrains Mono) and all CSS files.
3. The `<body>` contains just `<div id="root"></div>` — a placeholder where React will inject the full page.
4. Three CDN scripts load: React 18, ReactDOM, and Babel Standalone.
5. Each `components/*.jsx` file is loaded as `type="text/babel"` — Babel intercepts these, compiles them to JavaScript, and registers each component on the global `window` object (e.g. `window.Hero = Hero`).
6. `App.jsx` loads last. It calls `ReactDOM.createRoot(document.getElementById("root")).render(<App />)`, which builds the full page inside that placeholder div.

---

## The App Component (App.jsx)

`App.jsx` is the top-level orchestrator. It does three things:

**1. Sticky nav with scroll detection**
A `scroll` event listener tracks whether you've scrolled more than 40px. When you have, a CSS class `is-scrolled` is added to the nav, which triggers a style change (background blur, border, etc.).

**2. Mobile hamburger menu**
A `menuOpen` boolean controls whether a full-screen slide-out menu is visible. When open, it also locks `document.body.overflow` to prevent the page behind it from scrolling.

**3. Scroll-reveal animation**
An `IntersectionObserver` watches every element with the class `cy-reveal`. When one scrolls into view (12% visible), the class `is-in` is added to it. CSS transitions tied to `is-in` handle the fade/slide animation. The observer stops watching an element once it's revealed (no repeat).

---

## Section-by-Section Breakdown

### Hero
The opening section. Two notable interactive features:

- **Live clock** — a `setInterval` timer updates every second to display the current Pacific Time, showing "Available · San Francisco · HH:MM PT" in real time.
- **Scrolling marquee** — a CSS animation (`animation: marquee`) slides a duplicated row of company names left in a continuous loop. Duplicating the row prevents a visible gap when it resets.

### Impact Map (ImpactMap.jsx)
The signature interactive piece. It renders a node-and-link diagram inside an SVG element showing the chain: **Strategic Move → System Built → Human Outcome**.

- Nodes are positioned in three columns, evenly spaced vertically, using calculated x/y coordinates.
- Links between nodes are drawn as SVG `<path>` elements using cubic Bezier curves (`C` command) — this creates smooth S-curves rather than straight lines.
- A `ResizeObserver` recalculates node positions whenever the container changes width, making the graph responsive.
- Hovering a node sets a `hovered` state. All other nodes and links that don't connect to it are dimmed (`is-dim` class). Connected nodes and links are highlighted (`is-active`).
- Filter buttons (All / MidPen / Oracle / Zeeba) mute nodes whose label or sub-label doesn't match.
- On mobile, the SVG graph is hidden and replaced with a simpler vertical three-column list (CSS `display: none` / `display: block` toggle).

### Metrics (Metrics.jsx)
Six key numbers with animated counting.

- An `IntersectionObserver` watches the section. When it scrolls into view, it fires the counter animation once.
- Each counter uses `requestAnimationFrame` to animate from 0 to the target value over 1.4 seconds, with a cubic ease-out curve (`1 - (1-k)³`).

### Other Sections
Timeline, Case Studies, Projects, Skills & Certs, and Story/Contact follow the same pattern: React components that return styled HTML, using the `cy-reveal` class to get the scroll-in animation for free.

---

## The Design System

All class names are prefixed `cy-` (for Craig Yappert) to avoid collisions. The visual language uses:

- **Fraunces** (serif, optical size) for headlines — gives an editorial, premium feel.
- **Inter Tight** (sans-serif) for body and UI text — clean and legible.
- **JetBrains Mono** (monospace) for labels, stats, and "receipt" elements — a nod to technical precision.
- A warm off-white (`#f3efe6`) on dark background palette, with amber/gold (`#d8a05a`) as the accent color.

---

## Fonts and the ?v= Cache Buster

Stylesheet links look like: `<link rel="stylesheet" href="styles/hero.css?v=9" />`

The `?v=9` is a query string that the server ignores but browsers treat as part of the URL. If you update the CSS and bump `v=9` to `v=10`, browsers won't use their cached copy of the old file — they'll fetch the new one. This avoids the classic "why isn't my update showing up?" problem.

---

## Why No Build Step?

For a small personal site, a build pipeline adds complexity (Node.js version, npm dependencies, config files, CI setup) with little benefit. The in-browser Babel approach means:

- No `npm install`
- No webpack/Vite config
- No build command before deploying
- Any text editor + git push = deployed

The cost is a slightly slower first load (Babel itself is ~1MB), but for a personal branding site where first impressions matter more than raw performance, the tradeoff is reasonable.
