import { updateSession } from "@/lib/supabase/middleware";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Rutas públicas que no requieren autenticación
  const publicRoutes = [
    "/",
    "/login",
    "/register",
    "/auth/callback",
    "/auth/error",
    "/auth/forgot-password",
    "/auth/reset-password",
    "/privacidad",
    "/terminos",
    "/cookies",
  ];

  const isPublicRoute = publicRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  // Actualizar la sesión de Supabase
  const response = await updateSession(request);

  // Si es una ruta pública, permitir acceso
  if (isPublicRoute) {
    return response;
  }

  // Para rutas protegidas, verificar autenticación
  const url = request.nextUrl.clone();
  
  // Aquí el middleware de Supabase ya maneja la redirección si no hay usuario
  // pero podemos agregar lógica adicional si es necesario
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, fonts, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2)$).*)",
  ],
};