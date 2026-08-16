'use client';
import { FormEvent, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { validateContactForm, ContactFormValues, ContactFormErrors } from '@/lib/validation';

const EMPTY: ContactFormValues = { name: '', email: '', company: '', message: '' };

export function ContactFormSection() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <section className="py-10 md:py-20">
        <Container>
          <Card className="mx-auto max-w-lg text-center">
            <h3 className="text-xl font-semibold text-ink">Заявка отправлена</h3>
            <p className="mt-2 text-ink-secondary">Мы свяжемся с вами в течение рабочего дня.</p>
          </Card>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-20">
      <Container>
        <SectionHeading eyebrow="Форма обратной связи" title="Обсудим ваш кейс" />
        <Card className="mx-auto max-w-lg">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold text-ink">
                Имя
              </label>
              <input
                id="name"
                value={values.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full rounded-btn border border-black/10 bg-page px-4 py-3 text-sm text-ink"
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-ink">
                Рабочий email
              </label>
              <input
                id="email"
                value={values.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full rounded-btn border border-black/10 bg-page px-4 py-3 text-sm text-ink"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-semibold text-ink">
                Компания <span className="font-normal text-ink-faint">(необязательно)</span>
              </label>
              <input
                id="company"
                value={values.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className="w-full rounded-btn border border-black/10 bg-page px-4 py-3 text-sm text-ink"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold text-ink">
                Сообщение
              </label>
              <textarea
                id="message"
                value={values.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={4}
                className="w-full rounded-btn border border-black/10 bg-page px-4 py-3 text-sm text-ink"
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Отправить заявку
            </Button>
          </form>
        </Card>
      </Container>
    </section>
  );
}
