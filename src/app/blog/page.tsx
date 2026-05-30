import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getAllBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Anti-Aging Skincare Blog — Tips, Reviews & Ingredient Guides",
  description:
    "Science-backed guides on anti-aging skincare, retinol, peptides, and the best wrinkle reducers. Written for real women who want honest, evidence-based advice.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            The Anti-Aging <span className="text-blush-500">Skincare Blog</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto">
            Science-backed guides, ingredient deep-dives, and honest comparisons — so you spend money
            only on what actually works.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="section-padding">
        <div className="container-custom">
          {posts.length === 0 ? (
            <p className="text-center text-neutral-400 py-20">No posts yet — check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
