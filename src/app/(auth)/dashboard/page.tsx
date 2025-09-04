import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { signOut } from "@/lib/actions/auth";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <Typography variant="heading-lg" as="h1" className="mb-4">
            Bienvenido a tu Dashboard
          </Typography>
          <Typography variant="body-md" className="mb-6">
            Hola, {user.email}! 👋
          </Typography>

          <form action={signOut}>
            <Button type="submit">Cerrar Sesión</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
