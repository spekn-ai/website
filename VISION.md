# Spekn: The Context Backbone for AI-First Teams

## The Thesis

AI-first teams have stopped using agents as assistants. They've built pipelines.

An agent writes the PRD. Another agents the code. Another reviews it in CI. Another validates the PR. Each step automated, each handoff fast — but nothing connects them. Every agent in the chain starts from zero, blind to what was decided upstream, carrying only the artifact passed forward. Not the intent behind it. Not the constraints that shaped it. Not the decisions that explain it.

The code arrives at the end of the pipeline. A human reviews it — using a process designed for human-generated code, at human-scale velocity, with human-held context.

**They're not reviewing code. They're reconstructing intent from artifacts.**

**Spekn is the shared context backbone that flows through your entire agent pipeline** — local sessions, CI runners, PR validators, deploy gates — all governed from the same source of truth.

**Agents execute. Teams decide.**

**The core insight:** The real competitor isn't Jira or Linear. It's the repo full of markdown. Teams write things down — `CLAUDE.md`, `.cursorrules`, `/docs`, decision files. It works for one person, for a while. Then files multiply, decisions go stale, context windows fill with outdated intent, and every agent has its own interpretation of the rules. A repo full of markdown is not a knowledge system. It's a graveyard of intent.

---

## 1. The Problem: Context, Not Code

AI coding tools (Claude Code, Codex, Cursor, Windsurf) are individually powerful. But they share a fundamental limitation: **they are stateless by default. Every session, every pipeline step, every CI run starts blind.**

| What agents lack | What Spekn provides | Why agents can't self-solve this |
|---|---|---|
| **Persistent context** | Versioned specs with anchors | Context resets every session; CLAUDE.md is unstructured |
| **Pipeline coherence** | Shared context across all execution nodes | Each CI/PR agent starts blind with no upstream intent |
| **Team knowledge** | Shared decision records, vector memory | Agents see one developer's context, not the team's |
| **Structured guidance** | 4-layer context architecture | Agents treat all context as equal; no prioritization |
| **Traceability** | Run evidence, verification trails | Agents produce output but don't report what they decided or why |
| **Governance** | Phase gates, acceptance criteria, drift detection | Agents optimize for completion, not compliance |
| **Continuity** | Spec graph + decision history | Next session starts from zero without external memory |

Without persistent, structured, shared context:

- Agents in the same pipeline make locally rational but globally incoherent decisions.
- New developers start every local session from zero — empty history, no memory of what was built or why.
- CI agents enforce rules nobody explicitly governed — or miss rules nobody remembered to inject.
- Human reviewers reconstruct intent instead of verifying outcomes.
- The codebase drifts from its original purpose with every sprint.
- Maintaining a feature becomes harder than building it was.

**Code is cheap. Coherent, maintainable codebases are not.**

---

### Proof by Example: We Built This Without Spekn

This project — Spekn itself — was built by AI agents across multiple sessions. Before we enforced structured context and terminology constraints, an audit of our own documentation found:

- **13 files** still using a deprecated product name ("SDD Control Room") — including the landing page, login screen, and navigation bar
- **6 files** using a deprecated methodology name ("CDD") that contradicted the official terminology ("SDD") in the same repo
- **3 architectural documents** referencing an old positioning that no longer matched the vision
- UI components, spec docs, and decision records all drifting in different directions — written by agents that had no shared terminology constraints

Every one of these inconsistencies was introduced by an AI agent doing exactly what it was asked — but without the structured context to do it *consistently*. No governance meant no alignment. This is the problem Spekn solves.

---

## 1.5 Principles

1. **Dynamic context, not static files** — The right knowledge for the right agent at the right step, assembled fresh every session. Not a file you regenerate manually.
2. **Intent is first-class** — Specs, decisions, and constraints are versioned product artifacts, not afterthoughts. A task is not done until its context is updated.
3. **Agents are workers, not owners** — They execute bounded tasks. Teams hold the decisions.
4. **Every run is traceable** — What ran, what it decided, what changed, and why — at every node in the pipeline.
5. **Knowledge compounds** — Each session enriches the spec graph. The longer you use Spekn, the smarter every agent session gets.
6. **Format-agnostic, not format-proprietary** — Spekn governs across Spec Kit, OpenSpec, AGENTS.md, CLAUDE.md, .cursorrules. Import from any, export to any, govern across all. No lock-in.
7. **Governance must feel lighter than chaos** — If the control layer creates more friction than drift, it fails.

