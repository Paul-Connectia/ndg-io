import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "gradient";
}

const Section = ({ children, className, variant = "default" }: SectionProps) => {
  return (
    <section
      className={cn(
        "py-16 lg:py-24",
        {
          "bg-background": variant === "default",
          "bg-gradient-section": variant === "muted",
          "bg-gradient-hero": variant === "gradient",
        },
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;