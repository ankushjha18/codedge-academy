"use client";
import React, { useState } from 'react';
import { Calculator, Award, Clock, FileCheck, Code, Sparkles, TrendingUp } from 'lucide-react';

export default function FeesSection() {
  const [hoveredCard, setHoveredCard] = useState<string|null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-blue-300 text-xs sm:text-sm font-semibold">Investment in Your Future</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 px-4">
            Program Fees & Financing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Affordable, flexible, and designed to support your career growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Main Program Card */}
          <div 
            className="lg:col-span-2 relative group"
            onMouseEnter={() => setHoveredCard('program')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-blue-500/30 overflow-hidden transition-all duration-500 group-hover:border-blue-400/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
              {/* Top Badge */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                TOP RATED PROGRAM
              </div>

              <div className="p-6 sm:p-8 pt-14 sm:pt-16">
                {/* Price Section */}
                <div className="mb-6 sm:mb-8 transform transition-transform duration-500 group-hover:scale-105">
                  <h2 className="text-xl sm:text-2xl text-blue-300 font-semibold mb-2 sm:mb-3">Program Fee</h2>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">₹89,999</span>
                    <span className="text-gray-400 text-sm sm:text-base md:text-lg">(inclusive of taxes)</span>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: TrendingUp, text: 'EMI Starts From: ₹3,750/month – Interest available', gradient: 'from-green-400 to-emerald-500' },
                    { icon: Clock, text: 'Duration: 9 Months', gradient: 'from-blue-400 to-cyan-500' },
                    { icon: FileCheck, text: 'Certification: From IBM & XAV LABS', gradient: 'from-purple-400 to-pink-500' },
                    { icon: Award, text: 'Job Guarantee: Included', gradient: 'from-orange-400 to-red-500' },
                  ].map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-2 sm:gap-3 bg-slate-700/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-slate-700/70 hover:transform hover:translate-x-1 sm:hover:translate-x-2"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${feature.gradient} shadow-lg flex-shrink-0`}>
                        <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <p className="text-gray-200 text-xs sm:text-sm leading-relaxed flex-1">{feature.text}</p>
                    </div>
                  ))}
                </div>

                {/* Tools Section */}
                <div className="mt-4 sm:mt-6 bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-slate-600/50">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    <span className="text-blue-300 font-semibold text-sm sm:text-base">Tools Covered:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'ML', 'DL', 'TensorFlow', 'PyTorch'].map((tool, idx) => (
                      <span 
                        key={idx}
                        className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-400/30 hover:bg-blue-500/30 transition-colors cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EMI Calculator Card */}
          <div 
            className="relative group"
            onMouseEnter={() => setHoveredCard('emi')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-emerald-500/30 p-6 sm:p-8 h-full transition-all duration-500 group-hover:border-emerald-400/50 group-hover:shadow-2xl group-hover:shadow-emerald-500/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-emerald-500/10 rounded-full blur-2xl transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16"></div>
              
              <div className="relative">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl shadow-lg transform transition-transform duration-300 group-hover:rotate-12">
                    <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">EMI Calculator</h3>
                </div>

                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-emerald-400/30 mb-4 sm:mb-6 transform transition-transform duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <p className="text-emerald-300 text-xs sm:text-sm mb-1 sm:mb-2">Pay Monthly</p>
                    <p className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">₹6,999</p>
                    <p className="text-gray-300 text-xs sm:text-sm">for 9 months</p>
                    <div className="mt-2 sm:mt-3 inline-block bg-emerald-500/30 text-emerald-300 px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-semibold border border-emerald-400/50">
                      0% Interest Rate
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Banking partners:</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {['HDFC', 'ICICI', 'Axis', 'SBI'].map((bank, idx) => (
                      <div 
                        key={idx}
                        className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center text-gray-300 text-xs sm:text-sm border border-slate-600/50 hover:border-emerald-400/50 transition-all cursor-default"
                      >
                        {bank}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scholarship Cards */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {[1, 2].map((idx) => (
            <div 
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredCard(`scholarship${idx}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-amber-500/30 p-6 sm:p-8 transition-all duration-500 group-hover:border-amber-400/50 group-hover:shadow-2xl group-hover:shadow-amber-500/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-amber-500/10 rounded-full blur-2xl transform -translate-x-12 sm:-translate-x-16 -translate-y-12 sm:-translate-y-16"></div>
                
                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Scholarships Up to ₹15,000
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                      Based on merit, academic background, and need-based support.
                    </p>
                    <button className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold text-sm sm:text-base hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}