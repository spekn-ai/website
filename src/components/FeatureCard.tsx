import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "glass-card group cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-indigo/30 hover:shadow-lg hover:shadow-indigo/5",
        className,
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="font-brand text-lg font-bold">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
