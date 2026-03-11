import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  monthlyPrice?: number;
  description: string;
  period?: string;
  features: string[];
  popular?: boolean;
  cta?: string;
  annual?: boolean;
  customPrice?: string;
  devise?: string;
}

export function PricingCard({
  name,
  monthlyPrice,
  description,
  period,
  features,
  popular,
  cta = "Get Started",
  annual = false,
  customPrice,
  devise = "€",
}: PricingCardProps) {
  const hasToggle = monthlyPrice != null && monthlyPrice > 0;
  const annualMonthly = hasToggle ? Math.round(monthlyPrice * 0.9) : 0;
  const annualTotal = hasToggle ? annualMonthly * 12 : 0;
  const displayPrice =
    customPrice ??
    (hasToggle
      ? `${devise}${annual ? annualMonthly : monthlyPrice}`
      : `${devise}0`);
  const showDiscount = hasToggle && annual;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1",
        popular
          ? "border-indigo/40 bg-indigo/5 shadow-xl shadow-indigo/10 dark:border-indigo/30 dark:bg-indigo/10"
          : "border-gray-200 bg-white dark:border-gray-800 dark:bg-charcoal-light",
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo px-4 py-1 text-xs font-bold text-white">
          Most Popular
        </div>
      )}
      <h3 className="font-brand text-xl font-bold">{name}</h3>
      <p className="mt-2 font-body text-sm text-slate dark:text-gray-400">
        {description}
      </p>
      <div className="mt-6">
        <span className="font-brand text-4xl font-extrabold">
          {displayPrice}
        </span>
        {period && (
          <span className="font-body text-sm text-slate dark:text-gray-400">
            {" "}
            / {period}
          </span>
        )}
        {showDiscount && (
          <span className="ml-2 inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
            Save 10%
          </span>
        )}
        {showDiscount && (
          <p className="mt-1 font-body text-xs text-slate/60 dark:text-gray-500">
            Billed at once — ${annualTotal.toLocaleString()}/year
          </p>
        )}
      </div>
      <ul className="mt-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check size={16} className="mt-0.5 shrink-0 text-indigo" />
            <span className="font-body text-sm text-slate dark:text-gray-400">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <a
        href={cta === "Contact Sales" ? "mailto:contact@spekn.com?subject=Spekn%20enterprise%20inquiry" : "/pricing#waitlist"}
        className={cn(
          "mt-8 block rounded-xl py-3 text-center font-brand text-sm font-bold transition-all",
          popular
            ? "glow-button"
            : "border border-gray-300 text-charcoal hover:border-indigo hover:text-indigo dark:border-gray-700 dark:text-gray-200",
        )}
      >
        {cta}
      </a>
    </div>
  );
}
