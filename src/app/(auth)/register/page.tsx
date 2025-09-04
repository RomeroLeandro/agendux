import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../submit-button";
import { Database } from "@/types/supabase";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import Logo from "@/assets/Logo.webp";
import Image from "next/image";
import { BackButton } from "@/components/ui/BackButton";

type Profession = Database["public"]["Tables"]["professions"]["Row"];

export default async function Register() {
  const supabase = await createClient();
  const { data: professions } = await supabase
    .from("professions")
    .select("id, name, category")
    .order("category")
    .order("name");

  const groupedProfessions = professions?.reduce(
    (acc: Record<string, Profession[]>, profession: Profession) => {
      const category = profession.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(profession);
      return acc;
    },
    {}
  );

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = (await headers()).get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const passwordConfirmation = formData.get(
      "password_confirmation"
    ) as string;

    if (password !== passwordConfirmation) {
      return redirect("/register?message=Las contraseñas no coinciden.");
    }

    const supabase = await createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          phone: formData.get("phone"),
          profession_id: formData.get("profession_id"),
        },
      },
    });

    if (error) {
      console.error(error);
      return redirect("/register?message=Error al registrar el usuario.");
    }

    return redirect(
      "/register?message=Revisa tu correo para continuar con el registro."
    );
  };

  return (
    <Card className="flex items-center flex-col p-8 relative max-w-lg mx-auto my-6">
      <div className="text-center mb-8 flex flex-col items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo de Agendux"
            className="h-16 w-auto mb-6"
            priority
          />
        </Link>
        <Typography variant="heading-lg" className="font-adineue-bold">
          Bienvenido
        </Typography>
        <Typography variant="body-md">Crea tu cuenta para comenzar</Typography>
      </div>
      <form
        action={signUp}
        className="animate-in grid w-full max-w-3xl grid-cols-1 gap-x-8 gap-y-4 text-foreground md:grid-cols-2"
      >
        <div>
          <label
            className="text-md text-font-primary-light dark:text-font-primary-dark"
            htmlFor="first_name"
          >
            Nombre
          </label>
          <input
            className="mt-1 w-full rounded-md border bg-inherit px-4 py-2 text-font-secondary-light dark:text-text-gray"
            name="first_name"
            required
          />
        </div>

        <div>
          <label
            className="text-md text-font-primary-light dark:text-font-primary-dark"
            htmlFor="last_name"
          >
            Apellido
          </label>
          <input
            className="mt-1 w-full rounded-md border bg-inherit px-4 py-2 text-font-secondary-light dark:text-text-gray"
            name="last_name"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label
            className="text-md text-font-primary-light dark:text-font-primary-dark"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="mt-1 w-full rounded-md border bg-inherit px-4 py-2 text-font-secondary-light dark:text-text-gray"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label
            className="text-md text-font-primary-light dark:text-font-primary-dark"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            className="mt-1 w-full rounded-md border bg-inherit px-4 py-2 text-font-secondary-light dark:text-text-gray"
            name="phone"
          />
        </div>

        <div className="md:col-span-2">
          <label
            className="text-md text-font-primary-light dark:text-font-primary-dark"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="mt-1 w-full rounded-md border bg-inherit px-4 py-2 text-font-secondary-light dark:text-text-gray"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label
            className="text-md text-font-primary-light dark:text-font-primary-dark"
            htmlFor="password_confirmation"
          >
            Repetir Contraseña
          </label>
          <input
            className="mt-1 w-full rounded-md border bg-inherit px-4 py-2 text-font-secondary-light dark:text-gray"
            type="password"
            name="password_confirmation"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label
            className="text-md text-font-primary-light dark:text-font-primary-dark"
            htmlFor="profession_id"
          >
            Profesión
          </label>
          <select
            defaultValue={""}
            name="profession_id"
            className="mt-1 w-full rounded-md border bg-inherit px-4 py-2 text-font-secondary-light dark:text-text-gray"
            required
          >
            <option value="" disabled className="text-font-secondary-light dark:text-font-secondary-dark bg-bg-light dark:bg-bg-dark">
              Selecciona tu profesión
            </option>
            {groupedProfessions &&
              Object.entries(groupedProfessions).map(
                ([category, professionsList]) => (
                  <optgroup
                    label={category}
                    key={category}
                    className="text-blue-primary dark:text-blue-primary bg-bg-light dark:bg-bg-dark"
                  >
                    {professionsList.map((p) => (
                      <option
                        key={p.id}
                        value={p.id}
                        className="text-font-secondary-light dark:text-font-secondary-dark"
                      >
                        {p.name}
                      </option>
                    ))}
                  </optgroup>
                )
              )}
          </select>
        </div>

        <div className="md:col-span-2 flex items-center justify-end">
          <Link href={"/login"} className="mr-4">
            <Typography variant="body-sm">
              Ya tienes una cuenta?{" "}
              <span className=" hover:text-blue-secondary">Inicia sesión</span>
            </Typography>
          </Link>
          <SubmitButton
            formAction={signUp}
            className=""
            pendingText="Registrando..."
          >
            Registrarse
          </SubmitButton>
        </div>
      </form>
      <BackButton />
    </Card>
  );
}
