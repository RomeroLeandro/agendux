"use client";

import clsx from "clsx";

interface PricingToggleProps {
  billingCycle: "monthly" | "annually";
  onToggle: () => void;
}

export function PricingToggle({ billingCycle, onToggle }: PricingToggleProps) {
  return (
    <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800">
      <button
        onClick={onToggle}
        className={clsx(
          "rounded-md px-4 py-1 text-sm font-semibold transition-colors ",
          {
            "bg-blue-secondary text-font-primary-dark ":
              billingCycle === "monthly",
            "text-font-primary-light hover:text-font-secondary-dark dark:text-font-primary-dark dark:hover:text-font-secondary-light":
              billingCycle !== "monthly",
          }
        )}
      >
        Mensual
      </button>
      <button
        onClick={onToggle}
        className={clsx(
          "rounded-md px-4 py-1 text-sm font-semibold transition-colors",
          {
            "bg-blue-secondary text-font-primary-dark ":
              billingCycle === "annually",
            "text-font-primary-light hover:text-font-secondary-dark dark:text-font-primary-dark dark:hover:text-font-secondary-dark":
              billingCycle !== "annually",
          }
        )}
      >
        Anual
      </button>
    </div>
  );
}
