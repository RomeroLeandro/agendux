"use client";

import { useState } from "react";
import Link from "next/link";
import { resetPassword } from "@/lib/actions/auth";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Mail, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/Logo.webp";

export default function ForgotPasswordPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleReset(formData: FormData) {
    const result = await resetPassword(formData);

    if (result?.error) {
      setError(result.error);
      setSuccess(false);
    } else if (result?.success) {
      setSuccess(true);
      setError(null);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image src={Logo} alt="Agendux Logo" className="h-10 w-auto" />
          </Link>
        </div>

        <div className="text-center mb-8">
          <Typography
            variant="heading-lg"
            as="h1"
            className="font-adineue-bold"
          >
            Recuperar Contraseña
          </Typography>
          <Typography variant="body-md" className="mt-2">
            Te enviaremos un email para restablecer tu contraseña
          </Typography>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg p-3 mb-6">
            <Typography variant="body-sm">{error}</Typography>
          </div>
        )}

        {success ? (
          <div className="text-center">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 rounded-lg p-4 mb-6">
              <Typography variant="body-md">
                ¡Email enviado! Revisa tu bandeja de entrada para restablecer tu
                contraseña.
              </Typography>
            </div>
            <Link href="/login">
              <Button fullWidth>Volver al inicio de sesión</Button>
            </Link>
          </div>
        ) : (
          <form action={handleReset} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <Button type="submit" fullWidth>
              Enviar Email de Recuperación
            </Button>
          </form>
        )}

        <Link
          href="/login"
          className="flex items-center justify-center gap-2 mt-6 text-sm text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft size={16} />
          Volver al inicio de sesión
        </Link>
      </Card>
    </div>
  );
}
