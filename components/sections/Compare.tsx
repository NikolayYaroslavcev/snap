import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const ROWS: [string, string, string, string, string, string][] = [
  ['Time-to-market', '5 минут', '30–60 мин', '2–3 дня', '1–2 дня', '3–5 недель'],
  ['Дизайн-система', '100% точность', 'Частично, из Figma', 'Шаблоны', 'Вручную в коде', 'Вручную, через ревью'],
  ['Визуальный редактор', '+ ИИ', '—', '—', '—', 'Требуется агентство'],
];

const COLUMNS = ['Особенности', 'снэпбилд', 'Claude + Figma MCP', 'No-code платформы', 'Cursor', 'Традиционный'];

export function Compare() {
  return (
    <section className="py-10 md:py-20">
      <Container>
        <SectionHeading
          title="Почему команды выбирают Снэпбилд"
          subtitle="Результат — готовые маркетинговые материалы без сложных настроек."
        />
        <div className="overflow-x-auto rounded-card bg-surface p-1">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/10">
                {COLUMNS.map((c, i) => (
                  <th
                    key={c}
                    className={`px-6 py-4 font-semibold ${i === 1 ? 'rounded-t-[16px] bg-brand-gradient text-ink' : 'text-ink'}`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, rowIdx) => (
                <tr key={row[0]} className="border-b border-black/5 last:border-0">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`px-6 py-4 ${
                        i === 1
                          ? `font-semibold text-ink bg-[#FFF4EF] ${rowIdx === ROWS.length - 1 ? 'rounded-b-[16px]' : ''}`
                          : 'text-ink-secondary'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
