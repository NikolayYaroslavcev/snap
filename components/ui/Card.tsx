export function Card({ children, className = '', dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <div className={`rounded-card ${dark ? 'bg-dark text-ink-inverse' : 'bg-surface text-ink'} p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}
