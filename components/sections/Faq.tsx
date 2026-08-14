import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';

const FAQ_ITEMS = [
  { id: 'q1', question: 'Нужно ли уметь программировать?', answer: 'Нет — платформа рассчитана на маркетинг, дизайн и продажи без участия разработчиков.' },
  { id: 'q2', question: 'Как обеспечивается соответствие бренду?', answer: 'Дизайн-система задаётся один раз и применяется автоматически в каждой генерации.' },
  { id: 'q3', question: 'Где хранятся данные?', answer: 'В частном облаке компании, с полным соответствием 152-ФЗ.' },
  { id: 'q4', question: 'Можно ли подключить свою дизайн-систему?', answer: 'Да, через импорт токенов — см. раздел «Интеграции».' },
  { id: 'q5', question: 'Есть ли пробный период?', answer: 'Да, тариф «Старт» доступен для тестирования без обязательств.' },
];

export function Faq() {
  return (
    <section id="faq" className="py-14 md:py-20">
      <Container>
        <SectionHeading title="Частые вопросы" />
        <div className="mx-auto max-w-2xl">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </Container>
    </section>
  );
}
