'use client';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Toggle } from '@/components/ui/Toggle';
import { formatPrice } from '@/lib/validation';

type Plan = { name: string; monthly: number; features: string[]; highlighted?: boolean; cta: string };

const PLANS: Plan[] = [
  {
    name: 'Старт',
    monthly: 2900,
    features: ['1 дизайн-система', 'До 3 участников', 'Сайты и изображения', 'Email-поддержка'],
    cta: 'Попробовать',
  },
  {
    name: 'Команда',
    monthly: 9900,
    features: ['3 дизайн-системы', 'До 15 участников', 'Все форматы контента', 'Приоритетная поддержка'],
    highlighted: true,
    cta: 'Начать сейчас',
  },
  {
    name: 'Бизнес',
    monthly: 24900,
    features: ['Неограниченно дизайн-систем', 'Частное облако, 152-ФЗ', 'Выделенный менеджер', 'SLA и аудит доступа'],
    cta: 'Связаться с нами',
  },
];

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-10 md:py-20">
      <Container>
        <SectionHeading eyebrow="Тарифы" title="Прозрачные тарифы для команды любого размера" />
        <div className="mb-10 flex justify-center">
          <Toggle checked={yearly} onChange={setYearly} labelOn="Год (−20%)" labelOff="Месяц" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <Card key={plan.name} dark={plan.highlighted} className={plan.highlighted ? 'lg:-translate-y-2' : ''}>
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-2xl font-semibold">{formatPrice(plan.monthly, yearly)}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className={plan.highlighted ? 'text-white/80' : 'text-ink-secondary'}>
                    · {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.highlighted ? 'secondary' : 'primary'} className="mt-8 w-full">
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
