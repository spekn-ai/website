import { useEffect, useRef } from "react";
import {
  FileText, Play, Database, Layers, Shield, GitBranch,
  ArrowRight, RefreshCw, Eye, Workflow,
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
        description="Explore how Spekn helps teams write and manage specs, generate AI-ready context, and keep coding agents aligned across local development, CI, and pull requests."
        path="/features"
      />
      {/* Hero */}
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-brand text-4xl font-extrabold text-white md:text-6xl">
            Write specs once. Keep every agent aligned.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-gray-400">
            Spekn helps teams manage specs, generate AI-ready context, and keep coding work aligned across local development, CI, and pull requests.
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
                Stop restating constraints. Inject the same structured context every run.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "4-layer context architecture (Constraints → Requirements → Technical → Guidance)",
                  "Format-agnostic: import from CLAUDE.md, .cursorrules, Spec Kit, OpenSpec, AGENTS.md",
                  "Local instruction files become generated exports from versioned specs",
                  "Persistent intent is maintained as a product artifact alongside code",
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
                <p className="text-slate">Layer 1: <span className="text-indigo-light">Constraints</span> — what not to do (safety rules, security policies, invariants)</p>
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
                Execute tasks against spec anchors so decisions don&apos;t get overwritten.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Two connection modes: local agent or BYOK/local LLM",
                  "6-phase workflow: Specify → Clarify → Plan → Implement → Verify → Complete",
                  "Spekn never charges for AI compute — your keys, your models",
                  "Pipeline-wide: same structured context across local sessions + CI + PR validators",
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
                Persist decisions and evidence so the next session starts informed.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Decision records with rejected alternatives",
                  "Per-criterion verification evidence linked to spec anchors",
                  "Spec graph with versioned specs and drift detection",
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
            <FeatureCard icon={<Layers size={24} />} title="Layered Context" description="Four layers ensure the right depth per run, from hard constraints to implementation details." />
            <FeatureCard icon={<Shield size={24} />} title="Mechanical Enforcement" description="Architectural invariants are enforced by the system, not memory. This reduces regressions and overwritten decisions." />
            <FeatureCard icon={<GitBranch size={24} />} title="Drift Detection" description="When specs change, impacted tasks and stale assumptions are flagged before they reappear in later runs." />
            <FeatureCard icon={<RefreshCw size={24} />} title="Agent-Agnostic" description="Works with any agent via Spekn Bridge + MCP server while preserving the same structured context bundle per run." />
            <FeatureCard icon={<Eye size={24} />} title="Full Traceability" description="Every code path maps to spec anchors. Every decision record links rationale, rejected options, and verification evidence." />
            <FeatureCard icon={<Workflow size={24} />} title="Format Agnostic" description="Import Spec Kit, OpenSpec, AGENTS.md, BMAD, or plain Markdown into one context continuity layer." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              Pricing that scales with your pipeline
            </h2>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-slate dark:text-gray-400">
              No AI credits and no compute markup. You pay for infrastructure that prevents context drift and decision overwrite across the pipeline.
            </p>
          </div>

          <div className="section-reveal mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-charcoal-light">
              <h3 className="font-brand text-2xl font-extrabold">Free</h3>
              <p className="mt-2 font-body text-sm text-slate dark:text-gray-400">For individual evaluation and early workflows.</p>
              <p className="mt-6 font-brand text-3xl font-extrabold">$0</p>
              <p className="mt-1 font-body text-sm text-slate dark:text-gray-400">per user / month</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Core FEED / RUN / CAPTURE flow",
                  "4-layer context architecture",
                  "Runs on your own keys and models",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-slate dark:text-gray-400">
                    <ArrowRight size={14} className="mt-1 shrink-0 text-indigo" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-charcoal-light">
              <h3 className="font-brand text-2xl font-extrabold">Pro</h3>
              <p className="mt-2 font-body text-sm text-slate dark:text-gray-400">For engineers running production agent workflows.</p>
              <p className="mt-6 font-brand text-3xl font-extrabold">$49</p>
              <p className="mt-1 font-body text-sm text-slate dark:text-gray-400">per user / month</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Everything in Free",
                  "Bridge + MCP connectivity",
                  "Drift detection and verification evidence",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-slate dark:text-gray-400">
                    <ArrowRight size={14} className="mt-1 shrink-0 text-indigo" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-indigo bg-white p-6 dark:border-indigo dark:bg-charcoal-light">
              <h3 className="font-brand text-2xl font-extrabold">Team</h3>
              <p className="mt-2 font-body text-sm text-slate dark:text-gray-400">For teams standardizing one coherent delivery pipeline.</p>
              <p className="mt-6 font-brand text-3xl font-extrabold">$99</p>
              <p className="mt-1 font-body text-sm text-slate dark:text-gray-400">per user / month</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Everything in Pro",
                  "Shared spec graph and decision records",
                  "Pipeline-level controls and auditability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-slate dark:text-gray-400">
                    <ArrowRight size={14} className="mt-1 shrink-0 text-indigo" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-charcoal-light">
              <h3 className="font-brand text-2xl font-extrabold">Enterprise</h3>
              <p className="mt-2 font-body text-sm text-slate dark:text-gray-400">For regulated environments and large-scale rollouts.</p>
              <p className="mt-6 font-brand text-3xl font-extrabold">Custom</p>
              <p className="mt-1 font-body text-sm text-slate dark:text-gray-400">pricing and deployment</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Everything in Team",
                  "Deployment and policy requirements support",
                  "Commercial and security review process",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-slate dark:text-gray-400">
                    <ArrowRight size={14} className="mt-1 shrink-0 text-indigo" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section-reveal mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#waitlist-cta" className="glow-button inline-flex items-center gap-2 !px-6 !py-3 text-sm">
              Join Waitlist <ArrowRight size={16} />
            </a>
            <a href="#waitlist-cta" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-body text-sm text-slate transition-all hover:border-indigo hover:text-indigo dark:border-gray-700 dark:bg-charcoal-light dark:text-gray-300">
              Talk to Sales <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist-cta" className="bg-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold text-white md:text-4xl">
              Keep decisions stable from spec to ship
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-gray-400">
              Join early access to reduce repeated instructions, assumption reintroduction, and overwritten decisions.
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
