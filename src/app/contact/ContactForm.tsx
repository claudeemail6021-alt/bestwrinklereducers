"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to Formspree (https://formspree.io) or a custom /api/contact endpoint
    // Example with Formspree: action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-2">Message Sent!</h2>
        <p className="text-neutral-600">We&apos;ll be in touch within 2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blush-300 text-sm"
          placeholder="Jane Smith"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blush-300 text-sm"
          placeholder="jane@example.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
          Subject
        </label>
        <select
          id="subject"
          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blush-300 text-sm"
        >
          <option>General Question</option>
          <option>Product Review Request</option>
          <option>Press / Media Inquiry</option>
          <option>Partnership / Advertising</option>
          <option>Correction or Feedback</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blush-300 text-sm resize-none"
          placeholder="Tell us what&apos;s on your mind..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blush-500 hover:bg-blush-600 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm shadow-sm"
      >
        Send Message
      </button>
    </form>
  );
}
