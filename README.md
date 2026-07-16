# Duetti Pitch Builder

A self-contained tool for building DSP priority-release pitch emails that
render correctly in Gmail on desktop and mobile. Fill in the form, preview
it as an inbox row and a live desktop/mobile email preview, then copy or
download the finished HTML.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Deploy it — pick one

### Option A: Vercel (easiest)

1. Push this folder to a GitHub repo (see below).
2. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and import the repo.
3. Leave the defaults (Vite is auto-detected) and click **Deploy**.
4. You'll get a live URL like `duetti-pitch-builder.vercel.app` — share that.

Any time you push a new commit, Vercel redeploys automatically.

### Option B: GitHub Pages

1. Create a new repo on GitHub and push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. Open `vite.config.js` and set the `base` to match your repo name:

   ```js
   base: "/<repo-name>/",
   ```

3. Install the deploy helper and ship it:

   ```bash
   npm install
   npm run deploy
   ```

   This builds the site and pushes it to a `gh-pages` branch.

4. In your repo on GitHub: **Settings → Pages → Source**, choose the
   `gh-pages` branch, and save. Your site will be live at
   `https://<your-username>.github.io/<repo-name>/` within a minute or two.

### Option C: Netlify

Same idea as Vercel — push to GitHub, import the repo at
[app.netlify.com](https://app.netlify.com), leave the Vite defaults, deploy.

## Notes

- Everything runs in the browser — there's no backend and nothing is sent
  to a server. Uploaded logos/cover art are resized and embedded directly
  into the generated email HTML.
- The two brand fonts (Maax Unicase Bold, Nunito) are already wired up
  inside `src/EmailGenerator.jsx` — Maax is embedded for the headline,
  Nunito loads from Google Fonts. No extra setup needed.
- Nothing is saved between visits (no login, no database). Each person who
  opens the site gets a fresh copy of the tool with the sample pitch
  pre-filled.
