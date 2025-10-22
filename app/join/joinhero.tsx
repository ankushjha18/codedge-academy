"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Users, Zap, Globe, Code, Brain, Rocket, Play } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotating images for dynamic visual
  const heroImages = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', // Team collaboration
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80', // Students learning
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', // Laptop coding
    'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&q=80', // Computer screen
  ];

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e:MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Rotate images every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  type FloatingIconProps = {
  icon: React.ElementType;   // component passed in (like a Lucide icon)
  delay: number;             // animation delay in seconds
  size: string;              // className for size (like "w-16 h-16")
  position: string;          // className for absolute position (like "top-10 left-20")
};

  const FloatingIcon = ({ icon: Icon, delay, size, position }:FloatingIconProps) => (
    <div
      className={`absolute ${position} animate-float`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '6s'
      }}
    >
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 animate-pulse`} />
        <div className={`relative ${size} bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl`}>
          <Icon className="text-white" size={size === 'w-16 h-16' ? 32 : 24} />
        </div>
      </div>
    </div>
  );
  type ParticleCircleProps = {  
    delay: number;    // animation delay in seconds
    size: string;     // className for size (like "w-2 h-2")
    position: string; // className for absolute position (like "top-10 left-20")
  };

  const ParticleCircle = ({ delay, size, position }:ParticleCircleProps) => (
    <div
      className={`absolute ${position} ${size} rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-20 animate-pulse`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    />
  );

  const stats = [
    { icon: Users, label: 'Active Learners', value: '50K+' },
    { icon: Code, label: 'Projects Completed', value: '10K+' },
    { icon: Globe, label: 'Countries', value: '100+' },
    { icon: Zap, label: 'Success Rate', value: '95%' }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Floating Particles */}
      <ParticleCircle delay={0} size="w-2 h-2" position="top-20 left-10" />
      <ParticleCircle delay={1} size="w-3 h-3" position="top-40 right-20" />
      <ParticleCircle delay={2} size="w-2 h-2" position="bottom-32 left-1/4" />
      <ParticleCircle delay={1.5} size="w-4 h-4" position="top-1/2 right-10" />

      {/* Floating Icons */}
      <FloatingIcon icon={Brain} delay={0} size="w-16 h-16" position="top-20 right-20 hidden lg:block" />
      <FloatingIcon icon={Code} delay={1} size="w-12 h-12" position="top-40 left-10 hidden lg:block" />
      <FloatingIcon icon={Rocket} delay={2} size="w-14 h-14" position="bottom-40 right-32 hidden lg:block" />
      <FloatingIcon icon={Sparkles} delay={1.5} size="w-12 h-12" position="bottom-32 left-20 hidden lg:block" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-white text-sm font-medium">Join 50,000+ Learners Worldwide</span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
              }}
            >
              <span className="block text-white mb-2">Transform Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Future with Us
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed transform transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Master cutting-edge technologies, build real-world projects, and launch your dream career in tech with expert guidance
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 transform transition-all duration-1000 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Join Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <Play className="w-5 h-5 fill-white" />
                </span>
              </button>
            </div>

            {/* Stats Grid - Mobile/Tablet */}
            <div
              className={`grid grid-cols-2 gap-4 lg:hidden transform transition-all duration-1000 delay-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <Icon className="w-6 h-6 text-blue-400 mb-2 mx-auto" />
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Motion Picture/Video Area */}
          <div
            className={`relative transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Main Video/Image Container */}
            <div className="relative group">
              {/* Glowing Background Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
              
              {/* Video/Image Frame */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-3 shadow-2xl overflow-hidden">
                {/* Rotating Images */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                  {heroImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Learning experience ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Play Button Overlay /}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="group/play relative w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/40 hover:scale-110 hover:bg-white/30 transition-all duration-300">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                    </button>
                  </div>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'w-8 bg-white' 
                            : 'w-1.5 bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Mini Cards */}
                <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-float hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">95%</div>
                      <div className="text-gray-300 text-xs">Success Rate</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-float animation-delay-2000 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">50K+</div>
                      <div className="text-gray-300 text-xs">Learners</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid - Desktop Only *}
            <div
              className={`hidden lg:grid grid-cols-2 gap-4 mt-8 transform transition-all duration-1000 delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {stats.slice(0, 4).map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-3">
                      <Icon className="w-8 h-8 text-blue-400" />
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>*/}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-24 sm:h-32"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            className="fill-white/5"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;