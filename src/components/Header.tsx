import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/features", label: "Features" },
  { to: "/repo-checker", label: "Repo Checker" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
];

export function Header() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gray-200/50 bg-white/80 shadow-sm backdrop-blur-lg dark:border-gray-800/50 dark:bg-charcoal/80"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Spekn" className="h-7 w-7 dark:invert" />
          <span className="font-brand text-xl font-bold">spekn</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "font-body text-sm font-medium transition-colors hover:text-indigo",
                location.pathname === link.to
                  ? "text-indigo"
                  : "text-slate dark:text-gray-400",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggleDark}
            className="rounded-lg p-2 text-slate transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-charcoal-light"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#waitlist"
            className="glow-button !rounded-lg !px-5 !py-2.5 text-sm"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-charcoal md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body text-sm font-medium text-slate hover:text-indigo dark:text-gray-400"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleDark}
              className="flex items-center gap-2 text-sm text-slate dark:text-gray-400"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              {dark ? "Light mode" : "Dark mode"}
            </button>
            <a href="#waitlist" className="glow-button mt-2 text-center text-sm">
              Join Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
