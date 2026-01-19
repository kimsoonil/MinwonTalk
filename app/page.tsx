import { Header } from '@/widgets/header/ui/header';
import { Footer } from '@/widgets/footer/ui/footer';
import { HeroSection } from './_components/HeroSection';
import { FeaturesSection } from './_components/FeaturesSection';
import { HowItWorksSection } from './_components/HowItWorksSection';
import { PartnershipSection } from './_components/PartnershipSection';
import { CtaSection } from './_components/CtaSection';

/**
 * 메인 홈페이지
 */
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PartnershipSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
