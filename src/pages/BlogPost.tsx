import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { BlogDiagram } from "@/components/BlogDiagram";
import { Seo } from "@/components/Seo";
import { toAbsoluteUrl } from "@/lib/seo";
import { NotFound } from "./NotFound";

function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, j) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={j} className="font-semibold text-charcoal dark:text-gray-200">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const articlePath = `/blog/${post.slug}`;
  const wordCount = post.content.split(/\s+/).length;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    wordCount,
    articleSection: "AI Software Engineering",
    keywords: post.keywords.join(", "),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Spekn",
      url: toAbsoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/logo.svg"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": toAbsoluteUrl(articlePath),
    },
    image: toAbsoluteUrl("/og-image.svg"),
    inLanguage: "en",
  };

  return (
    <div>
      <Seo
        title={`${post.title} | Spekn Blog`}
        description={post.excerpt}
        path={articlePath}
        type="article"
        jsonLd={articleJsonLd}
        article={{
          publishedTime: post.publishedAt,
          modifiedTime: post.updatedAt,
          author: post.author,
          section: "AI Software Engineering",
          tags: post.keywords,
        }}
      />
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 font-body text-sm text-gray-400 hover:text-indigo"
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
          <p className="mt-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-indigo-light/90">
            Spekn Journal
          </p>
          <h1 className="mt-3 font-brand text-3xl font-extrabold text-white md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-gray-400">
            For teams moving from solo AI coding workflows to more durable, governed software delivery.
          </p>
        </div>
      </section>

      <section className="bg-ghost py-16 dark:bg-charcoal">
        <article className="prose prose-lg dark:prose-invert mx-auto max-w-3xl px-6">
          {post.content.split("\n\n").map((paragraph, i) => {
            // Diagram blocks
            const diagramMatch = paragraph.match(/^\[diagram:([\w-]+)\]$/);
            if (diagramMatch) {
              return <BlogDiagram key={i} type={diagramMatch[1]} />;
            }
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="mt-12 mb-4 font-brand text-2xl font-extrabold">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={i} className="mt-8 mb-3 font-brand text-xl font-bold">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="my-4 list-disc space-y-2 pl-6">
                  {items.map((item, j) => (
                    <li key={j} className="font-body text-base leading-relaxed text-slate marker:text-indigo/50 dark:text-gray-400 dark:marker:text-indigo/40">
                      {renderInline(item.replace(/^- /, ""))}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith("1. ") || paragraph.startsWith("2. ")) {
              const items = paragraph.split("\n").filter((l) => /^\d+\./.test(l));
              return (
                <ol key={i} className="my-4 list-decimal space-y-2 pl-6">
                  {items.map((item, j) => (
                    <li key={j} className="font-body text-base leading-relaxed text-slate marker:text-indigo/50 dark:text-gray-400 dark:marker:text-indigo/40">
                      {renderInline(item.replace(/^\d+\.\s*/, ""))}
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={i} className="my-4 font-body text-base leading-relaxed text-slate dark:text-gray-400">
                {renderInline(paragraph)}
              </p>
            );
          })}
        </article>
      </section>
    </div>
  );
}
