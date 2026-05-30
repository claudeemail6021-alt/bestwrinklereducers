import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — BestWrinkleReducers.com",
  description:
    "Get in touch with the BestWrinkleReducers.com team for questions, press inquiries, or feedback.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Contact <span className="text-blush-500">Us</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto">
            Questions, feedback, press inquiries, or corrections — we read everything and respond
            within 2 business days.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-cream-50 rounded-2xl p-5 flex items-start gap-3">
              <Mail className="h-5 w-5 text-blush-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 text-sm mb-1">Email</h3>
                {/* Replace with your actual contact email */}
                <p className="text-sm text-neutral-600">hello@bestwrinklereducers.com</p>
              </div>
            </div>
            <div className="bg-cream-50 rounded-2xl p-5 flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-blush-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 text-sm mb-1">Response Time</h3>
                <p className="text-sm text-neutral-600">Within 2 business days</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
