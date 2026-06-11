import type { Metadata } from "next";
import { FlaskConical, Search, BookOpen, Users, Star, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Review Methodology — How BestWrinkleReducers.com Evaluates Products",
  description:
    "Every product ranking on BestWrinkleReducers.com follows the same rigorous process: clinical literature review, formulation analysis, user data aggregation, and real-world testing. Here's exactly how it works.",
  alternates: { canonical: "/methodology" },
};

const steps = [
  {
    icon: Search,
    step: "Step 1",
    title: "Product Discovery and Selection",
    color: "bg-blush-50",
    iconColor: "text-blush-500",
    content: [
      "We monitor new product launches through brand announcements, dermatologist endorsements, and skincare community discussion. Products enter our evaluation pipeline if they: (a) use active ingredients with published clinical evidence, (b) have at least 100 verified customer reviews on major retail platforms, and (c) are widely available to consumers.",
      "We do not accept product samples in exchange for review. Products are purchased at retail by our team or obtained via standard editorial samples with no strings attached. In no case does receiving a sample influence our score.",
    ],
  },
  {
    icon: BookOpen,
    step: "Step 2",
    title: "Clinical Literature Review",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    content: [
      "Each product's key active ingredients are cross-referenced against published clinical studies. We use PubMed, Cochrane Reviews, and the Journal of the American Academy of Dermatology as primary sources, prioritizing double-blind randomized controlled trials over open-label studies or brand-funded research.",
      "We specifically assess: (a) whether the ingredient is present at a clinically meaningful concentration based on the published evidence, (b) whether the delivery system supports penetration, and (c) whether any interactions with other formula ingredients would reduce efficacy.",
      "Products that list clinically proven actives in their marketing but include them at concentrations far below effective thresholds are penalized in our scoring. This is one of the most common ways consumers are misled.",
    ],
  },
  {
    icon: FlaskConical,
    step: "Step 3",
    title: "Formulation Analysis",
    color: "bg-green-50",
    iconColor: "text-green-600",
    content: [
      "Our cosmetic chemist reviews the complete ingredient list (INCI) for formulation quality. This assessment includes: pH compatibility of actives, presence of potentially destabilizing ingredient combinations, preservative system adequacy, and overall formula design.",
      "We also evaluate the delivery system. Encapsulated retinol, for example, can provide better stability and skin tolerance than free retinol — and this distinction matters for efficacy. Time-release systems, liposomal encapsulation, and microemulsion technology are reviewed when brands disclose them.",
      "Products containing high concentrations of irritants (fragrance compounds, certain preservatives, high-percentage alcohol) in products marketed for sensitive or mature skin are noted and penalized accordingly.",
    ],
  },
  {
    icon: Users,
    step: "Step 4",
    title: "User Review Aggregation",
    color: "bg-gold-50",
    iconColor: "text-gold-500",
    content: [
      "We aggregate verified purchase reviews from Amazon, Sephora, Ulta, and major retailer platforms. We weight by verified purchase status and look for consistent patterns in both positive and negative reviews.",
      "We specifically filter for mentions of: irritation and side effects, results timeline (when users report seeing visible change), comparison to other products, and real-world tolerability for different skin types.",
      "Review count is a factor but not determinative — a product with 500 recent reviews and consistent positive feedback scores better than a product with 50,000 reviews if the recent feedback shows quality degradation or reformulation issues.",
    ],
  },
  {
    icon: Star,
    step: "Step 5",
    title: "Real-World Testing",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
    content: [
      "Products that score well in clinical and formulation review go through hands-on testing by our licensed esthetician and editorial team members. Testing periods are a minimum of 4 weeks (enough for most serums and moisturizers to show meaningful results) and up to 12 weeks for retinoid products.",
      "We test on a range of skin types: dry, oily, combination, sensitive, and mature. Products receive higher marks if they perform across multiple skin types; products that only work well on one skin type are noted as such.",
      "We evaluate texture, application experience, layering compatibility with other common skincare products, and any irritation or adverse reactions during the testing period.",
    ],
  },
  {
    icon: RefreshCw,
    step: "Step 6",
    title: "Ongoing Monitoring and Updates",
    color: "bg-neutral-50",
    iconColor: "text-neutral-500",
    content: [
      "Skincare formulas change. Brands sometimes reformulate products with fewer actives after establishing a loyal customer base, or change preservatives in ways that affect tolerability. We monitor for reformulation announcements and update our reviews when ingredients or concentrations change materially.",
      "Rankings are reviewed at minimum annually. New products are added as they complete our evaluation process. We do not guarantee that a top-ranked product will retain that ranking indefinitely — we rank what the current evidence supports.",
      "Prices shown on our site are updated regularly but may not reflect real-time Amazon pricing. Always check the current Amazon listing before purchasing.",
    ],
  },
];

export default function MethodologyPage() {
  return (
    <>
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Our Review <span className="text-blush-500">Methodology</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Every product ranking on this site follows the same six-step process. Here's exactly how
            we evaluate anti-aging skincare — so you know precisely what our recommendations are
            based on.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">

          {/* Scoring overview */}
          <div className="bg-cream-50 rounded-2xl p-6 mb-10">
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-4">
              The Scoring Rubric (100-point scale)
            </h2>
            <div className="space-y-3">
              {[
                { label: "Clinical Evidence", points: "40 points", desc: "Ingredient efficacy backed by peer-reviewed research at effective concentrations" },
                { label: "Formulation Quality", points: "30 points", desc: "Formula stability, delivery system, ingredient compatibility, absence of harmful additives" },
                { label: "User Satisfaction", points: "20 points", desc: "Aggregated verified purchase reviews across multiple retail platforms" },
                { label: "Value for Money", points: "10 points", desc: "Price-to-efficacy ratio relative to comparable products" },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-4">
                  <span className="text-sm font-bold text-blush-500 w-28 flex-shrink-0">{row.points}</span>
                  <div>
                    <span className="text-sm font-semibold text-neutral-900">{row.label}</span>
                    <p className="text-xs text-neutral-500 mt-0.5">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.step} className={`${step.color} rounded-2xl p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <step.icon className={`h-5 w-5 ${step.iconColor}`} />
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{step.step}</p>
                    <h3 className="font-serif text-lg font-bold text-neutral-900">{step.title}</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {step.content.map((para, i) => (
                    <p key={i} className="text-sm text-neutral-700 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Conflict of interest */}
          <div className="mt-10 border border-cream-300 rounded-2xl p-6">
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">
              Conflicts of Interest Policy
            </h2>
            <div className="prose text-sm">
              <p>
                BestWrinkleReducers.com earns revenue through Amazon affiliate commissions. When you
                purchase a product we recommend via our Amazon links, we earn a small percentage of
                the sale at no cost to you. This is standard practice for independent review sites and
                how we fund our research and editorial operations.
              </p>
              <p>
                This affiliate relationship does <strong>not</strong> influence our rankings. Products
                are ranked based on our scoring rubric regardless of commission rates. If a product
                we're not affiliated with scores higher than one we are, we rank it higher. Period.
              </p>
              <p>
                We have never accepted: paid product placements, payment for positive reviews, equity
                in skincare companies, free products in exchange for positive coverage, or any other
                arrangement that would compromise editorial independence.
              </p>
              <p>
                Team members are required to disclose any personal relationships with brands before
                reviewing their products. In such cases, another team member conducts the review.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-500">
              Questions about our methodology?{" "}
              <a href="/contact" className="text-blush-500 font-semibold hover:text-blush-600">
                Contact our editorial team
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