---

## 2. What Spekn Is: Feed, Run, Capture

Spekn is not a coding tool. It's the **missing layer** in the AI development stack — the shared context backbone that flows through your entire agent pipeline.

```
┌─────────────────────────────────────────────────────────┐
│                        Spekn                            │
│         The context backbone for every agent node       │
│                                                         │
│  FEED: Dynamic context → every agent, every step        │
│  RUN:  Governed, traceable execution across the pipeline │
│  CAPTURE: Decisions → institutional memory              │
└──────┬──────────────┬──────────────┬────────────────────┘
       │              │              │
  ┌────▼────┐   ┌─────▼─────┐  ┌────▼──────────┐
  │  Local  │   │  CI Agent  │  │  PR Validator  │
  │ Session │   │  (GitHub / │  │  Deploy Gate   │
  │ (Claude │   │   GitLab)  │  │                │
  │  Code,  │   └───────────┘  └────────────────┘
  │  Cursor)│
  └─────────┘
```

### FEED — Dynamic Context for Every Agent Session

Current agents start every session blind. `CLAUDE.md` is a flat file. `.cursorrules` is gitignored. Skills are injected in isolation at each CI step with no shared source of truth.

Spekn delivers dynamic, governed context assembled from four layers:

- **Layer 1: Constraints** — what NOT to do (governance rules, security policies, invariants)
- **Layer 2: Requirements** — what to build, with acceptance criteria and spec anchors
- **Layer 3: Technical context** — architecture, patterns, dependencies, past decisions
- **Layer 4: Guidance** — examples, anti-patterns, lessons from previous runs

Context is a product artifact — versioned, maintained, and evolved alongside code. Local agent files (`CLAUDE.md`, `.cursorrules`) become **generated exports** from the governed platform, not hand-edited originals. The platform is the source of truth. Every execution environment stays in sync.

### RUN — Governed Agent Orchestration via ACP

The ACP Bridge connects agents to Spekn's governance layer in real time. It supports two connection modes:

- **Local agent instance** — connects to your already-running Claude Code, Codex, Cursor, or any ACP-compatible agent
- **BYOK or local LLM** — uses your own API key (Anthropic, OpenAI) or a local model (Ollama, LMStudio) directly

Agents execute as stateless workers. The EM (Engineering Manager) is a policy-driven controller — not a creative agent — with a deterministic workflow core. It owns the task graph, selects workers, enforces phase gates (SPECIFY → CLARIFY → PLAN → IMPLEMENT → VERIFY → COMPLETE), and decides acceptance based on objective evidence.

**Spekn never charges for AI compute.** Your agents run on your keys, your subscriptions, your local models. Spekn charges for the governance layer that makes all of it coherent.

### CAPTURE — Organizational Knowledge That Compounds

After every run, Spekn captures what happened: decisions made, code produced, deviations from spec, verification results. This becomes organizational knowledge that persists across sessions, developers, and projects.

Every decision and artifact is logged: which spec section spawned which tasks, which agent ran what, what evidence was used for acceptance, what changed in the repo. The spec graph compounds with every run — the longer you use Spekn, the smarter every agent session gets.

---

## 3. The Stack Spekn Completes

Today's engineering stack has a missing layer:

| Layer | Tool |
|---|---|
| Generate code | Claude Code, Cursor, Codex |
| Store truth | Git |
| Validate syntax | CI / Tests |
| Track tasks | Linear, Jira |
| Review code | CI agents, PR validators |
| **Govern context across all of it** | **Spekn** |

Six spec standards exist today — Spec Kit, OpenSpec, BMAD, AGENTS.md, CLAUDE.md, .cursorrules. None of them flow through a full agent pipeline. None govern teams across every execution environment.

