# TQLA Social Media Spec Portfolio — Kalen Wilson

Static one-page spec portfolio for Kalen Wilson’s application to TQLA’s Social Media Manager / Content Creator role in Windsor, Ontario.

**Spec concepts created for application purposes, not commissioned by TQLA.**

## What this is

A portable website of proposed Reels, Stories, a sample content calendar, campaign themes, and an interactive idea generator. It is not TQLA’s live social presence and does not use TQLA logos or venue photography.

## Edit locally

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

- Copy lives in `index.html`
- Layout and motion live in `styles.css`
- Navigation, Story frames, polls, and the idea generator live in `script.js`
- Original concept images live in `assets/`

## Deploy

This is a static site. Any static host works.

### Vercel

```bash
npx vercel --prod --yes
```

Or connect this GitHub repository to a Vercel project with output set to the repository root (no build command).

### Netlify

```bash
npx netlify deploy --prod --dir .
```

### GitHub Pages

Publish the `main` branch from the repository root.

## Accuracy notes

Menu items, prices, hours, talent, weekly specials, and event dates in this spec are hypothetical or left open on purpose. Confirm them with TQLA before any live post.
