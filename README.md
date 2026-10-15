# Gayashri Wanni Arachchi — Fashion Portfolio

A premium, mobile-responsive Next.js App Router portfolio with genuine image assets extracted from Gayashri's submitted fashion lookbooks and research PDFs.

## Run locally

1. Install Node.js 20.9+.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.
5. For production, run `npm run build` then `npm start`.

## Contact form

The form is functional **without a server** using `mailto:`. Submitting opens the visitor's configured email app with a prefilled message to `gayashrinethu@gmail.com`; the visitor must press Send there. It does **not** silently send emails. For direct website submission without an email client, connect a transactional email service (e.g. Resend) and a server-side route with spam protection, rate limiting, and secret environment variables.

## Helvetica World font

Helvetica World is a commercial font. Font files are **not** included. The CSS already defines `@font-face` entries pointing to:
- `public/fonts/HelveticaWorld-Regular.woff2`
- `public/fonts/HelveticaWorld-Semibold.woff2`
- `public/fonts/HelveticaWorld-Bold.woff2`

Add legally licensed WOFF2 files under these exact names (and confirm the licensed files' internal names/weights). Until then the site uses Helvetica Neue / Helvetica / Arial fallbacks.

## Images

- `public/images/welcome-web.png` — desktop hero
- `public/images/welcome-mobile.png` — mobile hero
- `public/images/about-me.png` — about section
- `public/images/background.jpg` — optional beige background asset
- `public/images/projects/` — pages rendered from submitted project PDFs

Research PDFs include third-party brand/runway/film imagery. These images are displayed only as part of Gayashri's academic research pages, with attribution notice in project view. Review rights before public commercial deployment. Replace research imagery if needed.

## Edit portfolio

All text, project image arrays, links and skill cards are in `app/page.tsx`. Global design rules and responsive breakpoints are in `app/globals.css`.

Instagram profile URL is constructed from the user-supplied handle; confirm the profile URL works before publishing.

## Notes

This site presents technical design abilities as areas of practice/development rather than claiming completed production deliverables that are not shown in the supplied documents. Add authentic CAD drawings and tech packs as new project galleries when available.
