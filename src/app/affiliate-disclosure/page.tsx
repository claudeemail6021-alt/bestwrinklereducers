import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — BestWrinkleReducers.com",
  description:
    "Full affiliate disclosure for BestWrinkleReducers.com. We are a participant in the Amazon Associates program and AWIN affiliate network.",
  alternates: { canonical: "/affiliate-disclosure" },
  robots: { index: false },
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <section className="bg-hero-gradient py-12">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-3">
            Affiliate Disclosure
          </h1>
          <p className="text-neutral-500">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto prose">
          <p>
            BestWrinkleReducers.com (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) participates in several affiliate
            marketing programs. This page describes those relationships in full, in compliance with
            FTC guidelines and our commitment to transparency.
          </p>

          <h2>Amazon Associates Program</h2>
          <p>
            BestWrinkleReducers.com is a participant in the Amazon Services LLC Associates Program,
            an affiliate advertising program designed to provide a means for sites to earn
            advertising fees by advertising and linking to Amazon.com.
          </p>
          <p>
            When you click an Amazon affiliate link on this site and make a purchase, we earn a
            small percentage of the sale. This comes at no additional cost to you — Amazon pays the
            commission from their own margin, not by increasing the price you pay.
          </p>

          <h2>AWIN Affiliate Network</h2>
          <p>
            We are also a publisher on the AWIN affiliate network and may link to products from
            beauty and skincare brands participating in the AWIN program. These links function the
            same way as Amazon affiliate links — we earn a commission on qualifying purchases at
            no extra cost to you.
          </p>

          <h2>Our Editorial Commitment</h2>
          <p>
            <strong>Our rankings, reviews, and recommendations are never influenced by affiliate
            relationships.</strong> We do not accept payment for positive coverage, sponsored
            placements, or biased reviews. Our methodology is described in detail on our{" "}
            <a href="/about">About page</a>.
          </p>
          <p>
            Products are ranked solely based on our four-factor scoring rubric: clinical evidence,
            formulation quality, user satisfaction, and value for money. A product with a higher
            commission rate does not receive a better ranking. A product with no affiliate
            program can still appear on our lists.
          </p>

          <h2>Google AdSense</h2>
          <p>
            We may display Google AdSense advertisements on some pages of this site. Google serves
            contextually relevant ads based on page content and your browsing history. We receive
            a small payment when visitors interact with these ads. We have no editorial control
            over the specific ads displayed.
          </p>

          <h2>How to Identify Affiliate Links</h2>
          <p>
            All outbound links to Amazon or other affiliate programs are marked with{" "}
            <code>rel=&quot;nofollow noopener noreferrer&quot;</code> and typically contain tracking
            parameters (e.g., <code>?tag=YOURTAG-20</code> for Amazon). Any &ldquo;Buy on Amazon&rdquo; or
            &ldquo;Check Price&rdquo; button is an affiliate link.
          </p>

          <h2>Price Accuracy</h2>
          <p>
            Product prices displayed on this site are approximate and were accurate at the time of
            writing. Prices on Amazon and other retailers fluctuate frequently. Always check the
            current price on the retailer&apos;s site before purchasing.
          </p>

          <h2>Questions?</h2>
          <p>
            If you have any questions about our affiliate relationships or our editorial practices,
            please contact us at <a href="/contact">our contact page</a> or at{" "}
            hello@bestwrinklereducers.com.
          </p>
        </div>
      </section>
    </>
  );
}
