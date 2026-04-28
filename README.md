# Craig Yappert — Personal Site

Live: https://craig-yappert.github.io/

## What this is

A single-page personal site / portfolio built as static HTML + React (via Babel-in-browser). No build step — files are served as-is by GitHub Pages.

## Structure

```
index.html                  Entry point
styles.css                  Global tokens & base
styles/                     Per-section stylesheets (cache-busted via ?v=N)
components/                 React components (.jsx, transpiled in-browser by Babel)
assets/                     Portrait images
papers/                     Resume, one-pagers, case studies (PDFs + HTML)
```

## Local preview

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Deploy

This repo IS the deploy. GitHub Pages serves the root of `main` at `https://craig-yappert.github.io/`. The `.nojekyll` file disables Jekyll so all files (including ones starting with `_`) are served verbatim.

To update the live site: commit + push to `main`. Pages picks it up within ~30 seconds.

## Contact

cyappert@gmail.com · [LinkedIn](https://www.linkedin.com/in/craig-yappert/)
