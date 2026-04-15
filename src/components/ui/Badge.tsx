import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "blue" | "green" | "purple" | "orange";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300": variant === "default",
          "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300": variant === "blue",
          "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300": variant === "green",
          "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300": variant === "purple",
          "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300": variant === "orange",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
