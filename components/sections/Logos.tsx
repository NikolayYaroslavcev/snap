'use client';
import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';

const CLIENTS = ['Авито', 'Циан', 'Лента', 'Ozon', 'Wildberries', 'Т-Банк'];
const SPEED_PX_PER_SEC = 31;
const SET_COPIES = 4;

function LogoSet({ hidden = false, setRef }: { hidden?: boolean; setRef?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={setRef} className="flex shrink-0 items-center gap-x-16 pr-16" aria-hidden={hidden || undefined}>
      {CLIENTS.map((name) => (
        <span key={name} className="shrink-0 text-lg font-semibold text-ink-muted opacity-60">
          {name}
        </span>
      ))}
    </div>
  );
}

export function Logos() {
  const setRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let distance = setRef.current?.getBoundingClientRect().width ?? 0;
    const measure = () => {
      distance = setRef.current?.getBoundingClientRect().width ?? distance;
    };
    const resizeObserver = new ResizeObserver(measure);
    if (setRef.current) resizeObserver.observe(setRef.current);
    document.fonts?.ready?.then(measure);

    const MAX_FRAME_DELTA_SEC = 1 / 30;
    let position = 0;
    let last = performance.now();
    let raf = 0;

    function tick(now: number) {
      const deltaSec = Math.min((now - last) / 1000, MAX_FRAME_DELTA_SEC);
      last = now;
      if (distance > 0 && trackRef.current) {
        position = (position + deltaSec * SPEED_PX_PER_SEC) % distance;
        trackRef.current.style.transform = `translateX(${-position}px)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-8">
      <Container>
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex w-max items-center will-change-transform">
            <LogoSet setRef={setRef} />
            {Array.from({ length: SET_COPIES - 1 }).map((_, i) => (
              <LogoSet key={i} hidden />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
