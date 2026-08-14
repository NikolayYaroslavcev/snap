import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ShineButton } from '@/components/ui/ShineButton';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/snap' : '';

export function Hero() {
  return (
    <section className="bg-brand-gradient pb-20 pt-32 md:pb-28 md:pt-40">
      <Container className="text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl xl:text-[64px]">
          Платформа, где всё создаётся в рамках вашего бренда и дизайн-системы
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-ink-secondary md:text-lg">
          Подключите дизайн-систему к снэпбилд, чтобы каждый участник команды создавал материалы в фирменном стиле за минуты, а не недели.
        </p>
        <div className="mt-8 flex justify-center">
          <ShineButton>Начать сейчас</ShineButton>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card bg-dark-deep/90">
            <Image
              src={`${BASE_PATH}/hero-snapbuild-2026-08-07-v2.webp`}
              alt="Интерфейс снэпбилд — конструктор маркетинговых материалов в фирменном стиле"
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover object-left"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
