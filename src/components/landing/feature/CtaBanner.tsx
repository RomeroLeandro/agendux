import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export const CtaBanner = () => {
  return (
    <section className="bg-blue-100 dark:bg-footer rounded-3xl p-8 md:p-16">
      <div className="text-center flex flex-col items-center">
        <Typography variant="heading-lg" as="h2" className="font-adineue">
          ¿Listo para optimizar tu agenda?
        </Typography>

        <Typography variant="body-lg" className="mt-4 max-w-2xl">
          Únete a profesionales que ya confían en Agendux para gestionar sus
          citas de manera inteligente y automatizada.
        </Typography>

        <div className="mt-8">
          <Button>Comenzar gratis</Button>
        </div>
      </div>
    </section>
  );
};
