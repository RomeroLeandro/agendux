import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  className = "",
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const fixedStyles =
    "px-6 py-3 bg-gradient-to-r from-blue-secondary to-blue-primary text-white font-semibold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const fullWidthClass = fullWidth ? "w-full" : "";

  const finalClassName = twMerge(fixedStyles, fullWidthClass, className);

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};
