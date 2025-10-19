"use client"
import { useEffect, useRef, useState } from "react"
import { Users, TrendingUp, DollarSign, Star, Building2 } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 24000,
    suffix: "+",
    label: "Career Transitions",
    sublabel: "",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    value: 76.3,
    suffix: "%",
    label: "Avg Salary Hike",
    sublabel: "",
    color: "from-purple-500 to-pink-500",
    decimal: true
  },
  {
    icon: DollarSign,
    value: 350,
    suffix: "%",
    label: "Highest Salary Hike",
    sublabel: "",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Star,
    value: 4.5,
    suffix: "+",
    label: "Average Rating",
    sublabel: "",
    color: "from-yellow-500 to-orange-500",
    decimal: true
  },
  {
    icon: Building2,
    value: 450,
    suffix: "+",
    label: "Industry Partners",
    sublabel: "",
    color: "from-green-500 to-emerald-500"
  }
]

function StatCard({ stat, index }: { stat: typeof stats[0], index: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, stat.value])

  const Icon = stat.icon

  return (
    <div
      ref={cardRef}
      className="group relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`
      }}
    >
      {/* Glow effect */}
      <div 
        className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700`}
      />
      
      {/* Card */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 overflow-hidden border border-slate-700/50 group-hover:border-transparent transition-all duration-500 group-hover:scale-105">
        {/* Animated background pattern */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 50px'
          }}
        />
        
        {/* Shine effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'shine 3s infinite'
          }}
        />

        {/* Icon */}
        <div className="relative mb-6">
          <div 
            className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
          >
            <Icon className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Number */}
        <div className="relative mb-3">
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {stat.decimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
            <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.suffix}
            </span>
          </h3>
        </div>

        {/* Labels */}
        <div className="relative">
          <p className="text-xl font-semibold text-slate-200 leading-tight">
            {stat.label}
          </p>
          {stat.sublabel && (
            <p className="text-lg text-slate-400 mt-1">
              {stat.sublabel}
            </p>
          )}
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-full blur-2xl`} />
        </div>
      </div>
    </div>
  )
}

export default function StatsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <style>{`
        @keyframes shine {
          0% { background-position: -200% -200%; }
          100% { background-position: 200% 200%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
      
      <section 
        ref={sectionRef}
        className="relative py-24 px-4 md:px-6 overflow-hidden bg-gradient-to-b bg-gradient-to-b from-[#f0f8ff] via-[#e9f3ff] to-[#dfefff]"
      >
        {/* Animated gradient orbs */}
        <div 
          className="pointer-events-none absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #3b82f6, transparent)',
            left: `${mousePosition.x - 250}px`,
            top: `${mousePosition.y - 250}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="pointer-events-none absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #f97316, transparent)',
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
            transition: 'all 0.5s ease-out'
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-orange-300 mb-4">
              Our Impact in{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Numbers
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Join thousands of successful students who transformed their careers with us
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Bottom decoration */}
          <div className="mt-20 flex items-center justify-center gap-4 text-slate-500">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-slate-700" />
            <span className="text-sm font-medium">Trusted by industry leaders worldwide</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-slate-700" />
          </div>
        </div>
      </section>
    </>
  )
}