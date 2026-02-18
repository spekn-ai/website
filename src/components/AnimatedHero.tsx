import { useEffect, useState } from "react";
import { WaitlistForm } from "./WaitlistForm";
import { cn } from "@/lib/utils";

const terminalLines = [
  { prefix: "$ spekn", text: " feed --spec auth-flow.md --layers governance,requirements", delay: 0 },
  { prefix: "\u2713", text: " Context layered: 4 anchors, 12 acceptance criteria", delay: 1200 },
  { prefix: "$ spekn", text: " run --agent claude --task implement-oauth", delay: 2400 },
  { prefix: "\u2713", text: " Task completed: 3 files changed, all criteria met", delay: 3600 },
  { prefix: "$ spekn", text: " capture --decisions --verification", delay: 4800 },
  { prefix: "\u2713", text: " 2 decisions recorded, 12/12 criteria verified", delay: 6000 },
];

export function AnimatedHero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay + 800),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal">
      <div className="hero-mesh absolute inset-0" />
      <div className="s-watermark absolute -right-20 -top-40 text-white">S</div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-32">
        <div className="max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo/30 bg-indigo/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-indigo animate-glow-pulse" />
            <span className="font-body text-xs font-medium text-indigo-light">
              Now in Early Access
            </span>
          </div>

          <h1 className="font-brand text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
            Where product intent is{" "}
            <span className="gradient-text">spoken</span>
            , not assumed
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-gray-400 md:text-xl">
            Spekn is the context and governance layer for AI-first development.
            Feed structured specs. Run governed agents. Capture organizational knowledge.
          </p>

          <div className="mt-10 flex justify-center">
            <WaitlistForm />
          </div>
        </div>

        {/* Terminal preview */}
        <div className="mt-16 w-full max-w-2xl">
          <div className="overflow-hidden rounded-xl border border-gray-800 bg-charcoal-light shadow-2xl shadow-indigo/10">
            <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <span className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-3 font-mono text-xs text-gray-500">terminal</span>
            </div>
            <div className="p-5 font-mono text-sm leading-7">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className={cn(
                    "transition-opacity duration-300",
                    line.prefix === "\u2713" ? "text-green-400" : "text-gray-300",
                  )}
                >
                  <span className={line.prefix === "\u2713" ? "text-green-400" : "text-indigo"}>
                    {line.prefix}
                  </span>
                  {line.text}
                </div>
              ))}
              {visibleLines < terminalLines.length && (
                <span className="inline-block h-4 w-2 animate-pulse bg-indigo" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
