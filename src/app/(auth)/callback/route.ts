import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Redirigir al dashboard después del login exitoso
      return NextResponse.redirect(`${origin}/dashboard`);
    }
  }

  // Si hay error, redirigir a la página de error
  return NextResponse.redirect(`${origin}/auth/error`);
}