**Spekn does not compete with these standards — it governs across them.** Like Terraform sits above CloudFormation and ARM templates, Spekn sits above every SDD format. Import from any, export to any, govern across all.

What no existing standard covers:

1. **Spec Graph with Decision Records** — interconnected specs with D-records, version history, drift detection
2. **4-Layer Context Architecture** — Constraints → Requirements → Technical → Guidance (unique prioritization hierarchy)
3. **Pipeline-wide context delivery** — the same governed context flowing from local session to CI to PR validation
4. **Verification Trails** — per-criterion pass/fail evidence linked to spec anchors
5. **Team Governance** — multi-user collaboration, phase gates, policy modes, org-level governance
6. **Cross-Standard Orchestration** — import from any format, enrich with governance, export to any format

### The Moat: The Spec Graph

If Cursor adds "team specs" or GitHub adds "project context," Spekn still wins because of the **spec graph** — versioned, interconnected specifications with decision records, drift detection, and verification trails. The spec graph compounds over time: every run, every decision, every verification makes the system smarter. This is defensible because it's organizational knowledge, not a feature.

### Brand Positioning

```
              HIGH GOVERNANCE
                    │
         Jira ──────┼────── Spekn
                    │       (AI-native governance,
                    │        pipeline-aware)
                    │
   LOW AI ──────────┼────────────── HIGH AI
                    │
        Linear ─────┼────── Cursor/Claude Code
                    │       (high AI, no governance)
                    │
              LOW GOVERNANCE
```

Spekn occupies the **high AI + high governance** quadrant — the only product positioned there today.

---

## 4. Competitive Positioning

### The Real Landscape

| | What it does | What it lacks | Spekn fills the gap |
|---|---|---|---|
| **Claude Code** | Powerful single-agent coding | No persistent specs, no team context, no reporting | Feeds context, captures decisions |
| **Codex** | Async agent execution | No spec structure, no verification, no governance | Provides the full spec-run-verify lifecycle |
| **Cursor** | Fast inline coding | Session-scoped, no team knowledge, rules are flat files | Turns .cursorrules into versioned, team-shared specs |
| **GitHub Copilot Workspace** | Issue-to-PR with context | Ecosystem-locked, no governance, no multi-agent | Governs execution across any agent |
| **Linear + AI** | Modern team coordination | No AI agent awareness, no spec-to-code traceability | AI-native project layer with spec graph |
| **Jira** | Enterprise project management | Built for human sprints, no agent orchestration | Purpose-built for AI-first workflows |
| **Devin** | Autonomous coding | Black box, no governance, $500/mo | Transparent, governed execution via ACP |
| **Repo of markdown** | Documents decisions and context | Stale, ungoverned, floods context windows, invisible to pipeline | Dynamic, versioned, team-governed context |

---

## 5. Who Writes the Specs?

Spekn supports three spec creation modes, led by conversational AI creation:

1. **AI writes specs from conversations, humans approve** (primary on-ramp) — Conversational spec refinement with streaming. The AI product architect that turns ideas into structured, versioned specifications. This is the strongest differentiator and the most defensible.

2. **Humans write specs, AI consumes them** — Product management teams author specs directly. Import from existing formats (CLAUDE.md, .cursorrules, Notion).

3. **Specs auto-generated from existing code/PRs** (passive capture) — Analyze PRs, commits, and code changes against specs. Update the knowledge graph automatically. This is the path to adoption without behavior change.

---

## 6. Business Model

### Open Core + Cloud SaaS

Spekn is an open core product with a PLG motion. The developer discovers governance as a personal practice — free, low friction, genuinely useful alone. The team upgrade sells itself the moment a second person needs to be in the loop.

**Spekn Check** (`npx @spekn/check`) is a standalone marketing product — zero install, no account, no network required. It's the entry point that creates belief before asking for anything.

**Open-source strategically:**
- **Format adapters and importers** (Spec Kit, OpenSpec, AGENTS.md, CLAUDE.md, .cursorrules to/from Spekn)
- The **CLI tools** (`spekn import`, `spekn export`, `spekn lint`, `spekn check`) for developer adoption
- The **4-layer context architecture** as an open methodological contribution (RFC/blog, not a competing standard)

