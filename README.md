# TQLA Social Media Spec Portfolio — Kalen Wilson

**Spec concepts created for application purposes, not commissioned by TQLA.**

The complete visual site — original nightlife photography, five Reel concepts, Story mockups, calendar, campaign cards, and the idea generator — lives in the local project:

`/home/kalen/tqla-spec-portfolio`

Open it with:

```bash
cd /home/kalen/tqla-spec-portfolio
python3 -m http.server 4173
```

Then visit http://localhost:4173

## Publish the full site

From that folder, after logging in:

```bash
npx vercel --prod --yes
# or
npx netlify deploy --prod --dir .
```

To put the full photographic site on this GitHub repository:

```bash
cd /home/kalen/tqla-spec-portfolio
git remote add origin https://github.com/kalenwilson87-lab/tqla-spec-portfolio.git
git push -u origin main
```

Menu items, prices, hours, talent, weekly specials, and event dates in the spec stay hypothetical until TQLA confirms them.
