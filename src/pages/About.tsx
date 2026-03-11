import { useEffect, useRef } from "react";
import { Target, Lightbulb, BookOpen, Mail, Rocket, ShieldCheck, Users, Workflow, Bot } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FeatureCard } from "@/components/FeatureCard";
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

export function About() {
  const containerRef = useSectionReveal();

  return (
    <div ref={containerRef}>
      <Seo
        title="About | Spekn"
        description="Most AI coding tools are built for solo local workflows. Spekn is built for teams that need organized specs, shared context, orchestration, governance, and long-term maintainability across onboarding, local development, CI, and pull requests."
        path="/about"
      />
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="font-brand text-4xl font-extrabold text-white md:text-6xl">
            About <span className="gradient-text">Spekn</span>
          </h1>
          <p className="mx-auto mt-6 max-w-4xl font-body text-lg text-gray-400">
            Spekn is a platform for teams building software with AI agents — not just one developer working in one local environment.
            We help teams organize specs, share the right context, orchestrate workflows, and add the governance needed to make AI-assisted delivery maintainable over time.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-charcoal-light">
        <div className="mx-auto max-w-6xl px-6">
          <div className="section-reveal grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-ghost/70 p-6 dark:border-gray-800 dark:bg-charcoal/50">
              <Rocket size={20} className="text-indigo" />
              <h2 className="mt-4 font-brand text-lg font-bold">Built for real delivery</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                Spekn is built for engineering teams shipping real products with AI agents, not just demo-friendly solo workflows.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-ghost/70 p-6 dark:border-gray-800 dark:bg-charcoal/50">
              <ShieldCheck size={20} className="text-indigo" />
              <h2 className="mt-4 font-brand text-lg font-bold">Grounded in governance</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                The product is shaped around alignment, traceability, review gates, and operational trust from day one.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-ghost/70 p-6 dark:border-gray-800 dark:bg-charcoal/50">
              <Mail size={20} className="text-indigo" />
              <h2 className="mt-4 font-brand text-lg font-bold">Founder-led conversations</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                If you&apos;re evaluating Spekn for your team, you can reach us directly at <a href="mailto:contact@spekn.com" className="text-indigo underline hover:text-indigo/80">contact@spekn.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-4xl px-6">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold">Why Spekn Exists</h2>
            <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
              <p>
                We built Spekn because most AI coding tools are optimized for solo developers working locally with short-lived context.
              </p>
              <p>
                That works for demos, experiments, and one-person flows. It breaks down when a team needs onboarding, shared understanding,
                repeatability, and continuity across the full delivery workflow.
              </p>
              <p>
                New hires struggle to find the right context. Agents inherit different instructions depending on who runs them. CI and pull requests
                enforce rules without the full decision history. Teams repeat explanations instead of building momentum.
              </p>
              <p>
                Spekn exists to give teams something more durable: organized specs, shared context, orchestration, governance, and gating that make
                AI-assisted software delivery sustainable over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-6xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold md:text-4xl">The market gap we care about</h2>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-slate dark:text-gray-400">
              The AI coding market has plenty of tools for personal speed. The harder problem is helping a team stay coherent as more people,
              more agents, and more workflow stages get involved.
            </p>
          </div>
          <div className="section-reveal mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-ghost/70 p-8 dark:border-gray-800 dark:bg-charcoal/50">
              <h3 className="font-brand text-2xl font-extrabold">What most tools optimize for</h3>
              <ul className="mt-6 space-y-3 pl-6 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                <li className="list-disc">Solo developers and solo founders</li>
                <li className="list-disc">One local environment</li>
                <li className="list-disc">One agent session at a time</li>
                <li className="list-disc">Personal productivity and local memory</li>
                <li className="list-disc">Short-lived experiments and prototype workflows</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-indigo/30 bg-indigo/5 p-8 dark:border-indigo/30 dark:bg-indigo/10">
              <h3 className="font-brand text-2xl font-extrabold">What Spekn is built for</h3>
              <ul className="mt-6 space-y-3 pl-6 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
                <li className="list-disc">Engineering teams, not just individuals</li>
                <li className="list-disc">Onboarding with the right context from day one</li>
                <li className="list-disc">Shared continuity across local dev, CI, and pull requests</li>
                <li className="list-disc">Multi-agent orchestration with one structured foundation</li>
                <li className="list-disc">Governed, maintainable delivery over the long term</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-4xl px-6">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold">The pattern we observed</h2>
            <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
              <p>
                Across teams and pipelines, the same failure modes repeat:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Context drift between stages</strong> as specs, instructions, and code diverge over time</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Assumption reintroduction</strong> where old defaults and outdated constraints reappear later</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Onboarding friction</strong> because team knowledge is scattered across docs, repos, and chat history</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Non-traceable runs</strong> where outputs exist but the reasoning and decisions behind them are hard to recover</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Weak governance</strong> when AI-assisted work becomes important enough to matter but still lacks structure, gates, and policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold">What we believe</h2>
          </div>
          <div className="section-reveal mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Users size={24} />}
              title="AI delivery is a team problem"
              description="The challenge is not just helping one developer go faster. It is helping a team stay aligned as work moves across people, agents, and workflow stages."
            />
            <FeatureCard
              icon={<Bot size={24} />}
              title="Multi-agent only works with shared context"
              description="Agent compatibility matters, but it only becomes valuable when the team has one organized foundation for specs, decisions, and execution context."
            />
            <FeatureCard
              icon={<Workflow size={24} />}
              title="Maintainability beats short-term magic"
              description="A useful AI workflow is not the one that demos well once. It is the one a team can trust, review, onboard onto, and keep using over time."
            />
          </div>
        </div>
      </section>

      <section className="bg-ghost py-24 dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-reveal text-center">
            <h2 className="font-brand text-3xl font-extrabold">How Spekn thinks about the workflow</h2>
          </div>
          <div className="section-reveal mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Target size={24} />}
              title="Organize"
              description="Specs, constraints, and decisions need structure so teams and agents can start from the right context instead of reconstructing it every time."
            />
            <FeatureCard
              icon={<Lightbulb size={24} />}
              title="Orchestrate"
              description="Work should move across onboarding, local development, CI, and pull requests with continuity instead of resetting at every handoff."
            />
            <FeatureCard
              icon={<BookOpen size={24} />}
              title="Govern"
              description="As adoption grows, teams need traceability, evidence, gates, and policy so AI-assisted delivery becomes operationally trustworthy."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-charcoal-light">
        <div className="mx-auto max-w-4xl px-6">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold">How this scales</h2>
            <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-slate dark:text-gray-400">
              <p>
                We think teams move through three stages:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Diagnose</strong>: identify where context is fragmented, where decisions are lost, and where solo-first tooling stops being enough</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Align</strong>: organize specs, build shared context, and support multi-agent workflows across the delivery process</li>
                <li className="list-disc"><strong className="text-charcoal dark:text-white">Govern</strong>: add review gates, policy, deployment controls, and auditability as AI-assisted delivery becomes a core operating model</li>
              </ul>
              <p>
                That is the arc we care about: moving from isolated AI coding experiments to a maintainable, team-scale way of building software.
              </p>
              <p>
                We use Spekn to build Spekn. The product is shaped by the same coordination, continuity, and trust problems we expect teams to solve with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-reveal">
            <h2 className="font-brand text-3xl font-extrabold text-white">
              Bring team continuity to the way you build with AI agents
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-gray-400">
              If your team is moving beyond one-off AI coding workflows, Spekn is built to help you organize the foundation, align the work, and keep it maintainable over time.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <WaitlistForm />
              <a
                href="mailto:contact@spekn.com?subject=Spekn%20sales%20inquiry"
                className="font-body text-sm font-medium text-indigo underline hover:text-indigo/80"
              >
                Prefer a direct conversation? Email contact@spekn.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
