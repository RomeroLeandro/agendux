import { Typography } from "@/components/ui/Typography";

interface StepFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColor?: string;
}

export function StepFeature({
  icon: Icon,
  title,
  description,
  iconColor,
}: StepFeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <Icon className={iconColor} />
      </div>
      <div>
        <Typography as="h4" variant="body-lg" className="font-bold text-font-primary-light dark:text-font-primary-dark">
          {title}
        </Typography>
        <Typography variant="body-md" className="mt-1 ">
          {description}
        </Typography>
      </div>
    </div>
  );
}
