import { SyncPill } from "./SyncPill";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimatedImage } from "./AnimatedImage";
import { CircleCheckBig, CalendarIcon, MessageSquareIcon } from "lucide-react";

const features = [
  "Recordatorios automáticos por WhatsApp",
  "Analytics y reportes detallados",
  "Agenda inteligente sincronizada",
];

const TopMiniCard = () => {
  return (
    <div className="absolute -top-4 left-18 flex items-center gap-2 rounded-2xl bg-surface p-2 text-xs shadow-lg animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 ">
      <MessageSquareIcon className="h-6 w-6 text-color-green" />
      <div>
        <p className="font-semibold">Mensaje enviado</p>
        <p className="text-text-secondary">95% confirmación</p>
      </div>
    </div>
  );
};

const BottomMiniCard = () => {
  return (
    <div className="absolute -bottom-4 -right-8 flex items-center gap-2 rounded-2xl bg-surface p-2 text-xs shadow-lg animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
      <CalendarIcon className="h-6 w-6 text-primary" />
      <div>
        <p className="font-semibold">Cita confirmada</p>
        <p className="text-text-secondary">Automáticamente</p>
      </div>
    </div>
  );
};

export function HeroSection() {
  return (
    <section id="inicio" className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center md:text-left">
            <SyncPill />
            <Typography variant="display" as="h1" className="font-adineue-bold">
              Gestiona tu agenda
              <span className="bg-gradient-to-r from-blue-secondary to-blue-primary bg-clip-text text-transparent ">
                {" "}
                de forma inteligente
              </span>
            </Typography>
            <Typography
              variant="body-lg"
              className="mt-6 max-w-xl mx-auto md:mx-0"
            >
              Automatiza recordatorios por WhatsApp, sincroniza tu calendario y
              optimiza tu tiempo. La solución completa para profesionales
              modernos.
            </Typography>
            <ul className="mt-8 space-y-4 text-left inline-block">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CircleCheckBig className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <Typography variant="body-md" as="span">
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/login">
                <Button>Empieza gratis</Button>
              </Link>
            </div>
          </div>
          <div className="relative flex h-full min-h-[400px] w-full items-center justify-center">
            <AnimatedImage />
            <TopMiniCard />
            <BottomMiniCard />
          </div>
        </div>
      </div>
    </section>
  );
}
