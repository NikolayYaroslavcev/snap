import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M5 6h14M5 12h14M5 18h14" />
      <circle cx="9" cy="6" r="1.75" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="1.75" fill="currentColor" stroke="none" />
      <circle cx="10" cy="18" r="1.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const FEATURES = [
  { title: 'Дизайн-система — ядро платформы', text: 'Ваши компоненты, цвета и шрифты — единственный источник стиля.', Icon: LayersIcon },
  { title: 'Гибкая конфигурация', text: 'Правила бренда задаются один раз — работают в каждой генерации.', Icon: SlidersIcon },
  { title: 'Соответствие по умолчанию', text: 'AI не может нарушить бренд ни в одном из форматов.', Icon: ShieldCheckIcon },
];

export function Process() {
  return (
    <section className="py-10 md:py-20">
      <Container>
        <SectionHeading
          title="Одна платформа — весь маркетинг"
          subtitle="Сайты, изображения, видео, баннеры и презентации — из одной идеи, в вашем стиле."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-btn bg-page text-ink">
                <f.Icon />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-secondary">{f.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
