import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogSlugs, getBlogPost } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import NewsletterSignup from "@/components/NewsletterSignup";
import AdUnit from "@/components/AdUnit";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
    keywords: post.frontmatter.tags,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: {
      "@type": "Organization",
      name: frontmatter.author || "BestWrinkleReducers Editorial Team",
      url: "https://bestwrinklereducers.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "BestWrinkleReducers.com",
      url: "https://bestwrinklereducers.com",
      logo: { "@type": "ImageObject", url: "https://bestwrinklereducers.com/og-default.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bestwrinklereducers.com/blog/${slug}`,
    },
    keywords: frontmatter.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-cream-50 border-b border-cream-200 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-1.5 text-xs text-neutral-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blush-500 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog" className="hover:text-blush-500 transition-colors">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-600 truncate max-w-xs">{frontmatter.title}</span>
          </nav>
        </div>
      </div>

      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <header className="mb-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blush-500 mb-3">
                {frontmatter.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4">
                {frontmatter.title}
              </h1>
              <p className="text-lg text-neutral-500 leading-relaxed mb-5">{frontmatter.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 border-t border-b border-cream-200 py-4">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {frontmatter.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(frontmatter.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {frontmatter.readTime}
                </span>
              </div>
            </header>

            <AffiliateDisclosure compact />

            <div className="prose mt-8">
              <MDXRemote source={content} />
            </div>


            <AdUnit slot="6716942384" className="mt-8" />
            <div className="mt-10 pt-6 border-t border-cream-200">
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-cream-100 text-neutral-600 px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-blush-500 font-semibold hover:text-blush-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
