# Arleta Marczynska — Personal Landing Page

Premium personal landing page for Arleta Marczynska. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## Tech stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 15 | Framework, App Router |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Styling |
| Framer Motion | 11 | Animations |
| Vercel | — | Hosting |

---

## Getting started

### Prerequisites

- Node.js 20+
- npm, pnpm, or yarn

### Install dependencies

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Project structure

```
arleta-landing/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with Header + Footer
│   ├── page.tsx          # Home (/)
│   ├── not-found.tsx     # 404
│   ├── blog/
│   │   ├── page.tsx      # Blog index (/blog)
│   │   └── [slug]/
│   │       └── page.tsx  # Blog post (/blog/slug)
│   ├── projekty/
│   │   └── page.tsx      # Projects (/projekty)
│   └── kontakt/
│       └── page.tsx      # Contact (/kontakt)
├── components/
│   ├── layout/
│   │   ├── Header.tsx    # Sticky nav with scroll blur
│   │   └── Footer.tsx
│   ├── sections/         # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── LatestPosts.tsx
│   │   └── ContactCTA.tsx
│   └── ui/               # Reusable primitives
│       ├── FadeIn.tsx    # Framer Motion scroll reveal wrapper
│       ├── SectionLabel.tsx
│       └── Divider.tsx
├── data/
│   ├── siteConfig.ts     # Name, bio, nav, social links
│   ├── projects.ts       # Project list
│   └── posts.ts          # Blog post metadata (replace with MDX/CMS later)
├── lib/
│   └── utils.ts          # cn(), formatDate()
└── public/               # Static assets (add og-image.png here)
```

---

## Deploying to Vercel

### Option A: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option B: GitHub integration

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Deploy — no environment variables required for base setup.

---

## Customization

### Update personal data

Edit `data/siteConfig.ts` to change name, bio, email, social links, and nav items.

### Add projects

Add entries to `data/projects.ts`. Set `featured: true` to show on the homepage.

### Add blog posts

For static posts: add entries to `data/posts.ts` and create a matching MDX file (requires `@next/mdx` setup — see Next.js docs).

For a CMS: replace `data/posts.ts` with a fetch from Contentful, Sanity, or similar. The page structure is already in place.

### Change the accent color

Update `accent` in `tailwind.config.ts`:

```ts
accent: "#C8963E",  // replace with your color
```

---

## Adding an OG image

Place a `og-image.png` (1200x630px) in `/public` and update `app/layout.tsx`:

```ts
openGraph: {
  images: [{ url: "/og-image.png", width: 1200, height: 630 }],
},
```

---

## License

Personal use. All rights reserved.
