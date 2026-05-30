import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About BestWrinkleReducers.com — Our Mission & Editorial Standards",
  description:
    "Learn about our mission, how we review products, and the editorial standards that keep our anti-aging skincare recommendations honest and trustworthy.",
  alternates: { canonical: "/about" },
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
            We exist to cut through the noise and tell you exactly which anti-aging products are
            actually worth your money.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="prose">
            <h2>Our Mission</h2>
            <p>
              The anti-aging skincare industry is a $60 billion market filled with extraordinary
              marketing, extraordinary claims, and sometimes extraordinary products. The challenge is
              telling them apart.
            </p>
            <p>
              BestWrinkleReducers.com was founded on a simple belief: <strong>every woman
              deserves honest, science-backed guidance</strong> on which skincare products are worth
              spending money on — and which are just beautifully packaged water.
            </p>
            <p>
              We analyze ingredient lists, dig into peer-reviewed clinical studies, aggregate
              thousands of real user reviews, and test products on real skin. Then we tell you
              exactly what we found — the good, the bad, and the overhyped.
            </p>

            <h2>How We Review Products</h2>
            <p>
              Every product featured on this site is evaluated on a 100-point rubric across four
              categories:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              {
                icon: FlaskConical,
                title: "Clinical Evidence (40 pts)",
                desc: "Are the key ingredients backed by peer-reviewed studies at effective concentrations?",
                color: "text-blush-500",
                bg: "bg-blush-50",
              },
              {
                icon: ShieldCheck,
                title: "Formulation Quality (30 pts)",
                desc: "Is the formula stable, well-designed, and free of potentially harmful fillers?",
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                icon: Users,
                title: "User Satisfaction (20 pts)",
                desc: "What do thousands of real verified purchasers say about results and tolerability?",
                color: "text-gold-500",
                bg: "bg-gold-50",
              },
              {
                icon: Heart,
                title: "Value for Money (10 pts)",
                desc: "Is the price justified by the ingredient quality and clinical evidence?",
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

          <div className="prose">
            <h2>Our Editorial Independence</h2>
            <p>
              BestWrinkleReducers.com is reader-supported. We earn commissions through affiliate
              links (Amazon Associates, AWIN) when you purchase products we recommend. This is how
              we keep the lights on — but it never influences our rankings or recommendations.
            </p>
            <p>
              <strong>We have never accepted payment for a product placement or a positive
              review.</strong> Every ranking is based solely on our scoring rubric. If a sponsor
              product scores poorly on our rubric, we say so.
            </p>
            <p>
              Our affiliate relationships are fully disclosed on every page where affiliate links
              appear, and in our{" "}
              <a href="/affiliate-disclosure">complete Affiliate Disclosure</a>.
            </p>

            <h2>Our Team</h2>
            <p>
              Our editorial team includes former beauty editors, certified cosmetic chemists, and
              skincare enthusiasts who have been testing and writing about skincare for a combined
              20+ years. We collaborate with licensed dermatologists to verify the clinical accuracy
              of our ingredient analyses.
            </p>
            <p>
              <strong>Medical disclaimer:</strong> Content on BestWrinkleReducers.com is for
              informational purposes only and does not constitute medical advice. Always consult a
              licensed dermatologist or healthcare professional for personalized skincare guidance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
