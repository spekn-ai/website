import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
}

export function BlogCard({ slug, title, date, excerpt, readTime }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${slug}`}
      className="glass-card group block transition-all duration-300 hover:-translate-y-1 hover:border-indigo/30 hover:shadow-lg hover:shadow-indigo/5"
    >
      <div className="flex items-center gap-3 text-xs text-slate dark:text-gray-500">
        <span>{date}</span>
        <span>&middot;</span>
        <span>{readTime}</span>
      </div>
      <h3 className="mt-3 font-brand text-xl font-bold transition-colors group-hover:text-indigo">
        {title}
      </h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-slate dark:text-gray-400">
        {excerpt}
      </p>
      <div className="mt-4 flex items-center gap-2 font-body text-sm font-medium text-indigo">
        Read more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
