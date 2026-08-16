import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

function CheckBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M9 12.5 11 14.5 15 9.5" />
      <path d="M12 3l2.2 1.2L17 4l.8 2.8L20 9l-1.2 2.2L20 15l-2.2.8L17 18.6l-2.8-.8L12 20l-2.2-1.2L7 18.6l-.8-2.8L4 15l1.2-2.2L4 9l2.2-.8L7 4l2.8 1.2Z" />
    </svg>
  );
}

function LockBuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="4" y="10" width="16" height="10" rx="1.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v2" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="4" y="4" width="16" height="5" rx="1.2" />
      <rect x="4" y="10.5" width="16" height="5" rx="1.2" />
      <rect x="4" y="17" width="16" height="3" rx="1.2" />
    </svg>
  );
}

const ITEMS = [
  { title: 'Только одобренные модели', text: 'Работаем только с российскими и локализованными моделями, без экспортных ограничений.', Icon: CheckBadgeIcon },
  { title: 'Ваш контур, ваша юрисдикция', text: 'Развёртывание в частном облаке с полным соответствием 152-ФЗ и внутренними ИБ-требованиями.', Icon: LockBuildingIcon },
  { title: 'Собственный AI-стек', text: 'Вы сами определяете модели, хранилища, доступы и цепочки валидации.', Icon: StackIcon },
];

export function Security() {
  return (
    <section id="security" className="py-10 md:py-20">
      <Container>
        <SectionHeading title="Безопасность без компромиссов" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <Card key={item.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-btn bg-page text-ink">
                <item.Icon />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-secondary">{item.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
