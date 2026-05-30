import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <Sparkles className="h-12 w-12 text-blush-300 mb-6" />
      <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-3">Page Not Found</h1>
      <p className="text-neutral-500 max-w-md mb-8">
        We couldn&apos;t find what you were looking for. Maybe start with our top picks?
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/top-10"
          className="px-6 py-3 bg-blush-500 hover:bg-blush-600 text-white font-semibold rounded-full transition-colors shadow-sm"
        >
          See Top 10 Picks
        </Link>
        <Link
          href="/"
          className="px-6 py-3 bg-white hover:bg-cream-100 text-neutral-700 font-semibold rounded-full border border-cream-300 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
