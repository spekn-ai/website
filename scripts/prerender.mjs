import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const siteUrl = "https://spekn.com";
const defaultImage = `${siteUrl}/og-image.svg`;

const routes = [
  {
    path: "/",
    title: "Spekn — Specs as the Source of Truth for AI-Assisted Development",
    description:
      "Spekn is a spec-driven development platform that helps teams write and manage specs, generate AI-ready context, and orchestrate coding agents across local development, CI, and pull requests.",
    type: "website",
  },
  {
    path: "/features",
    title: "Features | Spekn",
    description:
      "Explore how Spekn helps teams write and manage specs, generate AI-ready context, and keep coding agents aligned across local development, CI, and pull requests.",
    type: "website",
  },
  {
    path: "/pricing",
    title: "Pricing | Spekn",
    description:
      "Compare Spekn plans for solo engineers, teams, and enterprises building with AI coding agents. Keep specs, agents, CI, and pull requests aligned.",
    type: "website",
  },
  {
    path: "/repo-checker",
    title: "Repo Checker | Spekn Context Health Check",
    description:
      "Run Spekn Check to detect context drift, reintroduced assumptions, and invalid spec anchors across specs, instructions, and code.",
    type: "website",
  },
  {
    path: "/blog",
    title: "Blog | Spekn",
    description:
      "Technical writing on context drift, harness engineering, decision tracking, and spec-driven development for AI-assisted software teams.",
    type: "website",
  },
  {
    path: "/about",
    title: "About | Spekn",
    description:
      "Learn why Spekn exists and how spec-driven development helps teams keep specs, coding agents, and code aligned over time.",
    type: "website",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Spekn",
    description:
      "Read the Spekn privacy policy, including data processing, retention, analytics consent, and your rights.",
    type: "website",
  },
  {
    path: "/blog/ai-agent-drift-repeatability-team-consistency",
    title: "AI Agent Drift: A Practical System for Repeatability and Team Consistency | Spekn Blog",
    description:
      "AI agent speed is no longer the bottleneck. Coherence is. This guide explains drift, repeatability, and team consistency across local runs, CI, and collaborative workflows.",
    type: "article",
  },
  {
    path: "/blog/harness-engineering-the-missing-layer",
    title: "Harness Engineering: Why the Future of AI Development Isn't About Better Models | Spekn Blog",
    description:
      "Why harness engineering matters more than model choice when building reliable AI-assisted software systems.",
    type: "article",
  },
  {
    path: "/blog/when-your-ai-forgets-why-decision-tracking",
    title: "When Your AI Forgets Why: The Hidden Cost of Lost Decisions | Spekn Blog",
    description:
      "Why teams need structured decision tracking to avoid inconsistency, rework, and silent regression across AI coding sessions.",
    type: "article",
  },
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceMeta(html, { title, description, canonicalUrl, image = defaultImage, type = "website", robots = "index, follow" }) {
  const replacements = [
    [/<title>.*?<\/title>/s, `<title>${title}</title>`],
    [/<meta name="description" content=".*?"\s*\/>/s, `<meta name="description" content="${description}" />`],
    [/<meta name="robots" content=".*?"\s*\/>/s, `<meta name="robots" content="${robots}" />`],
    [/<link rel="canonical" href=".*?"\s*\/>/s, `<link rel="canonical" href="${canonicalUrl}" />`],
    [/<meta property="og:title" content=".*?"\s*\/>/s, `<meta property="og:title" content="${title}" />`],
    [/<meta property="og:description" content=".*?"\s*\/>/s, `<meta property="og:description" content="${description}" />`],
    [/<meta property="og:type" content=".*?"\s*\/>/s, `<meta property="og:type" content="${type}" />`],
    [/<meta property="og:url" content=".*?"\s*\/>/s, `<meta property="og:url" content="${canonicalUrl}" />`],
    [/<meta property="og:image" content=".*?"\s*\/>/s, `<meta property="og:image" content="${image}" />`],
    [/<meta name="twitter:title" content=".*?"\s*\/>/s, `<meta name="twitter:title" content="${title}" />`],
    [/<meta name="twitter:description" content=".*?"\s*\/>/s, `<meta name="twitter:description" content="${description}" />`],
    [/<meta name="twitter:image" content=".*?"\s*\/>/s, `<meta name="twitter:image" content="${image}" />`],
  ];

  let result = html;
  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

const baseHtml = await fs.readFile(path.join(distDir, "index.html"), "utf8");

for (const route of routes) {
  const canonicalUrl = `${siteUrl}${route.path}`;
  const html = replaceMeta(baseHtml, { ...route, canonicalUrl });

  if (route.path === "/") continue;

  const relativePath = route.path.replace(/^\//, "");
  const targetDir = path.join(distDir, relativePath);
  await fs.mkdir(targetDir, { recursive: true });
  await fs.writeFile(path.join(targetDir, "index.html"), html, "utf8");
}

console.log(`Prerendered ${routes.length - 1} route entries.`);
