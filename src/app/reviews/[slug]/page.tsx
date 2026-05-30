import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShoppingCart, CheckCircle2, XCircle, ChevronRight,
  ArrowLeft, Info, FlaskConical, Users, Clock
} from "lucide-react";
import StarRating from "@/components/StarRating";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { products, getProductBySlug, getFeaturedProducts } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static params for SSG
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.brand} ${product.name} Review 2026 — Does It Actually Work?`,
    description: `Honest, in-depth review of ${product.brand} ${product.name}. Ingredient breakdown, pros & cons, who it's for, and where to buy. Updated for 2026.`,
    alternates: { canonical: `/reviews/${slug}` },
    openGraph: {
      title: `${product.brand} ${product.name} Review 2026`,
      description: product.shortDescription,
      url: `/reviews/${slug}`,
      images: [{ url: product.imageUrl, alt: `${product.brand} ${product.name}` }],
    },
  };
}

function amazonUrl(asin: string) {
  const tag = "asotv068-20";
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bestwrinklereducers.com";

  // JSON-LD: Review + FAQPage structured data
  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${product.brand} ${product.name} Review`,
    reviewBody: product.shortDescription,
    reviewRating: {
      "@type": "Rating",
      ratingValue: product.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      "@type": "Organization",
      name: "BestWrinkleReducers Editorial Team",
    },
    itemReviewed: {
      "@type": "Product",
      name: `${product.brand} ${product.name}`,
      brand: { "@type": "Brand", name: product.brand },
      description: product.shortDescription,
      image: `${siteUrl}${product.imageUrl}`,
      offers: {
        "@type": "Offer",
        price: product.price.replace("$", ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: amazonUrl(product.asin),
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount,
        bestRating: 5,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "BestWrinkleReducers.com",
      url: siteUrl,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const relatedProducts = getFeaturedProducts()
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-cream-50 border-b border-cream-200 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-1.5 text-xs text-neutral-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blush-500 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/top-10" className="hover:text-blush-500 transition-colors">Reviews</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-600">{product.brand} {product.name}</span>
          </nav>
        </div>
      </div>

      <article className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Main content ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Title block */}
              <header>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blush-500">{product.brand}</span>
                  <span className="text-neutral-300">·</span>
                  <span className="text-xs text-neutral-400">Rank #{product.rank} on our list</span>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-4">
                  {product.brand} {product.name} Review 2026
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
                  <span className="text-lg font-bold text-neutral-900">{product.price}</span>
                  <span className="text-sm text-neutral-400">{product.priceRange}</span>
                </div>
                <p className="text-lg text-neutral-600 leading-relaxed">{product.shortDescription}</p>
              </header>

              <AffiliateDisclosure />

              {/* Before/After */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-blush-400" />
                  What Results Can You Expect?
                </h2>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <p className="text-neutral-700 leading-relaxed">{product.beforeAfterDescription}</p>
                </div>
              </section>

              {/* Pros & Cons */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Pros &amp; Cons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-2xl p-5">
                    <h3 className="font-semibold text-green-800 mb-3 text-sm uppercase tracking-wide">What We Love</h3>
                    <ul className="space-y-2.5">
                      {product.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl p-5">
                    <h3 className="font-semibold text-neutral-500 mb-3 text-sm uppercase tracking-wide">Watch Out For</h3>
                    <ul className="space-y-2.5">
                      {product.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-neutral-600">
                          <XCircle className="h-4 w-4 text-neutral-300 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Ingredient Breakdown */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-blush-400" />
                  Ingredient Breakdown
                </h2>
                <p className="text-neutral-600 mb-5 text-sm leading-relaxed">
                  Our editors analyze every active ingredient against published clinical literature.
                  Here&apos;s what&apos;s actually doing the work in this formula:
                </p>
                <div className="space-y-4">
                  {Object.entries(product.ingredientBreakdown).map(([ing, desc]) => (
                    <div key={ing} className="bg-cream-50 border border-cream-200 rounded-xl p-4">
                      <h3 className="font-semibold text-neutral-900 mb-1.5 text-sm">{ing}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Who it's for */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Who Should Use This?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blush-50 rounded-2xl p-5">
                    <h3 className="font-semibold text-blush-700 mb-2 text-sm">✓ Perfect For</h3>
                    <p className="text-sm text-neutral-700 leading-relaxed">{product.whoItsFor}</p>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl p-5">
                    <h3 className="font-semibold text-neutral-500 mb-2 text-sm">✗ Skip If</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{product.notFor}</p>
                  </div>
                </div>
              </section>

              {/* How to Use */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blush-400" />
                  How to Use It
                </h2>
                <div className="bg-cream-100 rounded-2xl p-5">
                  <p className="text-sm text-neutral-700 leading-relaxed">{product.howToUse}</p>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {product.faq.map((item) => (
                    <div key={item.question} className="border border-cream-200 rounded-xl overflow-hidden">
                      <h3 className="font-semibold text-neutral-900 p-4 bg-cream-50 text-sm">
                        {item.question}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed p-4">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Back link */}
              <div className="pt-4">
                <Link
                  href="/top-10"
                  className="inline-flex items-center gap-2 text-sm text-blush-500 font-semibold hover:text-blush-600 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to full Top 10 comparison
                </Link>
              </div>
            </div>

            {/* ── Sticky sidebar ── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Buy box */}
                <div className="bg-white rounded-2xl shadow-card p-6">
                  <p className="text-xs uppercase tracking-wider text-blush-500 font-semibold mb-1">{product.brand}</p>
                  <h2 className="font-serif text-lg font-bold text-neutral-900 mb-3 leading-tight">{product.name}</h2>
                  <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />

                  <div className="my-4 border-t border-cream-200" />

                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-neutral-500">Price</span>
                    <span className="font-bold text-neutral-900">{product.price}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-neutral-500">Best For</span>
                    <span className="text-neutral-700 text-right max-w-[150px] leading-tight">{product.bestFor}</span>
                  </div>

                  <a
                    href={amazonUrl(product.asin)}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full flex items-center justify-center gap-2 bg-blush-500 hover:bg-blush-600 text-white font-semibold py-3.5 rounded-xl transition-colors btn-affiliate-pulse text-sm"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Buy on Amazon
                  </a>
                  <p className="text-xs text-neutral-400 text-center mt-2">
                    Price may vary. Check Amazon for current deals.
                  </p>

                  <div className="mt-4 flex items-start gap-2 text-xs text-neutral-500">
                    <Info className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                    <span>
                      Affiliate link — we earn a small commission at no cost to you.{" "}
                      <Link href="/affiliate-disclosure" className="underline">Details</Link>
                    </span>
                  </div>
                </div>

                {/* Key ingredients */}
                <div className="bg-cream-50 rounded-2xl p-5">
                  <h3 className="font-semibold text-neutral-900 text-sm mb-3">Key Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.keyIngredients.map((ing) => (
                      <span key={ing} className="text-xs bg-white border border-cream-300 text-neutral-700 px-2.5 py-1 rounded-full shadow-sm">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related products */}
                <div>
                  <h3 className="font-semibold text-neutral-900 text-sm mb-3">You Might Also Like</h3>
                  <div className="space-y-3">
                    {relatedProducts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/reviews/${related.slug}`}
                        className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-soft hover:shadow-card transition-shadow"
                      >
                        <div className="w-8 h-8 bg-cream-100 rounded-lg flex items-center justify-center text-xs font-bold text-neutral-500 flex-shrink-0">
                          #{related.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-neutral-900 truncate">{related.name}</p>
                          <p className="text-xs text-neutral-400">{related.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
