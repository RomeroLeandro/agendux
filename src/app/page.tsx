import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/hero/HeroSection";
import { ForWhomSection } from "@/components/landing/ForWhomSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <ForWhomSection />
      </main>
    </>
  );
}
