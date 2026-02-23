import { useEffect, useRef } from "react";
import {
  FileText, Play, Database, Layers, Shield, GitBranch,
  ArrowRight, RefreshCw, Eye, Workflow,
} from "lucide-react";
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

export function Features() {
  const containerRef = useSectionReveal();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-brand text-4xl font-extrabold text-white md:text-6xl">
            The complete <span className="gradient-text">governance layer</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-gray-400">
            The context backbone that flows through your entire agent pipeline. Feed governed context, run traceable agents, capture organizational knowledge.
          </p>
        </div>
      </section>

      {/* Feed Detail */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
                <FileText size={28} />
              </div>
              <h2 className="font-brand text-3xl font-extrabold">Feed</h2>
              <p className="mt-4 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
                Deliver dynamic, governed context assembled from four layers — Constraints, Requirements, Technical context, and Guidance. Each agent receives exactly the depth it needs, assembled fresh every session.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "4-layer context architecture (Constraints → Requirements → Technical → Guidance)",
                  "Format-agnostic: import from CLAUDE.md, .cursorrules, Spec Kit, OpenSpec, AGENTS.md",
                  "Local agent files become generated exports from the governed platform",
                  "Context is a product artifact — versioned, maintained, evolved alongside code",
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
                <p className="text-indigo">// spec: auth-flow.md</p>
                <p className="text-slate">Layer 1: <span className="text-indigo-light">Constraints</span> — what NOT to do (governance rules, security policies, invariants)</p>
                <p className="text-slate">Layer 2: <span className="text-indigo-light">Requirements</span> — what to build, with acceptance criteria and spec anchors</p>
                <p className="text-slate">Layer 3: <span className="text-indigo-light">Technical</span> — architecture, patterns, dependencies, past decisions</p>
                <p className="text-slate">Layer 4: <span className="text-indigo-light">Guidance</span> — examples, anti-patterns, lessons from previous runs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Run Detail */}
      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal grid items-center gap-16 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="rounded-2xl border border-gray-200 bg-ghost p-6 dark:border-gray-800 dark:bg-charcoal">
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-indigo/20 px-2 py-0.5 text-xs text-indigo">EM</span>
                    <span className="text-gray-600 dark:text-gray-400">Decomposing spec into 4 tasks...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-green-500/20 px-2 py-0.5 text-xs text-green-500">T-042</span>
                    <span className="text-gray-600 dark:text-gray-400">Claude → implement-oauth ✓</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-green-500/20 px-2 py-0.5 text-xs text-green-500">T-043</span>
                    <span className="text-gray-600 dark:text-gray-400">Codex → api-endpoints ✓</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-yellow-500/20 px-2 py-0.5 text-xs text-yellow-500">T-044</span>
                    <span className="text-gray-600 dark:text-gray-400">Cursor → ui-components ⏳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
                <Play size={28} />
              </div>
              <h2 className="font-brand text-3xl font-extrabold">Run</h2>
              <p className="mt-4 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
                The Spekn Bridge and MCP server connect agents to Spekn's governance layer in real time. Connect your local agent instance or use BYOK/local LLM. The EM enforces phase gates — agents execute as stateless workers.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Two connection modes: local agent or BYOK/local LLM",
                  "6-phase workflow: Specify → Clarify → Plan → Implement → Verify → Complete",
                  "Spekn never charges for AI compute — your keys, your models",
                  "Pipeline-wide: same governed context from local session to CI to deploy gate",
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

      {/* Capture Detail */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
                <Database size={28} />
              </div>
              <h2 className="font-brand text-3xl font-extrabold">Capture</h2>
              <p className="mt-4 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
                After every run, Spekn captures decisions, code produced, deviations from spec, and verification results. The spec graph compounds with every run — the longer you use Spekn, the smarter every agent session gets.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Decision records with rejected alternatives",
                  "Per-criterion verification evidence",
                  "Spec graph with versioning and drift detection",
                  "Vector memory for semantic search across all context",
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
                <p className="text-indigo">// Decision Record</p>
                <p>decision: "JWT over session tokens"</p>
                <p>reason: "Microservice architecture requires stateless auth"</p>
                <p>rejected: ["session-tokens", "API-keys-only"]</p>
                <p>spec_anchor: "auth.token-strategy"</p>
                <p>version: "2.1.0"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDD Methodology */}
      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              The New Scrum: <span className="gradient-text">Spec-Driven Development</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate dark:text-gray-400">
              SDD replaces ceremony-heavy processes with spec-first, evidence-backed delivery.
            </p>
          </div>
          <div className="section-reveal mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard icon={<Layers size={24} />} title="Layered Context" description="Four layers ensure every agent gets the right depth — from governance constraints to implementation details." />
            <FeatureCard icon={<Shield size={24} />} title="Mechanical Enforcement" description="Architectural invariants are enforced by the system, not by code review. At agent-scale throughput, human review can't keep up." />
            <FeatureCard icon={<GitBranch size={24} />} title="Drift Detection" description="When specs change, the system identifies affected tasks and outdated context — preventing stale decisions from propagating." />
            <FeatureCard icon={<RefreshCw size={24} />} title="Agent-Agnostic" description="Works with any agent via the Spekn Bridge and MCP server. Claude Code, Codex, Cursor, Gemini, Antigravity — use whatever fits. Spekn governs them all." />
            <FeatureCard icon={<Eye size={24} />} title="Full Traceability" description="Every line of code traces back to a spec anchor. Every decision records what was rejected and why. Complete audit trail." />
            <FeatureCard icon={<Workflow size={24} />} title="Format Agnostic" description="Import from Spec Kit, OpenSpec, AGENTS.md, BMAD, or plain Markdown. Spekn is the governance layer above any format." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold text-white md:text-4xl">
              Start building with governance
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-gray-400">
              Join early access and be among the first to govern your AI development workflow.
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
