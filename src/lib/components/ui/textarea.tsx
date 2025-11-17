import * as React from "react"

import { cn } from "@lib/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <div className="textarea-mask-outline">
          <div className="textarea-mask-fill">
            <textarea
                className={cn(
                  "w-full h-full py-[20px] px-[16px] bg-transparent text-[--black] text-sm transition outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                  className
                )}
              ref={ref}
              {...props}
            />
          </div>
      </div>
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
