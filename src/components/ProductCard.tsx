import Link from "next/link";
import { ShoppingCart, CheckCircle2, XCircle } from "lucide-react";
import StarRating from "./StarRating";
import { type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  showDetails?: boolean;
}

function amazonUrl(asin: string) {
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG ?? "YOURTAG-20";
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}

export default function ProductCard({ product, showDetails = false }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Rank badge */}
      <div className="relative">
        <div className="absolute top-3 left-3 z-10 bg-gold-gradient text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
          #{product.rank}
        </div>
        <div className="h-48 bg-cream-100 flex items-center justify-center overflow-hidden">
          {/* Replace imageUrl in products.ts with real product images */}
          <div className="flex flex-col items-center justify-center text-neutral-300 gap-2">
            <div className="w-20 h-20 rounded-full bg-cream-200 flex items-center justify-center">
              <span className="text-2xl">✦</span>
            </div>
            <span className="text-xs font-medium text-neutral-400">{product.brand}</span>
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs uppercase tracking-wider text-blush-500 font-semibold mb-1">{product.brand}</p>
        <h3 className="font-serif text-lg font-bold text-neutral-900 leading-tight mb-2">
          {product.name}
        </h3>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />

        <p className="mt-3 text-sm text-neutral-600 leading-relaxed line-clamp-3">
          {product.shortDescription}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.keyIngredients.slice(0, 3).map((ing) => (
            <span key={ing} className="text-xs bg-cream-100 text-neutral-600 px-2.5 py-1 rounded-full">
              {ing}
            </span>
          ))}
        </div>

        {showDetails && (
          <div className="mt-4 space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-green-700">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
              {product.pros[0]}
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <XCircle className="h-3.5 w-3.5 text-neutral-300 flex-shrink-0" />
              {product.cons[0]}
            </div>
          </div>
        )}

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-neutral-900">{product.price}</span>
            <span className="text-xs text-neutral-400 ml-1">avg.</span>
          </div>
          <Link
            href={`/reviews/${product.slug}`}
            className="text-sm text-blush-500 font-medium hover:text-blush-600 transition-colors"
          >
            Full review →
          </Link>
        </div>

        <a
          href={amazonUrl(product.asin)}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-3 w-full flex items-center justify-center gap-2 bg-blush-500 hover:bg-blush-600 text-white font-semibold py-3 rounded-xl transition-colors btn-affiliate-pulse text-sm"
        >
          <ShoppingCart className="h-4 w-4" />
          Buy on Amazon
        </a>
      </div>
    </div>
  );
}