**Keep proprietary:**
- Platform (orchestration, collaboration, governance, dashboard)
- Vector memory and knowledge graph
- Team features and enterprise governance
- ACP Bridge session management

### Pricing

No AI credits. No compute markup. Spekn charges for governance infrastructure — your agents run on your own keys, subscriptions, or local models at every tier below Enterprise.

| | Free | Pro | Team | Enterprise |
|---|---|---|---|---|
| **Price** | Free | $49/user/mo | $99/user/mo | Custom |
| **Projects** | 1 | Unlimited | Unlimited | Unlimited |
| **ACP Bridge modes** | Local agent or BYOK/local LLM | Local agent or BYOK/local LLM | Local agent or BYOK/local LLM | + Spekn-hosted |
| **Bridge scope** | Scoped (UI workflows only) | Full MCP tool surface | Full MCP + CI pipeline nodes | Full MCP + pipeline + hosted |
| **Spec creation** | ✓ | ✓ | ✓ | ✓ |
| **Agent context export** | ✓ | ✓ | ✓ | ✓ |
| **Decision records** | Basic | ✓ | ✓ | ✓ |
| **MCP — spec, task, run, decision** | — | ✓ | ✓ | ✓ |
| **MCP — context bundle + memory** | — | ✓ | ✓ | ✓ |
| **Skills (session-scoped)** | — | ✓ | ✓ | ✓ |
| **Run report capture** | — | ✓ | ✓ | ✓ |
| **Audit trail** | — | 30 days | Unlimited | + Compliance export |
| **Vector memory** | — | ✓ | ✓ | ✓ |
| **Team collaboration** | — | — | ✓ | ✓ |
| **Shared org spec graph** | — | — | ✓ | ✓ |
| **EM orchestration** | — | — | ✓ | ✓ |
| **Phase gates** | — | — | ✓ | ✓ |
| **GitHub / GitLab integration** | — | — | ✓ | ✓ |
| **CI context injection** | — | — | ✓ | ✓ |
| **MCP — orchestration, workflow, worktree** | — | — | ✓ | ✓ |
| **Skills marketplace** | — | — | ✓ | ✓ |
| **Skill proposals & governance** | — | — | ✓ | ✓ |
| **MCP — marketplace, skills governance** | — | — | ✓ | ✓ |
| **MCP — activity, run-report, action log** | — | — | ✓ | ✓ |
| **SLA + support** | — | — | ✓ | ✓ (dedicated) |
| **Multi-repo governance** | — | — | — | ✓ |
| **Deploy gate governance** | — | — | — | ✓ |
| **Hosted LLM sessions (BYOK infra)** | — | — | — | ✓ |
| **Compliance export** | — | — | — | ✓ |
| **HMAC-signed bundles (pipeline)** | — | — | — | ✓ |
| **SSO (Keycloak)** | — | — | — | ✓ |
| **Deployment mode** | Cloud | Cloud | Cloud | Cloud / Dedicated / Self-hosted |

**Enterprise deployment model:** Like MongoDB Atlas, Enterprise runs in three modes — same product, different runtime ownership:

| Mode | Who operates it | For whom |
|---|---|---|
| **Spekn Cloud** | Spekn hosts and operates | Companies that want managed infra with data isolation |
| **Dedicated cluster** | Spekn deploys, single-tenant | Data residency requirements, regulated industries |
| **Self-hosted** | Customer runs on own cluster | Air-gapped environments, on-premise mandates, defense, finance |

**Revenue streams:**
1. **SaaS subscriptions** — primary revenue driver
2. **Marketplace** — community skill adapters, templates, plugins at 20% commission (post-GA)

---

## 7. Product Roadmap

### Phase 0: SaaS Foundation ✓

Infrastructure prerequisites. No user-visible features.

1. **Multi-tenancy data model** — Organization entity, tenant isolation
2. **Auth evolution** — Keycloak integration, OAuth providers, device authorization grant for CLI (RFC 8628)
3. **Containerization + deployment** — Docker, CI/CD
4. **Observability** — Structured logging, Sentry, health checks

### Phase 1: Core Experience ✓

The spec experience is the product.

