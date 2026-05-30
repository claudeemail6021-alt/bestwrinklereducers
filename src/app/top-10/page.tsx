import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle, ShoppingCart, ArrowRight } from "lucide-react";
import StarRating from "@/components/StarRating";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getFeaturedProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Top 10 Best Wrinkle Reducers of 2026 — Full Comparison",
  description:
    "The definitive Top 10 wrinkle reducers of 2026. Compare ingredients, prices, and ratings to find the best anti-aging cream for your skin type and budget.",
  alternates: { canonical: "/top-10" },
  openGraph: {
    title: "Top 10 Best Wrinkle Reducers of 2026",
    description: "Full comparison table of the best anti-aging creams, ranked by ingredients and results.",
    url: "/top-10",
  },
};

function amazonUrl(asin: string) {
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG ?? "YOURTAG-20";
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}

// JSON-LD ItemList structured data
function buildItemListJsonLd(products: ReturnType<typeof getFeaturedProducts>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top 10 Best Wrinkle Reducers 2026",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bestwrinklereducers.com"}/top-10`,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${p.brand} ${p.name}`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bestwrinklereducers.com"}/reviews/${p.slug}`,
    })),
  };
}

export default function Top10Page() {
  const products = getFeaturedProducts();
  const jsonLd = buildItemListJsonLd(products);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Top 10 Best Wrinkle Reducers<br />
            <span className="text-blush-500">of 2026</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ranked by clinical evidence, ingredient quality, user satisfaction, and value. Every pick
            is independently reviewed — never paid for placement.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <AffiliateDisclosure />

          {/* Product list */}
          <div className="space-y-8 mt-8">
            {products.map((product) => (
              <article
                key={product.id}
                id={product.slug}
                className="bg-white rounded-2xl shadow-card overflow-hidden"
              >
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 border-b border-cream-100">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    product.rank === 1
                      ? "bg-gold-gradient text-white"
                      : product.rank <= 3
                      ? "bg-cream-200 text-neutral-700"
                      : "bg-neutral-100 text-neutral-500"
                  }`}>
                    #{product.rank}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider font-semibold text-blush-500">{product.brand}</p>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-neutral-900 mt-0.5">
                      {product.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
                      <span className="text-sm font-bold text-neutral-700">{product.price}</span>
                      <span className="text-xs text-neutral-400">{product.priceRange}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/reviews/${product.slug}`}
                      className="inline-flex items-center justify-center gap-1 border border-blush-300 text-blush-500 hover:bg-blush-50 font-semibold px-4 py-2 rounded-xl transition-colors text-sm"
                    >
                      Full Review <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={amazonUrl(product.asin)}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center justify-center gap-2 bg-blush-500 hover:bg-blush-600 text-white font-semibold px-4 py-2 rounded-xl transition-colors text-sm"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Buy on Amazon
                    </a>
                  </div>
                </div>

                {/* Detail row */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Description + ingredients */}
                  <div className="md:col-span-2">
                    <p className="text-neutral-600 leading-relaxed mb-4">{product.shortDescription}</p>
                    <div className="mb-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Key Ingredients</p>
                      <div className="flex flex-wrap gap-2">
                        {product.keyIngredients.map((ing) => (
                          <span key={ing} className="text-xs bg-cream-100 text-neutral-700 font-medium px-3 py-1 rounded-full">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Best For</p>
                      <p className="text-sm text-neutral-600">{product.bestFor}</p>
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">Pros</p>
                      <ul className="space-y-1.5">
                        {product.pros.slice(0, 3).map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-neutral-700">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Cons</p>
                      <ul className="space-y-1.5">
                        {product.cons.slice(0, 2).map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm text-neutral-500">
                            <XCircle className="h-4 w-4 text-neutral-300 flex-shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-cream-100 rounded-2xl p-6">
            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>Our Methodology:</strong> Rankings are determined by a scoring rubric that weighs clinical evidence
              (40%), ingredient quality and concentration (30%), verified user reviews (20%), and value for money (10%).
              No brand has paid for placement. We earn a commission if you purchase through affiliate links — this never
              influences our rankings.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
