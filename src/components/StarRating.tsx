import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;      // e.g. 4.7
  reviewCount?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

export default function StarRating({
  rating,
  reviewCount,
  size = "md",
  showNumber = true,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const sizeMap = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };
  const textMap = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const starClass = sizeMap[size];

  return (
    <div className={`flex items-center gap-1 ${textMap[size]}`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className={`${starClass} fill-gold-400 text-gold-400`} />
      ))}
      {/* Half star simulation */}
      {hasHalf && (
        <span className="relative inline-block">
          <Star className={`${starClass} text-neutral-300`} />
          <span className="absolute inset-0 overflow-hidden w-[50%]">
            <Star className={`${starClass} fill-gold-400 text-gold-400`} />
          </span>
        </span>
      )}
      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className={`${starClass} text-neutral-300`} />
      ))}
      {showNumber && (
        <span className="ml-1 font-semibold text-neutral-700">{rating.toFixed(1)}</span>
      )}
      {reviewCount !== undefined && (
        <span className="text-neutral-400">
          ({reviewCount.toLocaleString()} reviews)
        </span>
      )}
    </div>
  );
}
