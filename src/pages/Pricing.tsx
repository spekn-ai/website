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
  { q: "What AI agents does Spekn support?", a: "Spekn works with any ACP-compatible agent — Claude Code, Codex, Cursor, Windsurf, and more. The orchestration is agent-agnostic by design." },
  { q: "Do I need to rewrite my existing specs?", a: "No. Spekn imports from AGENTS.md, Spec Kit, OpenSpec, .cursorrules, plain Markdown, or any other format. It's a governance layer above your existing workflow." },
  { q: "What is the spec graph?", a: "A persistent knowledge structure that captures specifications, decisions, verification trails, and their relationships. Every session enriches it. Every new developer or agent picks up with full context." },
  { q: "Can I self-host Spekn?", a: "Enterprise plans include self-hosted deployment options. Contact us for details." },
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
            Start free. Scale as your team and governance needs grow.
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
              price="€0"
              description="For individual developers getting started"
              features={[
                "1 project",
                "Basic context layering",
                "CLI tools",
                "Community support",
              ]}
              cta="Start Free"
            />
            <PricingCard
              name="Pro"
              price="€29"
              annualPrice="€26"
              annualTotal="€312"
              period="month"
              description="For developers who need full governance"
              annual={annual}
              features={[
                "Unlimited projects",
                "Full 4-layer context",
                "Decision tracking",
                "Spec graph & drift detection",
                "Priority support",
              ]}
            />
            <PricingCard
              name="Team"
              price="€49"
              annualPrice="€44"
              annualTotal="€528"
              period="month"
              perUser
              description="For teams shipping with multiple agents"
              popular
              annual={annual}
              features={[
                "Everything in Pro",
                "Multi-agent orchestration",
                "Team-shared spec graph",
                "Cost dashboard & analytics",
                "ACP agent management",
                "Dedicated support",
              ]}
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              description="For organizations with compliance needs"
              features={[
                "Everything in Team",
                "Self-hosted deployment",
                "SSO / SAML",
                "Audit logs & compliance",
                "Custom integrations",
                "SLA & dedicated CSM",
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
