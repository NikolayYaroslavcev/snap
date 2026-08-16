'use client';
import { useState } from 'react';

export type TabItem = { id: string; label: string; content: React.ReactNode };

export function Tabs({ items, defaultId }: { items: TabItem[]; defaultId?: string }) {
  const [active, setActive] = useState(defaultId ?? items[0].id);
  const current = items.find((i) => i.id === active) ?? items[0];

  return (
    <div>
      <div
        role="tablist"
        className="flex gap-2 mb-8 overflow-x-auto touch-pan-x [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:-mx-8 md:px-8 xl:-mx-10 xl:px-10"
      >
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={item.id === active}
            onClick={(e) => {
              setActive(item.id);
              e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
            }}
            className={`shrink-0 whitespace-nowrap rounded-btn px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 ${
              item.id === active ? 'bg-dark text-ink-inverse' : 'bg-surface text-ink-secondary [@media(hover:hover)]:hover:bg-page'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{current.content}</div>
    </div>
  );
}
