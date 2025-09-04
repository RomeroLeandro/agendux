"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useUser } from "@/hooks/useUser";
import { signOut } from "@/lib/actions/auth";
import { User, LogOut } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function AuthButtons() {
  const { user, loading } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  // No mostrar botones en las páginas de auth
  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    return null;
  }

  if (loading) {
    return (
      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-10 w-24 rounded-lg"></div>
    );
  }

  if (user) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
        >
          <User size={20} />
          <span className="hidden md:block text-sm font-medium">
            {user.email?.split("@")[0]}
          </span>
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
            <Link
              href="/dashboard"
              onClick={() => setShowDropdown(false)}
              className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <User size={16} className="inline mr-2" />
              Mi Dashboard
            </Link>
            <hr className="my-2 border-gray-200 dark:border-gray-700" />
            <form action={signOut}>
              <button
                type="submit"
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 dark:text-red-400"
              >
                <LogOut size={16} className="inline mr-2" />
                Cerrar Sesión
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <Link
        href="/login"
        className="text-font-secondary-light font-semibold dark:text-font-primary-dark hover:text-blue-primary"
      >
        Iniciar Sesión
      </Link>
      <Link href="/register">
        <Button>Empieza Ahora</Button>
      </Link>
    </>
  );
}
