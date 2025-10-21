"use client";
import React, { useState, useEffect } from 'react';
import { Briefcase, Brain, Settings, Users, Download, ArrowRight, Sparkles, Star } from 'lucide-react';

export default function CareerSupport() {
  const [hoveredCard, setHoveredCard] = useState<number|null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  interface Ripple {
  x: number;
  y: number;
  id: number;
}
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const services = [
    {
      id: 1,
      icon: Briefcase,
      title: 'Resume Building & LinkedIn Optimization',
      description: 'Professional resume crafting and LinkedIn profile enhancement',
      color: 'from-orange-500 to-amber-500',
      particles: ['📝', '💼', '✨']
    },
    {
      id: 2,
      icon: Brain,
      title: 'Mock Interviews with Industry Mentors',
      description: 'Practice with real industry experts to ace your interviews',
      color: 'from-orange-500 to-red-500',
      particles: ['🎯', '💡', '🚀']
    },
    {
      id: 3,
      icon: Settings,
      title: 'Portfolio and GitHub Review',
      description: 'Get expert feedback on your technical portfolio',
      color: 'from-amber-500 to-orange-600',
      particles: ['⚙️', '💻', '🔧']
    },
    {
      id: 4,
      icon: Users,
      title: 'Hiring & Referral Network Access',
      description: 'Connect with hiring managers and get direct referrals',
      color: 'from-orange-600 to-red-500',
      particles: ['🤝', '🌟', '👥']
    }
  ];

  const handleCardHover = (e:React.MouseEvent<HTMLDivElement>, cardId:number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const createRipple = (e:React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now()
    };
    setRipples(prev => [...prev, ripple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Floating Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        </div>

        {/* Header Section */}
        <div className="relative text-center mb-16 animate-fadeIn">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Sparkles className="w-32 h-32 text-orange-500 animate-pulse" />
          </div>
          <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-orange-900 to-slate-900 animate-gradient">
            Career Support
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full animate-expand"></div>
          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-orange-500 animate-twinkle"
                style={{ animationDelay: `${i * 0.2}s` }}
                fill="currentColor"
              />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse-slow"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.03] group-hover:rotate-1 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                alt="Career Support Team"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-amber-500/20"></div>
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full animate-sparkle"
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${10 + i * 30}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredCard === service.id;
              return (
                <div
                  key={service.id}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onMouseMove={(e) => handleCardHover(e, service.id)}
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className={`
                    relative bg-white rounded-2xl p-6 h-full
                    border-2 
                    shadow-lg hover:shadow-2xl
                    transform hover:-translate-y-3 hover:rotate-1
                    transition-all duration-500
                    ${isHovered ? 'border-orange-500 shadow-orange-200' : 'border-transparent'}
                    overflow-hidden
                  `}>
                    {/* Animated Gradient Border */}
                    <div className={`
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                      bg-gradient-to-r ${service.color}
                      transition-opacity duration-500
                      animate-rotate-gradient
                    `} style={{ padding: '2px', zIndex: -1 }}></div>

                    {/* Gradient Background on Hover */}
                    <div className={`
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10
                      bg-gradient-to-br ${service.color}
                      transition-opacity duration-500
                    `}></div>

                    {/* Spotlight Effect */}
                    {isHovered && (
                      <div
                        className="absolute inset-0 opacity-30 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)`
                        }}
                      ></div>
                    )}

                    {/* Floating Particles */}
                    {isHovered && service.particles.map((particle, i) => (
                      <div
                        key={i}
                        className="absolute text-2xl animate-float-particle pointer-events-none"
                        style={{
                          top: `${20 + i * 25}%`,
                          left: `${80 + i * 5}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      >
                        {particle}
                      </div>
                    ))}
                    
                    {/* Icon */}
                    <div className={`
                      relative w-16 h-16 rounded-xl mb-4
                      bg-gradient-to-br ${service.color}
                      flex items-center justify-center
                      transform group-hover:scale-125 group-hover:rotate-12
                      transition-all duration-500
                      shadow-lg group-hover:shadow-2xl
                    `}>
                      <Icon className="w-8 h-8 text-white group-hover:animate-bounce" />
                      
                      {/* Icon Glow */}
                      <div className={`
                        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-75
                        bg-gradient-to-br ${service.color}
                        blur-xl transition-opacity duration-500
                      `}></div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 group-hover:tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow Icon with Trail */}
                    <div className={`
                      absolute bottom-6 right-6
                      transform translate-x-2 opacity-0
                      group-hover:translate-x-0 group-hover:opacity-100
                      transition-all duration-500
                    `}>
                      <ArrowRight className="w-5 h-5 text-orange-500 group-hover:animate-pulse" />
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${service.color} opacity-20 rounded-bl-full`}></div>
                    </div>
                  </div>

                  {/* Card Shadow Glow */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50
                    bg-gradient-to-br ${service.color}
                    blur-2xl -z-10 transition-opacity duration-500
                    animate-pulse-slow
                  `}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center">
          <button 
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-1 transition-all duration-300 overflow-hidden bg-size-200 animate-gradient-shift "
            onClick={createRipple}
          >
            <span className="relative z-10 flex items-center gap-3">
              Download Brochure
              <Download className="w-5 h-5 group-hover:animate-bounce" />
            </span>
            
            {/* Ripple Effects */}
            {ripples.map(ripple => (
              <span
                key={ripple.id}
                className="absolute rounded-full bg-white animate-ripple"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: 10,
                  height: 10,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
            
            {/* Shine Effect */}
            <div className=" absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full  transition-transform duration-1000"></div>

            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(-10px);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0;
          }
        }

        @keyframes ripple {
          to {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes rotate-gradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-expand {
          animation: expand 1s ease-out;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 2s ease-out forwards;
        }

        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }

        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }

        .animate-rotate-gradient {
          animation: rotate-gradient 3s linear infinite;
        }

        .bg-size-200 {
          background-size: 200% 200%;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
