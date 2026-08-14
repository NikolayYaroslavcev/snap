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
          <div key={item.id} className="p-6">
            <button
              className="flex w-full items-center justify-between rounded-btn text-left transition-colors hover:bg-page focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span className="font-semibold text-ink">{item.question}</span>
              <span className="ml-4 text-xl text-ink-muted">{open ? '−' : '+'}</span>
            </button>
            {open && <p className="mt-3 text-ink-secondary">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
