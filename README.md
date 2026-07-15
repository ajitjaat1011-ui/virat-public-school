# Virat Public School — Official Website

A bilingual (English/Hindi) school website for **Virat Public School, Viratnagar** (Kotputli-Behror district, Rajasthan), built per the Website Structure & Design Specification v1.0.

- **Live site**: https://virat-public-school.pages.dev
- **Source**: https://github.com/ajitjaat1011-ui/virat-public-school
- **Stack**: Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui
- **Hosting**: Cloudflare Pages (static export + Pages Functions for the API)
- **Database**: Turso (libSQL) via `@libsql/client`

## Brand identity

| Token             | Hex       | Role                  |
| ----------------- | --------- | --------------------- |
| Primary Maroon    | `#800000` | Brand primary         |
| Deep Maroon       | `#5C0000` | Footer, hover states  |
| Cream             | `#F5F1E8` | Section backgrounds   |
| Gold Accent       | `#D4AF37` | Dividers, links, CTAs |
| Body Text         | `#1A1A1A` | Body copy             |
| Secondary Text    | `#6B5B5B` | Captions, meta info   |

Tagline: **Vidya Dadati Vinayam** — *Knowledge Bestows Humility*.

## Sitemap (21 routes)

| Section | Pages |
| --- | --- |
| Home | `/` |
| About Us | `/about-us` + 4 sub-pages (history, vision-mission, principal's message, management) |
| Academics | `/academics` + 4 sub-pages (curriculum, classes, faculty, examinations) |
| Admissions | `/admissions` + 4 sub-pages (process, fees, apply, eligibility) |
| News & Events | `/news-events` + 3 sub-pages (announcements, calendar, gallery) |
| Contact | `/contact-us` |
| SEO | `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` |

## Functional features

- ✅ **Mobile-responsive** layout (480/768/1024/1440 px breakpoints)
- ✅ **Bilingual toggle** (English ⇄ Hindi) via React Context — `src/lib/i18n/translations.ts`
- ✅ **Online admission form** with multi-section fields and file upload → `POST /api/admissions/apply`
- ✅ **Contact form** with honeypot spam protection → `POST /api/contact`
- ✅ **News & Events** with announcements, monthly calendar, photo gallery (lightbox)
- ✅ **Google Maps embed** of Viratnagar campus
- ✅ **WhatsApp click-to-chat** button (mobile)
- ✅ **SEO**: per-page meta tags, auto `sitemap.xml`, `robots.txt`, Schema.org `EducationalOrganization` JSON-LD
- ✅ **Accessibility**: semantic HTML, alt text, keyboard navigation, WCAG 2.1 AA contrast
- ✅ **Sticky header** with desktop dropdown nav + mobile hamburger menu
- ✅ **Sticky footer** with contact info + social links

## Project structure

```
.
├── functions/                     # Cloudflare Pages Functions (API)
│   └── api/
│       ├── admissions/apply.ts    # POST /api/admissions/apply
│       ├── contact.ts             # POST /api/contact
│       └── [[catchall]].ts        # 404 for unknown /api/* paths
├── prisma/
│   └── schema.prisma              # Turso schema (6 models)
├── public/
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   └── robots.txt
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── layout.tsx             # Root layout (header, footer, fonts)
│   │   ├── page.tsx               # Home page
│   │   ├── about-us/              # About section + 4 sub-pages
│   │   ├── academics/             # Academics section + 4 sub-pages
│   │   ├── admissions/            # Admissions section + 4 sub-pages
│   │   ├── news-events/           # News section + 3 sub-pages
│   │   ├── contact-us/
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── site/                  # School-specific components
│   │   │   ├── site-header.tsx    # Sticky nav + bilingual toggle + Apply CTA
│   │   │   ├── site-footer.tsx
│   │   │   ├── language-context.tsx
│   │   │   ├── page-hero.tsx      # Reusable page header
│   │   │   ├── sub-nav.tsx        # Sidebar sub-navigation
│   │   │   └── school-json-ld.tsx # Schema.org structured data
│   │   └── ui/                    # shadcn/ui component library
│   ├── lib/
│   │   ├── db.ts                  # Prisma client with Turso libSQL adapter
│   │   ├── utils.ts
│   │   └── i18n/
│   │       └── translations.ts    # English + Hindi dictionary
│   └── app/globals.css            # Brand design tokens (CSS variables)
├── next.config.ts                 # Static export config
├── wrangler.toml                  # Cloudflare Pages config
└── package.json
```

## Local development

```bash
bun install
bun run db:generate    # Generate Prisma client
bun run db:push        # Create local SQLite file (db/custom.db)
bun run dev            # Dev server at http://localhost:3000
```

The dev environment uses a local SQLite file (`DATABASE_URL=file:.../db/custom.db`) so forms work without a Turso account. Production uses Turso via env vars.

## Deployment to Cloudflare Pages

The site is deployed as a **static export** (`output: 'export'` in `next.config.ts`) with **Pages Functions** for the two API endpoints. To redeploy:

```bash
# 1. Build the static site (outputs to ./out)
bun run build

# 2. Deploy to Cloudflare Pages
CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... \
  npx wrangler pages deploy out --project-name=virat-public-school --branch=main
```

### Environment variables (set on Cloudflare dashboard)

| Variable | Type | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | secret | Turso libSQL URL, e.g. `libsql://<db-name>-<org>.turso.io` |
| `DATABASE_AUTH_TOKEN` | secret | Turso database access token |

Set them via:
```bash
echo "libsql://your-db.turso.io" | npx wrangler pages secret put DATABASE_URL --project-name=virat-public-school
echo "your-turso-token"          | npx wrangler pages secret put DATABASE_AUTH_TOKEN --project-name=virat-public-school
```

## Setting up Turso (one-time)

The Turso auth token provided with this project is a database access token (JWT). To enable form persistence, a Turso database must exist and its URL must be set as the `DATABASE_URL` env var on Cloudflare.

```bash
# Install Turso CLI (one-time)
curl -sSfL https://get.tur.so/install.sh | bash

# Sign in & create a database
turso auth login
turso db create virat-public-school --location dfw

# Get the libSQL URL
turso db show virat-public-school --url
# → libsql://virat-public-school-<your-org>.turso.io

# Generate an auth token
turso db tokens create virat-public-school
# → eyJhbGciOiJFZERTQSIs...

# Apply the schema
turso db shell virat-public-school < prisma/schema.prisma
# (or: prisma db push --schema=prisma/schema.prisma with DATABASE_URL set)
```

Then set both values as Cloudflare Pages secrets (above) and redeploy.

## Content updates

The site is built with placeholder content that matches the spec. To replace placeholders with real content (school logo, principal's photo, faculty directory, fee table, event calendar, etc.), edit the corresponding page in `src/app/`. The content assets checklist is in Section 7 of the specification document (`upload/Virat_Public_School_Website_Structure.docx`).

## Tech notes

- **No GitHub integration on Cloudflare**: this deployment uses direct upload via Wrangler. Push to GitHub does not auto-deploy; run `bun run build && npx wrangler pages deploy out` to redeploy.
- **Pages Functions vs Next.js API routes**: API routes live in `/functions/api/*` (Cloudflare Pages Functions), not in `src/app/api/*` (Next.js API routes). This is because the site is statically exported.
- **Prisma in Pages Functions**: Pages Functions use `@libsql/client` directly (no Prisma) to keep the bundle small. The Prisma schema in `prisma/schema.prisma` defines the table structure that Turso must have.

## License

© 2026 Virat Public School. All rights reserved.
