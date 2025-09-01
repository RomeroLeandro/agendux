import { Typography } from "@/components/ui/Typography";
import { StepFeature } from "./StepFeature";

interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
  features: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
    iconColor?: string;
  }>;
}

export function Step({ stepNumber, title, description, features }: StepProps) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold bg-blue-primary/20">
          {stepNumber}
        </div>
      </div>

      <div className="space-y-6">
        <Typography variant="heading-lg" as="h3" className="font-adineue-bold">
          {title}
        </Typography>
        <Typography variant="body-md">{description}</Typography>
        <div className="space-y-4">
          {features.map((feature) => (
            <StepFeature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
