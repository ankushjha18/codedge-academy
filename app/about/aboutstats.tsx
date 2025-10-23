"use client"

import { useState, useEffect, useRef } from "react"
import { Award, Users, Eye, TrendingUp } from "lucide-react"

const stats = [
  { number: 95, suffix: "LPA", label: "Highest CTC", icon: Award, color: "#ff914d" },
  { number: 350, suffix: "%", label: "Salary Hike", icon: Users, color: "#723fa3" },
  { number: 30, suffix: "LPA", label: "Average CTC", icon: Eye, color: "#4da4e0" },
  { number: 12, suffix: "k+", label: "Industry Ties", icon: TrendingUp, color: "#b4b4b4" },
]


// ✅ Props type for AnimatedCounter
interface AnimatedCounterProps {
    endValue: number
    suffix?: string
    duration?: number
    startAnimation: boolean
  }
  
function AnimatedCounter({ endValue, suffix = "", duration = 2000, startAnimation }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!startAnimation) return
    
    let startTime : number | null = null
    let animationFrame: number
    
    const animate = (timestamp:number) => {
      if (!startTime) startTime = timestamp
      
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      
      setCount(Math.floor(endValue * easeOutCubic))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [endValue, duration, startAnimation])
  
  return <span>{count}{suffix}</span>
}

// ✅ Stat type
interface Stat {
    number: number
    suffix?: string
    label: string
    icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>
    color: string
  }
  
  interface StatCardProps {
    stat: Stat
    index: number
    isVisible: boolean
  }
  

function StatCard({ stat, index, isVisible }: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="  group relative overflow-hidden rounded-3xl p-5 transition-all duration-500 hover:scale-105"
      style={{
        background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}25 100%)`,
        border: `2px solid ${stat.color}30`,
        animationDelay: `${index * 200}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}40 50%, ${stat.color}20 100%)`,
          backgroundSize: '200% 200%',
          animation: isHovered ? 'gradientShift 3s ease infinite' : 'none'
        }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-1000"
            style={{
              backgroundColor: stat.color,
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animation: isHovered ? `float ${2 + i * 0.5}s ease-in-out infinite ${i * 0.2}s` : 'none'
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div 
            className="relative p-4 rounded-2xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
            style={{ backgroundColor: `${stat.color}20` }}
          >
            <stat.icon 
              size={40} 
              style={{ color: stat.color }}
              className="transition-all duration-500 group-hover:drop-shadow-lg"
            />
            
            {/* Icon glow effect */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle, ${stat.color}30 0%, transparent 70%)`,
                animation: isHovered ? 'pulse 2s ease-in-out infinite' : 'none'
              }}
            />
          </div>
        </div>
        
        {/* Number */}
        <div className="text-center mb-4">
          <div 
            className="text-5xl font-bold transition-all duration-500 group-hover:scale-110"
            style={{ color: stat.color }}
          >
            <AnimatedCounter 
              endValue={stat.number} 
              suffix={stat.suffix}
              startAnimation={isVisible}
            />
          </div>
        </div>
        
        {/* Label */}
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            {stat.label}
          </p>
        </div>
        
        {/* Progress bar */}
        <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{ 
              backgroundColor: stat.color,
              width: isVisible ? '100%' : '0%',
              transitionDelay: `${index * 200 + 500}ms`
            }}
          />
        </div>
      </div>
      
      {/* Corner accent */}
      <div 
        className="absolute -top-2 -right-2 w-20 h-20 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: stat.color }}
      />
    </div>
  )
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
      `}</style>
      
      <section ref={sectionRef} className="relative py-10 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-5 bg-gradient-to-r from-purple-500 to-blue-500" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-5 bg-gradient-to-r from-orange-500 to-purple-500" />
        </div>
        
        <div className="container mx-auto px-14 relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Placement's Hightlights
            </h2>
           {/*} <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the numbers that showcase our commitment to excellence and client satisfaction
            </p> */}
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard 
                key={index} 
                stat={stat} 
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}