"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function AuthButtons() {
  return (
    <>
      <Link
        href="/login"
        className="text-font-secondary-light font-semibold dark:text-font-primary-dark hover:text-blue-primary"
      >
        Iniciar Sesión
      </Link>
      <Link href="/login">
        <Button>Empieza Ahora</Button>
      </Link>
    </>
  );
}
