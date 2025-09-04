"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signup, signInWithGoogle } from "@/lib/actions/auth";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { CustomPhoneInput } from "@/components/ui/PhoneInput";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import Logo from "@/assets/Logo.webp";
import { useFormStatus } from "react-dom";
import type { E164Number } from "libphonenumber-js/core";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" fullWidth disabled={pending}>
      {pending ? "Creando cuenta..." : "Crear Cuenta"}
    </Button>
  );
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState<E164Number | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSignup(formData: FormData) {
    // Agregar el teléfono al formData
    if (phone) {
      formData.set("phone", phone);
    }

    const result = await signup(formData);

    if (result?.error) {
      setError(
        typeof result.error === "string"
          ? result.error
          : "Error al crear la cuenta"
      );
      setSuccess(null);
    } else if (result?.success) {
      setSuccess(result.message);
      setError(null);
    }
  }

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark flex items-center justify-center p-4">
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
            Crea tu cuenta
          </Typography>
          <Typography variant="body-md" className="mt-2">
            Comienza a gestionar tu agenda de forma inteligente
          </Typography>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg p-3 mb-6">
            <Typography variant="body-sm">{error}</Typography>
          </div>
        )}

        {success && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 rounded-lg p-3 mb-6">
            <Typography variant="body-sm">{success}</Typography>
          </div>
        )}

        <form action={handleSignup} className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-2 text-font-primary-light dark:text-font-primary-dark"
            >
              Nombre Completo
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-font-secondary-light dark:text-font-secondary-dark"
                size={20}
              />
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full pl-10 pr-3 py-3 border border-font-secondary-light dark:border-font-secondary-dark text-font-secondary-light dark:text-font-secondary-dark rounded-lg"
                placeholder="Juan Pérez"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-font-primary-light dark:text-font-primary-dark"
            >
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-font-secondary-light dark:text-font-secondary-dark"
                size={20}
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full pl-10 pr-3 py-3 border text-font-secondary-light dark:text-font-secondary-dark border-font-secondary-light dark:border-font-secondary-dark rounded-lg "
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2 text-font-primary-light dark:text-font-primary-dark"
            >
              Teléfono
            </label>
            <CustomPhoneInput
              value={phone}
              onChange={setPhone}
              className="border border-font-secondary-light dark:border-font-secondary-dark rounded-lg"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2 text-font-primary-light dark:text-font-primary-dark"
            >
              Contraseña
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-font-secondary-light dark:text-font-secondary-dark"
                size={20}
              />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="w-full pl-10 pr-10 py-3 border border-font-secondary-light dark:border-font-secondary-dark rounded-lg "
                placeholder="Mínimo 6 caracteres"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-font-secondary-light dark:text-font-secondary-dark"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" required />
            <label className="text-sm text-font-secondary-light dark:text-font-secondary-dark">
              Acepto los{" "}
              <Link
                href="/terminos"
                className="text-blue-secondary hover:text-blue-primary"
              >
                Términos y Condiciones
              </Link>{" "}
              y la{" "}
              <Link
                href="/privacidad"
                className="text-blue-secondary hover:text-blue-primary"
              >
                Política de Privacidad
              </Link>
            </label>
          </div>

          <SubmitButton />
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-bg-dark-secondary text-gray-500">
              O continúa con
            </span>
          </div>
        </div>

        <button
          onClick={() => signInWithGoogle()}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <FcGoogle size={20} />
          <span>Registrarse con Google</span>
        </button>

        <Typography
          variant="body-sm"
          className="text-center mt-6 text-shadow-font-secondary-light dark:text-shadow-font-secondary-dark"
        >
          ¿Ya tienes cuenta?{" "}
          <Link
            href="/login"
            className="text-blue-secondary hover:text-blue-primary font-semibold"
          >
            Inicia sesión aquí
          </Link>
        </Typography>
      </Card>
    </div>
  );
}