1. **Onboarding flow** — OAuth signup, org creation, first project wizard
2. **Conversational spec creation** — Streaming responses, save-as-spec, version history
3. **Spec-to-task breakdown** — EM agent decomposition, manual editing, acceptance criteria
4. **Single-agent execution** — Agent selection, real-time log streaming, diff view
5. **Verification dashboard** — Pass/fail per criterion, run evidence
6. **Landing page + waitlist** — Marketing site, email capture, demo
7. **Agent context export** — Generate CLAUDE.md / .cursorrules / AGENTS.md from governed specs via pluggable adapters

### Phase 2: Team Governance (In Progress)

Features that demonstrate the governance value and make teams pay.

1. **Team collaboration** — Invite, org management, per-project roles, activity feed ✓
2. **Collaborative spec editing** — CRDT multi-cursor, comment threads, spec review workflow ✓
3. **Orchestration dashboard** — 11-tab visibility layer (sessions, timeline, task graph, logs, EM decisions, costs, activity) ~95%
4. **GitHub / GitLab integration** — App install, webhooks, spec anchor linking to PRs and commits ~95%
5. **Local ACP Bridge** — Device pairing, agent discovery, two connection modes (local agent or BYOK/local LLM) ✓
6. **Run report capture** — Post-run decision extraction, deviation detection, learning capture (Planned)
7. **Billing (Mollie)** — Subscriptions, plan management (Planned)
8. **Repo spec ingestion & alignment** — Auto-ingest CLAUDE.md/.cursorrules on repo attach, drift scoring, alignment report (Planned)
9. **MCP Skills & Marketplace** — 50+ MCP tools, 15 managed skills, marketplace catalog ✓
10. **Context Validation Gate** — Pre-execution gate, HMAC bundle signing, policy flags ✓

### Phase 3: GA Launch

1. **Onboarding optimization** — Product tour, demo project, template gallery
2. **Admin dashboard** — Usage analytics, governance metrics
3. **Security hardening** — API key rotation, audit log export, GDPR
4. **Performance** — Load testing, auto-scaling, CDN
5. **Documentation site** — Dev docs, API reference, video tutorials
6. **`npx @spekn/check` GA** — Full AI-enhanced pass, actionable CTA at end of report

### Phase 4: Ecosystem Integration

The highest-leverage strategic move: be the governance layer that works with all existing standards.

1. **Multi-Format Import/Export Engine** — Spec Kit, OpenSpec, AGENTS.md, BMAD, CLAUDE.md, .cursorrules
2. **Standalone CLI Tools** — `spekn import`, `spekn export`, `spekn lint`, `spekn health` as standalone npm packages
3. **Open Context Layering Schema** — Publish the 4-layer context architecture as RFC/blog
4. **Format Adapter Marketplace** — Community-contributed adapters for additional formats and tools
5. **Enterprise deployment packages** — Helm chart, Docker Compose for self-hosted

---

## 8. Go-to-Market Strategy

### Pitch Lines

- **Investor:** "Every AI-first team is now running agent pipelines with no shared context layer. Spekn is that layer — and the spec graph that compounds with every run is the moat."
- **Developer:** "Stop rebuilding context from scratch every session. Spekn makes your team's knowledge available to every agent, every time."
- **Team lead:** "New developer joins. First session is already seeded with everything the team knows. That's Spekn."
- **Pipeline architect:** "Every agent in your CI/PR pipeline runs against the same governed context. No more locally rational, globally incoherent decisions."
- **CTO:** "Your human reviewers shouldn't be reconstructing intent. Spekn makes sure every agent ran against declared specs — so review is confirmation, not archaeology."
- **HN Show:** "Show HN: Spekn — the context backbone that governs every agent in your pipeline, from local session to CI to deploy gate"

### The Funnel

```
npx @spekn/check          ← pre-funnel, no account, marketing product
        ↓ score + diagnosis + CTA
    Free tier             ← scoped bridge, static export, belief confirmed
        ↓ second developer joins
    Pro tier              ← full bridge, live MCP, spec graph grows
        ↓ CI pipeline, team coordination
    Team tier             ← shared org graph, CI injection, marketplace
        ↓ compliance, air-gap, dedicated infra
   Enterprise             ← hosted sessions, Atlas deployment model
```

