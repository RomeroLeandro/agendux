import { MessageSquareIcon, CalendarIcon } from "lucide-react";
import Image from "next/image";
import MovilHero from "@/assets/HeroPhone.webp";
import { Typography } from "@/components/ui/Typography";

const TopMiniCard = () => {
  return (
    <div className="z-20 absolute -top-2 -left-2 flex items-center gap-2 rounded-2xl p-2 text-xs shadow-lg bg-bg-light dark:bg-bg-dark-secondary transition-colors duration-300">
      <MessageSquareIcon className="h-6 w-6 text-color-green" />
      <div>
        <Typography
          variant="body-sm"
          as="p"
          className="font-bold text-font-primary-light dark:text-font-primary-dark"
        >
          Mensaje enviado
        </Typography>
        <Typography variant="body-sm" as="p" className="">
          95% confirmación
        </Typography>
      </div>
    </div>
  );
};

const BottomMiniCard = () => {
  return (
    <div className="z-20 absolute -bottom-2 -right-2 flex items-center gap-2 rounded-2xl p-2 text-xs shadow-lg bg-bg-light dark:bg-bg-dark-secondary transition-colors duration-300">
      <CalendarIcon className="h-6 w-6 text-blue-primary" />
      <div>
        <Typography
          variant="body-sm"
          as="p"
          className="font-bold text-font-primary-light dark:text-font-primary-dark"
        >
          Cita confirmada
        </Typography>
        <Typography variant="body-sm" as="p">
          Automáticamente
        </Typography>
      </div>
    </div>
  );
};

export function AnimatedImage() {
  return (
    <div className="relative w-fit mx-auto">
      <Image
        src={MovilHero}
        alt="Demostración de Agendux en un teléfono móvil"
        className="w-full max-w-xs md:max-w-sm relative z-10
              [filter:drop-shadow(0_20px_25px_rgba(99,102,241,0.5))_drop-shadow(0_15px_20px_rgba(59,130,246,0.6))]"
      />
      <TopMiniCard />
      <BottomMiniCard />
    </div>
  );
}
