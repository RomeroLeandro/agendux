"use client";

import Link from "next/link";
import { navLinks } from "@/config/site";
import { AuthButtons } from "./AuthButtons";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

interface MobileNavProps {
  onLinkClick: () => void;
}

export function MobileNav({ onLinkClick }: MobileNavProps) {
  return (
    <div className="absolute left-0 top-full z-40 w-full animate-in fade-in-20 slide-in-from-top-4 bg-surface lg:hidden">
      <div className="flex flex-col items-center justify-center gap-8 px-4 py-12 text-center">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onLinkClick}
            className="text-xl font-semibold text-text-secondary"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-8 flex flex-col items-center gap-6">
          <ThemeSwitcher />
          <div className="flex items-center gap-4">
            <AuthButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
