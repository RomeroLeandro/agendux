import { createClient } from "@/utils/supabase/server";
import { Typography } from "@/components/ui/Typography";
import { PricingClientComponent } from "./PricingClientComponent";

export async function PricingSection() {
  const supabase = createClient();
  // Obtenemos los planes de la base de datos, ordenados por precio
  const { data: plans } = await supabase.from("plans").select().order("price_monthly");

  return (
    <section id="planes" className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <Typography variant="badge">PRECIOS</Typography>
        <Typography variant="heading-xl" as="h2" className="mt-4">
          Precios que se adaptan al tamaño de tu negocio
        </Typography>
        <Typography variant="body-lg" className="mt-4 max-w-2xl mx-auto text-text-secondary">
          Escoge el plan en base a la cantidad de citas que tienes al mes. Siempre puedes cambiarlo más adelante.
        </Typography>

        {/* Renderizamos el componente de cliente pasándole los datos */}
        <div className="mt-8">
          <PricingClientComponent plans={plans ?? []} />
        </div>
        
        {/* Aquí iría la tarjeta de contacto para planes personalizados */}
      </div>
    </section>
  );
}