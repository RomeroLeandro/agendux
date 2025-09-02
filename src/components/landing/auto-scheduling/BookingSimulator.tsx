import { Card } from "@/components/ui/Card";
import { Typography } from "@/components/ui/Typography";

export function BookingSimulator() {
  return (
    <Card className="flex h-96 items-center justify-center p-8 md:p-12">
      <Typography variant="body-lg" className="max-w-sm text-center">
        En esta sección se implementará una simulación interactiva que mostrará
        el proceso completo de reserva desde la perspectiva del cliente.
      </Typography>
    </Card>
  );
}
