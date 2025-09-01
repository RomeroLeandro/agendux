import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/hero/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
      </main>
    </>
  );
}