### First 100 Users

1. **Hacker News "Show HN"** at beta launch. Frame: "We built the governance layer that makes every AI pipeline coherent"
2. **Build in public** on X/Twitter. Dogfooding story: "We use Spekn to build Spekn." Target: 5K followers before launch
3. **Open-source format adapters** with one-command setup. Target: 500 stars before GA
4. **Direct outreach**: 50 AI-first startups (YC, Indie Hackers) running agent pipelines. 5 design partners (free Team plan for feedback + case studies)
5. **Product Hunt** launch day for GA
6. **Content pillar**: "The AI pipeline problem: why your agents are making globally incoherent decisions"

### Content Pillars

1. "Why your AI agents contradict each other — and how to fix it" — pipeline coherence problem
2. "Your repo of markdown is a graveyard of intent" — context decay problem
3. "When a new developer joins your AI-first team" — onboarding problem
4. "Why your CI agent doesn't know what your PRD agent decided" — pipeline governance problem
5. "How we built Spekn with Spekn" — dogfooding / proof by example
6. "The governance layer that makes AI safe and scalable in teams" — category creation
7. Weekly build-in-public updates

### Community

- Discord server as hub
- Weekly "Spec Review" sessions
- Monthly "AI-First Engineering" virtual meetup
- Open RFC process for the context layering methodology

---

## 9. Why Now

- **AI-first pipelines are the new normal** — Teams aren't using AI as an assistant anymore. They're running fully automated PRD-to-deploy agent pipelines. The context layer that governs those pipelines doesn't exist yet.
- **Generation is commoditized** — Cursor has millions of users, Lovable hit $100M ARR. The maintenance and governance layer is the bottleneck.
- **Spec standards are converging but ungoverned** — Spec Kit, OpenSpec, BMAD, AGENTS.md, CLAUDE.md, .cursorrules all solve spec delivery. None govern teams across standards or across pipeline nodes. Spekn is the missing layer.
- **Enterprise governance demands** — EU AI Act, SOC2, and organizational risk policies require auditable AI development. Pipeline traceability is becoming a compliance requirement.
- **Multi-agent protocols standardizing** — ACP enables interoperability across agents and execution environments, making pipeline governance viable at scale.
- **AI development market** — $5-7B (2025), projected $26B (2030) at 27% CAGR. Adjacent PM market $12B+. Spekn sits at the intersection.

---

## 10. Seed Round Plan

### The Pitch (10 slides)

1. **The Shift**: AI-first teams now run fully automated agent pipelines — PRD to deploy
2. **The Problem**: Nothing connects them. Every agent starts blind. Humans review artifacts, not intent.
3. **The Insight**: The missing layer isn't another agent — it's the context backbone that governs all of them
4. **The Market**: AI dev tools + governance market intersection, $26B by 2030
5. **The Solution**: Spekn — feed governed context to every agent, capture what they learn (demo: local session → CI gate → PR review, all from the same spec graph)
6. **Traction**: [metrics]
7. **Business Model**: Open core PLG. Free → Pro ($49/user/mo) → Team ($99/user/mo) → Enterprise. No AI compute markup. 80%+ gross margins.
8. **Why Now**: Pipeline-first AI development + standards convergence + missing governance layer
9. **Team**: [founder background]
10. **The Ask**: $2M seed, 500 paying teams in 18 months, $500K ARR

### 18-Month Milestones

| Period | Users | MRR | Milestone |
|---|---|---|---|
| Month 6 | 300 users, 100 orgs | $5K | GA live, GitHub integration, 3 case studies, Spec Kit + OpenSpec import/export live |
| Month 12 | 2,000 users, 500 orgs | $30K | Marketplace beta, 2 enterprise pilots, CLI tools 1K downloads/mo |
| Month 18 | 5,000 users, 1,500 orgs | $80K | Enterprise tier (dedicated + self-hosted), Series A ready (>120% NRR, <6mo payback) |

### $2M Allocation

