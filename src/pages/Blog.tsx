import { blogPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/BlogCard";
import { Seo } from "@/components/Seo";
import { toAbsoluteUrl } from "@/lib/seo";

export function Blog() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Spekn Journal",
    description:
      "Writing on team continuity, context drift, harness engineering, governance, and making AI-assisted software delivery maintainable over time.",
    url: toAbsoluteUrl("/blog"),
    publisher: {
      "@type": "Organization",
      name: "Spekn",
      url: toAbsoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/logo.svg"),
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: toAbsoluteUrl(`/blog/${post.slug}`),
        name: post.title,
      })),
    },
  };

  return (
    <div>
      <Seo
        title="Spekn Journal — AI Software Engineering Blog"
        description="Writing on team continuity, context drift, harness engineering, governance, and making AI-assisted software delivery maintainable over time."
        path="/blog"
        jsonLd={blogJsonLd}
      />
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-brand text-4xl font-extrabold text-white md:text-6xl">Blog</h1>
          <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-gray-400">
            Thinking on team continuity, context drift, harness engineering, governance, and how AI-assisted software delivery becomes maintainable beyond the solo workflow stage.
          </p>
        </div>
      </section>

      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
