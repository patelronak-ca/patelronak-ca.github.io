# Ronak Patel - Portfolio

My personal portfolio site, built with **Next.js 15, React 19 and TypeScript**, exported as a static site and deployed to **GitHub Pages** with GitHub Actions.

Live site: https://patelronak-ca.github.io

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit the content

All text (experience, projects, skills, education, contact) lives in `app/data.ts`. Change it there and the whole page updates.

| File | What it does |
| --- | --- |
| `app/data.ts` | All the portfolio content |
| `app/page.tsx` | The page layout |
| `app/globals.css` | All styles, with light and dark themes |
| `app/components/` | Reusable pieces (sections, copy-email button) |
| `public/photo.jpg` | Profile photo |
| `.github/workflows/deploy.yml` | Builds and deploys the site on every push to `main` |

## Deploy

Push to the `main` branch. GitHub Actions runs `npm run build`, which writes the static site to `out/`, then publishes it to GitHub Pages.
