import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, Users, Heart, BookOpen, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About BestWrinkleReducers.com — Our Mission & Editorial Standards",
  description: "BestWrinkleReducers.com independently researches anti-aging skincare using published dermatology research, ingredient science data, and verified user outcomes. Learn about our review process and editorial standards.",
  alternates: { canonical: "https://bestwrinklereducers.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            About <span className="text-blush-500">BestWrinkleReducers.com</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto">
            Independent, science-backed anti-aging skincare reviews — built on published research and ingredient science, not brand relationships.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl space-y-12">

          <div>
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Why We Built This</h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                The anti-aging skincare market is one of the most marketing-saturated categories in consumer products. &ldquo;Clinically tested,&rdquo; &ldquo;dermatologist approved,&rdquo; and &ldquo;proven results&rdquo; appear on products ranging from genuinely effective to completely inert. Independent ingredient-level analysis is rare, and most review sites are dominated by brand partnerships.
              </p>
              <p>
                BestWrinkleReducers.com exists to evaluate what the science actually says about anti-aging ingredients and formulations. We are an independent editorial and research site. We are not affiliated with any skincare brand or manufacturer. Our rankings reflect ingredient evidence and formulation quality, not advertising relationships.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Our Review Methodology</h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>Every product we feature is evaluated through a process grounded in ingredient science and published clinical research:</p>
              <ul className="space-y-3">
                {[
                  { title: "Ingredient evidence review", desc: "We assess the active ingredients in each product against published clinical research. Retinoids, vitamin C, peptides, and niacinamide have established evidence bases we evaluate for depth and consistency. We distinguish between well-documented actives and ingredients with limited or no independent clinical trial support." },
                  { title: "Formulation analysis", desc: "Ingredient concentration, formulation pH, delivery system, and packaging (stability of actives like vitamin C in light-exposed containers) are evaluated. An ingredient at an insufficient concentration provides no measurable benefit regardless of how prominently it is featured in marketing." },
                  { title: "Skin type compatibility", desc: "We assess which skin types each product is appropriate for, with specific attention to irritation potential — critical for actives like retinoids and exfoliating acids that cause significant adverse reactions in sensitive skin at inappropriate concentrations." },
                  { title: "Long-term user outcomes", desc: "We synthesize verified user reviews from 3+ months of consistent use. Anti-aging products require sustained use — initial reviews rarely capture the outcomes that matter." },
                  { title: "Value assessment", desc: "Active ingredients like retinol, niacinamide, and vitamin C are available at clinical concentrations across a wide price range. We make explicit where premium pricing reflects genuine formulation differences versus marketing." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-blush-500 font-bold mt-0.5 flex-shrink-0">→</span>
                    <span><strong>{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Our Research Sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
              <li>Peer-reviewed dermatology research published in journals including the Journal of the American Academy of Dermatology, British Journal of Dermatology, and Journal of Cosmetic Dermatology</li>
              <li>Published clinical trial data for specific active ingredients (retinol, retinal, peptides, vitamin C, niacinamide, bakuchiol)</li>
              <li>Cosmetic ingredient databases (CosIng, EWG Skin Deep) for safety and concentration data</li>
              <li>Manufacturer-published formulation data and third-party testing certifications where publicly available</li>
              <li>FDA cosmeceutical guidance and European Commission cosmetic regulation data</li>
              <li>Long-term verified user reviews with emphasis on 3–12 month use periods</li>
            </ul>
            <p className="text-sm text-neutral-600 mt-3">
              Where we cite specific clinical claims, they reference published research or are attributed to the manufacturer&apos;s own marketing materials. We distinguish between these two sources clearly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: FlaskConical, title: "Ingredient-First", desc: "We evaluate what the science says about active ingredients and formulations, not what brands say about their products." },
              { icon: ShieldCheck, title: "Independent Research", desc: "We are not affiliated with any skincare brand. Rankings cannot be purchased and are never influenced by brand relationships." },
              { icon: Award, title: "No Paid Placements", desc: "No brand can pay to be featured or to improve its ranking. Products are assessed on ingredient evidence and formulation quality only." },
              { icon: Heart, title: "Reader-Funded", desc: "We earn affiliate commissions when you purchase through our links. This is our only revenue source — no sponsorships, no brand deals." },
              { icon: BookOpen, title: "Source Transparency", desc: "Our methodology and sources are published openly. When we make a clinical claim, we distinguish whether it comes from independent research or manufacturer marketing." },
              { icon: Users, title: "Long-Term Outcomes", desc: "Anti-aging results require months of consistent use. We weight long-term verified reviews heavily and note where initial results differ from sustained use." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-cream-50 rounded-2xl flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blush-100 rounded-xl flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-blush-500" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-cream-50 rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-3">Questions or Corrections?</h2>
            <p className="text-neutral-600 mb-4 text-sm">
              If you believe any information on BestWrinkleReducers.com is inaccurate, or if you have published research we should incorporate, we welcome that feedback.
            </p>
            <Link href="/contact" className="inline-block bg-blush-500 hover:bg-blush-600 text-white font-bold px-6 py-3 rounded-full transition-colors">
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
