import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, gdprConsent: true }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-4">
        <span className="text-lg">&#10003;</span>
        <p className="font-body text-sm font-medium text-green-700 dark:text-green-400">
          You&apos;re on the list! We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="waitlist" className="flex w-full max-w-md flex-col gap-3">
      <div className="flex w-full gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          disabled={status === "loading"}
          className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 font-body text-sm outline-none transition-all focus:border-indigo focus:ring-2 focus:ring-indigo/20 disabled:opacity-60 dark:border-gray-700 dark:bg-charcoal-light dark:text-white"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="glow-button flex items-center gap-2 !px-6 !py-3 text-sm disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <>
              Join <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          disabled={status === "loading"}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-indigo accent-indigo focus:ring-indigo disabled:opacity-60"
        />
        <span className="font-body text-xs text-slate dark:text-gray-400">
          I agree to the{" "}
          <Link
            to="/privacy"
            className="text-indigo underline hover:text-indigo/80"
          >
            Privacy Policy
          </Link>
          . My email will be stored by Brevo for waitlist communications.
        </span>
      </label>
      {status === "error" && (
        <p className="font-body text-xs text-red-500">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
