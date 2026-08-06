import AdUnit from "@/components/AdUnit";
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
  const tag = "asotv068-20";
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
            is listed based on customer ratings and popularity — never paid for placement.
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
              Products are listed based on popularity and customer ratings. No brand has paid for placement. We earn a commission if you purchase through affiliate links.
            </p>
          </div>
        </div>
      </section>



      <div className="container-custom max-w-4xl py-2"><AdUnit slot="6716942384" /></div>
      {/* Buying Guide */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-8 text-center">
            How to Choose the Right Wrinkle Reducer for Your Skin
          </h2>
          <div className="space-y-6">

            <div className="bg-white rounded-2xl border border-cream-200 p-6">
              <h3 className="font-bold text-neutral-900 text-lg mb-3">1. The Ingredient Hierarchy: What the Evidence Actually Shows</h3>
              <p className="text-neutral-700 leading-relaxed">
                The anti-aging ingredient market is saturated with claims, but the clinical evidence concentrates heavily around a small number of actives. Retinoids (retinol, retinal, tretinoin) have the deepest evidence base — 40+ years of randomized controlled trials showing collagen stimulation, accelerated cell turnover, and meaningful wrinkle reduction. Prescription tretinoin is most potent; over-the-counter retinol converts to tretinoin in the skin at a slower rate; retinal (retinaldehyde) sits between the two. Peptides have strong mechanistic evidence but shorter clinical trial history. Vitamin C (L-ascorbic acid) is the best-supported antioxidant for collagen synthesis and photoaging prevention. Niacinamide improves barrier function and reduces pigmentation with excellent tolerability. Bakuchiol provides retinol-comparable results with less irritation. Everything else — most "revolutionary" ingredients in expensive creams — has limited independent clinical validation.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-cream-200 p-6">
              <h3 className="font-bold text-neutral-900 text-lg mb-3">2. Retinol Concentration: Why 0.1% and 1% Are Not the Same</h3>
              <p className="text-neutral-700 leading-relaxed">
                Retinol is sold in concentrations from 0.01% to 1%. The difference is significant: higher concentrations produce faster results but significantly more irritation (redness, peeling, dryness) during the 4–8 week adjustment period. Starting too high is the most common reason people abandon retinol. The recommended starting protocol: 0.025%–0.1% twice per week, increasing frequency and concentration over 2–3 months as tolerance develops. People with sensitive skin should start at 0.01%–0.025%. Normal-to-oily skin can usually begin at 0.1%. After 3–6 months of consistent use, 0.3%–0.5% is appropriate for most people. The goal is the highest concentration you can use 4–5 nights per week without significant irritation — this delivers better long-term results than higher concentrations used less frequently due to irritation.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-cream-200 p-6">
              <h3 className="font-bold text-neutral-900 text-lg mb-3">3. Match Products to Your Skin Type</h3>
              <p className="text-neutral-700 leading-relaxed">
                The same active ingredient can produce very different experiences depending on its formulation and your skin type. <strong>Dry skin:</strong> prioritize creams over serums (more emollient base), use the sandwich method for retinol (apply thin moisturizer before and after), and choose ceramide-rich moisturizers that rebuild the barrier that retinol temporarily disrupts. <strong>Oily/combination skin:</strong> lightweight serums and gel formulas work better; you can typically tolerate higher retinol concentrations faster and may benefit from adding niacinamide (which regulates sebum production). <strong>Sensitive skin:</strong> bakuchiol is a legitimate retinol alternative if you genuinely cannot tolerate retinoids; buffer retinol with moisturizer; avoid combining multiple actives until you know your baseline tolerance. <strong>All skin types:</strong> daily SPF 30+ is non-negotiable — UV exposure is the primary cause of photoaging, and retinoids increase photosensitivity.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-cream-200 p-6">
              <h3 className="font-bold text-neutral-900 text-lg mb-3">4. Building a Routine: What to Layer and What Not to Mix</h3>
              <p className="text-neutral-700 leading-relaxed">
                Effective anti-aging routines are built on a few well-chosen actives, not as many products as possible. The core evidence-based combination: <strong>Morning:</strong> vitamin C serum (antioxidant protection during UV exposure), moisturizer, SPF 30+. <strong>Evening:</strong> retinol or retinoid (cell turnover, collagen stimulation), followed by a ceramide moisturizer. Add niacinamide to either routine for additional barrier support and pigmentation reduction. What not to mix: retinol and exfoliating acids (AHAs/BHAs) should alternate nights, not combine — the combination dramatically increases irritation without proportional benefit. Vitamin C and niacinamide can be used together safely. See our complete guide: <Link href="/blog/skincare-routine-order" className="text-blush-500 underline">The Right Order to Apply Skincare Products →</Link>
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-cream-200 p-6">
              <h3 className="font-bold text-neutral-900 text-lg mb-3">5. Realistic Timelines: What to Expect and When</h3>
              <p className="text-neutral-700 leading-relaxed">
                Anti-aging products work — but on a timeline most people underestimate. Hydration improvements (plumper, more comfortable skin) are often visible within days. Brightening and pigmentation improvement from vitamin C or niacinamide typically becomes noticeable at 4–6 weeks of consistent use. Retinol&apos;s collagen-stimulating and cell-turnover effects become visible at 8–12 weeks. Significant wrinkle reduction from retinoids requires 6 months to 1 year of consistent use — studies showing meaningful reduction in wrinkle depth consistently use 24–52 week timeframes. This long timeline is why consistency matters more than product perfection — a moderately good product used consistently for 12 months outperforms the best product used occasionally for 3 months.
              </p>
            </div>
          </div>

          {/* FAQ with schema */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "What is the most effective anti-aging ingredient?", acceptedAnswer: { "@type": "Answer", text: "Retinoids (retinol, retinal, and prescription tretinoin) have the strongest and most consistent clinical evidence for reducing wrinkles and improving skin texture — supported by 40+ years of randomized controlled trials. They work by accelerating cell turnover and stimulating collagen synthesis. Vitamin C is the best-supported ingredient for antioxidant protection and collagen synthesis prevention. The combination of a retinoid (evening) and vitamin C (morning) addresses anti-aging from two complementary angles and is considered the gold standard approach by most dermatologists." } },
                { "@type": "Question", name: "Do expensive wrinkle creams work better than drugstore options?", acceptedAnswer: { "@type": "Answer", text: "Not necessarily — and often no. The active ingredients that produce measurable anti-aging results (retinol, niacinamide, vitamin C, peptides) are available in effective concentrations at both drugstore and luxury price points. The meaningful differences between products are ingredient concentration, formulation stability, and delivery system — not price. Olay Regenerist, CeraVe, and The Ordinary provide clinical-level actives at drugstore prices. The main advantage of premium brands is sometimes superior formulation (stability, texture, additional supporting ingredients) and more consistent manufacturing quality control." } },
                { "@type": "Question", name: "When should I start using anti-aging products?", acceptedAnswer: { "@type": "Answer", text: "The most impactful anti-aging action at any age is daily SPF 30+, which can be started as soon as you go outside regularly. Prevention is far more effective than correction. For active treatment (retinol, vitamin C), late 20s to early 30s is when most dermatologists suggest starting — early enough to prevent significant damage, before the wrinkles that require correction appear. Starting retinol at 25 and using it consistently for 10 years produces better outcomes than starting at 45 when more correction is needed." } },
                { "@type": "Question", name: "Can I use retinol if I have sensitive skin?", acceptedAnswer: { "@type": "Answer", text: "Yes, but with modifications. Start at the lowest available concentration (0.01%–0.025%), use only once per week initially, and use the sandwich method (thin moisturizer before and after retinol application). Allow 3–6 months to build tolerance before increasing concentration or frequency. If you cannot tolerate retinol despite these adjustments, bakuchiol is a clinically validated alternative that activates similar pathways with significantly less irritation and no photosensitivity increase." } },
              ]
            }) }} />
            <div className="space-y-4">
              {[
                { q: "What is the most effective anti-aging ingredient?", a: "Retinoids (retinol, retinal, prescription tretinoin) have the strongest clinical evidence — 40+ years of trials showing wrinkle reduction and collagen stimulation. Vitamin C is the best-supported antioxidant for collagen protection and photoaging prevention. The evidence-backed combination: retinoid in the evening, vitamin C in the morning, SPF 30+ every day." },
                { q: "Do expensive wrinkle creams work better than drugstore options?", a: "Not necessarily. The actives that produce measurable results — retinol, niacinamide, vitamin C, peptides — are available at effective concentrations at both price points. Olay Regenerist and CeraVe provide clinical-level ingredients at drugstore prices. Meaningful differences between products are concentration and formulation stability, not price tag." },
                { q: "When should I start using anti-aging products?", a: "Daily SPF 30+ can start as soon as you go outside regularly — prevention is far more effective than correction. For retinol and vitamin C, late 20s to early 30s is when most dermatologists suggest starting. Consistent use of moderate products for 10 years outperforms occasional use of premium products." },
                { q: "Can I use retinol if I have sensitive skin?", a: "Yes, with modifications. Start at 0.01%–0.025%, once per week, using the sandwich method (moisturizer before and after application). Allow 3–6 months to build tolerance before increasing. If genuinely intolerant, bakuchiol is a clinically validated alternative with comparable efficacy and significantly less irritation." },
              ].map((item, i) => (
                <details key={i} className="bg-white border border-cream-200 rounded-xl p-5 group">
                  <summary className="font-semibold text-neutral-900 cursor-pointer list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-blush-500 text-lg group-open:rotate-180 transition-transform ml-2 flex-shrink-0">▾</span>
                  </summary>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Related reading */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/blog/skincare-routine-order", title: "The Right Order to Apply Skincare Products" },
                { href: "/blog/bakuchiol-vs-retinol", title: "Bakuchiol vs Retinol: Which Is Better for Sensitive Skin?" },
                { href: "/blog/beginners-guide-to-retinol-2026", title: "The Beginner's Guide to Retinol 2026" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block p-4 rounded-xl border border-cream-200 hover:border-blush-300 hover:bg-blush-50 transition-colors">
                  <p className="text-sm font-semibold text-neutral-800">{link.title}</p>
                  <p className="text-xs text-blush-500 mt-1">Read guide →</p>
                </Link>
              ))}
            </div>
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
