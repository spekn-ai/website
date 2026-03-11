import { useEffect, useRef, useState } from "react";
import { PricingCard } from "@/components/PricingCard";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ChevronDown, Mail } from "lucide-react";
import { Seo } from "@/components/Seo";

function useSectionReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 },
    );
    el.querySelectorAll(".section-reveal").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const faqs = [
  { q: "What AI agents does Spekn support?", a: "Any agent that supports MCP — including Claude Code, Codex, Cursor, Gemini, and others. Spekn is designed for multi-agent team workflows, not just one local setup." },
  { q: "Do I need to rewrite my existing specs?", a: "No. Spekn imports AGENTS.md, Spec Kit, OpenSpec, .cursorrules, plain Markdown, and similar formats. Teams usually adopt incrementally, project by project." },
  { q: "Why not just use local agent memory?", a: "Local memory helps one developer in one environment. Spekn is built for shared context across onboarding, local development, CI, and pull requests, with governance and traceability for the whole team." },
  { q: "Does Spekn charge for AI compute?", a: "No. Your agents run on your own keys, subscriptions, or local models. Spekn does not sell AI credits or add compute markup." },
  { q: "Can I self-host Spekn?", a: "Enterprise plans include three deployment modes: Spekn Cloud (managed), Dedicated cluster (single-tenant), and Self-hosted (your own infrastructure). Contact us for details." },
];

export function Pricing() {
  const containerRef = useSectionReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [annual, setAnnual] = useState(false);

  return (
    <div ref={containerRef}>
      <Seo
        title="Pricing | Spekn"
        description="Compare Spekn plans for teams building software with AI agents. Bring shared context, orchestration, governance, and long-term maintainability across onboarding, local development, CI, and pull requests."
        path="/pricing"
      />
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-brand text-4xl font-extrabold text-white md:text-6xl">
            Pricing for teams moving beyond AI coding POCs
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-gray-400">
            No AI credits. No compute markup. Pay for the platform that helps your team organize specs, share context,
            orchestrate work, and add governance as AI-assisted delivery becomes part of how you actually ship.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`font-body text-sm ${!annual ? "font-bold text-white" : "text-gray-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative h-7 w-12 rounded-full transition-colors ${annual ? "bg-indigo" : "bg-gray-600"}`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white transition-transform ${annual ? "translate-x-5" : ""}`}
              />
            </button>
            <span className={`font-body text-sm ${annual ? "font-bold text-white" : "text-gray-400"}`}>
              Annually
            </span>
            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">
              Save 10%
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-charcoal-light">
        <div className="mx-auto max-w-6xl px-6">
          <div className="section-reveal grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-ghost/70 p-6 dark:border-gray-800 dark:bg-charcoal/50">
              <h2 className="font-brand text-lg font-bold">Start with one repo</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Diagnose drift, weak context, and missing continuity before changing your team&apos;s workflow.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-ghost/70 p-6 dark:border-gray-800 dark:bg-charcoal/50">
              <h2 className="font-brand text-lg font-bold">Scale to shared delivery</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Move from local agent memory to shared specs, aligned execution, and team-wide context.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-ghost/70 p-6 dark:border-gray-800 dark:bg-charcoal/50">
              <h2 className="font-brand text-lg font-bold">Add governance when it matters</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Bring in policy, deployment controls, and auditability as the workflow becomes business-critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-6xl px-6">
          <div className="section-reveal mb-10 grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-charcoal-light md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <h2 className="font-brand text-2xl font-extrabold">Need a rollout plan, security review, or enterprise deployment discussion?</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Talk directly with us about pilot scope, self-hosting, procurement, onboarding strategy, or how Spekn fits your engineering workflow.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href="mailto:contact@spekn.com?subject=Spekn%20enterprise%20inquiry"
                className="inline-flex items-center gap-2 rounded-xl border border-indigo/30 bg-indigo/5 px-5 py-3 font-body text-sm font-medium text-indigo transition-colors hover:bg-indigo/10"
              >
                <Mail size={16} /> Contact Sales
              </a>
              <p className="font-body text-xs text-slate/70 dark:text-gray-500">Typical topics: pilots, team rollout, deployment modes, procurement, and governance needs.</p>
            </div>
          </div>
          <div className="section-reveal grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <PricingCard
              name="Free"
              description="For diagnosing one repo and evaluating whether your team has a continuity problem"
              features={[
                "1 project",
                "Scoped Spekn Bridge (UI workflows)",
                "Spec creation & context export",
                "Persistent decision records",
                "CLI tools",
              ]}
              cta="Join Early Access"
            />
            <PricingCard
              name="Pro"
              monthlyPrice={49}
              period="user/mo"
              description="For individual engineers establishing a more durable AI-assisted workflow"
              annual={annual}
              features={[
                "Unlimited projects",
                "Full Spekn Bridge + MCP server",
                "Explicit 4-layer context model",
                "Vector memory & spec graph",
                "Run report capture",
                "30-day audit trail",
              ]}
            />
            <PricingCard
              name="Team"
              monthlyPrice={99}
              period="user/mo"
              description="For teams that need shared specs, onboarding continuity, multi-agent orchestration, and CI/PR alignment"
              popular
              annual={annual}
              features={[
                "Everything in Pro",
                "Team collaboration & shared spec graph",
                "EM orchestration & phase gates",
                "GitHub / GitLab integration",
                "CI + PR context injection",
                "Skills marketplace",
              ]}
            />
            <PricingCard
              name="Enterprise"
              customPrice="Custom"
              description="For organizations that need deployment control, policy, auditability, and governed long-term AI-assisted delivery"
              features={[
                "Everything in Team",
                "Cloud, Dedicated, or Self-hosted",
                "Spekn-hosted agent sessions",
                "Multi-repo governance and policy controls",
                "Deploy gate alignment enforcement",
                "SSO (Keycloak), audit, and export",
                "HMAC-signed context bundles",
                "SLA & dedicated support",
              ]}
              cta="Contact Sales"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-3xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold">Frequently asked questions</h2>
          </div>
          <div className="section-reveal mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-brand text-sm font-bold">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-slate transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
                    <p className="font-body text-sm leading-relaxed text-slate dark:text-gray-400">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold text-white">
              Ready to make AI-assisted delivery maintainable for your team?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-gray-400">
              Join early access to move beyond one-off local workflows and bring shared context, orchestration, and governance into the way your team ships.
            </p>
            <div className="mt-10 flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
