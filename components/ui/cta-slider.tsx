"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function CTASlider() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const buttons = [
    { text: "Get started", href: "#" },
    { text: "Book a call", href: "#" },
    { text: "YouTube", href: "#" },
  ]

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative flex bg-zinc-900 rounded-full overflow-hidden p-1">
        {/* Animated Background Selector */}
        <motion.div
          className="absolute inset-y-1 w-1/3 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-full"
          animate={{
            x: `${activeIndex * 100}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />

        {buttons.map((button, index) => (
          <button
            key={button.text}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative flex-1 px-6 py-2 text-sm font-medium transition-colors rounded-full z-10",
              "hover:text-white",
              activeIndex === index ? "text-white" : "text-zinc-400",
            )}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  )
}

