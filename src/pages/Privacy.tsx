import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";

export function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <Seo
        title="Privacy Policy | Spekn"
        description="Read the Spekn privacy policy, including data processing, retention, and your rights."
        path="/privacy"
      />
      <h1 className="font-brand text-4xl font-bold text-charcoal dark:text-white">
        Privacy Policy
      </h1>
      <p className="mt-2 font-body text-sm text-slate dark:text-gray-400">
        Last updated: February 18, 2026
      </p>

      <div className="mt-12 space-y-10 font-body text-sm leading-relaxed text-slate dark:text-gray-300">
        {/* Data Controller */}
        <div>
          <h2 className="font-brand text-lg font-bold text-charcoal dark:text-white">
            1. Data Controller
          </h2>
          <p className="mt-3">
            The data controller for this website is
            <strong> Jean-Baptiste Pin (individual)</strong>, reachable at
            contact@spekn.com
            <a
              href="mailto:[contact@spekn.com]"
              className="text-indigo underline hover:text-indigo/80"
            >
              [contact@spekn.com]
            </a>
            .
          </p>
        </div>

        {/* Data Collected */}
        <div>
          <h2 className="font-brand text-lg font-bold text-charcoal dark:text-white">
            2. Data We Collect
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <strong>Email address</strong> &mdash; provided voluntarily when
              you join our waitlist.
            </li>
            <li>
              <strong>Cookie consent preference</strong> &mdash; stored locally
              in your browser (localStorage).
            </li>
          </ul>
        </div>

        {/* Legal Basis */}
        <div>
          <h2 className="font-brand text-lg font-bold text-charcoal dark:text-white">
            3. Legal Basis for Processing
          </h2>
          <p className="mt-3">
            We process your personal data based on your <strong>consent</strong>{" "}
            (GDPR Article 6(1)(a)). You give consent by checking the consent
            checkbox and submitting the waitlist form. You may withdraw your
            consent at any time by contacting us.
          </p>
        </div>

        {/* Purpose */}
        <div>
          <h2 className="font-brand text-lg font-bold text-charcoal dark:text-white">
            4. Purpose of Processing
          </h2>
          <p className="mt-3">
            Your email address is collected solely to manage the Spekn waitlist
            and to send you product updates and launch announcements. We will
            not use your email for any other purpose without your explicit
            consent.
          </p>
        </div>

        {/* Third-Party Processors */}
        <div>
          <h2 className="font-brand text-lg font-bold text-charcoal dark:text-white">
            5. Third-Party Processors
          </h2>
          <p className="mt-3">
            Your email address is transmitted to and stored by{" "}
            <strong>Brevo</strong> (Sendinblue SAS), a GDPR-compliant email
            service provider based in France. Brevo acts as a data processor on
            our behalf.
          </p>
          <p className="mt-2">
            For more information, see{" "}
            <a
              href="https://www.brevo.com/legal/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo underline hover:text-indigo/80"
            >
              Brevo&apos;s Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Data Retention */}
        <div>
          <h2 className="font-brand text-lg font-bold text-charcoal dark:text-white">
            6. Data Retention
          </h2>
          <p className="mt-3">
            We retain your email address for as long as the waitlist is active
            or until you request deletion. Once the waitlist purpose has been
            fulfilled (e.g., product launch), we will delete your email within
            12 months unless you have opted into further communications.
          </p>
        </div>

        {/* Your Rights */}
        <div>
          <h2 className="font-brand text-lg font-bold text-charcoal dark:text-white">
            7. Your Rights
          </h2>
          <p className="mt-3">
            Under the GDPR, you have the following rights regarding your
            personal data:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <strong>Right of access</strong> &mdash; request a copy of the
              data we hold about you.
            </li>
            <li>
              <strong>Right to rectification</strong> &mdash; request correction
              of inaccurate data.
            </li>
            <li>
              <strong>Right to erasure</strong> &mdash; request deletion of your
              data.
            </li>
            <li>
              <strong>Right to data portability</strong> &mdash; receive your
              data in a structured, machine-readable format.
            </li>
            <li>
              <strong>Right to object</strong> &mdash; object to the processing
              of your data.
            </li>
            <li>
              <strong>Right to withdraw consent</strong> &mdash; withdraw your
              consent at any time without affecting the lawfulness of processing
              based on consent before its withdrawal.
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:[contact@spekn.com]"
              className="text-indigo underline hover:text-indigo/80"
            >
              [contact@spekn.com]
            </a>
            . We will respond within 30 days.
          </p>
        </div>

        {/* Cookies */}
        <div>
          <h2 className="font-brand text-lg font-bold text-charcoal dark:text-white">
            8. Cookies
          </h2>
          <p className="mt-3">
            This website currently uses only <strong>essential cookies</strong>{" "}
            required for the site to function (e.g., cookie consent preference
            stored in localStorage). We do not use analytics or tracking cookies
            at this time.
          </p>
          <p className="mt-2">
            If we introduce non-essential cookies in the future (e.g.,
            analytics), we will update this policy and request your consent via
            our cookie banner before setting them.
          </p>
        </div>

        {/* Supervisory Authority */}
        <div>
          <h2 className="font-brand text-lg font-bold text-charcoal dark:text-white">
            9. Right to Lodge a Complaint
          </h2>
          <p className="mt-3">
            If you believe your data protection rights have been violated, you
            have the right to lodge a complaint with a supervisory authority.
            For France, this is the{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo underline hover:text-indigo/80"
            >
              CNIL (Commission Nationale de l&apos;Informatique et des
              Libert&eacute;s)
            </a>
            .
          </p>
        </div>

        {/* Changes */}
        <div>
          <h2 className="font-brand text-lg font-bold text-charcoal dark:text-white">
            10. Changes to This Policy
          </h2>
          <p className="mt-3">
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8 dark:border-gray-800">
          <Link to="/" className="text-indigo underline hover:text-indigo/80">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
