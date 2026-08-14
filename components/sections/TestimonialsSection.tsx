'use client';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

type Testimonial = { quote: string; name: string; role: string; company: string; result: string };

const TESTIMONIALS: Testimonial[] = [
  {
    quote: '«Раньше баннерная кампания занимала неделю согласований с дизайнером. Теперь маркетинг собирает всё сам за день — и бренд не расползается».',
    name: 'Марина Ковалёва',
    role: 'Руководитель маркетинга',
    company: 'Технопарк Ритейл',
    result: 'В 5 раз быстрее запуск кампаний',
  },
  {
    quote: '«Задали дизайн-систему один раз — и перестали получать презентации не в фирменном стиле от отдела продаж».',
    name: 'Артём Соболев',
    role: 'Head of Design',
    company: 'Финтех Solutions',
    result: '0 отклонений от брендбука за квартал',
  },
  {
    quote: '«Для тендерных КП раньше подключали дизайнера на каждый кейс. Сейчас продажники делают персонализированные материалы сами».',
    name: 'Ольга Дмитриева',
    role: 'Коммерческий директор',
    company: 'Северный Логистический Альянс',
    result: 'Конверсия КП выросла на 18%',
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeading eyebrow="Отзывы" title="Что говорят команды, которые уже работают со снэпбилд" />
        <Card className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-ink">{t.quote}</p>
          <p className="mt-6 font-semibold text-ink">{t.name}</p>
          <p className="text-sm text-ink-muted">
            {t.role}, {t.company}
          </p>
          <p className="mt-3 text-sm font-semibold text-ink-secondary">{t.result}</p>
        </Card>
        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Отзывы">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              role="tab"
              aria-selected={i === index}
              aria-label={`Отзыв ${i + 1} из ${TESTIMONIALS.length}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 ${i === index ? 'bg-dark' : 'bg-black/15 hover:bg-black/30'}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
