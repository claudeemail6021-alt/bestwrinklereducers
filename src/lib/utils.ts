import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Build an Amazon affiliate link. Tag comes from env or falls back to placeholder. */
export function amazonLink(asin: string): string {
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG ?? "YOURTAG-20";
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}
