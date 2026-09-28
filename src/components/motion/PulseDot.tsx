import { cn } from "@/lib/utils";

/** Small technical status dot — only the dot pulses (CSS, GPU opacity). */
export default function PulseDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block h-2 w-2 shrink-0 rounded-full bg-[#39D353] motion-pulse-dot",
        className
      )}
    />
  );
}
