import { useEffect, useRef } from "react";
import { Target, Lightbulb, BookOpen, Mail, Rocket, ShieldCheck } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FeatureCard } from "@/components/FeatureCard";
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

export function About() {
  const containerRef = useSectionReveal();

  return (
    <div ref={containerRef}>
      <Seo
        title="About | Spekn"
        description="Why Spekn exists: most AI coding tools are built for solo local workflows. Spekn is built for teams that need organized specs, shared context, orchestration, and governance over time."
        path="/about"
      />
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-brand text-4xl font-extrabold text-white md:text-6xl">
            About <span className="gradient-text">Spekn</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-gray-400">
            Spekn is a platform for teams that need organized specs, shared context, orchestration, and governance across onboarding, local development, CI, and pull requests.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-charcoal-light">
        <div className="mx-auto max-w-6xl px-6">
          <div className="section-reveal grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-ghost/70 p-6 dark:border-gray-800 dark:bg-charcoal/50">
              <Rocket size={20} className="text-indigo" />
              <h2 className="mt-4 font-brand text-lg font-bold">Built for AI-assisted delivery</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Spekn is designed for engineering teams using coding agents in real delivery workflows, not toy demos.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-ghost/70 p-6 dark:border-gray-800 dark:bg-charcoal/50">
              <ShieldCheck size={20} className="text-indigo" />
              <h2 className="mt-4 font-brand text-lg font-bold">Grounded in governance</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                The product is shaped around alignment, traceability, deployment control, and operational trust from day one.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-ghost/70 p-6 dark:border-gray-800 dark:bg-charcoal/50">
              <Mail size={20} className="text-indigo" />
              <h2 className="mt-4 font-brand text-lg font-bold">Founder-led conversations</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                If you&apos;re evaluating Spekn for your team, you can reach us directly at <a href="mailto:contact@spekn.com" className="text-indigo underline hover:text-indigo/80">contact@spekn.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-4xl px-6">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold">Why Spekn Exists</h2>
            <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
              <p>
                We built Spekn because most AI coding tools are optimized for solo developers working locally with short-lived context.
              </p>
              <p>
                That works for demos, experiments, and one-person flows. It breaks down when a team needs onboarding, shared understanding, repeatability, and continuity across the whole delivery process.
              </p>
              <p>
                Context gets fragmented, assumptions reappear, and decisions are lost between local development, CI, and pull requests. Teams repeat explanations instead of building momentum.
              </p>
              <p>
                Spekn gives teams a durable framework: organized specs, shared context, orchestration, governance, and gating that make AI-assisted software delivery maintainable over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Observed Pattern */}
      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-4xl px-6">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold">The Pattern We Observed</h2>
            <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
              <p>
                Across teams and pipelines, the failure modes repeat:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Context drift between stages</strong> as specs, instructions, and code diverge over time</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Assumption reintroduction</strong> where old constraints and defaults reappear in later sessions</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Unstructured specifications</strong> that make constraints hard to enforce and hard to evolve safely</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Non-traceable runs</strong> where outputs exist but the underlying decision path cannot be reconstructed</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Decision overwrite</strong> caused by missing anchor checks and weak continuity across local sessions + CI + PR validators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold">What we believe</h2>
          </div>
          <div className="section-reveal mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Target size={24} />}
              title="Dynamic context, not static files"
              description="The right context bundle at the right step, assembled from versioned specs every session. Not a file you regenerate manually."
            />
            <FeatureCard
              icon={<Lightbulb size={24} />}
              title="Intent is first-class"
              description="Specs, decisions, and constraints are versioned product artifacts, not afterthoughts. A task is not done until its context is updated."
            />
            <FeatureCard
              icon={<BookOpen size={24} />}
              title="Alignment must be enforced"
              description="Alignment means intent, execution, and verification stay connected at every handoff. Governance is the scaling consequence."
            />
          </div>
        </div>
      </section>

      {/* SDD Methodology */}
      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-4xl px-6">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold">Spec-Driven Development</h2>
            <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
              <p>
                SDD is our methodology for AI-assisted delivery. Instead of ceremony-heavy planning loops, SDD provides:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Specifications</strong> as persistent intent — versioned, interconnected, with drift detection</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">4-layer context</strong> — Constraints, Requirements, Technical, Guidance — delivering the right depth to the right agent</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Pipeline-wide alignment</strong> — the same context flowing from local session to CI to PR to deploy gate</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Decision records</strong> that capture what was decided, what was rejected, and why</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Verification evidence</strong> — per-criterion pass/fail traces linked to spec anchors</li>
              </ul>
              <p>
                SDD works with any specification format. Bring your existing CLAUDE.md, .cursorrules, Spec Kit, OpenSpec, AGENTS.md, or BMAD workflows. Spekn does not replace your tools; it enforces alignment across them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trajectory */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-4xl px-6">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold">How This Scales</h2>
            <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
              <p>
                We think in stages:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Clarity</strong>: explicit specs, constraints, and decision history reduce ambiguity per task</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Coordination</strong>: the same intent follows work across agents, tools, and checkpoints</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Governance</strong>: alignment enforcement at scale, with evidence that execution matched intent</li>
              </ul>
              <p>
                This is a long-term governance vision built from practical foundations: persistent intent first, then coordination, then system-level control.
              </p>
              <p>
                We use Spekn to build Spekn. The product is shaped by the same constraints we expect teams to operate under.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold text-white">
              Join us
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-gray-400">
              We're building in public. Follow our journey and get early access.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <WaitlistForm />
              <a
                href="mailto:contact@spekn.com?subject=Spekn%20sales%20inquiry"
                className="font-body text-sm font-medium text-indigo underline hover:text-indigo/80"
              >
                Prefer a direct conversation? Email contact@spekn.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
