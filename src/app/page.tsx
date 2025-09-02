import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/hero/HeroSection";
import { ForWhomSection } from "@/components/landing/for-whom/ForWhomSection";
import { Footer } from "@/components/layout/Footer";
import { HowItWorksSection } from "@/components/landing/how-it-works/HowItWorksSection";
import { FeaturesSection } from "@/components/landing/feature/FeaturesSection";
import { BenefitsSection } from "@/components/landing/benefits/BenefitsSection";
import { AutoSchedulingSection } from "@/components/landing/auto-scheduling/AutoSchedulingSection";
import { FaqSection } from "@/components/landing/faq/FaqSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 ">
        <HeroSection />
        <ForWhomSection />
        <HowItWorksSection />
        <FeaturesSection />
        <BenefitsSection />
        <AutoSchedulingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
