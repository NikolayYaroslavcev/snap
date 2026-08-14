export function formatPrice(monthlyRub: number, yearly: boolean): string {
  const effective = yearly ? Math.round((monthlyRub * 0.8) / 10) * 10 : monthlyRub;
  return `${effective.toLocaleString('ru-RU')} ₽/мес`;
}

export type ContactFormValues = { name: string; email: string; company: string; message: string };
export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) errors.name = 'Укажите имя';
  if (!values.email.trim()) errors.email = 'Укажите email';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Проверьте формат email';
  if (!values.message.trim()) errors.message = 'Опишите задачу — хотя бы пару слов';

  return errors;
}
