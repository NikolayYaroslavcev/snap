import { Container } from '@/components/ui/Container';

const COLUMNS = [
  { title: 'Продукт', links: ['Сайты', 'Изображения', 'Видео', 'Баннеры', 'Презентации'] },
  { title: 'Компания', links: ['Тарифы', 'Кейсы', 'Отзывы', 'FAQ'] },
  { title: 'Контакты', links: ['hey@snapbuild.ru', 'Telegram'] },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-12 md:py-14">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link} className="text-sm text-ink-secondary">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-ink-faint">© 2026 снэпбилд. Тестовое задание Fullstack Developer.</p>
      </Container>
    </footer>
  );
}
