import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { type BlogPost } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter } = post;

  return (
    <article className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden flex flex-col group">
      {/* Cover image area */}
      <div className="h-40 bg-blush-gradient flex items-center justify-center">
        <span className="font-serif text-4xl text-blush-300">✦</span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs uppercase tracking-wider font-semibold text-blush-500 mb-2">
          {frontmatter.category}
        </span>
        <h3 className="font-serif text-lg font-bold text-neutral-900 leading-snug group-hover:text-blush-500 transition-colors mb-2">
          <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 flex-1">
          {frontmatter.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formatDate(frontmatter.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {frontmatter.readTime}
            </span>
          </div>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-1 text-blush-500 font-medium hover:text-blush-600 transition-colors"
          >
            Read <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
