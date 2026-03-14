import { useEffect } from "react";
import { DEFAULT_OG_IMAGE_PATH, toAbsoluteUrl } from "@/lib/seo";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    section?: string;
    tags?: string[];
  };
}

function upsertMeta(attrs: Record<string, string>, content: string) {
  const selector = Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join("");
  let el = document.head.querySelector(`meta[${selector}]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => el?.setAttribute(key, value));
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function removeManagedJsonLd() {
  document.head
    .querySelectorAll("script[type='application/ld+json'][data-spekn-seo='true']")
    .forEach((node) => node.remove());
}

export function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE_PATH,
  type = "website",
  noindex = false,
  jsonLd,
  article,
}: SeoProps) {
  useEffect(() => {
    const absoluteUrl = toAbsoluteUrl(path);
    const absoluteImage = toAbsoluteUrl(image);

    document.title = title;
    upsertMeta({ name: "description" }, description);
    upsertCanonical(absoluteUrl);

    upsertMeta({ property: "og:title" }, title);
    upsertMeta({ property: "og:description" }, description);
    upsertMeta({ property: "og:type" }, type);
    upsertMeta({ property: "og:url" }, absoluteUrl);
    upsertMeta({ property: "og:image" }, absoluteImage);
    upsertMeta({ property: "og:site_name" }, "Spekn");

    upsertMeta({ name: "twitter:card" }, "summary_large_image");
    upsertMeta({ name: "twitter:title" }, title);
    upsertMeta({ name: "twitter:description" }, description);
    upsertMeta({ name: "twitter:image" }, absoluteImage);

    upsertMeta({ name: "robots" }, noindex ? "noindex, nofollow" : "index, follow");

    if (article) {
      upsertMeta({ property: "article:published_time" }, article.publishedTime);
      upsertMeta({ property: "article:modified_time" }, article.modifiedTime);
      upsertMeta({ property: "article:author" }, article.author);
      if (article.section) {
        upsertMeta({ property: "article:section" }, article.section);
      }
      article.tags?.forEach((tag, idx) => {
        upsertMeta({ property: "article:tag", "data-idx": String(idx) }, tag);
      });
    }

    removeManagedJsonLd();
    if (jsonLd) {
      const payloads = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      payloads.forEach((payload) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-spekn-seo", "true");
        script.textContent = JSON.stringify(payload);
        document.head.appendChild(script);
      });
    }
  }, [article, description, image, jsonLd, noindex, path, title, type]);

  return null;
}
