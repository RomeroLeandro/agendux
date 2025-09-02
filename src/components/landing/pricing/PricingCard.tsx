import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Typography } from "@/components/ui/Typography";
import { Check } from "lucide-react";
import Link from "next/link";
import { Database } from "@/types/supabase";

type Plan = Database["public"]["Tables"]["plans"]["Row"];

interface PricingCardProps {
  plan: Plan; // 3. Usa el tipo autogenerado
  billingCycle: "monthly" | "annually";
}

export function PricingCard({ plan, billingCycle }: PricingCardProps) {
  const isFeatured = plan.is_featured;
  const price =
    billingCycle === "monthly" ? plan.price_monthly : plan.price_annual;
  const billingPeriod = billingCycle === "monthly" ? "/mes" : "/año";

  return (
    <Card
      variant={isFeatured ? "featured" : "default"}
      className="flex flex-col"
    >
      {isFeatured && (
        <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          MÁS POPULAR
        </div>
      )}
      <Typography as="h3" variant="heading-md">
        {plan.name}
      </Typography>
      <Typography as="p" variant="body-md" className="text-text-secondary">
        {plan.quote_limit} citas al mes
      </Typography>

      <div className="my-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-text-secondary">{billingPeriod}</span>
      </div>

      <Typography as="p" variant="body-sm" className="text-text-secondary">
        {plan.description}
      </Typography>

      <Link href="/login" className="mt-6">
        <Button className="w-full">Empieza gratis</Button>
      </Link>

      <ul className="mt-8 space-y-3 text-left">
        {plan.features.map((feature: string) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-green-500" />
            <Typography as="span" variant="body-md">
              {feature}
            </Typography>
          </li>
        ))}
      </ul>
    </Card>
  );
}
