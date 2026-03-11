import { useEffect, useRef, useState } from "react";
import { PricingCard } from "@/components/PricingCard";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ChevronDown } from "lucide-react";
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
  { q: "What AI agents does Spekn support?", a: "Any agent that supports MCP — including Claude Code, Codex, Cursor, Gemini, and others. Spekn Bridge + MCP server keep context consistent across tools." },
  { q: "Do I need to rewrite my existing specs?", a: "No. Spekn imports AGENTS.md, Spec Kit, OpenSpec, .cursorrules, plain Markdown, and similar formats. Teams usually adopt incrementally, project by project." },
  { q: "What is the spec graph?", a: "A persistent graph of versioned specs, spec anchors, decision records, and verification evidence. It reduces context drift across local sessions, CI runs, and pull requests." },
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
        description="Compare Spekn plans for solo engineers, teams, and enterprises building with AI coding agents. Keep specs, agents, CI, and pull requests aligned."
        path="/pricing"
      />
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-brand text-4xl font-extrabold text-white md:text-6xl">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-gray-400">
            No AI credits. No compute markup. Pay for the workflow layer that keeps specs, agents, CI, and pull requests aligned as your team ships.
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
              description="For evaluating Spekn and improving solo AI workflows"
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
              description="For engineers running serious AI-assisted development workflows"
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
              description="For teams that need shared specs, aligned agent execution, and CI/PR continuity"
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
              description="For organizations that need deployment control, auditability, and policy at scale"
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
              Ready to keep specs, agents, and pull requests aligned?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-gray-400">
              Join early access to keep specs, agents, and pull requests aligned without repeating the same context in every session.
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
