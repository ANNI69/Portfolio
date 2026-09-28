import { cn } from "@/lib/utils";

interface ScanLineProps {
  className?: string;
  /** seconds per sweep */
  duration?: number;
}

/**
 * Thin flat GitHub-green sweep inside a relative overflow-hidden host.
 * Transform-only CSS animation, very low opacity, infrequent.
 */
export default function ScanLine({ className, duration = 6 }: ScanLineProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <span
        aria-hidden
        className="motion-scan-line absolute inset-y-0 left-0 w-px bg-[#26A641]"
        style={{ animationDuration: `${duration}s` }}
      />
    </span>
  );
}
