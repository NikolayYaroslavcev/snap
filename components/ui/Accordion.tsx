'use client';
import { useState } from 'react';

export type AccordionItem = { id: string; question: string; answer: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-black/10 rounded-card bg-surface">
      {items.map((item) => {
        const open = item.id === openId;
        return (
          <div key={item.id} className="p-3">
            <button
              className="flex w-full items-center justify-between gap-4 rounded-btn px-3 py-3 text-left transition-colors duration-200 [@media(hover:hover)]:hover:bg-page focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span className="font-semibold text-ink">{item.question}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {open && <p className="px-3 pb-3 text-ink-secondary">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
