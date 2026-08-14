import { Container } from '@/components/ui/Container';
import { ShineButton } from '@/components/ui/ShineButton';

export function FinalCta() {
  return (
    <section className="bg-brand-gradient py-24 md:py-32">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-medium text-ink md:text-4xl">
          Готовы избавить команду от ручной вёрстки маркетинговых материалов?
        </h2>
        <div className="mt-8 flex justify-center">
          <ShineButton>Начать сейчас</ShineButton>
        </div>
      </Container>
    </section>
  );
}
