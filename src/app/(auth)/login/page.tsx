import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/dashboard");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link href="/">Volver</Link>
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="you@example.com" required />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />

        <SubmitButton formAction={signIn} pendingText="Iniciando sesión...">
          Iniciar Sesión
        </SubmitButton>

        <Link href="/register">¿No tienes cuenta? Regístrate</Link>

        {searchParams?.message && <p>{searchParams.message}</p>}
      </form>
    </div>
  );
}
