import { twMerge } from "tailwind-merge";

type TypographyVariant =
  | "display"
  | "heading-xl"
  | "heading-lg"
  | "heading-md"
  | "heading-sm"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "caption"
  | "badge";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: TypographyVariant;
  children: React.ReactNode;
  as?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body-md",
  as,
  className,
  ...props
}) => {
  const variantTagMap: Record<TypographyVariant, React.ElementType> = {
    display: "h1",
    "heading-xl": "h2",
    "heading-lg": "h3",
    "heading-md": "h4",
    "heading-sm": "h5",
    "body-lg": "p",
    "body-md": "p",
    "body-sm": "p",
    caption: "span",
    badge: "span",
  };

  const variantStyleMap: Record<TypographyVariant, string> = {
    display:
      "text-5xl md:text-7xl leading-tight text-font-primary-light dark:text-font-primary-dark",

    "heading-xl":
      "font-display font-bold text-4xl md:text-5xl text-font-primary-light dark:text-font-primary-dark",

    "heading-lg":
      "font-bold text-3xl md:text-4xl text-font-primary-light dark:text-font-primary-dark",

    "heading-md":
      " font-semibold text-xl text-font-primary-light dark:text-font-primary-dark",

    "heading-sm":
      " font-semibold text-base text-font-secondary-light dark:text-font-secondary-dark tracking-wider uppercase",

    "body-lg":
      " text-lg text-font-secondary-light dark:text-font-secondary-dark",

    "body-md":
      " text-base text-font-secondary-light dark:text-font-secondary-dark",

    "body-sm":
      " text-sm text-font-secondary-light dark:text-font-secondary-dark",

    caption: " font-semibold text-sm text-blue-600 dark:text-blue-400",
    badge:
      "inline-block px-3 py-1 font-semibold text-lg uppercase tracking-wider rounded-full bg-blue-200 dark:bg-white text-blue-800",
  };

  const Component = as || variantTagMap[variant];
  const finalClassName = twMerge(variantStyleMap[variant], className);

  return (
    <Component className={finalClassName} {...props}>
      {children}
    </Component>
  );
};
