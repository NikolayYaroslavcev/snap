'use client';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';

type Integration = { title: string; short: string; detail: string };

const INTEGRATIONS: Integration[] = [
  {
    title: 'Импорт дизайн-токенов',
    short: 'Загрузите цвета, шрифты и компоненты из вашей текущей дизайн-системы.',
    detail: 'Поддерживаются экспортированные наборы токенов (JSON) из большинства дизайн-инструментов. Токены становятся единственным источником стиля для всех генераций.',
  },
  {
    title: 'REST API и вебхуки',
    short: 'Запускайте генерацию из своих систем и получайте результат автоматически.',
    detail: 'API позволяет ставить задачи на генерацию программно, а вебхуки — получать уведомление и ссылку на результат сразу после завершения.',
  },
  {
    title: 'Экспорт в облачное хранилище',
    short: 'Готовые материалы сохраняются напрямую в корпоративное хранилище.',
    detail: 'Настройте автоматическую выгрузку готовых файлов в приватное облако компании — без ручного скачивания и пересылки.',
  },
  {
    title: 'Уведомления в мессенджер',
    short: 'Команда получает уведомление, когда материалы готовы к проверке.',
    detail: 'Подключите корпоративный чат — участники проекта получают ссылку на готовый материал сразу после генерации.',
  },
];

export function IntegrationsSection() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const active = INTEGRATIONS.find((i) => i.title === openTitle) ?? null;

  return (
    <section className="py-10 md:py-20">
      <Container>
        <SectionHeading eyebrow="Интеграции" title="Встраивается в ваш существующий рабочий процесс" />
        <div className="grid gap-6 md:grid-cols-2">
          {INTEGRATIONS.map((item) => (
            <button key={item.title} onClick={() => setOpenTitle(item.title)} className="text-left">
              <Card className="h-full transition-shadow hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-secondary">{item.short}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-ink-muted">Подробнее →</span>
              </Card>
            </button>
          ))}
        </div>
        <Modal open={!!active} onClose={() => setOpenTitle(null)} title={active?.title ?? ''}>
          <p className="text-ink-secondary">{active?.detail}</p>
        </Modal>
      </Container>
    </section>
  );
}
