"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import React from "react";

interface AuroraTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function AuroraText({
  className,
  children,
  as: Component = "span",
  ...props
}: AuroraTextProps) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn("relative inline-flex overflow-hidden", className)}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute inset-0 mix-blend-lighten dark:mix-blend-darken">
      <span className="pointer-events-none absolute -top-1/2 left-1/4 h-[25vw] w-[25vw] animate-[aurora-border_6s_ease-in-out_infinite,aurora-1_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-1))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute top-1/4 right-0 h-[25vw] w-[25vw] animate-[aurora-border_6s_ease-in-out_infinite,aurora-2_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-2))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute bottom-0 left-1/4 h-[25vw] w-[25vw] animate-[aurora-border_6s_ease-in-out_infinite,aurora-3_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-3))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute -bottom-1/2 right-1/4 h-[25vw] w-[25vw] animate-[aurora-border_6s_ease-in-out_infinite,aurora-4_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-4))] mix-blend-overlay blur-[1rem]"></span>

        {/* Added Spans to cover more space -  diagonal placements and center*/}
        <span className="pointer-events-none absolute top-1/4 left-0 h-[20vw] w-[20vw] animate-[aurora-border_6s_ease-in-out_infinite_reverse,aurora-5_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-5))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute bottom-1/4 right-0 h-[20vw] w-[20vw] animate-[aurora-border_6s_ease-in-out_infinite_reverse,aurora-1_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-1))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[15vw] w-[15vw] animate-[aurora-border_6s_ease-in-out_infinite,aurora-2_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-2))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 h-[15vw] w-[15vw] animate-[aurora-border_6s_ease-in-out_infinite_reverse,aurora-3_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-3))] mix-blend-overlay blur-[1rem]"></span>
      </span>
    </MotionComponent>
  );
}
