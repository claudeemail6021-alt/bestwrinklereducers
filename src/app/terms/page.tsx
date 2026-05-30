import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — BestWrinkleReducers.com",
  description: "Terms of use for BestWrinkleReducers.com.",
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-hero-gradient py-12">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-3">Terms of Use</h1>
          <p className="text-neutral-500">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto prose">
          <p>
            By accessing and using BestWrinkleReducers.com (&ldquo;the Site&rdquo;), you agree to be bound by
            these Terms of Use. Please read them carefully.
          </p>

          <h2>Use of Content</h2>
          <p>
            All content on this site — including text, images, reviews, and rankings — is the
            property of BestWrinkleReducers.com and is protected by copyright law. You may not
            reproduce, distribute, or use our content commercially without written permission.
          </p>
          <p>
            You may quote brief excerpts (up to 100 words) for non-commercial purposes with clear
            attribution and a link back to the source article.
          </p>

          <h2>No Medical Advice</h2>
          <p>
            Content on BestWrinkleReducers.com is for informational and entertainment purposes only
            and does not constitute medical or dermatological advice. Always consult a licensed
            healthcare professional before starting any new skincare treatment, especially if you
            have a skin condition, are pregnant, or are taking medications.
          </p>

          <h2>Affiliate Links & Advertising</h2>
          <p>
            This site contains affiliate links and advertising. See our{" "}
            <a href="/affiliate-disclosure">Affiliate Disclosure</a> for full details. We are not
            responsible for the accuracy of product information on third-party retailer websites.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We make every effort to keep product information, prices, and availability accurate.
            However, this information changes frequently. We make no warranties about the
            completeness, accuracy, or reliability of any information on this site.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, BestWrinkleReducers.com shall not be liable
            for any indirect, incidental, special, or consequential damages arising from your use
            of the site or purchase of any products linked from this site.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our site contains links to third-party websites (including Amazon.com). We are not
            responsible for the content, privacy practices, or terms of those sites. Visiting
            third-party sites is at your own risk.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Your continued use of the site
            after changes are posted constitutes acceptance of the updated Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the
            United States. Any disputes shall be resolved in the courts of competent jurisdiction
            in the United States.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? <a href="/contact">Contact us</a>.
          </p>
        </div>
      </section>
    </>
  );
}
