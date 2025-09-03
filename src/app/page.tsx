import { HeroSection } from "@/components/landing/hero/HeroSection";
import { ForWhomSection } from "@/components/landing/for-whom/ForWhomSection";
import { HowItWorksSection } from "@/components/landing/how-it-works/HowItWorksSection";
import { FeaturesSection } from "@/components/landing/feature/FeaturesSection";
import { BenefitsSection } from "@/components/landing/benefits/BenefitsSection";
import { AutoSchedulingSection } from "@/components/landing/auto-scheduling/AutoSchedulingSection";
import { FaqSection } from "@/components/landing/faq/FaqSection";
import { WhatsAppCtaSection } from "@/components/landing/whatsapp-cta/WhatsAppCtaSection";
import { PricingSection } from "@/components/landing/pricing/PricingSection";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8 ">
        <HeroSection />
        <ForWhomSection />
        <HowItWorksSection />
        <FeaturesSection />
        <BenefitsSection />
        <AutoSchedulingSection />
        <PricingSection />
        <FaqSection />
        <WhatsAppCtaSection />
      </main>
    </>
  );
}
