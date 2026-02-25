export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  excerpt: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-agent-drift-repeatability-team-consistency",
    title:
      "AI Agent Drift: A Practical System for Repeatability and Team Consistency",
    date: "February 2026",
    publishedAt: "2026-02-25",
    updatedAt: "2026-02-25",
    author: "Jean-Baptiste Pin",
    excerpt:
      "AI agent speed is no longer the bottleneck. Coherence is. This guide defines drift, repeatability, and session-to-session consistency, then outlines an implementation model teams can apply across local runs, CI, and collaborative workflows.",
    readTime: "10 min read",
    content: `AI agents now produce code quickly enough that most teams hit a different constraint first: **context coherence over time**. When context drifts, output quality becomes unstable, review cost increases, and teams lose trust in automated execution.

This article provides a practical model for reducing drift and improving repeatability across sessions, contributors, and tools.

## TL;DR

- Drift is the divergence between declared intent and executed behavior.
- Repeatability means equivalent inputs produce equivalent outcomes.
- Team consistency means every contributor and agent uses the same definitions, constraints, and acceptance criteria.
- The core mechanism is simple: structured specs, stable anchors, explicit decision records, and traceable verification evidence.

## Definitions

- Agent drift: Divergence between implementation behavior and current specification intent.
- Session consistency: Equivalent tasks produce materially equivalent outcomes across sessions.
- Team consistency: Contributors and agents operate from one shared context model.
- Repeatability: Equivalent context + equivalent task scope -> equivalent implementation outcome.
- Spec anchor: Stable identifier linking requirement, implementation, and verification evidence.

## Why Drift Happens in Real Teams

Drift is usually not one large failure. It is the accumulation of small inconsistencies:

- Prompt context differs between local runs and CI checks.
- Requirements are described in prose but not anchored to implementation points.
- Decisions are captured in chat, not in durable records.
- Terminology changes across files, creating multiple interpretations of the same concept.
- Verification reports exist, but are not linked to specific acceptance criteria.

## A Repeatability Model That Works

1. **Define intent in structured specs.** Keep constraints, requirements, technical context, and guidance as separate layers.
2. **Assign stable anchors.** Each requirement gets an identifier that remains stable across revisions.
3. **Route context by task.** Agents receive only the relevant slices plus required constraints.
4. **Record decisions at run time.** Capture what was decided, what was rejected, and why.
5. **Attach verification evidence.** Each acceptance criterion maps to explicit pass/fail artifacts.
6. **Run drift checks continuously.** Compare declared behavior vs implemented behavior on every handoff.

## Team Collaboration Pattern

For multi-agent and multi-person workflows, consistency depends on role boundaries and shared artifacts:

- Product/tech leads own requirement anchors and acceptance criteria.
- Implementing agents consume task-scoped context and must reference anchors in outputs.
- Review agents validate implementation against anchors, not against ad hoc interpretation.
- CI gates enforce minimum anchor coverage and drift thresholds before merge.
- Post-merge runs capture decisions back into the spec graph.

## Operational Metrics

Track these metrics per repository and over time:

- Drift findings per run (critical, major, minor)
- Anchor coverage (% requirements linked to code + verification)
- Rework rate from context mismatch
- Cross-session variance on equivalent tasks
- Decision capture rate (% significant changes with recorded rationale)

## Minimal Implementation Checklist

- Structured spec files with explicit constraints and acceptance criteria
- Stable requirement anchor format (example: auth.rq.12)
- Decision log template with rejected alternatives
- Verification output mapped to anchors
- CI check for drift and anchor coverage thresholds

## What This Changes

With this model, teams stop treating agent output as isolated artifacts and start treating execution as a traceable system. The result is not just better code quality. It is a measurable increase in predictability, lower review overhead, and higher trust in automation across sessions and teams.

## FAQ

### Is this specific to one coding agent?

No. The pattern is agent-agnostic. The requirement is not model choice. The requirement is consistent context and traceable enforcement.

### Can a small team benefit without heavy process?

Yes. Start with anchors, decision records, and one drift check in CI. Add layers incrementally.

### Does repeatability mean identical output every time?

Not byte-for-byte. It means outcomes remain within accepted behavioral bounds for the same intent and constraints.`,
  },
  {
    slug: "harness-engineering-the-missing-layer",
    title:
      "Harness Engineering: Why the Future of AI Development Isn't About Better Models",
    date: "February 2026",
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    author: "Jean-Baptiste Pin",
    excerpt:
      "OpenAI just published something important. Not a new model. Not a benchmark. A blog post about how three engineers built a million-line codebase in five months — with zero hand-written code. They called the discipline behind it harness engineering.",
    readTime: "12 min read",
    content: `OpenAI just published something important. Not a new model. Not a benchmark. A blog post about how three engineers built a million-line codebase in five months — with zero hand-written code. They called the discipline behind it **harness engineering**.

The article describes a fundamental shift: when AI agents write all the code, engineering becomes the art of designing environments, feedback loops, and scaffolding that make autonomous agents reliable. The harness — the infrastructure wrapping the model — matters more than the model itself.

## What Is a Harness, Exactly?

An agent harness is the complete system surrounding an AI model that manages the lifecycle of context: from intent capture through specification, execution, verification, and persistence. It handles everything the model can't handle on its own — memory across sessions, tool integration, structured workflows, and long-horizon task management.

Think of it this way: a model is a brain. A harness is the nervous system, the senses, and the memory. Without it, the brain is powerful but isolated. With it, the brain can operate in the real world.

OpenAI's team discovered this through hard experience. They started with a monolithic AGENTS.md file — a single document of instructions for their agents. It failed. As they put it: when everything is "important," nothing is.

## The Three Pillars of Harness Engineering

### 1. Structured Context, Not Flat Files

Every AI coding tool today starts each session partially blind. The context it receives determines the quality of its output. Yet most teams manage this context through flat files: a CLAUDE.md here, a .cursorrules there, an AGENTS.md somewhere else.

The alternative is layered context — different levels of guidance for different purposes, mechanically enforced, automatically maintained.

### 2. Feedback Loops, Not Instructions

The most counterintuitive lesson: telling agents what to do matters less than building systems that tell agents how they did. The quality comes from the loop, not from the initial instruction.

### 3. State Management Across Sessions

Models are stateless. Every conversation starts from zero. But software projects are deeply stateful — decisions compound, dependencies evolve, context shifts over weeks and months. The harness bridges this gap.

## The Governance Gap

There's a dimension that small teams don't face but organizations do: **governance across teams and tools**. When ten teams use different agents with different harnesses, that's chaos — unless there's a governance layer.

This is precisely the architecture behind Spekn — a platform that implements the Feed/Run/Capture lifecycle as the context and governance layer for AI-first development.

## Practical Takeaways

1. **Stop writing monolithic instruction files.** Structure your context hierarchically.
2. **Invest in feedback loops, not longer prompts.** Build automated verification.
3. **Make your repo agent-legible.** Documentation should be a navigable map.
4. **Enforce invariants mechanically.** Don't rely on code review alone.
5. **Capture decisions, not just code.** The decisions behind code are the knowledge.
6. **Think about governance early.** The cost of retrofitting governance is high.

The harness is the product now.`,
  },
  {
    slug: "when-your-ai-forgets-why-decision-tracking",
    title: "When Your AI Forgets Why: The Hidden Cost of Lost Decisions",
    date: "February 2026",
    publishedAt: "2026-02-18",
    updatedAt: "2026-02-18",
    author: "Jean-Baptiste Pin",
    excerpt:
      "A systems engineer shared a conversation with us. Their AI agent made a critical architectural recommendation. It was wrong. The agent later corrected itself. But if that conversation had ended one message earlier, the wrong architecture would have shipped.",
    readTime: "8 min read",
    content: `Last week, a systems engineer shared a conversation with us. They were designing a container security architecture. The AI agent they were working with made a critical architectural recommendation. It was wrong. The agent later corrected itself. But here's the part that matters: **if that conversation had ended one message earlier, the wrong architecture would have shipped.**

This isn't a story about AI being unreliable. It's a story about what happens when architectural decisions live only in chat windows.

## The Conversation That Almost Went Wrong

The engineer was designing a security model with two access levels: an agent user for read-write operations, and an observer group for read-only monitoring. The AI agent initially recommended skipping the observer group entirely, assuming SELinux alone could handle access control.

The engineer pushed back. The agent dug deeper — and found the answer in the project's own DECISIONS.md. The decision was already documented. The agent had simply failed to consult it.

## What Gets Lost

When an AI agent corrects itself in session 5, session 6 doesn't know. When a design decision is made in a Tuesday conversation, Friday's conversation has no memory of it.

The cost isn't the time to re-decide. It's the **cascading damage from re-deciding differently** without knowing why the original decision was made.

## The Pattern Is Everywhere

- **Authentication decisions.** "We chose JWT over session tokens because of the microservice architecture." Lost. Next agent suggests sessions.
- **API design choices.** "We rejected GraphQL for this service." Lost. Next agent scaffolds a GraphQL schema.
- **Database schema decisions.** "We denormalized the user-preferences table after profiling." Lost. Next agent normalizes it back.

## What Structured Decision Tracking Looks Like

A proper decision record captures what was decided, what was rejected, why, and what depends on it. It's searchable, structured, connected, and versioned.

At Spekn, decisions are first-class artifacts — captured as they happen, linked to specifications, with drift detection that catches contradictions.

## The Real Cost of Forgetting

Teams that don't track AI decisions pay in three ways:

1. **Rework.** Agents redo analysis that was already done.
2. **Inconsistency.** Different sessions make different decisions about the same thing.
3. **Silent regression.** A well-reasoned decision gets reversed by an agent that didn't know it existed.

The engineer who caught the mistake got lucky. How many wrong decisions shipped in sessions where nobody pushed back?`,
  },
];
