import { Card } from "@/components/ui/Card";
import { Typography } from "@/components/ui/Typography";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  colors: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  colors,
}: FeatureCardProps) {
  return (
    <Card className="flex items-start gap-4 p-4">
      <div
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${colors}`}
      >
        <Icon size={24} />
      </div>

      <div>
        <Typography as="h3" variant="heading-md">
          {title}
        </Typography>
        <Typography
          variant="body-md"
          className="mt-1 text-font-secondary-light dark:text-font-secondary-dark"
        >
          {description}
        </Typography>
      </div>
    </Card>
  );
}
