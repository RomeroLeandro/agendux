"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noLayoutRoutes = ["/login", "/register", "/forgot-password"];

  const showLayout = !noLayoutRoutes.includes(pathname);

  return (
    <>
      {showLayout && <Header />}
      <main>{children}</main>
      {showLayout && <Footer />}
    </>
  );
}
