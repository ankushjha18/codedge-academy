"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Award, Star } from "lucide-react"

type HeroProps = {
  eyebrow?: string
  title: string
  subtitle: string
  ctaHref?: string
  ctaLabel?: string
}

export function Hero({ 
  eyebrow = "Transform Your Future", 
  title = "Master In-Demand Skills with Expert-Led Courses", 
  subtitle = "Join thousands of students learning cutting-edge technology skills from industry professionals. Get certified, build projects, and accelerate your career with personalized learning paths.",
  ctaHref = "/enroll", 
  ctaLabel = "Start Learning Today" 
}: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<{ left: string; top: string; delay: string; duration: string }[]>([]);

useEffect(() => {
  const newParticles = Array.from({ length: 15 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    duration: `${3 + Math.random() * 4}s`,
  }));
  setParticles(newParticles);
}, []);


  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const parallaxOffset = scrollY * 0.5

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .text-gradient {
          background: linear-gradient(135deg, var(--brand-orange), var(--brand-blue), var(--brand-orange));
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 6s ease infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animated-gradient {
          background: linear-gradient(135deg, var(--brand-orange), var(--brand-blue));
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>
      
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated gradient orbs with enhanced glow */}
        <div 
          className="pointer-events-none absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-40 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, var(--brand-orange), var(--brand-blue), transparent)',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            animation: 'pulse 8s ease-in-out infinite'
          }}
          aria-hidden
        />
        <div 
          className="pointer-events-none absolute bottom-[-15%] left-[-10%] w-[800px] h-[800px] rounded-full opacity-40 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, var(--brand-blue), var(--brand-orange), transparent)',
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
            animation: 'pulse 8s ease-in-out infinite 1s'
          }}
          aria-hidden
        />
        <div 
          className="pointer-events-none absolute top-[40%] left-[50%] w-[500px] h-[500px] rounded-full opacity-30 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, var(--brand-orange), transparent)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            animation: 'pulse 8s ease-in-out infinite 2s'
          }}
          aria-hidden
        />

        {/* Animated grid pattern */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(color-mix(in oklch, var(--color-foreground) 10%, transparent) 1.5px, transparent 1.5px),
                             linear-gradient(90deg, color-mix(in oklch, var(--color-foreground) 10%, transparent) 1.5px, transparent 1.5px)`,
            backgroundSize: '60px 60px',
            transform: `translateY(${parallaxOffset}px)`,
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black, transparent)'
          }}
          aria-hidden
        />

        {/* Floating particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="pointer-events-none absolute w-1 h-1 bg-[var(--brand-orange)] rounded-full opacity-40"
            style={{
              left: p.left,
              top: p.top,
              animation: `float ${p.duration} ease-in-out infinite ${p.delay}`,
            }}
            aria-hidden
          />
        ))}


        {/* Floating stat cards */}
        <div 
          className="hidden lg:block absolute top-[15%] right-[8%] bg-background/60 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl hover:shadow-[0_20px_60px_color-mix(in_oklch,var(--brand-orange)_30%,transparent)] transition-all duration-500 hover:scale-110"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)`,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease-out 1.8s'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-blue)] flex items-center justify-center shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient">50K+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
          </div>
        </div>

        <div 
          className="hidden lg:block absolute bottom-[20%] right-[12%] bg-background/60 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl hover:shadow-[0_20px_60px_color-mix(in_oklch,var(--brand-blue)_30%,transparent)] transition-all duration-500 hover:scale-110"
          style={{
            transform: `translateY(${Math.sin((scrollY + 100) * 0.01) * 20}px)`,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease-out 2s'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-orange)] flex items-center justify-center shadow-lg">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        <div 
          className="hidden lg:block absolute top-[40%] left-[5%] bg-background/60 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl hover:shadow-[0_20px_60px_color-mix(in_oklch,var(--brand-orange)_30%,transparent)] transition-all duration-500 hover:scale-110"
          style={{
            transform: `translateY(${Math.sin((scrollY + 200) * 0.01) * 20}px)`,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease-out 2.2s'
          }}
        >
  {/*        <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-blue)] flex items-center justify-center shadow-lg">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient">200+</div>
              <div className="text-sm text-muted-foreground">Courses</div>
            </div>
          </div>*/}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {eyebrow && (
              <div 
                className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[color-mix(in_oklch,var(--brand-orange)_15%,transparent)] to-[color-mix(in_oklch,var(--brand-blue)_15%,transparent)] border border-[color-mix(in_oklch,var(--brand-orange)_30%,transparent)] hover:scale-105 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                  transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
                }}
              >
                <Sparkles className="w-4 h-4 text-[var(--brand-orange)] animate-pulse" />
                <p className="text-sm font-semibold tracking-wide text-foreground">{eyebrow}</p>
              </div>
            )}
            
            <h1 
              className="text-balance text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight"
              style={{
                transform: `translateY(${-parallaxOffset * 0.3}px)`
              }}
            >
              {title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-3 md:mr-4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                    transition: `opacity 0.6s ease-out ${0.4 + index * 0.1}s, transform 0.6s ease-out ${0.4 + index * 0.1}s`
                  }}
                >
                  <span className="text-gradient hover:scale-105 inline-block transition-transform duration-300">
                    {word}
                  </span>
                </span>
              ))}
            </h1>
            
            <p 
              className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed text-muted-foreground font-light"
              style={{
                transform: `translateY(${-parallaxOffset * 0.2}px)`,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s ease-out 1.2s, transform 0.8s ease-out 1.2s'
              }}
            >
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div 
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease-out 1.5s, transform 0.8s ease-out 1.5s'
              }}
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden animated-gradient text-white font-semibold px-10 py-7 text-lg rounded-2xl shadow-[0_10px_40px_color-mix(in_oklch,var(--brand-orange)_30%,transparent)] hover:shadow-[0_20px_60px_color-mix(in_oklch,var(--brand-orange)_50%,transparent)] hover:scale-105 transition-all duration-500"
              >
                <Link href={ctaHref} className="flex items-center gap-2">
                  <span className="relative z-10">{ctaLabel}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group relative overflow-hidden font-semibold px-10 py-7 text-lg rounded-2xl border-2 hover:border-[var(--brand-orange)] hover:shadow-[0_10px_40px_color-mix(in_oklch,var(--brand-orange)_25%,transparent)] hover:scale-105 transition-all duration-500"
              >
                <Link href="/courses" className="flex items-center gap-2">
                  <div className="relative z-10 w-11 h-11 rounded-full border-2 border-[var(--brand-orange)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Play className="w-5 h-5 text-[var(--brand-orange)] fill-[var(--brand-orange)]" />
                  </div>
                  <span className="relative z-10">Watch Demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[color-mix(in_oklch,var(--brand-orange)_10%,transparent)] to-[color-mix(in_oklch,var(--brand-blue)_10%,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div 
              className="mt-20 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s ease-out 1.8s'
              }}
            >
              <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-blue)] border-2 border-background shadow-lg"
                      style={{
                        animation: `float ${2 + i * 0.5}s ease-in-out infinite ${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                <span className="font-medium">Join 50,000+ students</span>
              </div>
              
              <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-300">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-[var(--brand-orange)] text-[var(--brand-orange)]"
                      style={{
                        animation: `float ${2 + i * 0.3}s ease-in-out infinite ${i * 0.15}s`
                      }}
                    />
                  ))}
                </div>
                <span className="font-medium ml-2">4.9/5 (2,340 reviews)</span>
              </div>

              <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-[var(--brand-orange)]" />
                <span className="font-medium">Industry Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero