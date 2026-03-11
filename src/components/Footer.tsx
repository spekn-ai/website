import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Features" },
      { to: "/repo-checker", label: "Repo Checker" },
      { to: "/pricing", label: "Pricing" },
      { to: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
    ],
  },
  {
    title: "Methodology",
    links: [
      { to: "/features", label: "Spec-Driven Development" },
      { to: "/features", label: "Feed / Run / Capture" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Spekn" className="h-7 w-7 dark:invert" />
              <span className="font-brand text-xl font-bold">spekn</span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
              Team continuity for AI-assisted software delivery.
            </p>
            <p className="mt-3 font-body text-sm text-slate dark:text-gray-500">
              Sales and partnerships: <a href="mailto:contact@spekn.com" className="text-indigo underline hover:text-indigo/80">contact@spekn.com</a>
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-brand text-sm font-bold uppercase tracking-wider text-charcoal dark:text-gray-200">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-body text-sm text-slate transition-colors hover:text-indigo dark:text-gray-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-800 md:flex-row">
          <p className="font-body text-sm text-slate dark:text-gray-500">
            &copy; {new Date().getFullYear()} Spekn. All rights reserved.
          </p>
          <p className="mt-2 font-body text-sm text-slate/60 dark:text-gray-600 md:mt-0">
            The right context, wherever work happens.
          </p>
        </div>
      </div>
    </footer>
  );
}
