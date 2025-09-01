import { MessageSquareIcon, CalendarIcon } from "lucide-react";
import Image from "next/image";
import MovilHero from "@/assets/HeroPhone.webp";

// const TopMiniCard = () => {
//   return (
//     <div className="absolute -top-4 -left-8 flex items-center gap-2 rounded-2xl bg-surface p-2 text-xs shadow-lg animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 ">
//       <MessageSquareIcon className="h-6 w-6 text-color-green" />
//       <div>
//         <p className="font-semibold">Mensaje enviado</p>
//         <p className="text-text-secondary">95% confirmación</p>
//       </div>
//     </div>
//   );
// };

// const BottomMiniCard = () => {
//   return (
//     <div className="absolute -bottom-4 -right-8 flex items-center gap-2 rounded-2xl bg-surface p-2 text-xs shadow-lg animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
//       <CalendarIcon className="h-6 w-6 text-primary" />
//       <div>
//         <p className="font-semibold">Cita confirmada</p>
//         <p className="text-text-secondary">Automáticamente</p>
//       </div>
//     </div>
//   );
// };

export function AnimatedImage() {
  return (
    <Image
      src={MovilHero}
      alt="Demostración de Agendux en un teléfono móvil"
      className="w-full max-w-xs md:max-w-sm relative z-10
                [filter:drop-shadow(0_20px_25px_rgba(99,102,241,0.5))_drop-shadow(0_15px_20px_rgba(59,130,246,0.6))]"
    />
  );
}
