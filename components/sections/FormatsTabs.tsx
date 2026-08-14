import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tabs, TabItem } from '@/components/ui/Tabs';
import { Card } from '@/components/ui/Card';

const FORMAT_TABS: TabItem[] = [
  {
    id: 'sites',
    label: 'Сайты',
    content: <Card><p className="text-ink-secondary">Лендинги и корпоративные сайты за 5 минут, 100% в вашей дизайн-системе.</p></Card>,
  },
  {
    id: 'images',
    label: 'Изображения',
    content: <Card><p className="text-ink-secondary">Изображения как ключевые кадры — используйте графику напрямую в других форматах.</p></Card>,
  },
  {
    id: 'video',
    label: 'Видео',
    content: <Card><p className="text-ink-secondary">Контроль качества и формата: длительность, соотношение сторон — под площадку.</p></Card>,
  },
  {
    id: 'banners',
    label: 'Баннеры',
    content: <Card><p className="text-ink-secondary">Один сценарий — десятки адаптаций под популярные рекламные форматы.</p></Card>,
  },
  {
    id: 'presentations',
    label: 'Презентации',
    content: <Card><p className="text-ink-secondary">AI удерживает визуальную целостность на каждом слайде презентации.</p></Card>,
  },
];

export function FormatsTabs() {
  return (
    <section id="formats" className="py-14 md:py-20">
      <Container>
        <SectionHeading title="Любой контент в фирменном стиле за считанные минуты" />
        <Tabs items={FORMAT_TABS} />
      </Container>
    </section>
  );
}
