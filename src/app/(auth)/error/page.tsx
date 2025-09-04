import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 mb-6">
          <AlertTriangle className="text-red-600 dark:text-red-400" size={32} />
        </div>

        <Typography variant="heading-lg" as="h1" className="mb-4">
          Error de Autenticación
        </Typography>

        <Typography variant="body-md" className="mb-8">
          Hubo un problema al iniciar sesión. Por favor, intenta nuevamente.
        </Typography>

        <div className="space-y-3">
          <Link href="/login" className="block">
            <Button fullWidth>Volver a intentar</Button>
          </Link>

          <Link href="/" className="block">
            <Button
              fullWidth
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              Ir al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
