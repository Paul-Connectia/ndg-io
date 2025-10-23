import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-lg px-8 py-3",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md",
        outline:
          "border-2 border-cyan bg-background text-cyan hover:bg-cyan hover:text-white px-8 py-3 shadow-sm hover:shadow-md",
        "outline-on-dark":
          "bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl px-8 py-3",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md",
        ghost: "hover:bg-primary/10 hover:text-primary",
        link: "text-cyan underline-offset-4 hover:underline",
        hero: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:scale-[1.02] px-8 py-4",
        medical: "bg-primary/10 text-primary border-2 border-primary/30 hover:bg-primary hover:text-white shadow-sm hover:shadow-md",
        demo: "bg-gradient-hero text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]",
        cyan: "bg-cyan text-white hover:bg-cyan/90 shadow-sm hover:shadow-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
