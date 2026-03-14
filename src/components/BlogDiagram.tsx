import { ArrowRight, ArrowDown, RotateCcw } from "lucide-react";

interface DiagramProps {
  type: string;
}

/* ─── Shared wrapper: light bg with subtle border in light mode, charcoal in dark ─── */
const diagramWrap =
  "my-10 rounded-xl border border-stone-200 bg-white p-8 shadow-sm dark:border-charcoal-lighter dark:bg-charcoal-light";

const diagramTitle =
  "mb-6 text-center font-brand text-xs font-semibold uppercase tracking-[0.16em] text-indigo";

const diagramCaption =
  "mt-5 text-center font-body text-xs text-slate dark:text-stone-400";

const stepBox =
  "flex flex-col items-center gap-1 rounded-lg border border-indigo/30 bg-indigo/5 px-5 py-3 text-center dark:border-indigo/40 dark:bg-indigo/10";

const stepLabel =
  "font-brand text-sm font-bold text-charcoal dark:text-white";

const stepSub =
  "font-body text-xs text-slate dark:text-stone-400";

const arrowColor = "shrink-0 text-indigo";

function VibeCodingLoop() {
  const steps = [
    { label: "Idea", sublabel: "What you want" },
    { label: "Prompt", sublabel: "Tell the AI" },
    { label: "Code", sublabel: "AI generates" },
    { label: "Adjust", sublabel: "Review & tweak" },
  ];

  return (
    <div className={diagramWrap}>
      <p className={diagramTitle}>The Vibe Coding Loop</p>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3 md:gap-4">
            <div className={stepBox}>
              <span className={stepLabel}>{step.label}</span>
              <span className={stepSub}>{step.sublabel}</span>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight size={16} className={arrowColor} />
            )}
          </div>
        ))}
        <div className="flex items-center gap-3 md:gap-4">
          <RotateCcw size={16} className={arrowColor} />
          <span className="font-body text-xs font-medium italic text-indigo">repeat</span>
        </div>
      </div>
      <p className={diagramCaption}>
        Fast iterations, but decisions stay implicit and volatile
      </p>
    </div>
  );
}

