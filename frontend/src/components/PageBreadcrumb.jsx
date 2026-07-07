import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageBreadcrumb({ items = [] }) {
  return (
    <div className="border-b border-white/10 bg-[#0A0A0A]" data-testid="breadcrumb-bar">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <nav className="flex items-center flex-wrap gap-2 text-xs uppercase tracking-wider text-white/50">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-white/30" />}
              {item.to ? (
                <Link to={item.to} className="hover:text-gold transition-colors">{item.label}</Link>
              ) : (
                <span className="text-white/80">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
