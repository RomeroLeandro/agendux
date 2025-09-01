"use client";

import Link from "next/link";
import { navLinks } from "@/config/site";
import { AuthButtons } from "./AuthButtons";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { useEffect, useRef, useState } from "react";

export function DesktopNav() {
  const [activeLink, setActiveLink] = useState("#inicio");
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const sections = navLinks.map((link) =>
        document.getElementById(link.href.substring(1))
      );
      const scrollPosition = window.scrollY + 100;
      let currentSectionId = "#inicio";
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition) {
          currentSectionId = `#${section.id}`;
        }
      }
      setActiveLink(currentSectionId);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(href.substring(1));
    if (section) {
      isClickScrolling.current = true;
      setActiveLink(href);

      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <nav className="hidden flex-grow items-center justify-between lg:flex">
      <div className="flex items-center gap-8 mx-auto">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`font-poppins font-semibold transition-colors ${
              activeLink === link.href
                ? "text-blue-600"
                : "text-font-secondary-light dark:text-font-primary-dark hover:text-blue-primary transition-colors"
            }`}
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