function ContextScalingProblem() {
  const stages = [
    { label: "Session 1", tokens: "4K", totalH: 32, relevantH: 28, relevance: 90, files: 2, latency: "~2s" },
    { label: "Session 10", tokens: "18K", totalH: 64, relevantH: 38, relevance: 60, files: 8, latency: "~6s" },
    { label: "Session 25", tokens: "52K", totalH: 112, relevantH: 34, relevance: 30, files: 19, latency: "~14s" },
    { label: "Session 50+", tokens: "120K+", totalH: 160, relevantH: 24, relevance: 12, files: 35, latency: "~30s+" },
  ];

  return (
    <div className={diagramWrap}>
      <p className={diagramTitle}>The Context Scaling Problem</p>

      {/* Stacked bar chart */}
      <div className="flex items-end justify-center gap-4 md:gap-8">
        {stages.map((stage, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5" style={{ width: "5.5rem" }}>
            {/* Token count above bar */}
            <span className="font-mono text-[11px] font-semibold text-charcoal dark:text-stone-200">
              {stage.tokens}
            </span>
            {/* Stacked bar: relevant (indigo) + noise (gray) */}
            <div
              className="relative flex w-12 flex-col justify-end overflow-hidden rounded-md border border-stone-200 dark:border-charcoal-lighter"
              style={{ height: `${stage.totalH}px` }}
            >
              {/* Noise portion (top) */}
              <div
                className="w-full bg-stone-200/80 dark:bg-charcoal-lighter/60"
                style={{ height: `${stage.totalH - stage.relevantH}px` }}
              />
              {/* Relevant portion (bottom) */}
              <div
                className="w-full bg-indigo/25 dark:bg-indigo/30"
                style={{ height: `${stage.relevantH}px` }}
              />
            </div>
            {/* Relevance % */}
            <span className={`font-mono text-[11px] font-bold ${
              stage.relevance >= 60
                ? "text-emerald-600 dark:text-emerald-400"
                : stage.relevance >= 30
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-rose-600 dark:text-rose-400"
            }`}>
              {stage.relevance}% relevant
            </span>
            {/* Session label */}
            <span className="font-body text-[11px] font-medium text-charcoal dark:text-stone-300">
              {stage.label}
            </span>
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div className="mx-auto mt-6 grid max-w-lg grid-cols-3 gap-3">
        {[
          { label: "Context files", values: "2 → 35+", icon: "Files grow" },
          { label: "Relevant signal", values: "90% → 12%", icon: "Signal drops" },
          { label: "Agent load time", values: "~2s → 30s+", icon: "Latency climbs" },
        ].map((stat, i) => (
          <div key={i} className="rounded-md border border-stone-200 bg-stone-50/50 px-3 py-2 text-center dark:border-charcoal-lighter dark:bg-charcoal">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate dark:text-stone-400">
              {stat.label}
            </p>
            <p className="mt-0.5 font-mono text-sm font-bold text-charcoal dark:text-stone-200">
              {stat.values}
            </p>
            <p className="font-body text-[10px] text-rose-600/80 dark:text-rose-400/80">{stat.icon}</p>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-sm bg-indigo/25 dark:bg-indigo/30" />
          <span className="font-body text-[10px] text-slate dark:text-stone-400">Relevant context</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-sm bg-stone-200/80 dark:bg-charcoal-lighter/60" />
          <span className="font-body text-[10px] text-slate dark:text-stone-400">Noise / redundancy</span>
        </div>
      </div>

      <p className={diagramCaption}>
        As projects grow, agents spend more tokens processing irrelevant context while the signal-to-noise ratio collapses.
      </p>
    </div>
  );
}

function SDDWorkflow() {
  const steps = [
    { label: "Specification", sublabel: "Define intent" },
    { label: "Design", sublabel: "Architecture" },
    { label: "Implementation", sublabel: "Agent executes" },
    { label: "Validation", sublabel: "Verify & trace" },
  ];

  return (
    <div className={diagramWrap}>
      <p className={diagramTitle}>Spec-Driven Workflow</p>
      <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
            <div className={stepBox}>
              <span className={stepLabel}>{step.label}</span>
              <span className={stepSub}>{step.sublabel}</span>
            </div>
            {i < steps.length - 1 && (
              <>
                <ArrowRight size={16} className={`hidden md:block ${arrowColor}`} />
                <ArrowDown size={16} className={`md:hidden ${arrowColor}`} />
              </>
            )}
          </div>
        ))}
      </div>
      <p className={diagramCaption}>
        Intent is explicit. Decisions are traceable. But specs can go stale.
      </p>
    </div>
  );
}

function AIEngineeringStack() {
  const layers = [
    { label: "Organizational Governance", detail: "Policies, compliance, team rules", highlight: true },
    { label: "Context & Specification Systems", detail: "Dynamic context delivery, specs", highlight: true },
    { label: "Agent Orchestration", detail: "Multi-agent coordination" },
    { label: "Agent Runtimes", detail: "Task execution, tool use" },
    { label: "Foundation Models", detail: "LLMs, code generation" },
  ];

  return (
    <div className={diagramWrap}>
      <p className={diagramTitle}>The Emerging AI Engineering Stack</p>
      <div className="mx-auto flex max-w-md flex-col gap-2">
        {layers.map((layer, i) => (
          <div
            key={i}
            className={`flex items-center justify-between rounded-md border px-5 py-3 ${
              layer.highlight
                ? "border-indigo/40 bg-indigo/10 dark:bg-indigo/15"
                : "border-stone-200 bg-stone-50 dark:border-charcoal-lighter dark:bg-charcoal"
            }`}
          >
            <div>
              <span
                className={`font-brand text-sm font-bold ${
                  layer.highlight
                    ? "text-indigo-deep dark:text-indigo-light"
                    : "text-charcoal dark:text-stone-300"
                }`}
              >
                {layer.label}
              </span>
              <p className="font-body text-xs text-slate dark:text-stone-400">{layer.detail}</p>
            </div>
            {layer.highlight && (
              <span className="rounded-full border border-indigo/40 bg-indigo/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-indigo-deep dark:text-indigo-light">
                gap
              </span>
            )}
          </div>
        ))}
      </div>
      <p className={diagramCaption}>
        Most tools focus on the lower layers. The upper layers remain largely undefined.
      </p>
    </div>
  );
}

function MaturityProgression() {
  const stages = [
    { num: "01", label: "Explore", detail: "Vibe coding", sub: "Prototype fast" },
    { num: "02", label: "Formalize", detail: "Specifications", sub: "Define intent" },
    { num: "03", label: "Execute", detail: "Agent runs", sub: "Traceable delivery" },
    { num: "04", label: "Govern", detail: "Control layer", sub: "Team-scale trust" },
  ];

  return (
    <div className={diagramWrap}>
      <p className={diagramTitle}>AI Development Maturity</p>
      <div className="relative mx-auto max-w-lg">
        {/* Progress line */}
        <div className="absolute top-6 left-7 right-7 hidden h-0.5 bg-gradient-to-r from-indigo via-indigo/50 to-indigo/20 md:block" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stages.map((stage, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo/40 bg-white font-mono text-sm font-bold text-indigo-deep dark:border-indigo/50 dark:bg-charcoal dark:text-indigo-light">
                {stage.num}
              </div>
              <span className={stepLabel}>{stage.label}</span>
              <span className="font-body text-xs font-medium text-indigo dark:text-indigo-light">{stage.detail}</span>
              <span className="font-body text-[11px] text-slate dark:text-stone-400">{stage.sub}</span>
            </div>
          ))}
        </div>
      </div>
      <p className={diagramCaption}>
        Vibe coding and SDD are not opposites — they are stages of the same progression.
      </p>
    </div>
  );
}

function DynamicContextDelivery() {
  const nodeBase =
    "flex flex-col gap-1 rounded-lg border px-4 py-3";
  const nodeDefault =
    `${nodeBase} border-stone-200 bg-stone-50 dark:border-charcoal-lighter dark:bg-charcoal`;
  const nodeHighlight =
    `${nodeBase} border-indigo/40 bg-indigo/10 dark:bg-indigo/15`;

  return (
    <div className={diagramWrap}>
      <p className={diagramTitle}>Dynamic Context Delivery</p>
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 md:flex-row md:gap-5">
        <div className={nodeDefault}>
          <span className="font-brand text-xs font-bold text-charcoal dark:text-stone-200">Project Knowledge</span>
          <span className="font-body text-[10px] text-slate dark:text-stone-400">Specs · Decisions · Code · Tasks</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="rounded-md border border-indigo/40 bg-indigo/10 px-3 py-1.5 dark:bg-indigo/15">
            <span className="font-mono text-[10px] font-semibold text-indigo-deep dark:text-indigo-light">scope filter</span>
          </div>
          <ArrowRight size={14} className={`hidden md:block ${arrowColor}`} />
          <ArrowDown size={14} className={`md:hidden ${arrowColor}`} />
        </div>

        <div className={nodeHighlight}>
          <span className="font-brand text-xs font-bold text-indigo-deep dark:text-indigo-light">Tailored Context</span>
          <span className="font-body text-[10px] text-slate dark:text-stone-400">Only what the agent needs</span>
        </div>

        <ArrowRight size={14} className={`hidden md:block ${arrowColor}`} />
        <ArrowDown size={14} className={`md:hidden ${arrowColor}`} />

        <div className={nodeDefault}>
          <span className="font-brand text-xs font-bold text-charcoal dark:text-stone-200">AI Agent</span>
          <span className="font-body text-[10px] text-slate dark:text-stone-400">Focused execution</span>
        </div>
      </div>
      <p className={diagramCaption}>
        Instead of dumping all docs, deliver relevant slices per task and agent role.
      </p>
    </div>
  );
}

export function BlogDiagram({ type }: DiagramProps) {
  switch (type) {
    case "vibe-coding-loop":
      return <VibeCodingLoop />;
    case "context-scaling":
      return <ContextScalingProblem />;
    case "sdd-workflow":
      return <SDDWorkflow />;
    case "ai-engineering-stack":
      return <AIEngineeringStack />;
    case "maturity-progression":
      return <MaturityProgression />;
    case "dynamic-context-delivery":
      return <DynamicContextDelivery />;
    default:
      return null;
  }
}
