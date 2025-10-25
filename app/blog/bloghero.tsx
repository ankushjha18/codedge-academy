"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, BookOpen, Pen, Coffee } from 'lucide-react';

export default function BlogHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement|null>(null);

  const words = ['Stories', 'Ideas', 'Insights', 'Inspiration'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const _canvas = canvas;
     const _ctx = ctx; 
    const particles: Particle[] = [];
    const particleCount = 50;


    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(167, 139, 250, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e:React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-black-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating 3D-like Cards */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-10 w-48 h-64 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border border-white/10 transform rotate-12 animate-float-slow"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(12deg)` }}
        >
          <div className="p-6">
            <BookOpen className="w-8 h-8 text-blue-300 mb-3" />
            <div className="space-y-2">
              <div className="h-2 bg-white/20 rounded w-3/4"></div>
              <div className="h-2 bg-white/20 rounded w-full"></div>
              <div className="h-2 bg-white/20 rounded w-2/3"></div>
            </div>
          </div>
        </div>

        <div 
          className="absolute bottom-32 left-10 w-40 h-56 bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 transform -rotate-6 animate-float-medium"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(-6deg)` }}
        >
          <div className="p-5">
            <Pen className="w-7 h-7 text-blue-300 mb-3" />
            <div className="space-y-2">
              <div className="h-2 bg-white/20 rounded w-2/3"></div>
              <div className="h-2 bg-white/20 rounded w-full"></div>
              <div className="h-2 bg-white/20 rounded w-3/4"></div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/3 w-24 h-24 border-2 border-blue-400 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border-2 border-orange-400 rounded-full animate-ping-slow"></div>
        <div className="absolute top-2/3 left-1/2 w-20 h-20 border-2 border-blue-400 rotate-45 animate-spin-reverse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-3 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-medium">Welcome to our blog</span>
            </div>
          </div>

          {/* Main Heading with Morphing Background */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-orange-600/20 to-blue-600/20 blur-3xl animate-morph"></div>
            <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold text-center animate-slide-up">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Discover Amazing
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  {words[currentWord]}
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 rounded-full animate-expand"></div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12 animate-fade-in-delay">
            Explore thought-provoking articles, cutting-edge insights, and captivating narratives that inspire innovation and creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delay-2">
            <button
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <div
                className="absolute inset-0 bg-white/20 rounded-full transition-all duration-300"
                style={{
                  opacity: isHovered ? 1 : 0,
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.3), transparent)`,
                }}
              ></div>
              <span className="relative flex items-center gap-2">
                Explore Articles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-full border-2 border-white/0 group-hover:border-white/30 transition-all duration-300 animate-ping-slow-subtle"></div>
            </button>

            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-orange-600/30 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-2">
                Latest Posts
                <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>

          {/* Feature Cards with Image Placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-delay-3">
            {[
              { icon: Zap, title: 'Fast Updates', desc: 'Daily fresh content', color: 'from-yellow-500/20 to-orange-500/20' },
              { icon: TrendingUp, title: 'Trending Topics', desc: 'What\'s hot right now', color: 'from-orange-500/20 to-rose-500/20' },
              { icon: Sparkles, title: 'Quality Reads', desc: 'Curated for you', color: 'from-blue-500/20 to-blue-500/20' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-orange-500/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll-indicator"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0) rotate(-6deg);
          }
          50% {
            transform: translateY(-30px) rotate(-6deg);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-40px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(-315deg);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }

        @keyframes scroll-indicator {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes expand {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-expand {
          transform-origin: left;
          animation: expand 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }

        .animate-fade-in-delay-3 {
          animation: fadeIn 0.8s ease-out 0.6s both;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        .animate-ping-slow-subtle {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}