import { useEffect, useRef } from "react";
import {
  Terminal, Bot, Search, ShieldCheck, GitBranch, BookOpen,
  Check, Clock, Lock, FileJson, FileText as FileMarkdown,
} from "lucide-react";
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

const checks = [
  {
    icon: Bot,
    title: "Agent Context Depth",
    description: "Are your CLAUDE.md, AGENTS.md, and specs structured for AI consumption?",
  },
  {
    icon: Search,
    title: "Spec Traceability",
    description: "Do your specs exist, are they referenced in code, and can agents find them?",
  },
  {
    icon: ShieldCheck,
    title: "Governance Structure",
    description: "CONTRIBUTING.md, changelogs, decision records — the governance essentials.",
  },
  {
    icon: GitBranch,
    title: "Decision Governance",
    description: "Are architectural decisions documented via ADRs, not buried in TODO comments?",
  },
  {
    icon: BookOpen,
    title: "Terminology Consistency",
    description: "Is your product named 3 different ways across the repo? We'll find out.",
  },
];

export function RepoChecker() {
  const containerRef = useSectionReveal();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
            <Terminal size={28} />
          </div>
          <h1 className="font-brand text-4xl font-extrabold text-white md:text-6xl">
            How governed is <span className="gradient-text">your repo</span>?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-gray-400">
            One command. No signup. No data sent. Instant governance health score.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white/5 px-6 py-4 font-mono text-sm text-white">
            <span className="text-green-400">$</span>
            <span>npx @spekn/check</span>
            <button
              onClick={() => navigator.clipboard.writeText("npx @spekn/check")}
              className="ml-2 rounded-md bg-white/10 px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-white/20 hover:text-white"
            >
              Copy
            </button>
          </div>
        </div>
      </section>

      {/* Terminal demo */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-reveal mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl dark:border-gray-800">
              {/* Title bar */}
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 dark:bg-charcoal-light">
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
        </div>
      </section>

      {/* What it checks */}
      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              What it checks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate dark:text-gray-400">
              Five governance dimensions, scored individually and aggregated into your overall health score.
            </p>
          </div>
          <div className="section-reveal mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {checks.map((check) => (
              <div
                key={check.title}
                className="rounded-xl border border-gray-100 bg-ghost/50 p-6 dark:border-gray-800 dark:bg-charcoal/50"
              >
                <check.icon size={20} className="text-indigo" />
                <h4 className="mt-3 font-brand text-sm font-bold">{check.title}</h4>
                <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                  {check.description}
                </p>
              </div>
            ))}
            <div className="flex items-center justify-center rounded-xl border border-dashed border-indigo/30 bg-indigo/5 p-6 text-center dark:bg-indigo/10">
              <div>
                <p className="font-brand text-sm font-bold text-indigo">More checks coming</p>
                <p className="mt-2 font-body text-sm text-slate dark:text-gray-400">
                  CI/CD governance, secret management, and dependency audits are on the roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              How it works
            </h2>
          </div>
          <div className="section-reveal mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
                <Terminal size={24} />
              </div>
              <h4 className="mt-4 font-brand text-base font-bold">1. Run the command</h4>
              <p className="mt-2 font-body text-sm text-slate dark:text-gray-400">
                Run <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs dark:bg-charcoal-light">npx @spekn/check</code> in any repository. No install required.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
                <Search size={24} />
              </div>
              <h4 className="mt-4 font-brand text-base font-bold">2. Local analysis</h4>
              <p className="mt-2 font-body text-sm text-slate dark:text-gray-400">
                The checker scans your file structure, specs, and docs locally. Nothing leaves your machine.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
                <Check size={24} />
              </div>
              <h4 className="mt-4 font-brand text-base font-bold">3. Get your score</h4>
              <p className="mt-2 font-body text-sm text-slate dark:text-gray-400">
                Receive a detailed breakdown with actionable recommendations to improve your governance posture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Output formats */}
      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              Output formats
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate dark:text-gray-400">
              Integrate the results wherever you need them.
            </p>
          </div>
          <div className="section-reveal mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-6 text-center dark:border-gray-800 dark:bg-charcoal/50">
              <Terminal size={24} className="mx-auto text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">Terminal</h4>
              <p className="mt-1 font-body text-xs text-slate dark:text-gray-400">
                Color-coded output, perfect for local development.
              </p>
              <code className="mt-3 inline-block rounded bg-gray-100 px-2 py-1 text-xs dark:bg-charcoal">npx @spekn/check</code>
            </div>
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-6 text-center dark:border-gray-800 dark:bg-charcoal/50">
              <FileJson size={24} className="mx-auto text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">JSON</h4>
              <p className="mt-1 font-body text-xs text-slate dark:text-gray-400">
                Machine-readable for CI/CD pipelines and dashboards.
              </p>
              <code className="mt-3 inline-block rounded bg-gray-100 px-2 py-1 text-xs dark:bg-charcoal">npx @spekn/check --json</code>
            </div>
            <div className="rounded-xl border border-gray-100 bg-ghost/50 p-6 text-center dark:border-gray-800 dark:bg-charcoal/50">
              <FileMarkdown size={24} className="mx-auto text-indigo" />
              <h4 className="mt-3 font-brand text-sm font-bold">Markdown</h4>
              <p className="mt-1 font-body text-xs text-slate dark:text-gray-400">
                Drop into PRs, READMEs, or documentation.
              </p>
              <code className="mt-3 inline-block rounded bg-gray-100 px-2 py-1 text-xs dark:bg-charcoal">npx @spekn/check --md</code>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & trust */}
      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-3xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">
              Privacy first
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate dark:text-gray-400">
              Your code stays yours. Always.
            </p>
          </div>
          <div className="section-reveal mt-12 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-charcoal-light">
              <Lock size={20} className="mt-0.5 shrink-0 text-indigo" />
              <div>
                <h4 className="font-brand text-sm font-bold">100% local execution</h4>
                <p className="mt-1 font-body text-sm text-slate dark:text-gray-400">
                  No data is extracted or sent to Spekn. The checker runs entirely on your machine.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-charcoal-light">
              <ShieldCheck size={20} className="mt-0.5 shrink-0 text-indigo" />
              <div>
                <h4 className="font-brand text-sm font-bold">No signup required</h4>
                <p className="mt-1 font-body text-sm text-slate dark:text-gray-400">
                  No account, no API key, no GitHub permissions. Just run the command.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-charcoal-light">
              <Clock size={20} className="mt-0.5 shrink-0 text-indigo" />
              <div>
                <h4 className="font-brand text-sm font-bold">Fast</h4>
                <p className="mt-1 font-body text-sm text-slate dark:text-gray-400">
                  Completes in under 10 seconds on most repositories.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-charcoal-light">
              <GitBranch size={20} className="mt-0.5 shrink-0 text-indigo" />
              <div>
                <h4 className="font-brand text-sm font-bold">Free forever</h4>
                <p className="mt-1 font-body text-sm text-slate dark:text-gray-400">
                  The repo checker is and will always be free. No paywalls, no limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold text-white">
              Try it now
            </h2>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white/5 px-6 py-4 font-mono text-sm text-white">
              <span className="text-green-400">$</span>
              <span>npx @spekn/check</span>
              <button
                onClick={() => navigator.clipboard.writeText("npx @spekn/check")}
                className="ml-2 rounded-md bg-white/10 px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-white/20 hover:text-white"
              >
                Copy
              </button>
            </div>
            <p className="mx-auto mt-6 max-w-xl font-body text-lg text-gray-400">
              Want the full governance platform? Join the waitlist.
            </p>
            <div className="mt-8 flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
