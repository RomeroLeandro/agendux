import { Typography } from "@/components/ui/Typography";
import { schedulingFeatures } from "@/config/landing";
import { SchedulingFeature } from "./SchedulingFeature";
import { BookingSimulator } from "./BookingSimulator";

export function AutoSchedulingSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Typography variant="badge">AUTOAGENDAMIENTO</Typography>
          <Typography variant="heading-lg" as="h2" className="mt-4 font-adineue-bold">
            Deja que tus clientes reserven con un link
          </Typography>
          <Typography variant="body-lg" className="mt-4">
            Crea y comparte tu link de autoagenda para que tus clientes escojan
            el día y hora de su cita.
          </Typography>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            {schedulingFeatures.map((feature) => (
              <SchedulingFeature key={feature.title} {...feature} />
            ))}
          </div>

          <div>
            <BookingSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}
