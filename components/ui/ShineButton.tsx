'use client';
import { ReactNode, useRef } from 'react';

export function ShineButton({ children }: { children: ReactNode }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const playingRef = useRef(false);

  function handleEnter() {
    const text = textRef.current;
    if (!text || playingRef.current) return;
    playingRef.current = true;
    text.classList.add('cta-shine-play');
  }

  function handleAnimationEnd() {
    textRef.current?.classList.remove('cta-shine-play');
    playingRef.current = false;
  }

  return (
    <button
      onMouseEnter={handleEnter}
      className="rounded-btn bg-white px-5 py-3.5 text-sm font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
    >
      <span ref={textRef} onAnimationEnd={handleAnimationEnd} className="cta-shine-text">
        {children}
      </span>
    </button>
  );
}
