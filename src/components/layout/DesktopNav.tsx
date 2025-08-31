"use client";

import Link from "next/link";
import { navLinks } from "@/config/site";
import { AuthButtons } from "./AuthButtons";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

export function DesktopNav() {
  return (
    <nav className="hidden flex-grow items-center justify-between lg:flex">
      <div className="flex items-center gap-8 mx-auto">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-font-secondary-light font-semibold dark:text-font-primary-dark hover:text-blue-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <AuthButtons />
      </div>
    </nav>
  );
}
