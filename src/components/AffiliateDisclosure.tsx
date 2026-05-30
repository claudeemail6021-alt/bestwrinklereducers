import Link from "next/link";
import { Info } from "lucide-react";

interface AffiliateDisclosureProps {
  compact?: boolean;
}

export default function AffiliateDisclosure({ compact = false }: AffiliateDisclosureProps) {
  if (compact) {
    return (
      <p className="text-xs text-neutral-500 italic flex items-start gap-1.5">
        <Info className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-neutral-400" />
        As an Amazon Associate and AWIN partner, we earn from qualifying purchases.{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-neutral-700">Details</Link>
      </p>
    );
  }

  return (
    <div className="bg-cream-100 border border-cream-300 rounded-xl p-4 flex items-start gap-3 my-6">
      <Info className="h-5 w-5 text-blush-500 flex-shrink-0 mt-0.5" />
      <div className="text-sm text-neutral-600 leading-relaxed">
        <strong className="text-neutral-800">Affiliate Disclosure:</strong> BestWrinkleReducers.com is a participant in
        the Amazon Services LLC Associates Program and the AWIN affiliate network. We earn a small commission when you
        purchase through our links, at no additional cost to you. We only recommend products we genuinely believe in —
        our editorial integrity is never for sale.{" "}
        <Link href="/affiliate-disclosure" className="text-blush-500 underline hover:text-blush-600">
          Read our full disclosure →
        </Link>
      </div>
    </div>
  );
}
