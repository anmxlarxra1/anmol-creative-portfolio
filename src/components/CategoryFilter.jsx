import React from 'react';
import { CATEGORIES } from '../data/projects';

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
  categoryCounts = {}
}) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-dark-900/90 border border-white/[0.08] backdrop-blur-md shadow-xl">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = categoryCounts[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/30 font-semibold'
                  : 'text-canvas-muted hover:text-white hover:bg-white/[0.05]'
              }`}
              type="button"
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-white/[0.06] text-canvas-dim group-hover:text-canvas-muted'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
