import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/hero/HeroSection";
import { ForWhomSection } from "@/components/landing/ForWhomSection";
import { Footer } from "@/components/layout/Footer";
import { HowItWorksSection } from "@/components/landing/how-it-works/HowItWorksSection";
import { FeaturesSection } from "@/components/landing/feature/FeaturesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 ">
        <HeroSection />
        <ForWhomSection />
        <HowItWorksSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}
