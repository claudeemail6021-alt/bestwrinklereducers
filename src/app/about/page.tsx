import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, Users, Heart, BookOpen, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About BestWrinkleReducers.com — Our Mission, Team & Editorial Standards",
  description:
    "Meet the team behind BestWrinkleReducers.com. Learn about our editorial independence, how we review anti-aging products, and the science-first standards that guide every recommendation.",
  alternates: { canonical: "/about" },
};

const team = [
  {
    name: "Dr. Linda Marsh",
    title: "Contributing Dermatology Consultant",
    credentials: "MD, Board-Certified Dermatologist",
    bio: "Dr. Marsh reviews every product ranking for clinical accuracy. She brings 18 years of clinical practice and a focus on cosmeceutical dermatology — the intersection of cosmetics and medicine — to ensure our ingredient analyses reflect current dermatological science.",
    initials: "LM",
    color: "bg-blush-100 text-blush-700",
  },
  {
    name: "Rachel Torres",
    title: "Lead Beauty Editor",
    credentials: "Former Senior Editor, Allure & InStyle",
    bio: "Rachel spent a decade in print and digital beauty media before joining BestWrinkleReducers. She oversees our editorial voice, manages the product testing process, and has personally reviewed more than 400 skincare products across 12 years covering the beauty industry.",
    initials: "RT",
    color: "bg-gold-100 text-gold-700",
  },
  {
    name: "Priya Nair",
    title: "Cosmetic Chemist & Ingredient Analyst",
    credentials: "MS in Cosmetic Science, Fairleigh Dickinson University",
    bio: "Priya spent 8 years in product development at a major skincare manufacturer before transitioning to independent research and writing. She leads our ingredient breakdown analysis, focusing on formulation stability, active concentrations, and delivery system efficacy.",
    initials: "PN",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Susan Cole",
    title: "Senior Product Reviewer",
    credentials: "Certified Esthetics Educator, Licensed Esthetician",
    bio: "Susan has been practicing esthetics for 22 years and teaching advanced skincare techniques for 9. She conducts our hands-on product evaluations, gathering real-world data on texture, tolerability, application experience, and visible results over extended use periods.",
    initials: "SC",
    color: "bg-blue-100 text-blue-700",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            About <span className="text-blush-500">BestWrinkleReducers.com</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto">
            Independent, science-backed anti-aging skincare reviews — written by beauty editors,
            cosmetic chemists, and dermatology consultants who prioritize evidence over marketing.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="prose">
            <h2>Our Mission</h2>
            <p>
              The anti-aging skincare industry generates over $60 billion annually — built on
              extraordinary marketing claims, extraordinary packaging, and sometimes extraordinary
              products. The challenge is telling them apart.
            </p>
            <p>
              BestWrinkleReducers.com was founded on a simple belief:{" "}
              <strong>every person deserves honest, science-backed guidance</strong> on which
              skincare products are worth spending money on — and which are just beautifully
              packaged water.
            </p>
            <p>
              We analyze ingredient lists against published clinical literature, dig into
              peer-reviewed studies, aggregate thousands of verified real-user reviews, and test
              products on real skin. Then we tell you exactly what we found — the good, the bad,
              and the overhyped.
            </p>
          </div>

          {/* Review process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              {
                icon: FlaskConical,
                title: "Clinical Evidence (40 pts)",
                desc: "Are the key ingredients backed by peer-reviewed studies at effective concentrations? We cross-reference each product against the published literature.",
                color: "text-blush-500",
                bg: "bg-blush-50",
              },
              {
                icon: ShieldCheck,
                title: "Formulation Quality (30 pts)",
                desc: "Is the formula stable, well-designed, and free of potentially harmful fillers? Our cosmetic chemist evaluates delivery systems and ingredient compatibility.",
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                icon: Users,
                title: "User Satisfaction (20 pts)",
                desc: "What do thousands of real verified purchasers say about results and tolerability? We aggregate and analyze reviews from multiple sources.",
                color: "text-gold-500",
                bg: "bg-gold-50",
              },
              {
                icon: Heart,
                title: "Value for Money (10 pts)",
                desc: "Is the price justified by the ingredient quality and clinical evidence? We compare like-for-like formulations across price points.",
                color: "text-blue-500",
                bg: "bg-blue-50",
              },
            ].map((item) => (
              <div key={item.title} className={`${item.bg} rounded-2xl p-5`}>
                <item.icon className={`h-6 w-6 ${item.color} mb-2`} />
                <h3 className="font-semibold text-neutral-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 mb-8">
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-sm text-blush-500 font-semibold hover:text-blush-600 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              Read our full review methodology →
            </Link>
          </div>

          <div className="prose">
            <h2>Our Editorial Independence</h2>
            <p>
              BestWrinkleReducers.com is reader-supported. We earn commissions through affiliate
              links (Amazon Associates) when you purchase products we recommend. This is how we keep
              the lights on — but it <strong>never</strong> influences our rankings or
              recommendations.
            </p>
            <p>
              <strong>
                We have never accepted payment for a product placement or a positive review.
              </strong>{" "}
              Every ranking is based solely on our scoring rubric. If a product from a brand that
              advertises elsewhere scores poorly on our rubric, we say so.
            </p>
            <p>
              Our affiliate relationships are fully disclosed on every page where affiliate links
              appear, and in our{" "}
              <a href="/affiliate-disclosure">complete Affiliate Disclosure</a>.
            </p>
          </div>

          {/* Team section */}
          <div className="my-10">
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-5 w-5 text-blush-500" />
              <h2 className="font-serif text-2xl font-bold text-neutral-900">Meet the Team</h2>
            </div>
            <div className="space-y-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-cream-50 rounded-2xl p-6 flex gap-5 items-start"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${member.color}`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 text-sm">{member.name}</p>
                    <p className="text-xs text-blush-500 font-semibold mb-0.5">{member.title}</p>
                    <p className="text-xs text-neutral-400 mb-2 italic">{member.credentials}</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="prose">
            <h2>Medical Disclaimer</h2>
            <p>
              Content on BestWrinkleReducers.com is for informational and educational purposes
              only. It does not constitute medical advice, diagnosis, or treatment. Individual
              results will vary. Always consult a licensed dermatologist or healthcare professional
              for personalized skincare guidance, particularly if you have a skin condition, are
              pregnant, or are taking medications that may affect skin sensitivity.
            </p>
            <p>
              References to clinical studies are provided for context; they are not endorsements of
              specific products or treatments. Anti-aging skincare claims made on this site reflect
              our editorial assessment and do not constitute medical claims.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
