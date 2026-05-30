import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 mt-20">
      {/* Disclosure bar */}
      <div className="bg-neutral-800 border-b border-neutral-700">
        <div className="container-custom py-3">
          <p className="text-xs text-neutral-400 text-center">
            <strong className="text-neutral-300">Affiliate Disclosure:</strong>{" "}
            As an Amazon Associate and AWIN affiliate partner, we earn from qualifying purchases at no extra cost to you.{" "}
            <Link href="/affiliate-disclosure" className="underline hover:text-white">
              Learn more
            </Link>
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-gold-400" />
              <span className="font-serif text-lg font-bold text-white">
                Best<span className="text-blush-400">Wrinkle</span>Reducers
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Independent, science-backed reviews of the best anti-aging skincare products in 2026.
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Top Reviews</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/reviews/murad-retinol-youth-renewal-serum" className="hover:text-white transition-colors">Murad Retinol Serum</Link></li>
              <li><Link href="/reviews/dr-dennis-gross-retinol-ferulic" className="hover:text-white transition-colors">Dr. Dennis Gross Retinol</Link></li>
              <li><Link href="/reviews/olay-regenerist-micro-sculpting-cream" className="hover:text-white transition-colors">Olay Regenerist</Link></li>
              <li><Link href="/reviews/neutrogena-rapid-wrinkle-repair" className="hover:text-white transition-colors">Neutrogena Rapid Repair</Link></li>
              <li><Link href="/top-10" className="text-blush-400 hover:text-blush-300 transition-colors">See All Top 10 →</Link></li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/retinol-vs-retinal-2026" className="hover:text-white transition-colors">Retinol vs Retinal</Link></li>
              <li><Link href="/blog/best-drugstore-wrinkle-creams-under-30" className="hover:text-white transition-colors">Best Under $30</Link></li>
              <li><Link href="/blog/how-to-build-anti-aging-routine" className="hover:text-white transition-colors">Anti-Aging Routine</Link></li>
              <li><Link href="/blog" className="text-blush-400 hover:text-blush-300 transition-colors">All Articles →</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © {year} BestWrinkleReducers.com — Independent skincare reviews. Not medical advice.
          </p>
          <p className="text-xs text-neutral-500 flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-blush-500" /> for great skin
          </p>
        </div>
      </div>
    </footer>
  );
}
