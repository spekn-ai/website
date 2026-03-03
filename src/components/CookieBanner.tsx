import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onConsentAccepted } from "../lib/analytics";

const STORAGE_KEY = "spekn-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function handleChoice(choice: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, choice);
    if (choice === "accepted") onConsentAccepted();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-gray-200/60 bg-white/80 px-6 py-5 shadow-lg backdrop-blur-lg dark:border-gray-700/60 dark:bg-charcoal/80 sm:flex-row sm:justify-between">
        <p className="font-body text-sm text-slate dark:text-gray-300">
          We use essential cookies to make this site work. See our{" "}
          <Link
            to="/privacy"
            className="text-indigo underline hover:text-indigo/80"
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => handleChoice("rejected")}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-body text-sm font-medium text-charcoal transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-charcoal-light dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Reject
          </button>
          <button
            onClick={() => handleChoice("accepted")}
            className="rounded-lg bg-indigo px-4 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-indigo/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
