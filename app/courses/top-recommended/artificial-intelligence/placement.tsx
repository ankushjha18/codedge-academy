"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Code, Zap, Briefcase, Users, Award, TrendingUp, CheckCircle, Target, Headphones } from 'lucide-react';

export default function PlacementSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Code,
      title: "Real-World Hands-On Experience",
      description: "Build production-ready applications with React, Node.js, and modern frameworks in actual business environments.",
      color: "from-orange-500 to-orange-600",
      position: { x: -100, y: 50 }
    },
    {
      icon: Zap,
      title: "Master Top Industry Tools",
      description: "Gain expertise in Next.js, TypeScript, MongoDB, Docker, and advanced DevOps frameworks.",
      color: "from-blue-500 to-blue-600",
      position: { x: 100, y: -30 }
    },
    {
      icon: Briefcase,
      title: "31+ Case Studies & Projects",
      description: "Work on mini, mega, and live projects to apply real-world problem-solving techniques.",
      color: "from-orange-600 to-orange-700",
      position: { x: -80, y: -40 }
    },
    {
      icon: TrendingUp,
      title: "145+ Hours of Expert Learning",
      description: "Learn directly from 12 global MLOps professionals, including FAANG leaders.",
      color: "from-blue-600 to-blue-700",
      position: { x: 120, y: 60 }
    },
    {
      icon: Users,
      title: "Personalized Expert Mentorship",
      description: "Receive 1:1 guidance and career insights from senior full-stack developers and tech leads.",
      color: "from-orange-500 to-orange-600",
      position: { x: -90, y: 30 }
    },
    {
      icon: Target,
      title: "Career-Focused Practical Skills",
      description: "Build job-ready skills aligned with top hiring companies in web development and tech.",
      color: "from-blue-500 to-blue-600",
      position: { x: 110, y: -50 }
    }
  ];

  const highlights = [
    { icon: CheckCircle, text: "76+ Quizzes and 29+ Assignments", color: "text-orange-500" },
    { icon: Users, text: "Personalized 1:1 Mentorship", color: "text-blue-500" },
    { icon: Headphones, text: "24/7 Career Support", color: "text-orange-500" }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden py-20 px-4">
      {/* Cinematic Background with Film Grain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-film-grain opacity-[0.03]" />
        
        {/* Cinematic light rays */}
        <div 
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-orange-500/40 via-transparent to-transparent blur-xl"
          style={{
            transform: `translateX(${scrollY * 100}px) scaleY(${0.5 + scrollY * 0.5})`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-blue-500/40 via-transparent to-transparent blur-xl"
          style={{
            transform: `translateX(${-scrollY * 100}px) scaleY(${0.5 + scrollY * 0.5})`,
            transition: 'transform 0.3s ease-out'
          }}
        />

        {/* Floating cinematic particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${i % 2 === 0 ? 'bg-orange-400' : 'bg-blue-400'} rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `cinematicFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.4,
              filter: 'blur(1px)'
            }}
          />
        ))}

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Cinematic Header with Zoom Effect */}
        <div 
          className="text-center mb-20 space-y-6"
          style={{
            transform: `scale(${0.8 + scrollY * 0.2})`,
            opacity: scrollY,
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease-out'
          }}
        >
          <div className="relative inline-block">
            {/* Cinematic text with chromatic aberration effect */}
            <h2 className="relative text-6xl md:text-7xl font-black mb-4">
              <span className="absolute inset-0 text-orange-500 blur-sm" style={{ transform: 'translate(-2px, 0)' }}>
                From Learning to Placement
              </span>
              <span className="absolute inset-0 text-blue-500 blur-sm" style={{ transform: 'translate(2px, 0)' }}>
                From Learning to Placement
              </span>
              <span className="relative bg-gradient-to-r from-orange-400 via-white to-blue-400 bg-clip-text text-transparent">
                From Learning to Placement
              </span>
            </h2>
            
            {/* Animated underline with film strip effect */}
            <div className="relative h-2 mt-4 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 animate-filmStrip" />
              <div className="absolute inset-0 flex gap-2">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-1 bg-black/30" />
                ))}
              </div>
            </div>
          </div>
          
          <p 
            className="text-2xl md:text-3xl text-slate-300 font-light tracking-wider"
            style={{
              animation: 'fadeInText 1s ease-out 0.5s both'
            }}
          >
            We've got you <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">covered</span>
          </p>
        </div>

        {/* Features Grid with Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <CinematicCard
              key={index}
              feature={feature}
              index={index}
              scrollY={scrollY}
            />
          ))}
        </div>

        {/* Cinematic Highlights Bar */}
        <div 
          className="relative"
          style={{
            transform: `translateY(${(1 - scrollY) * 50}px)`,
            opacity: scrollY,
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-blue-500/30 to-orange-500/30 blur-2xl animate-pulse" />
          <div className="relative backdrop-blur-md bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-orange-500/20 border-t-blue-500/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
            {/* Film strip border effect */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 animate-filmStrip" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 animate-filmStrip" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-500 hover:bg-slate-800/50 cursor-pointer overflow-hidden"
                  style={{
                    animation: `slideInCinematic 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.2 + 1}s both`
                  }}
                >
                  {/* Spotlight effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`relative p-3 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 ${highlight.color} group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <p className="relative text-lg font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                    {highlight.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes cinematicFloat {
          0%, 100% { 
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-30px) translateX(15px) scale(1.2);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-50px) translateX(-15px) scale(0.8);
            opacity: 0.8;
          }
          75% { 
            transform: translateY(-30px) translateX(20px) scale(1.1);
            opacity: 0.5;
          }
        }
        
        @keyframes filmStrip {
          0% { transform: translateX(0); }
          100% { transform: translateX(20px); }
        }
        
        @keyframes slideInCinematic {
          0% {
            opacity: 0;
            transform: translateX(-100px) scale(0.8);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }
        
        @keyframes fadeInText {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        
        @keyframes cardEntrance {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateX(-20deg) translateY(50px) scale(0.8);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateX(0) translateY(0) scale(1);
            filter: blur(0);
          }
        }
        
        .animate-filmStrip {
          animation: filmStrip 2s linear infinite;
        }
        
        .bg-film-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        .bg-radial-vignette {
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}
interface CinematicCardProps {
  feature: {
    icon: React.ElementType;
    title: string;
    description: string;
     color?: string;
  };
  index: number;
  scrollY: number;
}


function CinematicCard({ feature, index, scrollY }: CinematicCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;
  
  const cardDelay = index * 0.15;
  const cardProgress = Math.max(0, Math.min(1, (scrollY - cardDelay) * 2));

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `cardEntrance 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${cardDelay}s both`,
        transform: `translateY(${(1 - cardProgress) * 100}px)`,
        opacity: cardProgress
      }}
    >
      {/* Cinematic glow with lens flare effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`} 
        style={{
          animation: isHovered ? 'pulse 2s ease-in-out infinite' : 'none'
        }}
      />
      
      {/* Lens flare effect */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-all duration-700 group-hover:scale-150`} />
      
      {/* Card */}
      <div
        className="relative h-full bg-gradient-to-br from-slate-900/95 to-black/95 backdrop-blur-sm border border-slate-800 group-hover:border-slate-700 rounded-2xl p-8 transition-all duration-700 cursor-pointer overflow-hidden shadow-2xl"
        style={{
          transform: isHovered ? 'translateZ(50px) scale(1.05)' : 'translateZ(0) scale(1)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Scanning light effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            animation: isHovered ? 'scan 2s ease-in-out infinite' : 'none'
          }}
        />

        {/* Icon with cinematic entrance */}
        <div className={`relative mb-6 inline-block p-4 rounded-xl bg-gradient-to-br ${feature.color} transform transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 shadow-lg`}
          style={{
            boxShadow: isHovered ? '0 20px 60px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.3)'
          }}
        >
          <Icon className="w-8 h-8 text-white" />
          <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content with typewriter effect on hover */}
        <h3 className="relative text-2xl font-bold text-white mb-4 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-blue-400">
          {feature.title}
        </h3>
        <p className="relative text-slate-400 leading-relaxed group-hover:text-slate-200 transition-all duration-500">
          {feature.description}
        </p>

        {/* Corner spotlight */}
        <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full opacity-20 blur-2xl group-hover:scale-200 transition-all duration-1000`} />
        
        {/* Film strip decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

<style jsx>{`
  @keyframes scan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`}</style>