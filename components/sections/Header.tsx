'use client';
import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const NAV_LINKS = [
  { href: '#formats', label: 'Продукт' },
  { href: '#scenarios', label: 'Возможности' },
  { href: '#security', label: 'Безопасность' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 py-3">
      <Container>
        <div
          className={`flex h-14 items-center justify-between rounded-full bg-[rgba(255,255,255,0.8)] px-4 backdrop-blur transition-shadow duration-300 md:px-6 ${
            scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.08)]' : ''
          }`}
        >
          <span className="flex items-center gap-2 text-lg font-semibold text-ink">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.5 3.6L12 11.5 5.5 7.9 12 4.3ZM5 9.5l6 3.3v6.9l-6-3.3V9.5Zm8 10.2v-6.9l6-3.3v6.7l-6 3.5Z" />
            </svg>
            снэпбилд
          </span>
          <nav className="hidden gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-ink-secondary hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
          <Button variant="primary" className="text-xs md:text-sm">
            Начать сейчас
          </Button>
        </div>
      </Container>
    </header>
  );
}