| Category | Amount | Purpose |
|---|---|---|
| Engineering (3 hires) | $900K | Full-stack, infra/DevOps, AI/ML (18mo) |
| Founder salary | $200K | 18 months |
| Cloud infra | $150K | Hosting, CI/CD |
| Design | $100K | Contract UI/UX for onboarding + marketing |
| Marketing/Community | $150K | Content, events, dev relations |
| Legal/Compliance | $100K | SOC2 prep, privacy, ToS, incorporation |
| Buffer | $400K | Contingency + runway extension |

---

## 11. Brand: Spekn

**Spekn** — evokes "spoken" (decisions recorded, not silent) and "spec + ken" (specification knowledge).

| Element | Value |
|---|---|
| **Company name** | Spekn |
| **Domain targets** | spekn.dev, spekn.io, getspekn.com |
| **One-liner** | "Spekn keeps your team in control of AI-generated code." |
| **Category framing** | "The governance layer that makes AI safe and scalable in teams." |
| **Tagline** | "Where product intent is spoken, not assumed." |
| **Methodology** | Spec-Driven Development (SDD) |
| **Category** | AI Development Governance |
| **Product name** | Spekn (the platform) |
| **CLI name** | `spekn` |
| **npm scope** | `@spekn/*` |

---

## 12. Architecture: What's Built

The backend is production-grade and validates the thesis:

- **30+ tRPC routers**, 17 entities, EM orchestration, ACP multi-agent execution
- **Decision Records (D-000 to D-018)** — auditable architectural decisions (exactly what we sell to customers)
- **Spec Kit workflow** — Specify, Clarify, Plan, Implement, Verify, Integrate (6 phase gates)
- **Context Engineering** — 4-layer architecture (constraints, requirements, technical, guidance)
- **Vector memory** — semantic search across decisions and outcomes
- **ACP Bridge** — two-plane architecture (admin + user), device pairing, two connection modes
- **Context Validation Gate** — HMAC-signed bundle integrity, pre-execution governance gate
- **ACP strict mode** — standardized agent protocol with version governance
- **Spec versioning** — semantic versioning tracks specification changes
- **Drift detection** — identifies tasks referencing outdated spec versions
- **MCP Skills & Marketplace** — 50+ MCP tools, 15 managed skills, marketplace catalog, GitHub import

### Architecture Principle: Three Separated Concerns

1. **Workflow state machine** (deterministic, non-LLM) — Spec phases, task statuses, dependencies, retries. Stored in DB + Git.
2. **Engineering Manager agent** (LLM-assisted controller) — Reads spec + current state, proposes task breakdown, selects workers, generates structured instructions. Operates on a finite set of 19 canonical actions. Not a creative agent.
3. **Agent runners** (Claude Code, Codex, OpenCode) via ACP Bridge — Two connection modes: local agent instance or BYOK/local LLM. Every run produces standardized outputs: diff/patch, logs, test results, structured run report.

---

## 13. Verification Criteria

- **Phase 0**: `docker compose up` starts full stack; user registers via OAuth; tenant isolation confirmed
- **Phase 1**: End-to-end: sign up, create spec via chat, generate tasks, run agent, see verification results, export CLAUDE.md
- **Phase 2**: Two users edit same spec; Mollie subscription works; GitHub PR created from run output; decisions auto-captured from agent runs
- **Phase 3**: Load test 100 concurrent users; Lighthouse >90; security scan passes
- **Phase 4**: Import from Spec Kit/OpenSpec/AGENTS.md works e2e; export to CLAUDE.md/.cursorrules works e2e; CLI tools installable standalone; `npx @spekn/check` runs fully offline

---

## 14. The Strategic Question Answered

**Spekn is not a coding tool. It's the context backbone that makes every agent in your pipeline coherent — from the developer's local session to the CI runner to the PR validator.**

It feeds structured specs, governs execution across every node, and captures organizational knowledge that compounds with every run. Just as Scrum's artifacts needed a tool to become real (Jira), AI-first development's pipeline needs a governance layer to stay coherent (Spekn).

The spec graph is the moat. The pipeline traceability is the enterprise sell. The dynamic context that makes every agent smarter than the last is the retention story.
