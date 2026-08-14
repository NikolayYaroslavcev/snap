'use client';

export function Toggle({
  checked,
  onChange,
  labelOn,
  labelOff,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  labelOn: string;
  labelOff: string;
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-btn bg-surface p-1">
      <button
        className={`rounded-btn px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 ${!checked ? 'bg-dark text-ink-inverse' : 'text-ink-secondary hover:bg-page'}`}
        onClick={() => onChange(false)}
      >
        {labelOff}
      </button>
      <button
        className={`rounded-btn px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 ${checked ? 'bg-dark text-ink-inverse' : 'text-ink-secondary hover:bg-page'}`}
        onClick={() => onChange(true)}
      >
        {labelOn}
      </button>
    </div>
  );
}
