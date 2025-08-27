"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { X, CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "warning" | "info"
  title?: string
  description?: string
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
  children?: React.ReactNode
  hideLabel?: boolean
}

const alertVariants = {
  success: {
    container:
      "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200",
    icon: "text-green-600 dark:text-green-400",
    title: "text-green-800 dark:text-green-200",
    description: "text-green-700 dark:text-green-300",
  },
  error: {
    container: "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200",
    icon: "text-red-600 dark:text-red-400",
    title: "text-red-800 dark:text-red-200",
    description: "text-red-700 dark:text-red-300",
  },
  warning: {
    container:
      "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200",
    icon: "text-yellow-600 dark:text-yellow-400",
    title: "text-yellow-800 dark:text-yellow-200",
    description: "text-yellow-700 dark:text-yellow-300",
  },
  info: {
    container: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200",
    icon: "text-blue-600 dark:text-blue-400",
    title: "text-blue-800 dark:text-blue-200",
    description: "text-blue-700 dark:text-blue-300",
  },
}

const defaultIcons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
}

export const AlertBox = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = "info",
      title,
      description,
      dismissible = false,
      onDismiss,
      icon,
      children,
      hideLabel = false,
      ...props
    },
    ref,
  ) => {
    const variantStyles = alertVariants[variant]
    const IconComponent = defaultIcons[variant]

    const displayTitle = hideLabel ? title : title || variant.charAt(0).toUpperCase() + variant.slice(1);

    return (
      <div
        ref={ref}
        role="alert"
        className={cn("relative w-full rounded-lg border p-4", variantStyles.container, className)}
        {...props}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            {icon || <IconComponent className={cn("h-5 w-5", variantStyles.icon)} aria-hidden="true" />}
          </div>
          <div className={cn("ml-3 flex-1", displayTitle ? "items-start" : "flex items-center")}>
            {displayTitle && <h3 className={cn("text-sm font-medium", variantStyles.title)}>{displayTitle}</h3>}
            {description && (
              <div className={cn(displayTitle ? "mt-2 text-sm" : "text-sm", variantStyles.description)}>
                {description}
              </div>
            )}
            {children && (
              <div className={cn(displayTitle ? "mt-2 text-sm" : "text-sm", variantStyles.description)}>{children}</div>
            )}
          </div>
          {dismissible && (
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  onClick={onDismiss}
                  className={cn(
                    "inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2",
                    "hover:bg-black/5 dark:hover:bg-white/5",
                    variantStyles.icon,
                  )}
                  aria-label="Dismiss alert"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  },
)

AlertBox.displayName = "AlertBox"
