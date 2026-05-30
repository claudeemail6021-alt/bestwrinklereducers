import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — BestWrinkleReducers.com",
  description: "Privacy policy for BestWrinkleReducers.com — how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-hero-gradient py-12">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-3">Privacy Policy</h1>
          <p className="text-neutral-500">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto prose">
          <p>
            This Privacy Policy describes how BestWrinkleReducers.com (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            collects, uses, and shares information about you when you use our website.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>
            We collect information you provide when you: subscribe to our newsletter (email address
            and name), submit a contact form (name, email, message), or otherwise communicate with
            us.
          </p>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our site, we automatically collect certain information about your device
            and browsing behavior, including: IP address, browser type, referring URLs, pages
            visited, time spent on pages, and general geographic location (city/country level).
            This is collected via Google Analytics 4 and similar tools.
          </p>

          <h3>Cookies</h3>
          <p>
            We use cookies for: analytics (Google Analytics), advertising (Google AdSense), and
            affiliate tracking (Amazon Associates, AWIN). You can control cookies through your
            browser settings. Disabling cookies may limit some site functionality.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Operate and improve our website</li>
            <li>Send newsletters (if you subscribed)</li>
            <li>Respond to your messages</li>
            <li>Analyze site usage and optimize content</li>
            <li>Serve relevant advertising</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>We work with the following third-party services:</p>
          <ul>
            <li><strong>Google Analytics 4:</strong> Website analytics. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
            <li><strong>Google AdSense:</strong> Display advertising. Governed by Google&apos;s privacy policies.</li>
            <li><strong>Amazon Associates:</strong> Affiliate tracking. <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer">Amazon Privacy Policy</a></li>
            <li><strong>AWIN:</strong> Affiliate network tracking.</li>
            <li><strong>Email service provider:</strong> Newsletter delivery (provider TBD by site owner).</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain newsletter subscriber data until you unsubscribe. Analytics data is retained
            per the retention settings of the analytics provider (typically 14 months for GA4).
            Contact form submissions are deleted after 12 months.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have rights to: access, correct, delete, or
            restrict processing of your personal data. To exercise these rights, contact us at
            hello@bestwrinklereducers.com. For GDPR or CCPA requests, we will respond within 30
            days.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our site is not directed to children under 13. We do not knowingly collect personal
            information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. The &ldquo;Last updated&rdquo; date at the top of
            this page will reflect any changes. Continued use of our site after changes constitutes
            acceptance of the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            For privacy questions: <a href="/contact">Contact form</a> or
            hello@bestwrinklereducers.com.
          </p>
        </div>
      </section>
    </>
  );
}
