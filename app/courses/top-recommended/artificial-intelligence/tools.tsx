"use client"
import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Star, Code2 } from 'lucide-react';

export default function ToolsSection() {
  const [hoveredTool, setHoveredTool] = useState<number|null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  interface Particle {
  id: number;
  x: number;
  y: number;
}



  const tools = [
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'from-blue-400 to-cyan-500', category: 'Database' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-yellow-400 to-blue-500', category: 'Language' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'from-green-400 to-emerald-600', category: 'Database' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: 'from-purple-500 to-pink-500', category: 'Framework' },
    { name: 'SciPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: 'from-blue-500 to-indigo-600', category: 'Library' },
    { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', color: 'from-orange-400 to-red-500', category: 'Tool' },
    { name: 'Seaborn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-teal-400 to-cyan-500', category: 'Library' },
    { name: 'Plotly', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg', color: 'from-indigo-500 to-purple-600', category: 'Library' },
    { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', color: 'from-orange-500 to-amber-600', category: 'ML' },
    { name: 'Colab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', color: 'from-yellow-400 to-orange-500', category: 'Tool' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: 'from-red-500 to-orange-600', category: 'ML' },
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: 'from-blue-400 to-cyan-600', category: 'Library' },
    { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg', color: 'from-blue-600 to-indigo-700', category: 'Library' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: 'from-purple-500 to-blue-600', category: 'Library' },
    { name: 'ChatGPT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg', color: 'from-green-400 to-teal-500', category: 'AI' },
    { name: 'Gemini', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', color: 'from-blue-500 to-purple-600', category: 'AI' },
    { name: 'Midjourney', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-gray-600 to-slate-800', category: 'AI' },
    { name: 'DALL-E 3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg', color: 'from-pink-500 to-purple-600', category: 'AI' },
    { name: 'Keras', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg', color: 'from-red-500 to-pink-600', category: 'ML' },
    { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', color: 'from-green-500 to-blue-500', category: 'Computer Vision' },
    { name: 'PyCUDA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-green-600 to-teal-700', category: 'Library' },
    { name: 'OpenAI Gym', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg', color: 'from-blue-400 to-cyan-500', category: 'RL' },
    { name: 'Pinecone', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-teal-500 to-cyan-600', category: 'Vector DB' },
    { name: 'BERT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', color: 'from-yellow-500 to-red-500', category: 'NLP' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'from-orange-500 to-amber-600', category: 'ML' },
  ];

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        };
        setParticles(prev => [...prev, newParticle]);
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 3000);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-12 px-4 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float-up"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 10px rgba(96, 165, 250, 0.5)',
          }}
        />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>

      {/* Cursor follower */}
      <div 
        className="fixed w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePos.x - 128,
          top: mousePos.y - 128,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-6 animate-slide-down">
            <Code2 className="w-5 h-5 text-blue-400 animate-spin-slow" />
            <span className="text-blue-300 text-sm font-semibold tracking-wide">Master Industry Tools</span>
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
              Programming Languages
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient-reverse">
              & Tools Covered
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Master the most in-demand technologies used by top companies worldwide
          </p>

          {/* Floating badges */}
          <div className="flex justify-center gap-4 mt-5 flex-wrap">
            {['25+ Tools', 'Hands-on Projects', 'Industry Standard'].map((badge, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-gray-300 text-sm animate-float"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <Star className="w-4 h-4 inline mr-2 text-yellow-400" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredTool(index)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500 scale-95 group-hover:scale-110`}></div>
              
              {/* Card */}
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-3 h-full transition-all duration-500 group-hover:border-slate-600 group-hover:bg-slate-800/80 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-all duration-500 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0`}></div>

                {/* Category badge */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${tool.color} text-white font-semibold shadow-lg`}>
                    {tool.category}
                  </span>
                </div>

                {/* Logo */}
                <div className="flex gap-2 items-center justify-center  h-full">
                <div className="flex items-center justify-center mb-2 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-all duration-500`}></div>
                  <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="w-8 h-8 object-contain filter drop-shadow-lg transition-all duration-500 group-hover:drop-shadow-2xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src  = 'https://via.placeholder.com/64/4F46E5/FFFFFF?text=' + tool.name.charAt(0);
                      }}
                    />
                  </div>
                  
                  {/* Particles on hover */}
                  {hoveredTool === index && (
                    <>
                      <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-ping" />
                      <Zap className="absolute -bottom-2 -left-2 w-4 h-4 text-blue-400 animate-ping delay-100" />
                    </>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-center text-white font-semibold text-lg mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
                  {tool.name}
                </h3>
                </div>

                {/* Progress bar animation on hover */}
                <div className="h-1 bg-slate-700 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className={`h-full bg-gradient-to-r ${tool.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}></div>
                </div>

                {/* Floating dots decoration */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 space-x-1">
                  {[0, 1, 2].map(i => (
                    <span 
                      key={i}
                      className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.color} animate-bounce`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10">View All Technologies</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <Sparkles className="inline-block ml-2 w-5 h-5 animate-spin-slow" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        @keyframes gradient {
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-float-up {
          animation: float-up 3s linear;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-gradient-reverse {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite reverse;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .delay-2000 {
          animation-delay: 2000ms;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}