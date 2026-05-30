# BestWrinkleReducers.com

A production-ready Next.js 15 affiliate comparison site for the best anti-aging skincare products.

**Tech stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · MDX · Vercel

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Create your environment file
cp .env.example .env.local
# → Edit .env.local and fill in your affiliate tags (see below)

# 3. Run the dev server
npm run dev
# → Open http://localhost:3000
```

---

## Step-by-Step Deployment

### 1. Add your affiliate IDs

Open `.env.local` and replace the placeholder values:

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_AMAZON_TAG` | Amazon Associates → Account Settings → Tracking IDs |
| `NEXT_PUBLIC_AWIN_PUBLISHER_ID` | AWIN Publisher Dashboard → Account Details |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | Google AdSense → Account → Account Information |
| `NEXT_PUBLIC_SITE_URL` | `https://www.bestwrinklereducers.com` (your domain) |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics → Admin → Data Streams → Measurement ID |

Also update all `asin:` fields in `src/data/products.ts` with the real current ASINs for each product.

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — BestWrinkleReducers.com"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/bestwrinklereducers.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel (Free Tier)

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **New Project** → Import your `bestwrinklereducers` repo
3. Framework preset: **Next.js** (auto-detected)
4. Add environment variables:
   - Click **Environment Variables**
   - Add each variable from your `.env.local` (copy/paste key + value)
   - Set each to **Production** scope
5. Click **Deploy**

Vercel will build and deploy automatically. Every push to `main` triggers a new deployment.

### 4. Connect Your GoDaddy Domain

After Vercel deployment is live:

1. In Vercel: Go to **Project Settings → Domains** → Add `bestwrinklereducers.com` and `www.bestwrinklereducers.com`
2. Vercel will show you two DNS records to add. Copy them.
3. In GoDaddy: Go to **My Products → DNS → Manage**
4. Add/update these records:

| Type | Host | Value |
|---|---|---|
| A | @ | 76.76.21.21 (Vercel's IP) |
| CNAME | www | cname.vercel-dns.com |

5. Delete any existing A records pointing elsewhere
6. Wait 10–30 minutes for DNS propagation
7. Vercel will auto-provision an SSL certificate (Let's Encrypt)

### 5. Set Up Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://www.bestwrinklereducers.com`
3. Verify via HTML tag method → Copy the `content="..."` value
4. In `src/app/layout.tsx`, uncomment the verification line and add your code:
   ```typescript
   verification: {
     google: "YOUR_VERIFICATION_CODE_HERE",
   }
   ```
5. Submit your sitemap: `https://www.bestwrinklereducers.com/sitemap.xml`

---

## Customization Guide

### Adding a New Product Review

1. Add the product object to `src/data/products.ts` (follow the existing structure)
2. Add a product image to `public/images/your-product.jpg`
3. The review page at `/reviews/your-slug` is automatically generated

### Adding a Blog Post

1. Create a new file: `content/blog/your-post-slug.mdx`
2. Include the required frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   description: "SEO meta description"
   date: "2026-06-01"
   author: "BestWrinkleReducers Editorial Team"
   category: "Category Name"
   tags: ["tag1", "tag2"]
   readTime: "5 min read"
   ---
   ```
3. Write your MDX content below the frontmatter
4. The post appears automatically at `/blog/your-post-slug`

### Monetization Setup

**Amazon Associates:**
- Apply at [affiliate-program.amazon.com](https://affiliate-program.amazon.com)
- You need at least 3 qualifying sales in 180 days to avoid account closure
- Add your tracking tag to `NEXT_PUBLIC_AMAZON_TAG` in `.env.local`

**AWIN:**
- Apply at [awin.com](https://www.awin.com)
- Join individual brand programs (Murad, Clinique, etc.) within AWIN
- Use AWIN deep links in the `awInLink` field in `products.ts`

**Google AdSense:**
- Apply at [adsense.google.com](https://adsense.google.com)
- Requires approved content (the site needs to be live first)
- Add your Publisher ID to `NEXT_PUBLIC_ADSENSE_CLIENT`

---

## Updating Amazon ASINs

Each product in `src/data/products.ts` has an `asin` field. To find correct ASINs:
1. Go to the product page on Amazon
2. Look for the ASIN in the URL: `amazon.com/dp/ASIN_HERE`
3. Or scroll to "Product Details" section on the product page
4. Replace the placeholder ASINs in `products.ts`

---

## Performance Tips

- **Images:** Add real product images to `/public/images/` as `.webp` or `.jpg` files. Recommended size: 400×400px.
- **Core Web Vitals:** The site is built for fast LCP and CLS. Avoid adding heavy JavaScript libraries.
- **Caching:** Vercel's CDN caches all static pages automatically. No configuration needed.

---

## File Structure

```
bestwrinklereducers/
├── content/
│   └── blog/          ← MDX blog posts
├── public/
│   └── images/        ← Product images
├── src/
│   ├── app/           ← Next.js App Router pages
│   │   ├── layout.tsx ← Root layout + metadata
│   │   ├── page.tsx   ← Homepage
│   │   ├── sitemap.ts ← Auto-generated sitemap
│   │   ├── robots.ts  ← robots.txt
│   │   ├── top-10/
│   │   ├── reviews/[slug]/
│   │   ├── blog/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── affiliate-disclosure/
│   │   ├── privacy-policy/
│   │   └── terms/
│   ├── components/    ← Reusable UI components
│   ├── data/
│   │   └── products.ts ← All product data
│   └── lib/
│       ├── mdx.ts     ← MDX file loader
│       └── utils.ts   ← Utility functions
├── .env.example       ← Template for your .env.local
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

Built with ♥ for fast Vercel deployment and maximum SEO authority.
