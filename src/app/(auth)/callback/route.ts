import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // La URL de esta ruta contiene el código de autorización que necesitamos
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Redirige al usuario de vuelta a la página principal
  return NextResponse.redirect(requestUrl.origin);
}
