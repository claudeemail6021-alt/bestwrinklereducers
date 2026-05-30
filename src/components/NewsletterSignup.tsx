"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to your email service (Mailchimp, ConvertKit, etc.)
    // Example: POST to /api/newsletter with { email }
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-blush-gradient rounded-3xl p-8 md:p-12 text-center">
      <div className="max-w-xl mx-auto">
        <Mail className="h-10 w-10 text-blush-500 mx-auto mb-4" />
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
          Get Skincare Picks in Your Inbox
        </h2>
        <p className="text-neutral-600 mb-6 leading-relaxed">
          Join 12,000+ readers who get our weekly roundup of the best new anti-aging launches,
          expert tips, and exclusive deals. No spam, ever.
        </p>
        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
            <CheckCircle2 className="h-5 w-5" />
            You&apos;re on the list! Check your inbox for a welcome email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-cream-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blush-300 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blush-500 hover:bg-blush-600 text-white font-semibold rounded-xl transition-colors text-sm whitespace-nowrap shadow-sm"
            >
              Subscribe Free
            </button>
          </form>
        )}
        <p className="text-xs text-neutral-400 mt-3">
          Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
