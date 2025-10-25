"use client"

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Mail, BookOpen } from 'lucide-react';

type NodeType = {
  id: number;
  x: number;
  y: number;
  delay: number;
};

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
 
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const newNodes = Array.from({ length: 30 }, (_, i) => ({
      id: i as number,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative min-h-screen bg-gradient-to-br from-black-950 via-black to-blue-900/20 overflow-hidden flex items-center justify-center">
        {/* Circuit Board Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Horizontal Lines */}
              <line x1="0" y1="50" x2="80" y2="50" stroke="rgb(0,0,255)" strokeWidth="2" opacity="0.5">
                <animate attributeName="x2" values="0;80;0" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="120" y1="50" x2="200" y2="50" stroke="rgb(0,0,255)" strokeWidth="2" opacity="0.5" />
              
              <line x1="50" y1="100" x2="150" y2="100" stroke="rgb(0,0,255)" strokeWidth="2" opacity="0.5">
                <animate attributeName="x2" values="50;150;50" dur="3s" repeatCount="indefinite" />
              </line>
              
              <line x1="0" y1="150" x2="100" y2="150" stroke="rgb(0,0,255)" strokeWidth="2" opacity="0.5" />
              <line x1="120" y1="150" x2="200" y2="150" stroke="rgb(0,0,255)" strokeWidth="2" opacity="0.5">
                <animate attributeName="x1" values="120;200;120" dur="5s" repeatCount="indefinite" />
              </line>
              
              {/* Vertical Lines */}
              <line x1="80" y1="0" x2="80" y2="80" stroke="rgb(0,0,255)" strokeWidth="2" opacity="0.5" />
              <line x1="80" y1="120" x2="80" y2="200" stroke="rgb(0,0,255)" strokeWidth="2" opacity="0.5">
                <animate attributeName="y2" values="120;200;120" dur="4s" repeatCount="indefinite" />
              </line>
              
              <line x1="150" y1="50" x2="150" y2="150" stroke="rgb(0,0,255)" strokeWidth="2" opacity="0.5">
                <animate attributeName="y1" values="50;0;50" dur="3.5s" repeatCount="indefinite" />
              </line>
              
              {/* Circuit Nodes */}
              <circle cx="80" cy="50" r="4" fill="rgb(0,0,255)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="100" r="4" fill="rgb(0,0,255)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="150" r="4" fill="rgb(0,0,255)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Binary Code Rain */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-400 font-mono text-sm"
              style={{
                left: `${i * 7}%`,
                animation: `binaryFall ${8 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="mb-4">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Network Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {nodes.map((node, i) => (
            <g key={node.id}>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="3"
                fill="rgb(0,0,255)"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  values="3;6;3"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${node.delay}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${node.delay}s`}
                />
              </circle>
              {i < nodes.length - 1 && Math.random() > 0.5 && (
                <line
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${nodes[i + 1].x}%`}
                  y2={`${nodes[i + 1].y}%`}
                  stroke="rgb(0,0,255)"
                  strokeWidth="1"
                  opacity="0.2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.1;0.4;0.1"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </line>
              )}
            </g>
          ))}
        </svg>

        {/* Code Brackets Floating */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {['<', '>', '{', '}', '/', '</>'].map((symbol, i) => (
            <div
              key={i}
              className="absolute text-6xl font-bold text-blue-500"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `floatCode ${6 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Cursor Glow Effect */}
        <div 
          className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePos.x - 192,
            top: mousePos.y - 192,
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left: Main Content */}
          <div className="flex-1 text-left">
            {/* Floating Badge */}
            <div className="inline-flex items-left gap-2 px-4 py-2 mb-8 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-300 text-sm hover:bg-blue-500/20 transition-all duration-300 cursor-pointer group">
              <Sparkles className="w-2 h-2 group-hover:rotate-12 transition-transform duration-300" />
              <span>Digital Innovation Studio</span>
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="inline-block bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-300">
                Transform Your
              </span>
              <br />
              <span className="inline-block text-white hover:text-blue-300 transition-colors duration-500">
                Digital Presence
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We craft cutting-edge digital experiences that captivate audiences and drive results through innovation and creativity
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-start items-center">
              {/* Start Project Button */}
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
                <span className="relative z-10 flex items-center gap-2">
                  Start Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            
              {/* Contact Us Button */}
              <button 
                className="group relative px-8 py-4 bg-transparent border-2 border-blue-500 rounded-full font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-orange-500"
                onClick={() => setIsFormOpen(true)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
          
          {/* Right: Visual Section with Orbital Animation */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-md">
              {/* Orbital Animation Container */}
              <div className="relative w-60 h-60 mx-auto">
                
                {/* Outer Orbit Ring - Colorful gradient */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent bg-transparent opacity-30"></div>
                
                {/* Inner Orbit Ring */}
                <div className="absolute inset-12 rounded-full border-2 border-blue-300/30"></div>
                
                {/* Central Logo Container */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                    
                    {/* Logo circle */}
                    <div className="relative backdrop-transparent rounded-full p-6 shadow-2xl border-4 border-white w-50 h-50 flex items-center justify-center">
                      <img
                        src="/images/logo12.png"
                        alt="Codedge Academy Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Orbiting Partners */}
                {/* Google - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-1">
                  <div className="w-24 h-24 bg-white/20 rounded-full shadow-2xl flex items-center justify-center border-4 border-white hover:scale-110 transition-transform duration-300 p-3">
                    <img 
                      src="/images/google.png" 
                      alt="Google"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Microsoft - Right */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 animate-orbit-2">
                  <div className="w-24 h-24 bg-white/20 rounded-full shadow-2xl flex items-center justify-center border-4 border-white hover:scale-110 transition-transform duration-300 p-3">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
                      alt="Microsoft"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* IBM - Bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-orbit-3">
                  <div className="w-24 h-24 bg-white/20 rounded-full shadow-2xl flex items-center justify-center border-4 border-white hover:scale-110 transition-transform duration-300 p-3">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                      alt="IBM"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Xsav Lab - Left */}
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full shadow-2xl flex items-center justify-center border-4 border-white hover:scale-110 transition-transform duration-300 p-4">
                    <img 
                      src="/images/xsav_lab_logo.png" 
                      alt="IBM"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Small decorative dots on orbit */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Animated Styles */}
        <style jsx>{`
          @keyframes floatCode {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.2;
            }
            50% {
              transform: translateY(-30px) rotate(5deg);
              opacity: 0.4;
            }
          }
          
          @keyframes binaryFall {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            10% {
              opacity: 0.5;
            }
            90% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(100vh);
              opacity: 0;
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

          .animate-gradient {
            background-size: 300% 300%;
            animation: gradient 3s ease infinite;
          }

          .bg-300 {
            background-size: 300%;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-float-delay {
            animation: float 3s ease-in-out infinite;
            animation-delay: 1s;
          }
          
          .animate-float-slow {
            animation: float 4s ease-in-out infinite;
            animation-delay: 2s;
          }

          /* Orbital Animations - Clockwise rotation */
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(120px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(120px) rotate(-360deg);
            }
          }

          .animate-orbit-1 {
            animation: orbit 15s linear infinite;
          }

          .animate-orbit-2 {
            animation: orbit 15s linear infinite;
            animation-delay: -3.75s;
          }

          .animate-orbit-3 {
            animation: orbit 15s linear infinite;
            animation-delay: -7.5s;
          }

          .animate-orbit-4 {
            animation: orbit 15s linear infinite;
            animation-delay: -11.25s;
          }
        `}</style>
      </div>
    </div>
  );
}