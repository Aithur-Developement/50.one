import * as React from "react"

import { cn } from "@lib/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="input-mask-outline">
          <div className="input-mask-fill">
              <input
                type={type}
                className={cn(
                  "w-full xl:py-[1.042vw] sm:py-[1.953vw] py-[2.791vw] xl:px-[0.833vw] sm:px-[1.563vw] px-[3.721vw] bg-transparent text-[--black] xl:text-[0.833vw] sm:text-[1.563vw] text-[3.256vw] font-normal font-inter leading-[150%] transition outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ",
                  className
                )}
                ref={ref}
                {...props}
              />
          </div>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
