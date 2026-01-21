"use client"

import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  TrendingUp,
  Shield,
  HeartPulse,
  TrainFront,
  Briefcase,
  GraduationCap,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Key topics with icons - links to dedicated temas-clave page
const temasDestacados = [
  { id: "costo-vida", label: "Costo de Vida", icon: TrendingUp },
  { id: "seguridad", label: "Seguridad", icon: Shield },
  { id: "salud", label: "Salud", icon: HeartPulse },
  { id: "infraestructura", label: "Transporte", icon: TrainFront },
  { id: "empleo", label: "Empleo", icon: Briefcase },
  { id: "educacion", label: "Educación", icon: GraduationCap },
  { id: "ambiente", label: "Ambiente", icon: Leaf },
]

interface TemasClaveProps {
  className?: string
}

export function TemasKlave({ className }: TemasClaveProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftFade, setShowLeftFade] = useState(false)
  const [showRightFade, setShowRightFade] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const checkScroll = () => {
      setShowLeftFade(el.scrollLeft > 0)
      setShowRightFade(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
    }

    checkScroll()
    el.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)

    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const scrollLeft = () => {
    const el = scrollRef.current
    if (el) {
      el.scrollBy({ left: -150, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    const el = scrollRef.current
    if (el) {
      el.scrollBy({ left: 150, behavior: "smooth" })
    }
  }

  return (
    <div className={cn("relative", className)}>
      {/* Left fade indicator and arrow */}
      {showLeftFade && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent" />
          <button
            onClick={scrollLeft}
            className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-card p-1.5 shadow-md transition-colors hover:bg-foreground hover:text-background hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Right fade indicator and arrow */}
      {showRightFade && (
        <>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent" />
          <button
            onClick={scrollRight}
            className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-card p-1.5 shadow-md transition-colors hover:bg-foreground hover:text-background hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto px-1 py-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {temasDestacados.map((tema) => {
          const Icon = tema.icon

          return (
            <Link
              key={tema.id}
              href={`/temas-clave?tema=${tema.id}`}
              className="group flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium transition-all hover:border-foreground hover:bg-foreground hover:text-background"
            >
              <Icon className="h-4 w-4" />
              {tema.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
