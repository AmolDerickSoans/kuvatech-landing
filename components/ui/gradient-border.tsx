"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function GradientBorder({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-gray-500 to-zinc-500"
        animate={{
          background: [
            "linear-gradient(90deg, rgb(168 85 247) 0%, rgb(107 114 128) 50%, rgb(161 161 170) 100%)",
            "linear-gradient(180deg, rgb(168 85 247) 0%, rgb(107 114 128) 50%, rgb(161 161 170) 100%)",
            "linear-gradient(270deg, rgb(168 85 247) 0%, rgb(107 114 128) 50%, rgb(161 161 170) 100%)",
            "linear-gradient(360deg, rgb(168 85 247) 0%, rgb(107 114 128) 50%, rgb(161 161 170) 100%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />
      <div className={cn("relative rounded-lg", className)}>{children}</div>
    </div>
  )
}

