"use client";

import clsx from "clsx";

interface PricingToggleProps {
  billingCycle: "monthly" | "annually";
  onToggle: () => void;
}

export function PricingToggle({ billingCycle, onToggle }: PricingToggleProps) {
  return (
    <div className="relative mx-auto w-fit rounded-full bg-gray-200 p-1 dark:bg-gray-700">
      <button
        onClick={onToggle}
        className={clsx(
          "relative z-10 rounded-full px-6 py-1 text-sm font-semibold transition-colors",
          {
            "text-text-primary": billingCycle === "monthly",
            "text-text-secondary": billingCycle !== "monthly",
          }
        )}
      >
        Mensual
      </button>
      <button
        onClick={onToggle}
        className={clsx(
          "relative z-10 rounded-full px-6 py-1 text-sm font-semibold transition-colors",
          {
            "text-text-primary": billingCycle === "annually",
            "text-text-secondary": billingCycle !== "annually",
          }
        )}
      >
        Anual
      </button>
      <div
        className={clsx(
          "absolute top-1 h-8 w-1/2 rounded-full bg-surface shadow-md transition-transform",
          {
            "translate-x-0": billingCycle === "monthly",
            "translate-x-full": billingCycle === "annually",
          }
        )}
      />
    </div>
  );
}
