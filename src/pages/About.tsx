import { useEffect, useRef } from "react";
import { Target, Lightbulb, BookOpen } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FeatureCard } from "@/components/FeatureCard";

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
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-brand text-4xl font-extrabold text-white md:text-6xl">
            About <span className="gradient-text">Spekn</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-gray-400">
            The context backbone for AI-first teams.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-4xl px-6">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold">Our Thesis</h2>
            <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
              <p>
                AI-first teams have stopped using agents as assistants. They've built pipelines. An agent writes the PRD. Another generates the code. Another reviews it in CI. Another validates the PR. <strong className="text-charcoal dark:text-white">Each step automated, each handoff fast — but nothing connects them.</strong>
              </p>
              <p>
                Every agent in the chain starts from zero, blind to what was decided upstream. The code arrives at the end. A human reviews it — using a process designed for human-generated code, at human-scale velocity, with human-held context. <strong className="text-charcoal dark:text-white">They're not reviewing code. They're reconstructing intent from artifacts.</strong>
              </p>
              <p>
                The real competitor isn't Jira or Linear. It's the repo full of markdown. Teams write things down — CLAUDE.md, .cursorrules, skills, /docs, decision files. It works for one person, for a while. Then files multiply, decisions go stale, and every agent has its own interpretation. <strong className="text-charcoal dark:text-white">A repo full of markdown is not a knowledge system. It's a graveyard of intent.</strong>
              </p>
              <p>
                Spekn is the shared context backbone that flows through your entire agent pipeline. <strong className="text-charcoal dark:text-white">Agents execute. Teams decide.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold">What we believe</h2>
          </div>
          <div className="section-reveal mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Target size={24} />}
              title="Dynamic context, not static files"
              description="The right knowledge for the right agent at the right step, assembled fresh every session. Not a file you regenerate manually."
            />
            <FeatureCard
              icon={<Lightbulb size={24} />}
              title="Intent is first-class"
              description="Specs, decisions, and constraints are versioned product artifacts, not afterthoughts. A task is not done until its context is updated."
            />
            <FeatureCard
              icon={<BookOpen size={24} />}
              title="Knowledge compounds"
              description="Each session enriches the spec graph. The longer you use Spekn, the smarter every agent session gets. Governance must feel lighter than chaos."
            />
          </div>
        </div>
      </section>

      {/* SDD Methodology */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-4xl px-6">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold">Spec-Driven Development</h2>
            <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
              <p>
                SDD is our methodology — a replacement for ceremony-heavy processes that assumes AI agents are first-class team members. Instead of standups, sprints, and story points, SDD provides:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Specifications</strong> as the single source of truth — versioned, interconnected, with drift detection</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">4-layer context</strong> — Constraints, Requirements, Technical, Guidance — delivering the right depth to the right agent</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Pipeline-wide governance</strong> — the same context flowing from local session to CI to PR to deploy gate</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Decision records</strong> that capture what was decided, what was rejected, and why</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Verification trails</strong> — per-criterion pass/fail evidence linked to spec anchors</li>
              </ul>
              <p>
                SDD works with any specification format. Bring your existing CLAUDE.md, .cursorrules, Spec Kit, OpenSpec, AGENTS.md, or BMAD workflows — Spekn doesn't replace them, it governs across all of them.
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
            <div className="mt-10 flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
