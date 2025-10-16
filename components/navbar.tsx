"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      role="banner"
      className={cn("fixed inset-x-0 top-0 z-50 transition-colors", scrolled ? "glass border-b" : "bg-transparent")}
      aria-label="Site header"
    >
      {/* Animated gradient bottom border for uniqueness */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px animated-gradient opacity-60" aria-hidden />
      <nav className="mx-auto max-w-7xl px-4 md:px-6" aria-label="Primary">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Use Next/Image for responsive logo */}
            <Image src="/logo.png" alt="codedge academy" width={150} height={150} className="rounded-sm" priority />
            {/*<span className="font-semibold tracking-tight text-pretty group-hover:opacity-90 transition-opacity">
              EduPro
            </span> */}
          </Link>

          {/* Center/Right: Nav links */}
          <div className="hidden md:flex items-center gap-2">
            {/* Courses dropdown with nested submenus */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 rounded-md hover-raise transition-all">
                <span>Courses</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-64">
                <DropdownMenuLabel>Browse Courses</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* Web Development */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger><Link href="/courses/web-development">Web Development</Link></DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem asChild>
                      <Link href="/courses/web-development#overview">Overview</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/courses/web-development#curriculum">Curriculum</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/courses/web-development#pricing">Pricing</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* Data Science */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Data Science</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem asChild>
                      <Link href="/courses/data-science#overview">Overview</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/courses/data-science#curriculum">Curriculum</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/courses/data-science#pricing">Pricing</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* UI/UX Design */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>UI/UX Design</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem asChild>
                      <Link href="/courses/ui-ux#overview">Overview</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/courses/ui-ux#curriculum">Curriculum</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/courses/ui-ux#pricing">Pricing</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/courses">All Courses</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link className="px-3 py-2 rounded-md nav-underline transition-all" href="/review">
              Reviews
            </Link>
            <Link className="px-3 py-2 rounded-md nav-underline transition-all" href="/about">
              About
            </Link>
            <Link className="px-3 py-2 rounded-md nav-underline transition-all" href="/join">
              Join
            </Link>
          </div>

          {/* Enroll CTA */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="animated-gradient text-[color:var(--color-primary-foreground)] btn-glow"
              aria-label="Enroll"
            >
              <Link href="/enroll">Enroll</Link>
            </Button>
            {/* Mobile menu could be added later */}
          </div>
        </div>
      </nav>
    </header>
  )
}
