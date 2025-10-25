"use client"
import React, { useState, useEffect } from 'react';
import { Code2, Sparkles, Zap, Rocket, Award, TrendingUp } from 'lucide-react';

export default function WebDevHero() {
      interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);



  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Mouse follower glow */}
      <div
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
      />

      {/* Floating code elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float-slow">
        <div className="text-cyan-400 font-mono text-sm">&lt;div&gt;</div>
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-float-slow" style={{ animationDelay: '1s' }}>
        <div className="text-purple-400 font-mono text-sm">function()</div>
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 animate-float-slow" style={{ animationDelay: '2s' }}>
        <div className="text-blue-400 font-mono text-sm">const app =</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto  px-17 py-15 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left content */}
        <div className="flex-1 space-y-8 mb-12 lg:mb-0">
          {/* Logo/Brand /}
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Code2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">Codedge</h3>
              <p className="text-gray-400 text-sm">Academy</p>
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <div className="inline-block">
              <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Transform Your Career</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="text-white">Become a </span>
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text animate-gradient">
                Full Stack
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                Web Developer
              </span>
              <span className="text-white"> in 9 Months</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Master modern web development with hands-on projects, industry mentorship, 
              and guaranteed placement at top tech companies
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Award, text: 'Industry Certified', color: 'from-purple-500 to-pink-500' },
              { icon: TrendingUp, text: '100% Placement', color: 'from-cyan-500 to-blue-500' },
              { icon: Zap, text: 'Live Projects', color: 'from-blue-500 to-purple-500' }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex gap-1 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-1 group-hover:rotate-12 transition-transform duration-300`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-medium">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-white overflow-hidden hover:scale-105 transition-transform duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Enroll Now
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-8 py-4 bg-white/5 border border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              Download Syllabus
            </button>
          </div>

          {/* Stats /}
          <div className="flex gap-8 pt-4">
            {[
              { value: '5000+', label: 'Students Placed' },
              { value: '₹8.5L', label: 'Avg Package' },
              { value: '500+', label: 'Hiring Partners' }
            ].map((stat, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>*/}
        </div>

        {/* Right visual element */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* Floating cards */}
            <div className="relative w-full aspect-square">
              {/* Center glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
              
              {/* Tech stack cards */}
              {[
                { name: 'React', pos: 'top-0 left-1/2 -translate-x-1/2', delay: '0s', color: 'from-cyan-500 to-blue-500' },
                { name: 'Node.js', pos: 'top-1/4 right-0', delay: '0.5s', color: 'from-green-500 to-emerald-500' },
                { name: 'MongoDB', pos: 'bottom-1/4 right-0', delay: '1s', color: 'from-green-600 to-green-500' },
                { name: 'Next.js', pos: 'bottom-0 left-1/2 -translate-x-1/2', delay: '1.5s', color: 'from-gray-800 to-gray-700' },
                { name: 'TypeScript', pos: 'bottom-1/4 left-0', delay: '2s', color: 'from-blue-600 to-blue-500' },
                { name: 'Tailwind', pos: 'top-1/4 left-0', delay: '2.5s', color: 'from-cyan-400 to-cyan-500' }
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className={`absolute ${tech.pos} animate-float-orbit`}
                  style={{ animationDelay: tech.delay }}
                >
                  <div className={`group px-6 py-3 bg-gradient-to-r ${tech.color} rounded-full shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300 border border-white/20`}>
                    <span className="text-white font-semibold text-sm">{tech.name}</span>
                  </div>
                </div>
              ))}

              {/* Center element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow border-4 border-white/10">
                  <Code2 className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(5px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-orbit {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-orbit {
          animation: float-orbit 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}