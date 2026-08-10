import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Leaf, Droplets, FlaskConical, Sun, Shield } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";
import ComparisonTable from "@/components/ComparisonTable";
import ProductCard from "@/components/ProductCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import BlogCard from "@/components/BlogCard";
import { getFeaturedProducts } from "@/data/products";
import { getAllBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Wrinkle Reducers 2026 — Compare Popular Anti-Aging Products",
  description:
    "Discover the best wrinkle reducers and anti-aging creams of 2026. Compare popular anti-aging products. Compare retinol, retinal, and peptide creams to find your match.",
  alternates: {
    canonical: "/",
  },
};

const ingredients = [
  {
    icon: Sparkles,
    name: "Retinal (Retinaldehyde)",
    description:
      "One conversion step from active retinoic acid — significantly faster and stronger than retinol, with less irritation than prescription tretinoin.",
    color: "text-gold-500",
    bg: "bg-gold-50",
  },
  {
    icon: FlaskConical,
    name: "Retinol",
    description:
      "The OG anti-ager. Published research shows retinol increases collagen synthesis and accelerates cell turnover at concentrations from 0.025% to 1%.",
    color: "text-blush-500",
    bg: "bg-blush-50",
  },
  {
    icon: Leaf,
    name: "Peptides",
    description:
      "Signal peptides like Matrixyl 3000 and Argireline tell fibroblasts to produce more collagen and elastin — the key to firmer, bouncier skin.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Sun,
    name: "Vitamin C",
    description:
      "Potent antioxidant that neutralizes free radical damage, fades dark spots, and directly stimulates collagen synthesis for brighter, firmer skin.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Droplets,
    name: "Niacinamide (B3)",
    description:
      "Works on everything: fades pigmentation, minimizes pores, strengthens the barrier, and reduces redness — the ultimate multi-tasking anti-ager.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Shield,
    name: "Bakuchiol",
    description:
      "The plant-based retinol alternative. Clinical studies show bakuchiol at 0.5% matches retinol's wrinkle-reducing results with zero irritation.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

// JSON-LD WebSite structured data
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BestWrinkleReducers.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bestwrinklereducers.com",
  description: "Independent reviews of the best anti-aging creams and wrinkle reducers in 2026.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bestwrinklereducers.com"}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  const products = getFeaturedProducts();
  const blogPosts = getAllBlogPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Updated for 2026
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-neutral-900 leading-tight mb-5">
            Best Wrinkle Reducers<br />
            <span className="text-blush-500">of 2026</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            40+ popular anti-aging creams, compared.
            Science-backed picks ranked by ingredient evidence and real user results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/top-10"
              className="inline-flex items-center justify-center gap-2 bg-blush-500 hover:bg-blush-600 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-md text-base"
            >
              See Top 10 Picks <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog/how-to-build-anti-aging-routine"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-100 text-neutral-700 font-semibold px-8 py-4 rounded-full transition-colors shadow-sm border border-cream-300 text-base"
            >
              Build Your Routine
            </Link>
          </div>
          <p className="text-xs text-neutral-400 mt-5">
            As an Amazon Associate we earn from qualifying purchases.
          </p>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="py-10 bg-white border-b border-cream-200">
        <div className="container-custom">
          <TrustBadges />
        </div>
      </section>

      {/* ── Featured Comparison Table ── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Top 12 Anti-Aging Creams Compared
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Ranked by ingredient efficacy, clinical evidence, user reviews, and value for money.
            </p>
          </div>
          <AffiliateDisclosure compact />
          <div className="mt-4">
            <ComparisonTable products={products} limit={12} />
          </div>
          <div className="text-center mt-6">
            <Link
              href="/top-10"
              className="inline-flex items-center gap-2 text-blush-500 font-semibold hover:text-blush-600 transition-colors"
            >
              View full Top 10 with pros & cons <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why These Products? / Ingredient Explainer ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Why These Ingredients Actually Work
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              This site covers products built around well-documented active ingredients — retinol, vitamin C, niacinamide, and peptides. Here&apos;s what to look for and why.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((ing) => (
              <div key={ing.name} className={`${ing.bg} rounded-2xl p-6`}>
                <ing.icon className={`h-7 w-7 ${ing.color} mb-3`} />
                <h3 className="font-semibold text-neutral-900 text-base mb-2">{ing.name}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{ing.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog/retinol-vs-retinal-2026"
              className="inline-flex items-center gap-2 text-blush-500 font-semibold hover:text-blush-600 transition-colors"
            >
              Read: Retinol vs Retinal — Which is better in 2026? <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Product Cards Grid ── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Our Editor&apos;s Picks
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Detailed reviews for every budget — from $22 drugstore finds to $120 medical-grade formulas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} showDetails />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/top-10"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-sm"
            >
              See All 10 Reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Blog previews ── */}
      {blogPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                  From the Blog
                </h2>
                <p className="text-neutral-500">Science-backed guides for smarter skincare choices.</p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:flex items-center gap-1 text-blush-500 font-semibold text-sm hover:text-blush-600 transition-colors"
              >
                All articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Newsletter ── */}
      <section className="section-padding">
        <div className="container-custom">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
