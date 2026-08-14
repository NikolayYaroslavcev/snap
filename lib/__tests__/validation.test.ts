import { describe, expect, it } from 'vitest';
import { formatPrice, validateContactForm } from '../validation';

describe('formatPrice', () => {
  it('returns the monthly price unchanged when billed monthly', () => {
    expect(formatPrice(2900, false)).toBe('2 900 ₽/мес');
  });

  it('applies a 20% yearly discount and shows the discounted monthly-equivalent', () => {
    expect(formatPrice(2900, true)).toBe('2 320 ₽/мес');
  });
});

describe('validateContactForm', () => {
  const valid = { name: 'Иван Иванов', email: 'ivan@company.ru', company: 'ООО Ромашка', message: 'Хочу подключить платформу.' };

  it('returns no errors for valid input', () => {
    expect(validateContactForm(valid)).toEqual({});
  });

  it('requires name, email, and message', () => {
    const errors = validateContactForm({ ...valid, name: '', email: '', message: '' });
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.message).toBeDefined();
  });

  it('rejects an invalid email format', () => {
    const errors = validateContactForm({ ...valid, email: 'not-an-email' });
    expect(errors.email).toBeDefined();
  });

  it('does not require company', () => {
    const errors = validateContactForm({ ...valid, company: '' });
    expect(errors.company).toBeUndefined();
  });
});
