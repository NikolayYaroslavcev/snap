import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Logos } from '@/components/sections/Logos';
import { Process } from '@/components/sections/Process';
import { FormatsTabs } from '@/components/sections/FormatsTabs';
import { ScenariosSection } from '@/components/sections/ScenariosSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { Compare } from '@/components/sections/Compare';
import { PricingSection } from '@/components/sections/PricingSection';
import { Security } from '@/components/sections/Security';
import { IntegrationsSection } from '@/components/sections/IntegrationsSection';
import { Roadmap } from '@/components/sections/Roadmap';
import { Faq } from '@/components/sections/Faq';
import { ContactFormSection } from '@/components/sections/ContactFormSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { Reveal } from '@/components/ui/Reveal';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Reveal>
        <Logos />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <FormatsTabs />
      </Reveal>
      <Reveal>
        <ScenariosSection />
      </Reveal>
      <Reveal>
        <TestimonialsSection />
      </Reveal>
      <Reveal>
        <Compare />
      </Reveal>
      <Reveal>
        <PricingSection />
      </Reveal>
      <Reveal>
        <Security />
      </Reveal>
      <Reveal>
        <IntegrationsSection />
      </Reveal>
      <Reveal>
        <Roadmap />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <ContactFormSection />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
      <Footer />
    </main>
  );
}
