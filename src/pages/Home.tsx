import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FileText, Play, Database, Terminal, ShieldCheck, BookOpen, Bot, GitBranch, Search, ArrowRight } from "lucide-react";
import { AnimatedHero } from "@/components/AnimatedHero";
import { Seo } from "@/components/Seo";
import { toAbsoluteUrl } from "@/lib/seo";

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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Spekn",
      url: toAbsoluteUrl("/"),
      logo: toAbsoluteUrl("/logo.svg"),
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Spekn",
      url: toAbsoluteUrl("/"),
    },
  ];

  return (
    <div ref={containerRef}>
      <Seo
        title="Spekn — AI Coding Sessions Reset. Decisions Shouldn't."
        description="Stop repeating constraints to AI every session. Spekn keeps specs and decisions persistent so old assumptions are not reintroduced across local sessions, CI, and PR."
        path="/"
        jsonLd={jsonLd}
      />
      <AnimatedHero />

      <section className="relative overflow-hidden bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">AI Agents Are Fast. Alignment Is Not.</h2>
            <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-slate dark:text-gray-400">
              Local sessions reset. CI runs start from partial context. PR validators enforce rules without full decision
              history. Teams repeat instructions and recover intent from artifacts instead of verifying outcomes.
            </p>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-slate dark:text-gray-400">
              The problem is context drift and assumption reintroduction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">One Source of Truth for Every Agent</h2>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-slate dark:text-gray-400">
              Spekn turns specs into persistent intent. Decisions don&apos;t reset across sessions because each run is tied to
              spec anchors, decision records, and verification evidence.
            </p>
            <ul className="mx-auto mt-8 grid max-w-3xl gap-3 text-left">
              {[
                "Versioned specs with stable spec anchors",
                "Persistent decision records across runs",
                "Traceable runs from local sessions + CI + PR validators",
                "Verification evidence tied to acceptance criteria",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-base text-slate dark:text-gray-400">
                  <ArrowRight size={14} className="mt-1 shrink-0 text-indigo" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              Feed. Run. <span className="gradient-text">Capture.</span>
            </h2>
          </div>
          <div className="section-reveal mt-16 grid gap-6 md:grid-cols-3">
            <div className="glass-card relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                <FileText size={24} />
              </div>
              <h3 className="font-brand text-xl font-bold">Feed</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Stop restating constraints. Inject the same structured context every run.
              </p>
            </div>

            <div className="glass-card relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                <Play size={24} />
              </div>
              <h3 className="font-brand text-xl font-bold">Run</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Execute tasks against spec anchors so decisions don&apos;t get overwritten.
              </p>
            </div>

            <div className="glass-card relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                <Database size={24} />
              </div>
              <h3 className="font-brand text-xl font-bold">Capture</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Persist decisions and evidence so the next session starts informed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-reveal text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
              <Terminal size={28} />
            </div>
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              How healthy is your <span className="gradient-text">context</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate dark:text-gray-400">
              One command. No signup. Instant context health check and drift detection.
            </p>
          </div>

          <div className="section-reveal mx-auto mt-12 max-w-2xl">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl dark:border-gray-800">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 dark:bg-charcoal">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-2 font-mono text-xs text-slate/60 dark:text-gray-500">terminal</span>
              </div>
              <div className="bg-charcoal px-6 py-6 font-mono text-sm leading-relaxed">
                <p className="text-gray-400">
                  <span className="text-green-400">$</span> npx @spekn/check
                </p>
                <p className="mt-4 text-gray-500">Scanning repository...</p>
                <div className="mt-4 rounded-lg border border-gray-700 px-4 py-3">
                  <p className="text-lg font-bold text-white">
                    Context Health Score: <span className="text-yellow-400">42/100</span>{" "}
                    <span className="text-yellow-400">(D)</span>
                  </p>
                </div>
                <div className="mt-4 space-y-1 text-xs">
                  <p><span className="text-red-400">&#10005;</span> <span className="text-gray-300">Assumption Reintroduction</span> <span className="text-gray-600">.......</span> <span className="text-red-400">3 recurring assumptions</span></p>
                  <p><span className="text-yellow-400">&#9679;</span> <span className="text-gray-300">Spec Anchor Validity</span> <span className="text-gray-600">............</span> <span className="text-yellow-400">14/22 valid</span></p>
                  <p><span className="text-green-400">&#10003;</span> <span className="text-gray-300">Decision Records</span> <span className="text-gray-600">................</span> <span className="text-green-400">16/18 linked</span></p>
                  <p><span className="text-red-400">&#10005;</span> <span className="text-gray-300">Spec-Instruction-Code Drift</span> <span className="text-gray-600">....</span> <span className="text-red-400">0/12 guarded</span></p>
                  <p><span className="text-yellow-400">&#9679;</span> <span className="text-gray-300">Terminology Consistency</span> <span className="text-gray-600">.......</span> <span className="text-yellow-400">0/8</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-reveal mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-5 dark:border-gray-800 dark:bg-charcoal/50">
              <Bot size={20} className="text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">Agent Context Depth</h4>
              <p className="mt-1 font-body text-xs leading-relaxed text-slate dark:text-gray-400">
                Are your CLAUDE.md, AGENTS.md, and versioned specs structured as persistent intent?
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-5 dark:border-gray-800 dark:bg-charcoal/50">
              <Search size={20} className="text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">Spec Traceability</h4>
              <p className="mt-1 font-body text-xs leading-relaxed text-slate dark:text-gray-400">
                Are spec anchors valid, referenced in code, and visible to local sessions + CI + PR validators?
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-5 dark:border-gray-800 dark:bg-charcoal/50">
              <ShieldCheck size={20} className="text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">Decision Records</h4>
              <p className="mt-1 font-body text-xs leading-relaxed text-slate dark:text-gray-400">
                Are decision records explicit, versioned, and linked to spec anchors?
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-5 dark:border-gray-800 dark:bg-charcoal/50">
              <GitBranch size={20} className="text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">Drift Detection</h4>
              <p className="mt-1 font-body text-xs leading-relaxed text-slate dark:text-gray-400">
                Does your repo catch drift between specs, instructions, and code before merge?
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

      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">Start Solo. Scale With Confidence.</h2>
          </div>
          <div className="section-reveal mt-16 grid gap-6 md:grid-cols-3">
            <div className="glass-card">
              <h3 className="font-brand text-xl font-bold">Personal Clarity</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Solo continuity. Fewer repeated instructions. Decisions persist from one session to the next.
              </p>
            </div>
            <div className="glass-card">
              <h3 className="font-brand text-xl font-bold">Team Coherence</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Shared spec graph + CI/PR continuity. Fewer overwritten decisions across contributors.
              </p>
            </div>
            <div className="glass-card">
              <h3 className="font-brand text-xl font-bold">Organizational Governance</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Governance at scale: audit exports, multi-repo controls, and traceable runs with verification evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold text-white md:text-4xl">
              Sessions Reset. Decisions Don&apos;t Have To.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-gray-400">
              Keep persistent intent across local sessions, CI, and PR validators.
            </p>
            <div className="mt-10 flex justify-center">
              <Link to="/pricing" className="glow-button inline-flex items-center justify-center">
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
