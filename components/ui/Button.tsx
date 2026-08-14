import { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

// Ring color is per-variant, not shared: secondary renders on dark surfaces
// (e.g. the highlighted PricingSection card), where a black ring is invisible.
const styles: Record<Variant, string> = {
  primary: 'bg-dark text-ink-inverse hover:bg-black focus-visible:ring-black/20',
  secondary: 'bg-surface text-ink border border-black/10 hover:bg-page focus-visible:ring-white/60',
  ghost: 'bg-transparent text-ink hover:bg-black/5 focus-visible:ring-black/20',
};

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`rounded-btn px-5 py-3.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
