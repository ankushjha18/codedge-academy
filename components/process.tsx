"use client";
import React, { useState } from 'react';
import { BookOpen, Users, FileText, Award, Briefcase, Send, CheckCircle, Sparkles } from 'lucide-react';

const LearningPathway = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number|null>(null);

  const steps = [
    {
      number: '01',
      title: 'LMS ACCESS & GET MENTORSHIP',
      icon: BookOpen,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      glowColor: 'shadow-yellow-500/50',
      description: 'Access comprehensive learning materials and connect with industry-expert mentors who guide you through your journey',
      features: ['24/7 LMS Access', 'Personal Mentor', 'Live Sessions']
    },
    {
      number: '02',
      title: 'Learn Fundamentals & Build Foundation',
      icon: Users,
      color: 'from-emerald-400 to-green-600',
      bgColor: 'bg-gradient-to-br from-emerald-400 to-green-600',
      glowColor: 'shadow-green-500/50',
      description: 'Master core concepts and build a strong foundation with structured curriculum and interactive learning modules',
      features: ['Core Concepts', 'Video Tutorials', 'Practice Tests']
    },
    {
      number: '03',
      title: 'Hands-on Projects & Practical Learning',
      icon: FileText,
      color: 'from-sky-400 to-blue-600',
      bgColor: 'bg-gradient-to-br from-sky-400 to-blue-600',
      glowColor: 'shadow-blue-500/50',
      description: 'Apply your knowledge through real-world projects and gain practical experience with industry-standard tools',
      features: ['Real Projects', 'Code Reviews', 'Git Collaboration']
    },
    {
      number: '04',
      title: 'Research & Paper Analysis with POC',
      icon: Award,
      color: 'from-cyan-400 to-teal-600',
      bgColor: 'bg-gradient-to-br from-cyan-400 to-teal-600',
      glowColor: 'shadow-cyan-500/50',
      description: 'Dive deep into research papers, analyze cutting-edge technologies, and develop proof of concepts',
      features: ['Research Papers', 'Case Studies', 'POC Development']
    },
    {
      number: '05',
      title: 'Develop Projects & Get Certification',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-700',
      bgColor: 'bg-gradient-to-br from-amber-500 to-orange-700',
      glowColor: 'shadow-amber-500/50',
      description: 'Build impressive portfolio projects and earn industry-recognized certifications to validate your skills',
      features: ['Portfolio Projects', 'Certification', 'Peer Review']
    },
    {
      number: '06',
      title: 'Get Internship & Placement Offer',
      icon: Send,
      color: 'from-rose-400 to-pink-600',
      bgColor: 'bg-gradient-to-br from-rose-400 to-pink-600',
      glowColor: 'shadow-rose-500/50',
      description: 'Secure internships and full-time placement offers from top companies with dedicated career support',
      features: ['Job Assistance', 'Interview Prep', 'Offer Letters']
    }
  ];

  const handleStepClick = (index:number) => {
    setActiveStep(index);
  };

  return (
    <div className="relative py--10  md:py-1 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-20 left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse-very-slow"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-1">
          <div className="inline-flex items-center space-x-2 px-4 md:px-5 py--4 bg-white rounded-full shadow-lg border border-gray-100 mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-600 animate-pulse" />
            <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
              YOUR LEARNING JOURNEY
            </span>
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Learning
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Pathway
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Smarter learning with expert guidance and real projects
          </p>

          <div className="mt-6 md:mt-8 flex items-center justify-center space-x-4">
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>

        {/* Main Pathway */}
        <div className="relative">
          {/* Desktop View - Elegant Curved Path */}
          <div className="hidden lg:block">
            {/* SVG Path with Animated Line */}
            <svg className="absolute inset-0 w-full h-[700px] pointer-events-none" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="33%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="66%" stopColor="#ec4899" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <path
                d="M 120 200 Q 280 100, 420 200 Q 560 300, 700 200 Q 840 100, 980 200"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
                strokeDasharray="8,8"
                opacity="0.3"
              />

              <path
                d="M 120 200 Q 280 100, 420 200 Q 560 300, 700 200 Q 840 100, 980 200"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#glow)"
                strokeDasharray="1500"
                strokeDashoffset={1500 - ((activeStep + 1) / steps.length) * 1500}
                className="transition-all duration-1000 ease-in-out"
              />

              <circle
                r="8"
                fill="#3b82f6"
                filter="url(#glow)"
                className="transition-all duration-1000 ease-in-out"
              >
                <animateMotion
                  dur="1s"
                  repeatCount="1"
                  fill="freeze"
                  path="M 120 200 Q 280 100, 420 200 Q 560 300, 700 200 Q 840 100, 980 200"
                  keyPoints={`0;${(activeStep + 1) / steps.length}`}
                  keyTimes="0;1"
                />
              </circle>
            </svg>

            {/* Step Circles - Positioned along the path */}
            <div className="relative h-[700px]">
              {steps.map((step, index) => {
                const positions = [
                  { top: '25%', left: '6%' },
                  { top: '10%', left: '18%' },
                  { top: '25%', left: '30%' },
                  { top: '38%', left: '45%' },
                  { top: '10%', left: '60%' },
                  { top: '25%', left: '80%' }
                ];

                const isActive = activeStep === index;
                const isHovered = hoveredStep === index;
                const Icon = step.icon;
                const isCompleted = index < activeStep;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 ease-out cursor-pointer"
                    style={positions[index]}
                    onClick={() => handleStepClick(index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div className="relative group">
                      {/* Outer Glow Ring */}
                      {(isActive || isHovered) && (
                        <div className={`absolute -inset-4 bg-gradient-to-r ${step.color} rounded-full blur-2xl opacity-40 animate-pulse-glow`}></div>
                      )}

                      {/* Main Circle Container - SMALLER SIZE */}
                      <div className="relative">
                        <div
                          className={`relative w-24 h-24 rounded-full backdrop-blur-xl shadow-2xl transition-all duration-500 overflow-hidden ${
                            isActive || isHovered
                              ? `${step.bgColor} ${step.glowColor} shadow-2xl scale-110 ring-4 ring-white/50`
                              : isCompleted
                              ? `${step.bgColor} opacity-80 scale-95`
                              : 'bg-gradient-to-br from-gray-100 to-gray-200 scale-90'
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"></div>
                          
                          <div className="relative h-full flex flex-col items-center justify-center">
                            <div className={`text-3xl font-black mb-1 transition-all duration-500 ${
                              isActive || isHovered || isCompleted ? 'text-white drop-shadow-lg' : 'text-gray-400'
                            }`}>
                              {step.number}
                            </div>
                            
                            <div className={`text-[8px] font-black tracking-[0.15em] transition-all duration-500 ${
                              isActive || isHovered || isCompleted ? 'text-white/90' : 'text-gray-400'
                            }`}>
                              STEP
                            </div>
                          </div>

                          {/* Rotating icon badge - SMALLER */}
                          <div className={`absolute -top-2 -right-2 w-9 h-9 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-500 ${
                            isActive || isHovered ? 'scale-110 rotate-12' : isCompleted ? 'scale-100' : 'scale-90'
                          }`}>
                            <Icon className={`w-4 h-4 transition-colors duration-500 ${
                              isActive || isHovered ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                            }`} />
                          </div>

                          {/* Completion checkmark - SMALLER */}
                          {isCompleted && !isActive && (
                            <div className="absolute -bottom-1.5 -right-1.5 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-xl flex items-center justify-center animate-scale-in ring-6 ring-white">
                              <CheckCircle className="w-4 h-4 text-white" strokeWidth={6} />
                            </div>
                          )}

                          {/* Shine effect */}
                          {(isActive || isHovered) && (
                            <div className="absolute inset-0 overflow-hidden rounded-full">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine-continuous"></div>
                            </div>
                          )}
                        </div>

                        {/* Step number indicator at bottom */}
                        <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                          isActive || isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="px-2.5 py-{-10} bg-white rounded-full shadow-lg border border-gray-100">
                            <span className={`text-[10px] font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                              Step {step.number}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Elegant Info Card - SMALLER */}
                      <div
                        className={`absolute top-32 left-1/2 -translate-x-1/2 w-72 transition-all duration-500 ${
                          isActive || isHovered
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 translate-y-4 pointer-events-none'
                        }`}
                      >
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-r ${step.color} blur-xl opacity-20 rounded-3xl`}></div>
                          
                          <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-5 border border-gray-100">
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} rounded-t-2xl`}></div>
                            
                            <h3 className="font-black text-gray-900 mb-2 leading-tight text-sm">
                              {step.title}
                            </h3>
                            
                            <p className="text-xs text-gray-600 leading-relaxed mb-3">
                              {step.description}
                            </p>

                            <div className="space-y-1.5">
                              {step.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`}></div>
                                  <span className="font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <div className="flex items-center justify-between text-xs mb-1.5">
                                <span className="font-semibold text-gray-600">Your Progress</span>
                                <span className={`font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                                  {Math.round(((index + 1) / steps.length) * 100)}%
                                </span>
                              </div>
                              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000`}
                                  style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Success Destination - SMALLER */}
            <div className="absolute top-[55%] right-[5%]">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 blur-2xl opacity-50 animate-pulse-glow"></div>
                <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center ring-4 ring-white/50">
                  <Send className="w-8 h-8 text-white animate-float-gentle" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="px-3 py--180 bg-white rounded-full shadow-xl border border-gray-100">
                    <span className="text-xs font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Success! 🎉
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View - Vertical Timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isCompleted = index < activeStep;
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative"
                  onClick={() => handleStepClick(index)}
                >
                  {index < steps.length - 1 && (
                    <div className={`absolute left-[40px] top-20 w-0.5 h-16 transition-all duration-500 ${
                      isCompleted ? `bg-gradient-to-b ${step.color}` : 'bg-gray-200'
                    }`}></div>
                  )}

                  <div className="flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      {isActive && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-lg opacity-40 animate-pulse-glow scale-125`}></div>
                      )}
                      
                      <div
                        className={`relative w-20 h-20 rounded-full backdrop-blur-xl shadow-lg transition-all duration-500 ${
                          isActive
                            ? `${step.bgColor} ${step.glowColor} ring-4 ring-white/50`
                            : isCompleted
                            ? `${step.bgColor} opacity-80`
                            : 'bg-gradient-to-br from-gray-100 to-gray-200'
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 rounded-full"></div>
                        
                        <div className="relative h-full flex flex-col items-center justify-center">
                          <div className={`text-2xl font-black ${
                            isActive || isCompleted ? 'text-white' : 'text-gray-400'
                          }`}>
                            {step.number}
                          </div>
                          <div className={`text-[8px] font-black tracking-wider ${
                            isActive || isCompleted ? 'text-white/90' : 'text-gray-400'
                          }`}>
                            STEP
                          </div>
                        </div>

                        <div className={`absolute -top-1 -right-1 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center ${
                          isActive ? 'scale-110' : ''
                        }`}>
                          <Icon className={`w-4 h-4 ${
                            isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                          }`} />
                        </div>

                        {isCompleted && !isActive && (
                          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-lg flex items-center justify-center ring-2 ring-white">
                            <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`flex-1 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg p-4 transition-all duration-500 border ${
                        isActive ? 'ring-2 ring-blue-300 border-blue-200' : 'border-gray-100'
                      }`}
                    >
                      {isActive && (
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} rounded-t-xl`}></div>
                      )}
                      
                      <h3 className="font-bold text-gray-900 mb-2 text-sm leading-tight">
                        {step.title}
                      </h3>
                      
                      {isActive && (
                        <>
                          <p className="text-xs text-gray-600 leading-relaxed mb-3">
                            {step.description}
                          </p>
                          
                          <div className="space-y-1.5">
                            {step.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`}></div>
                                <span className="font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-2 md:mt-1 max-w-3xl mx-auto ">
          <div className="bg-white/80 backdrop-blur-xl rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <span className="text-xs md:text-sm font-bold text-gray-700">Overall Progress</span>
              <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {Math.round(((activeStep + 1) / steps.length) * 100)}%
              </span>
            </div>
            
            <div className="relative h-2 md:h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out rounded-full"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer"></div>
              </div>
            </div>

            <div className="flex justify-between mt-3 md:mt-4 gap-2">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className={`w-6 h-6 md:w-8 md:h-8 rounded-full font-bold text-[10px] md:text-xs transition-all duration-300 ${
                    idx === activeStep
                      ? `${step.bgColor} text-white shadow-lg scale-110`
                      : idx < activeStep
                      ? 'bg-green-500 text-white shadow-md'
                      : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #f3f4f6 1px, transparent 1px),
            linear-gradient(to bottom, #f3f4f6 1px, transparent 1px);
          background-size: 40px 40px;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, 40px) rotate(-5deg); }
          66% { transform: translate(30px, -20px) rotate(5deg); }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-very-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shine-continuous {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes scale-in {
          0% { transform: scale(0) rotate(-180deg); }
          50% { transform: scale(1.2) rotate(10deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 15s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 3s ease-in-out infinite; }
        .animate-pulse-very-slow { animation: pulse-very-slow 8s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        .animate-shine-continuous { animation: shine-continuous 3s ease-in-out infinite; }
        .animate-scale-in { animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .animate-shimmer { animation: shimmer 2s infinite; }
      `}</style>
    </div>
  );
};

export default LearningPathway;