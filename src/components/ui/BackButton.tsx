"use client";

import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href="/"
      className="flex items-center rounded-md p-2 text-sm text-font-secondary-light dark:text-font-secondary-dark no-underline hover:text-blue-secondary mt-2"
    >
      Volver
    </Link>
  );
}
