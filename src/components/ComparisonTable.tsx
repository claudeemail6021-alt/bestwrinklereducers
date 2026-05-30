import Link from "next/link";
import { ExternalLink } from "lucide-react";
import StarRating from "./StarRating";
import { type Product } from "@/data/products";

interface ComparisonTableProps {
  products: Product[];
  limit?: number;
}

function amazonUrl(asin: string) {
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG ?? "YOURTAG-20";
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}

export default function ComparisonTable({ products, limit }: ComparisonTableProps) {
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="w-full overflow-x-auto rounded-2xl shadow-card">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-cream-100 border-b border-cream-200">
            <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide w-10">#</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide min-w-[200px]">Product</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide hidden md:table-cell">Key Ingredients</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide hidden lg:table-cell">Best For</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide">Price</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide">Rating</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-neutral-500 uppercase tracking-wide">Buy</th>
          </tr>
        </thead>
        <tbody>
          {displayProducts.map((product, idx) => (
            <tr
              key={product.id}
              className={`border-b border-neutral-100 hover:bg-cream-50 transition-colors ${
                idx === 0 ? "bg-gold-50" : ""
              }`}
            >
              <td className="px-4 py-4">
                <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                  idx === 0
                    ? "bg-gold-gradient text-white"
                    : "bg-cream-200 text-neutral-600"
                }`}>
                  {product.rank}
                </span>
              </td>
              <td className="px-4 py-4">
                <div>
                  <p className="text-xs text-blush-500 font-semibold">{product.brand}</p>
                  <Link
                    href={`/reviews/${product.slug}`}
                    className="font-semibold text-sm text-neutral-900 hover:text-blush-500 transition-colors leading-tight block mt-0.5"
                  >
                    {product.name}
                  </Link>
                </div>
              </td>
              <td className="px-4 py-4 hidden md:table-cell">
                <div className="flex flex-wrap gap-1">
                  {product.keyIngredients.slice(0, 2).map((ing) => (
                    <span key={ing} className="text-xs bg-cream-100 text-neutral-600 px-2 py-0.5 rounded-full">
                      {ing}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-4 hidden lg:table-cell">
                <span className="text-xs text-neutral-600">{product.bestFor}</span>
              </td>
              <td className="px-4 py-4">
                <span className="font-bold text-neutral-900 text-sm">{product.price}</span>
                <br />
                <span className="text-xs text-neutral-400">{product.priceRange}</span>
              </td>
              <td className="px-4 py-4">
                <StarRating rating={product.rating} size="sm" showNumber={true} />
              </td>
              <td className="px-4 py-4 text-center">
                <a
                  href={amazonUrl(product.asin)}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1 bg-blush-500 hover:bg-blush-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  Amazon <ExternalLink className="h-3 w-3" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
