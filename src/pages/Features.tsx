import { useEffect, useRef } from "react";
import {
  FileText,
  Play,
  Database,
  Users,
  Shield,
  GitBranch,
  ArrowRight,
  Workflow,
  DoorOpen,
  Bot,
} from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { WaitlistForm } from "@/components/WaitlistForm";
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

export function Features() {
  const containerRef = useSectionReveal();

  return (
    <div ref={containerRef}>
      <Seo
        title="Features | Spekn"
        description="Explore how Spekn helps teams organize specs, manage shared context, orchestrate multiple AI agents, and add governance across onboarding, local development, CI, and pull requests."
        path="/features"
      />

      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-brand text-4xl font-extrabold text-white md:text-6xl">
            Built for team continuity, not just local agent memory.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-gray-400">
            Spekn gives teams a durable framework for AI-assisted software delivery: organized specs, shared context,
            orchestration across agents, and governance that holds up over time.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-6xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">What teams get with Spekn</h2>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-slate dark:text-gray-400">
              Most tools help one developer go faster. Spekn helps the whole team stay aligned across onboarding, local
              development, CI, and pull requests.
            </p>
          </div>
          <div className="section-reveal mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Users size={24} />}
              title="Shared team context"
              description="Keep specs, decisions, and constraints in one structured system that humans and agents can work from together."
            />
            <FeatureCard
              icon={<DoorOpen size={24} />}
              title="Faster onboarding"
              description="Give new engineers the right context from day one instead of asking them to reconstruct tribal knowledge from scattered files and chat."
            />
            <FeatureCard
              icon={<Bot size={24} />}
              title="Multi-agent compatibility"
              description="Work across Claude Code, Codex, Cursor, Gemini, and MCP-based workflows without fragmenting the team’s source of truth."
            />
            <FeatureCard
              icon={<Workflow size={24} />}
              title="Workflow orchestration"
              description="Coordinate work across local sessions, task flows, CI, and PR review instead of treating every agent run like an isolated event."
            />
            <FeatureCard
              icon={<Shield size={24} />}
              title="Governance and gating"
              description="Add policy, review gates, and delivery controls so AI-assisted development becomes reliable enough for real teams."
            />
            <FeatureCard
              icon={<GitBranch size={24} />}
              title="Long-term maintainability"
              description="Preserve decisions, traceability, and execution history so the workflow stays useful long after the first proof of concept."
            />
          </div>
        </div>
      </section>

      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              Organize. Run. <span className="gradient-text">Govern.</span>
            </h2>
          </div>
          <div className="section-reveal mt-16 grid gap-6 md:grid-cols-3">
            <div className="glass-card relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                <FileText size={24} />
              </div>
              <h3 className="font-brand text-xl font-bold">Organize specs</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Structure requirements, decisions, and context so the whole team can work from the same foundation.
              </p>
            </div>

            <div className="glass-card relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                <Play size={24} />
              </div>
              <h3 className="font-brand text-xl font-bold">Run across agents</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Send the right context into coding agents and workflows instead of relying on one developer&apos;s local setup.
              </p>
            </div>

            <div className="glass-card relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                <Database size={24} />
              </div>
              <h3 className="font-brand text-xl font-bold">Govern over time</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Keep decisions, evidence, and controls connected so AI-assisted delivery remains maintainable as the team scales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal mb-10 rounded-2xl border border-gray-200 bg-ghost/70 p-6 dark:border-gray-800 dark:bg-charcoal/50">
            <h2 className="font-brand text-2xl font-extrabold">What this looks like in practice</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-charcoal-light">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-indigo">Spec</p>
                <p className="mt-2 font-mono text-xs text-slate dark:text-gray-400">checkout.rq.4 → retry policy = 5</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-charcoal-light">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-indigo">Decision</p>
                <p className="mt-2 font-mono text-xs text-slate dark:text-gray-400">ADR-014 → JWT over session tokens</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-charcoal-light">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-indigo">Gate</p>
                <p className="mt-2 font-mono text-xs text-slate dark:text-gray-400">PR blocked until verification evidence is attached</p>
              </div>
            </div>
          </div>
          <div className="section-reveal grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
                <FileText size={28} />
              </div>
              <h2 className="font-brand text-3xl font-extrabold">Specs that stay useful</h2>
              <p className="mt-4 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
                Spekn helps teams keep specs organized, connected, and usable by both people and agents.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Structured specs with requirements, constraints, and decisions",
                  "Imports from CLAUDE.md, .cursorrules, Spec Kit, OpenSpec, AGENTS.md, and plain Markdown",
                  "Context prepared for both onboarding and execution",
                  "A more durable alternative to scattered local instruction files",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-slate dark:text-gray-400">
                    <ArrowRight size={14} className="mt-1 shrink-0 text-indigo" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-charcoal-light">
              <div className="font-mono text-sm leading-7 text-gray-600 dark:text-gray-400">
                <p className="text-indigo">// spec: onboarding-flow.md</p>
                <p className="text-slate">requirements: access model, responsibilities, acceptance criteria</p>
                <p className="text-slate">constraints: security rules, architecture invariants, org standards</p>
                <p className="text-slate">decisions: approved approaches, rejected options, rationale</p>
                <p className="text-slate">execution: task-ready context for local dev, CI, and PR workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal grid items-center gap-16 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-charcoal-light">
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-indigo/20 px-2 py-0.5 text-xs text-indigo">team</span>
                    <span className="text-gray-600 dark:text-gray-400">Onboarding new engineer with approved architecture context...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-green-500/20 px-2 py-0.5 text-xs text-green-500">claude</span>
                    <span className="text-gray-600 dark:text-gray-400">Implement feature with shared spec context ✓</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-green-500/20 px-2 py-0.5 text-xs text-green-500">ci</span>
                    <span className="text-gray-600 dark:text-gray-400">Verify spec coverage and gate merge ✓</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-yellow-500/20 px-2 py-0.5 text-xs text-yellow-500">pr</span>
                    <span className="text-gray-600 dark:text-gray-400">Review against accepted decisions and evidence ⏳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
                <Play size={28} />
              </div>
              <h2 className="font-brand text-3xl font-extrabold">Execution that survives handoffs</h2>
              <p className="mt-4 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
                Spekn keeps work aligned across the full delivery workflow instead of trapping context inside one local agent session.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Shared context across onboarding, local development, CI, and pull requests",
                  "Support for multiple coding agents and team workflows",
                  "Orchestration that keeps work tied to the same requirements and decisions",
                  "A stronger path from experiments to repeatable team delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-slate dark:text-gray-400">
                    <ArrowRight size={14} className="mt-1 shrink-0 text-indigo" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
                <Shield size={28} />
              </div>
              <h2 className="font-brand text-3xl font-extrabold">Governance that makes AI delivery durable</h2>
              <p className="mt-4 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
                Speed alone is not enough for a team. Spekn adds the controls, traceability, and gating needed to make
                AI-assisted software delivery maintainable in the long run.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Decision records with rationale and rejected alternatives",
                  "Verification evidence linked to requirements and acceptance criteria",
                  "Traceability across local runs, CI checks, and PR review",
                  "Policy and gating as adoption grows from pilot to team-wide workflow",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-slate dark:text-gray-400">
                    <ArrowRight size={14} className="mt-1 shrink-0 text-indigo" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-charcoal-light">
              <div className="space-y-3 font-mono text-sm text-gray-600 dark:text-gray-400">
                <p className="text-indigo">// Governance Snapshot</p>
                <p>agent_support: ["Claude Code", "Codex", "Cursor", "Gemini"]</p>
                <p>gates: ["spec coverage", "decision checks", "verification evidence"]</p>
                <p>handoffs: ["onboarding", "local dev", "ci", "pr"]</p>
                <p>goal: "maintainable AI-assisted delivery over time"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold text-white md:text-4xl">
              Move from solo AI coding workflows to team-scale delivery.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-gray-400">
              Join early access to bring structure, continuity, and governance to the way your team builds with AI agents.
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
