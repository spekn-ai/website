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
    slug: "vibe-coding-vs-spec-driven-development",
    title:
      "Vibe Coding vs Spec-Driven Development — And the Missing Layer in AI Software Engineering",
    date: "March 2026",
    publishedAt: "2026-03-14",
    updatedAt: "2026-03-14",
    author: "Jean-Baptiste Pin",
    excerpt:
      "Vibe coding and spec-driven development are often presented as competing philosophies. In reality, they represent different stages of the same transformation. The real challenge is managing intent, context, and execution across humans and AI agents over time.",
    readTime: "15 min read",
    content: `Over the past year, a new style of programming has emerged. Developers are shipping real products using AI coding agents. Tools like Claude Code, Codex, Copilot, Cursor, and various autonomous agents are rapidly transforming how software is written.

In this environment two approaches to AI-assisted development are gaining attention: **vibe coding** and **spec-driven development (SDD)**.

They are often presented as competing philosophies. In reality, they represent different stages of the same transformation in software engineering. And the discussion misses something deeper: the real challenge is not choosing between them. It is managing intent, context, and execution across humans and AI agents over time.

This article traces the arc from vibe coding to spec-driven development, reveals why neither approach is sufficient on its own, and introduces the missing layer that ties them together.

## The Rise of Vibe Coding

Vibe coding is the natural starting point for AI-assisted development. Instead of writing code directly, developers collaborate with an AI through iterative prompts until the implementation "feels right."

[diagram:vibe-coding-loop]

The appeal is clear. Vibe coding enables rapid prototyping, creative exploration, minimal upfront planning, and fast iteration. A developer can go from idea to working prototype in minutes.

However, the same characteristics that make vibe coding effective also introduce structural weaknesses. Because the system is guided primarily through conversational prompts, many architectural decisions are never explicitly defined. They emerge implicitly during the conversation.

As a result:

- Different runs may produce different architectures
- Intent can drift over time
- Constraints must be repeated across sessions

When the system grows beyond a prototype, these hidden decisions accumulate into technical debt.

## The Limits of Prompt-Driven Development

The core limitation of vibe coding is **intent ambiguity**.

AI models generate code based on probability. When instructions are vague or incomplete, the model fills the gaps with plausible guesses.

A prompt like "Build a billing system for subscriptions" may produce many valid implementations. Some might use Stripe integration, others internal billing logic, event-driven architecture, or cron-based reconciliation. All might technically satisfy the prompt. But only one aligns with the developer's intended architecture.

Without a shared reference describing the system's constraints and expected behavior, the model must infer intent from limited signals.

This problem compounds across sessions. AI coding sessions reset frequently. When they do, the model forgets architectural decisions, design constraints, implementation rationale, and long-term project goals. Developers compensate by writing increasingly large context files: CLAUDE.md, memory.md, decisions.md, architecture.md.

These files help preserve knowledge between sessions. But they introduce a new problem.

## The Context Scaling Problem

Static context files quickly become difficult to maintain. As projects grow, context documents expand, repositories accumulate specification files, and agents receive more and more irrelevant information.

[diagram:context-scaling]

Even with modern models supporting hundreds of thousands or even millions of tokens, large context windows do not fully solve this issue. More context does not necessarily mean better reasoning. Large context windows often introduce noise, redundancy, and irrelevant historical data.

The problem is not simply the amount of context. It is how context is structured and delivered. This realization leads naturally to a more disciplined approach.

## The Emergence of Spec-Driven Development

Spec-driven development addresses this issue by formalizing intent before implementation. Instead of starting from prompts, teams begin with structured specifications describing system behavior, constraints, acceptance criteria, and architectural decisions.

[diagram:sdd-workflow]

AI agents use the specification as a reference when generating code. This approach provides several advantages:

- It improves alignment between intent and implementation
- It makes architectural decisions explicit rather than implicit
- It makes onboarding easier, because new contributors can understand the system through its specification

Spec-driven development is therefore particularly valuable for production systems, where long-term maintainability matters. However, SDD introduces its own challenges.

## The Hidden Cost of Static Specifications

When specifications are treated as static documents, they eventually diverge from the system they describe. Developers forget to update them. Architectural decisions evolve. The codebase moves forward while the specification lags behind.

Maintaining large specification documents becomes an additional burden. The result is a familiar situation in software engineering: documentation exists but is no longer trustworthy.

In the context of AI-assisted development, this problem becomes more pronounced. Agents rely heavily on the accuracy of the context they receive. If the specification is outdated or inconsistent, the agent may generate code based on incorrect assumptions.

In other words: **static specifications solve the problem of intent clarity, but not the problem of intent maintenance.**

So if vibe coding lacks structure and spec-driven development struggles with maintenance, what does a complete solution look like? To answer this, it helps to step back.

## A Deeper Shift in Software Engineering

Over the past two decades, the industry has repeatedly introduced new abstractions to manage complexity. We moved from code-centric development, to version control systems, to continuous integration, to infrastructure as code, to workflow orchestration.

Each step introduced a new layer that helped teams coordinate increasingly complex systems. AI-assisted development introduces a new dimension of complexity. Instead of coordinating only humans and machines, we now coordinate humans, agents, and models.

This requires new infrastructure — and the shape of that infrastructure is becoming clear.

[diagram:ai-engineering-stack]

Most current tools focus on the lower layers. Agent runtimes execute tasks. Orchestrators coordinate multiple agents. Spec frameworks define context for individual runs.

But the higher layers — where teams manage intent across repositories, sessions, and contributors — remain largely undefined. This is the gap.

## The Missing Layer: Managing Intent Over Time

The real challenge of AI-assisted development is not generating code. It is maintaining coherent intent across time, agents, and teams.

Consider what happens when a project evolves over months. Multiple developers contribute. Several AI agents run tasks in parallel. Architectural decisions change. New team members join the project.

In this environment, several questions become critical:

- What decisions were made and why?
- What constraints must never be violated?
- Which specifications still apply?
- How should context be delivered to agents for a given task?

These questions cannot be answered by static context files alone. They require systems that dynamically manage knowledge about the project.

## Dynamic Context Delivery

One promising direction is **dynamic context delivery**. Instead of providing agents with entire documents, the system retrieves only the information relevant to the current task.

[diagram:dynamic-context-delivery]

This approach treats project knowledge more like a queryable knowledge system than a collection of files. When an agent begins a task, the system assembles a tailored context including relevant specifications, recent architectural decisions, affected code regions, and related tasks.

Agents receive concise and relevant context. Context remains manageable even as projects grow. And project knowledge becomes easier to maintain because it is structured rather than purely textual.

Dynamic context delivery also makes it possible for non-technical contributors to participate more easily. Product managers or designers can express intent at a higher level, while the system translates that intent into structured context for agents.

This is the approach behind Spekn's context engineering layer — specifications are not flat files but structured, layered artifacts that are delivered dynamically based on task scope and agent role.

## Why Teams Will Eventually Need This

As AI coding becomes more capable, development will increasingly involve long-running autonomous agents. These agents may implement features, fix bugs, write tests, refactor code, and update dependencies. They may operate continuously across repositories and CI pipelines.

When that happens, organizations will require systems that provide traceability, verification, governance, and context management. Without such systems, development risks becoming unpredictable. Agents may implement conflicting changes. Architectural constraints may be violated. Decision histories may be lost.

The same problems that once motivated version control and CI pipelines will reappear in a new form.

## Vibe Coding and Spec-Driven Development Are Not Opposites

In practice, the future of AI-assisted development will combine both approaches. Vibe coding will remain valuable during exploration and prototyping. Spec-driven workflows will become increasingly important as systems mature.

[diagram:maturity-progression]

Rather than replacing vibe coding, spec-driven systems provide structure when projects grow beyond the exploratory stage. The key insight is that these approaches form a continuum, not a binary choice.

## The Next Phase of AI Software Engineering

The industry is still in the early stages of understanding how to build software with AI agents.

Many developers are experimenting with context engineering, memory systems, agent orchestrators, and autonomous coding agents. These experiments reveal a common pattern: developers are trying to preserve project knowledge and coordinate agents across sessions.

But the tools available today only partially solve this problem. The next phase of AI software engineering will likely focus on systems that manage context, execution, and governance across teams and projects.

In other words, the industry is beginning to discover the need for a **control layer for AI development**.

## Conclusion

The debate between vibe coding and spec-driven development is not about choosing one approach over the other. It reflects a deeper shift in how software is built.

AI models have dramatically reduced the cost of generating code. But generating code is only part of the problem. The harder challenge is ensuring that code generation remains aligned with the evolving intent of a project.

As teams increasingly rely on AI agents, new systems will be needed to manage context, coordinate execution, and preserve decisions over time.

The future of AI software engineering will not be defined solely by better models. It will be defined by the infrastructure that allows humans and agents to build complex systems together.

And that infrastructure is only beginning to emerge.`,
  },
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
