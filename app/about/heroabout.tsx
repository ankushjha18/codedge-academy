'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AboutHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-black via-black-800 to-black overflow-hidden flex items-center"
      style={{
        scrollBehavior: 'smooth'
      }}
    >
      {/* Animated Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs with smooth parallax */}
        <div
          className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl transition-transform duration-300 ease-out"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translateY(${scrollY * 0.3}px)`
          }}
        />
        <div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transition-transform duration-300 ease-out"
          style={{
            bottom: '10%',
            right: '10%',
            transform: `translate(-${mousePosition.x * 0.03}px, -${mousePosition.y * 0.03}px) translateY(${scrollY * 0.2}px)`
          }}
        />
        <div
          className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl transition-transform duration-300 ease-out"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px) translateY(${scrollY * 0.25}px)`
          }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `perspective(500px) rotateX(60deg) translateY(${scrollY * 0.1}px)`
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
              animation: `shimmer ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div 
            className="space-y-8"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          >
            {/* Badge /}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-white/90 text-sm font-semibold">
                Transforming Lives Since 2020
              </span>
            </div>

            {/* Main Heading */}
            <div
              className={`space-y-2 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <div className="text-white">Creating</div>
                <div className="text-white">Impact</div>
                <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Through Outcomes
                </div>
              </h1>
            </div>

            {/* Description */}
            <p
              className={`text-lg text-blue-100/90 leading-relaxed max-w-xl transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Discover and connect with alumni who have walked the same path as you. 
              We empower aspiring tech professionals to transform their careers through 
              world-class training and mentorship.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex items-center gap-4 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Review
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Watch Story
              </button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div
            className={`relative transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            <div className="relative flex items-center justify-center">
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 hover:scale-105 transition-transform duration-500">
                {/* Lightbulb Circle */}
                <div className="relative">
                  <div className="w-60 h-60 mx-auto bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-orange-500/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-transparent animate-pulse" />
                    
                    {/* Lightbulb Icon */}
                    <svg className="w-32 h-32 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
                    </svg>
                    
                    {/* Lightning Bolts */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1.5 h-6 bg-yellow-400 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: 'center',
                          transform: `rotate(${i * 45}deg) translateY(-140px)`,
                          animation: `pulse ${1 + i * 0.1}s ease-in-out infinite alternate`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Team Members Sitting Around Table */}
                <div className="flex justify-center gap-6 mt-12">
                  {[...Array(4)].map((_, i) => {
                    const colors = [
                      'from-blue-400 to-blue-600',
                      'from-pink-400 to-pink-600',
                      'from-purple-400 to-purple-600',
                      'from-green-400 to-green-600'
                    ];
                    return (
                      <div
                        key={i}
                        className={`w-16 h-24 bg-gradient-to-br ${colors[i]} rounded-2xl shadow-lg`}
                        style={{
                          animation: `bounce 2s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    );
                  })}
                </div>

                {/* Decorative Plant */}
                <div className="absolute bottom-8 left-8 w-12 h-16 bg-gradient-to-t from-green-600 to-green-400 rounded-lg opacity-80" />

                {/* Decorative Floating Elements */}
                <div className="absolute top-8 left-8 w-8 h-8 bg-cyan-400/50 rounded-full animate-ping" />
                <div className="absolute bottom-12 right-12 w-6 h-6 bg-pink-400/50 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/3 right-8 w-4 h-4 bg-yellow-400/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          opacity: Math.max(0, 1 - scrollY / 100)
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}