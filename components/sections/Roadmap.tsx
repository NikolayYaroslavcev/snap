import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const ITEMS = [
  { date: 'Декабрь, 2025', title: 'Сайты за 5 минут', text: 'Генерация корпоративных сайтов по вашей дизайн-системе — 100% консистентность, без разработчиков.' },
  { date: 'Январь, 2026', title: 'Консистентные AI-иллюстрации', text: 'Настраиваете фирменный стиль один раз — графика для каждой секции сайта через стилевые пресеты.' },
  { date: 'Февраль, 2026', title: 'Дизайн-система из вашего сайта', text: 'Сканируем существующий сайт и собираем дизайн-систему автоматически.' },
  { date: 'Март, 2026', title: 'Режим изображений', text: 'Генерация изображений как ключевых кадров, напрямую в других форматах.' },
];

export function Roadmap() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeading title="Каждый день — новый релиз" subtitle="Приоритизируем бэклог для ваших целей." />
        <div className="grid gap-8 md:grid-cols-4">
          {ITEMS.map((item, i) => (
            <div key={item.title} className="relative pt-6">
              <div className="absolute left-0 top-0 h-[2px] w-full bg-black/10" aria-hidden />
              <div
                className={`absolute top-0 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${i === 0 ? 'bg-brand-gradient-vivid' : 'bg-black/20'}`}
                style={{ left: 0 }}
                aria-hidden
              />
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{item.date}</p>
              <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
