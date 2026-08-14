import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tabs, TabItem } from '@/components/ui/Tabs';
import { Card } from '@/components/ui/Card';

type Scenario = { title: string; text: string; result: string };

function ScenarioCard({ title, text, result }: Scenario) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink-secondary">{text}</p>
      <p className="mt-4 text-sm font-semibold text-ink-muted">{result}</p>
    </Card>
  );
}

const SCENARIO_TABS: TabItem[] = [
  {
    id: 'marketing',
    label: 'Маркетинг',
    content: (
      <div className="grid gap-6 md:grid-cols-2">
        <ScenarioCard
          title="Запуск рекламной кампании"
          text="Маркетолог собирает баннеры под 12 рекламных площадок из одного брифа, без дизайнера."
          result="Результат: кампания собрана за день вместо недели."
        />
        <ScenarioCard
          title="Локализация промо-материалов"
          text="Один визуальный сценарий адаптируется под региональные лендинги с сохранением брендбука."
          result="Результат: единый стиль во всех регионах без ручной сверки."
        />
      </div>
    ),
  },
  {
    id: 'design',
    label: 'Дизайн',
    content: (
      <div className="grid gap-6 md:grid-cols-2">
        <ScenarioCard
          title="Масштабирование дизайн-системы"
          text="Дизайнер задаёт токены один раз — платформа применяет их во всех генерациях команды."
          result="Результат: меньше ревью на соответствие бренду."
        />
        <ScenarioCard
          title="Быстрые варианты для тестов"
          text="Десятки вариаций одного макета для A/B-тестов без ручной перерисовки."
          result="Результат: в 5 раз больше гипотез в спринт."
        />
      </div>
    ),
  },
  {
    id: 'sales',
    label: 'Продажи',
    content: (
      <div className="grid gap-6 md:grid-cols-2">
        <ScenarioCard
          title="Персонализированные КП"
          text="Менеджер по продажам генерирует презентацию под конкретного клиента за 10 минут."
          result="Результат: выше конверсия за счёт персонализации."
        />
        <ScenarioCard
          title="Материалы для демо"
          text="Одностраничники под каждую отраслевую нишу без привлечения дизайн-команды."
          result="Результат: демо готовится к каждому звонку."
        />
      </div>
    ),
  },
  {
    id: 'product',
    label: 'Продукт',
    content: (
      <div className="grid gap-6 md:grid-cols-2">
        <ScenarioCard
          title="Лендинги для фич-релизов"
          text="Продуктовая команда публикует страницу нового релиза день в день с запуском."
          result="Результат: анонс синхронизирован с релизом."
        />
        <ScenarioCard
          title="Внутренняя документация"
          text="Единообразные слайды и схемы для внутренних синков и роадмапов."
          result="Результат: меньше времени на форматирование."
        />
      </div>
    ),
  },
];

export function ScenariosSection() {
  return (
    <section id="scenarios" className="py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Кейсы использования"
          title="Один инструмент — разные команды, разные задачи"
          subtitle="От маркетинга до продукта: сценарии, где снэпбилд убирает ручную работу."
        />
        <Tabs items={SCENARIO_TABS} />
      </Container>
    </section>
  );
}
