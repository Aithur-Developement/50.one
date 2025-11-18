import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@lib/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        light:
          "border border-[--white] bg-[--white] text-[--black] hover:text-[--white] hover:bg-[rgba(205,205,205,0.20)] backdrop-blur-[5px] ",
        lightPrimary:
          "border border-[--white] bg-[--white] text-[--black] hover:text-[--white] hover:border-[--white] hover:bg-[--primary] xl:rounded-[1.042vw] rounded-[20px] xl:px-[1.25vw] px-[24px] xl:py-[0.833vw] py-[16px]",
        primary:
          "bg-[--white] text-[--primary] hover:text-[--white] hover:bg-[--primary] ",
        dark:
          "border border-[--black] bg-[--black] text-[--white] hover:bg-[--primary] ",
        outline_dark:
          "border border-[--black]  text-[--black] hover:text-[--white] hover:bg-[--black] xl:rounded-[1.042vw] rounded-[20px] xl:px-[1.25vw] px-[24px] xl:py-[0.833vw] py-[16px]",
        outline_lightGrey:
          "border border-[--lightGrey] text-[--black] hover:text-[--white] bg-transparent hover:bg-[--primary] hover:border-[--primary] xl:rounded-[15px] rounded-[15px] ",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        large: "py-3 sm:py-[1.563vw] xl:py-[0.833vw] px-4 sm:px-[4.688vw] xl:px-[2.5vw] text-md light",
        sm_btn: "size-[56px] sm:size-[5.469vw] xl:size-[2.917vw]",
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
