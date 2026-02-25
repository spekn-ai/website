import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";

export function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-6 py-24 text-center">
      <Seo
        title="Page Not Found | Spekn"
        description="The page you requested was not found."
        path="/404"
        noindex
      />
      <div>
        <h1 className="font-brand text-4xl font-extrabold text-charcoal dark:text-white">404 - Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-base text-slate dark:text-gray-400">
          This URL does not match an existing Spekn page.
        </p>
        <Link to="/" className="mt-6 inline-block font-body text-sm text-indigo hover:underline">
          Back to home
        </Link>
      </div>
    </section>
  );
}
