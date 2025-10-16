"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  delayMs?: number
  as?: keyof JSX.IntrinsicElements
}

export default function AnimatedSection({
  children,
  className,
  delayMs = 0,
  as: Tag = "section",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true)
        })
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as any}
      className={cn(
        "will-change-transform will-change-opacity transition-all",
        inView ? "animate-fade-up" : "opacity-0 translate-y-3",
        className,
      )}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </Tag>
  )
}
