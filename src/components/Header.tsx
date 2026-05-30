"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Top 10 Picks", href: "/top-10" },
  { label: "Reviews", href: "/reviews/murad-retinol-youth-renewal-serum" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cream-200 shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="BestWrinkleReducers home">
            <Sparkles className="h-5 w-5 text-gold-500 group-hover:text-gold-400 transition-colors" />
            <span className="font-serif text-xl font-bold text-neutral-900 tracking-tight">
              Best<span className="text-blush-500">Wrinkle</span>Reducers
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-blush-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/top-10"
              className="ml-2 px-4 py-2 bg-blush-500 text-white text-sm font-semibold rounded-full hover:bg-blush-600 transition-colors shadow-sm"
            >
              See Top 10 →
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-blush-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-cream-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-neutral-700 hover:text-blush-500 py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/top-10"
            className="block mt-2 text-center px-4 py-2 bg-blush-500 text-white text-sm font-semibold rounded-full hover:bg-blush-600 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            See Top 10 →
          </Link>
        </div>
      )}
    </header>
  );
}
