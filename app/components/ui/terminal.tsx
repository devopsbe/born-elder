import * as React from "react"
import { cn } from "../../lib/utils"

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string
  typing?: boolean
  scanlines?: boolean
}

const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  ({ className, text, typing, scanlines, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-black text-green-500 p-4 font-mono rounded-md relative overflow-hidden",
          typing && "terminal-text",
          scanlines && "scanlines",
          className
        )}
        {...props}
      >
        {text ? (
          <pre className="whitespace-pre-wrap">{text}</pre>
        ) : (
          children
        )}
      </div>
    )
  }
)
Terminal.displayName = "Terminal"

export { Terminal } 