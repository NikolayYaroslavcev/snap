'use client';
import { useState } from 'react';

export type TabItem = { id: string; label: string; content: React.ReactNode };

export function Tabs({ items, defaultId }: { items: TabItem[]; defaultId?: string }) {
  const [active, setActive] = useState(defaultId ?? items[0].id);
  const current = items.find((i) => i.id === active) ?? items[0];

  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-2 mb-8">
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={item.id === active}
            onClick={() => setActive(item.id)}
            className={`rounded-btn px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 ${
              item.id === active ? 'bg-dark text-ink-inverse' : 'bg-surface text-ink-secondary hover:bg-page'
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
