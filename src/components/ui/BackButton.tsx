"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackButton() {
  return (
    <Link href="/">
      <button className="gap-2 flex items-center font-adineue text-blue-primary text-xl">
        <ArrowLeft size={16} />
        <span>Volver</span>
      </button>
    </Link>
  );
}
