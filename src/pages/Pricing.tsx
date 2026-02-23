import { useEffect, useRef, useState } from "react";
import { PricingCard } from "@/components/PricingCard";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ChevronDown } from "lucide-react";

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
  { q: "What AI agents does Spekn support?", a: "Spekn works with any agent that supports MCP — Claude Code, Codex, Cursor, Gemini, Antigravity, and more. The Spekn Bridge and MCP server make orchestration agent-agnostic by design." },
  { q: "Do I need to rewrite my existing specs?", a: "No. Spekn imports from AGENTS.md, Spec Kit, OpenSpec, .cursorrules, plain Markdown, or any other format. It's a governance layer above your existing workflow." },
  { q: "What is the spec graph?", a: "A persistent knowledge structure that captures specifications, decisions, verification trails, and their relationships. Every session enriches it. Every new developer or agent picks up with full context." },
  { q: "Does Spekn charge for AI compute?", a: "Never. Your agents run on your own keys, subscriptions, or local models. Spekn charges only for the governance infrastructure that makes all of it coherent." },
  { q: "Can I self-host Spekn?", a: "Enterprise plans include three deployment modes: Spekn Cloud (managed), Dedicated cluster (single-tenant), and Self-hosted (your own infrastructure). Contact us for details." },
];

export function Pricing() {
  const containerRef = useSectionReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [annual, setAnnual] = useState(false);

  return (
    <div ref={containerRef}>
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-brand text-4xl font-extrabold text-white md:text-6xl">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-gray-400">
            No AI credits. No compute markup. Your agents run on your keys — Spekn charges for the governance layer.
          </p>

          {/* Billing toggle */}
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

      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-6xl px-6">
          <div className="section-reveal grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <PricingCard
              name="Free"
              description="For individual developers getting started"
              features={[
                "1 project",
                "Scoped Spekn Bridge (UI workflows)",
                "Spec creation & context export",
                "Basic decision records",
                "CLI tools",
              ]}
              cta="Start Free"
            />
            <PricingCard
              name="Pro"
              monthlyPrice={49}
              period="user/mo"
              description="For developers who need full governance"
              annual={annual}
              features={[
                "Unlimited projects",
                "Full Spekn Bridge + MCP server",
                "Full 4-layer context",
                "Vector memory & spec graph",
                "Run report capture",
                "30-day audit trail",
              ]}
            />
            <PricingCard
              name="Team"
              monthlyPrice={99}
              period="user/mo"
              description="For teams running agent pipelines"
              popular
              annual={annual}
              features={[
                "Everything in Pro",
                "Team collaboration & shared spec graph",
                "EM orchestration & phase gates",
                "GitHub / GitLab integration",
                "CI context injection",
                "Skills marketplace",
                "SLA & dedicated support",
              ]}
            />
            <PricingCard
              name="Enterprise"
              customPrice="Custom"
              description="For organizations with compliance needs"
              features={[
                "Everything in Team",
                "Cloud, Dedicated, or Self-hosted",
                "Spekn-hosted agent sessions",
                "Multi-repo governance",
                "Deploy gate governance",
                "SSO (Keycloak) & compliance export",
                "HMAC-signed context bundles",
              ]}
              cta="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold text-white">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-gray-400">
              Join the waitlist and be among the first to experience governed AI development.
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
