import { useEffect, useRef } from "react";
import { Zap, RotateCcw, Brain, FileText, Play, Database, ArrowRight, Terminal, ShieldCheck, BookOpen, Bot, GitBranch, Search } from "lucide-react";
import { AnimatedHero } from "@/components/AnimatedHero";
import { FeatureCard } from "@/components/FeatureCard";
import { WaitlistForm } from "@/components/WaitlistForm";

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

export function Home() {
  const containerRef = useSectionReveal();

  return (
    <div ref={containerRef}>
      <AnimatedHero />

      {/* Problem Section */}
      <section className="relative overflow-hidden bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              AI development is <span className="gradient-text">broken</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate dark:text-gray-400">
              Teams are shipping faster than ever — but losing control, context, and consistency in the process.
            </p>
          </div>
          <div className="section-reveal mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Zap size={24} />}
              title="Vibe Coding Chaos"
              description="AI agents write code without understanding the why. No specs, no constraints, no governance."
            />
            <FeatureCard
              icon={<RotateCcw size={24} />}
              title="Manual Task Orchestration"
              description="Teams still manually decompose work, write prompts, and babysit AI agents through every task."
            />
            <FeatureCard
              icon={<Brain size={24} />}
              title="Zero Institutional Memory"
              description="Every new session starts from scratch. Decisions, context, and verification evidence vanish."
            />
          </div>
        </div>
      </section>

      {/* Solution: Feed → Run → Capture */}
      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              Feed. Run. <span className="gradient-text">Capture.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate dark:text-gray-400">
              A complete lifecycle for governed AI development.
            </p>
          </div>
          <div className="section-reveal mt-16 grid gap-6 md:grid-cols-3">
            {/* Feed */}
            <div className="glass-card relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                <FileText size={24} />
              </div>
              <h3 className="font-brand text-xl font-bold">Feed</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Structure your specs into layered context. Import from any format — AGENTS.md, Spec Kit, OpenSpec, or your own. Four context layers deliver the right depth to the right agent.
              </p>
              <div className="mt-4 rounded-lg bg-charcoal/5 px-3 py-2 font-mono text-xs text-indigo dark:bg-white/5">
                spekn feed --spec auth.md --layers all
              </div>
            </div>

            {/* Run */}
            <div className="glass-card relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                <Play size={24} />
              </div>
              <h3 className="font-brand text-xl font-bold">Run</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Orchestrate any agent with bounded tasks, acceptance criteria, and mechanical enforcement. Works with Claude Code, Codex, Cursor, or any ACP-compatible agent.
              </p>
              <div className="mt-4 rounded-lg bg-charcoal/5 px-3 py-2 font-mono text-xs text-indigo dark:bg-white/5">
                spekn run --agent claude --task T-042
              </div>
            </div>

            {/* Capture */}
            <div className="glass-card relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                <Database size={24} />
              </div>
              <h3 className="font-brand text-xl font-bold">Capture</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Decisions, verification trails, and a knowledge graph that compounds over time. Every run enriches the spec graph. Every session inherits full context.
              </p>
              <div className="mt-4 rounded-lg bg-charcoal/5 px-3 py-2 font-mono text-xs text-indigo dark:bg-white/5">
                spekn capture --decisions --evidence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Quadrant */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              The missing quadrant
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate dark:text-gray-400">
              Most tools optimize for AI capability or governance — not both.
            </p>
          </div>
          <div className="section-reveal mx-auto mt-12 max-w-lg">
            <div className="relative aspect-square rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-charcoal-light">
              {/* Y-axis label */}
              <div className="absolute -left-2 top-1/2 -translate-x-full -translate-y-1/2 -rotate-90 font-body text-xs font-medium text-slate whitespace-nowrap">
                AI Capability &rarr;
              </div>
              {/* X-axis label */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-full font-body text-xs font-medium text-slate">
                Governance &rarr;
              </div>
              {/* Grid lines */}
              <div className="absolute left-1/2 top-8 bottom-8 w-px bg-gray-200 dark:bg-gray-700" />
              <div className="absolute top-1/2 left-8 right-8 h-px bg-gray-200 dark:bg-gray-700" />
              {/* Quadrant labels */}
              <div className="absolute left-12 top-12 font-body text-xs text-slate/60">
                <p className="font-medium">Vibe Coding</p>
                <p className="text-[10px]">High AI, Low Gov</p>
              </div>
              <div className="absolute left-12 bottom-12 font-body text-xs text-slate/60">
                <p className="font-medium">Manual Coding</p>
                <p className="text-[10px]">Low AI, Low Gov</p>
              </div>
              <div className="absolute right-12 bottom-12 font-body text-xs text-slate/60">
                <p className="font-medium">Traditional PM</p>
                <p className="text-[10px]">Low AI, High Gov</p>
              </div>
              {/* Spekn position */}
              <div className="absolute right-10 top-10 flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-indigo animate-glow-pulse shadow-lg shadow-indigo/30" />
                <div>
                  <p className="font-brand text-sm font-bold text-indigo">Spekn</p>
                  <p className="font-body text-[10px] text-slate">High AI + High Gov</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repo Checker */}
      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-reveal text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
              <Terminal size={28} />
            </div>
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              How governed is <span className="gradient-text">your repo</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate dark:text-gray-400">
              One command. No signup. Instant governance health score.
            </p>
          </div>

          {/* Terminal mockup */}
          <div className="section-reveal mx-auto mt-12 max-w-2xl">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl dark:border-gray-800">
              {/* Title bar */}
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 dark:bg-charcoal">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-2 font-mono text-xs text-slate/60 dark:text-gray-500">terminal</span>
              </div>
              {/* Terminal content */}
              <div className="bg-charcoal px-6 py-6 font-mono text-sm leading-relaxed">
                <p className="text-gray-400">
                  <span className="text-green-400">$</span> npx @spekn/check
                </p>
                <p className="mt-4 text-gray-500">Scanning repository...</p>
                <div className="mt-4 rounded-lg border border-gray-700 px-4 py-3">
                  <p className="text-lg font-bold text-white">
                    Governance Health Score: <span className="text-yellow-400">42/100</span>{" "}
                    <span className="text-yellow-400">(D)</span>
                  </p>
                </div>
                <div className="mt-4 space-y-1 text-xs">
                  <p><span className="text-red-400">&#10005;</span> <span className="text-gray-300">Agent Context Depth</span> <span className="text-gray-600">...........</span> <span className="text-red-400">12/40</span></p>
                  <p><span className="text-yellow-400">&#9679;</span> <span className="text-gray-300">Spec Traceability</span> <span className="text-gray-600">.............</span> <span className="text-yellow-400">14/22</span></p>
                  <p><span className="text-green-400">&#10003;</span> <span className="text-gray-300">Governance Structure</span> <span className="text-gray-600">..........</span> <span className="text-green-400">16/18</span></p>
                  <p><span className="text-red-400">&#10005;</span> <span className="text-gray-300">Decision Governance</span> <span className="text-gray-600">...........</span> <span className="text-red-400">0/12</span></p>
                  <p><span className="text-yellow-400">&#9679;</span> <span className="text-gray-300">Terminology Consistency</span> <span className="text-gray-600">.......</span> <span className="text-yellow-400">0/8</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Check highlights */}
          <div className="section-reveal mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-5 dark:border-gray-800 dark:bg-charcoal/50">
              <Bot size={20} className="text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">Agent Context Depth</h4>
              <p className="mt-1 font-body text-xs leading-relaxed text-slate dark:text-gray-400">
                Are your CLAUDE.md, AGENTS.md, and specs structured for AI consumption?
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-5 dark:border-gray-800 dark:bg-charcoal/50">
              <Search size={20} className="text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">Spec Traceability</h4>
              <p className="mt-1 font-body text-xs leading-relaxed text-slate dark:text-gray-400">
                Do your specs exist, are they referenced in code, and can agents find them?
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-5 dark:border-gray-800 dark:bg-charcoal/50">
              <ShieldCheck size={20} className="text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">Governance Structure</h4>
              <p className="mt-1 font-body text-xs leading-relaxed text-slate dark:text-gray-400">
                CONTRIBUTING.md, changelogs, decision records — the governance essentials.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-5 dark:border-gray-800 dark:bg-charcoal/50">
              <GitBranch size={20} className="text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">Decision Governance</h4>
              <p className="mt-1 font-body text-xs leading-relaxed text-slate dark:text-gray-400">
                Are architectural decisions documented via ADRs, not buried in TODO comments?
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-5 dark:border-gray-800 dark:bg-charcoal/50">
              <BookOpen size={20} className="text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">Terminology Consistency</h4>
              <p className="mt-1 font-body text-xs leading-relaxed text-slate dark:text-gray-400">
                Is your product named 3 different ways across the repo? We&apos;ll find out.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-xl border border-dashed border-indigo/30 bg-indigo/5 p-5 text-center dark:bg-indigo/10">
              <div>
                <p className="font-brand text-sm font-bold text-indigo">Zero friction</p>
                <p className="mt-1 font-body text-xs text-slate dark:text-gray-400">
                  No signup. No GitHub permissions. Runs locally in &lt;10 seconds.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="section-reveal mt-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-xl bg-charcoal px-6 py-4 font-mono text-sm text-white dark:bg-gray-900">
              <span className="text-green-400">$</span>
              <span>npx @spekn/check</span>
              <button
                onClick={() => navigator.clipboard.writeText("npx @spekn/check")}
                className="ml-2 rounded-md bg-white/10 px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-white/20 hover:text-white"
              >
                Copy
              </button>
            </div>
            <p className="mt-4 font-body text-sm text-slate dark:text-gray-400">
              Works on any repository. Output as terminal, JSON, or Markdown.
            </p>
            <p className="mt-2 font-body text-xs text-slate/60 dark:text-gray-500">
              No data is extracted or sent to Spekn — everything runs locally.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold text-white md:text-4xl">
              Ready to govern your AI development?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-gray-400">
              Join the waitlist for early access to Spekn — the context and governance layer your team needs.
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
