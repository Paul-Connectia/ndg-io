import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4";
  withGoldUnderline?: boolean;
}

const Heading = ({ 
  children, 
  className, 
  level = "h2",
  withGoldUnderline = false 
}: HeadingProps) => {
  const Tag = level;
  
  const baseStyles = {
    h1: "text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-tight",
    h2: "text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight",
    h3: "text-2xl md:text-3xl font-semibold text-slate-900 leading-tight",
    h4: "text-xl md:text-2xl font-semibold text-slate-900 leading-tight"
  };

  return (
    <Tag 
      className={cn(
        baseStyles[level],
        withGoldUnderline && "relative inline-block pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40%] after:h-[3px] after:bg-gold",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
