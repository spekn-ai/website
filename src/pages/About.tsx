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
            Building the context and governance layer for AI-first development.
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
                The question has changed. It's no longer "Can AI write code?" — it's <strong className="text-charcoal dark:text-white">"How do we build systems that make AI agents reliable, consistent, and governed?"</strong>
              </p>
              <p>
                AI agents can write code, but they can't maintain institutional memory. They can execute tasks, but they can't trace decisions back to requirements. They can ship fast, but they can't ensure consistency across a team.
              </p>
              <p>
                Spekn fills that gap. We're building the harness — the context and governance layer that sits between your product intent and the AI agents that execute it. Not another AI coding tool. The infrastructure that makes all AI coding tools trustworthy.
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
              title="Specs over prompts"
              description="Ad-hoc prompting doesn't scale. Structured specifications with acceptance criteria are the foundation of reliable AI development."
            />
            <FeatureCard
              icon={<Lightbulb size={24} />}
              title="Decisions are artifacts"
              description="Decisions are as important as code. They should be captured, versioned, and linked to the specifications that drove them."
            />
            <FeatureCard
              icon={<BookOpen size={24} />}
              title="Governance enables speed"
              description="Governance isn't bureaucracy — it's the infrastructure that lets teams move fast with confidence. The harness enables velocity."
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
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Specifications</strong> as the single source of truth</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Context layers</strong> that deliver the right information at the right time</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Acceptance criteria</strong> that agents self-evaluate against</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Decision records</strong> that capture institutional knowledge</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Verification trails</strong> that prove quality, not just assert it</li>
              </ul>
              <p>
                SDD works with any specification format. Bring your existing AGENTS.md, Spec Kit, OpenSpec, or BMAD workflows — Spekn provides the governance layer above them all.
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
