export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignCls} mb-10 md:mb-14`}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-muted">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl xl:text-[46px] font-medium leading-tight text-ink">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-ink-secondary">{subtitle}</p>}
    </div>
  );
}
