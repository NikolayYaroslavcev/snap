'use client';
import { useEffect, useState } from 'react';

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-dark text-ink-inverse shadow-[0_4px_24px_rgba(0,0,0,0.16)] transition-all duration-300 [@media(hover:hover)]:hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 md:bottom-8 md:right-8 ${
        visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2'
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="m6 15 6-6 6 6" />
      </svg>
    </button>
  );
}
