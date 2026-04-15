import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-medium",
        "bg-gray-100 text-gray-700 border border-gray-200",
        "dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",
        "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200",
        "dark:hover:bg-blue-950 dark:hover:text-blue-300 dark:hover:border-blue-800",
        "transition-colors duration-150",
        className
      )}
    >
      {name}
    </span>
  );
}
