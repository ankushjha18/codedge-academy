"use client"
import React, { useState } from 'react';
import { ArrowDown, Sparkles, Download } from 'lucide-react';

const SignatureFramework = () => {
  const [hoveredCard, setHoveredCard] = useState<number|null>(null);

  const frameworks = [
    {
      id: 1,
      title: 'The Great Pyramid',
      description: 'A structured 16-stage interview preparation framework designed to help you crack Tier 1 and product-based company interviews.',
      pdfUrl: '/pdfs/great-pyramid-framework.pdf', // Add your PDF path here
      features: ['16-Stage Process', 'Mock Interviews', 'Expert Feedback', 'Resume Building']
    },
    {
      id: 2,
      title: 'The Project Lab',
      description: 'A structured, real-world project ecosystem designed to help you apply skills, build expertise, and showcase industry-ready portfolios.',
      pdfUrl: '/pdfs/project-lab-framework.pdf', // Add your PDF path here
      features: ['Real Projects', 'Live Deployment', 'Code Reviews', 'Portfolio Building']
    }
  ];

  const handleReadMore = (pdfUrl:string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[5%] w-[500px] h-[500px] bg-[#fc6f08]/10 rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute bottom-20 right-[5%] w-[600px] h-[600px] bg-[#003b7b]/10 rounded-full blur-3xl animate-float-2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#fc6f08]/5 to-[#003b7b]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-2 bg-white rounded-full shadow-lg border border-gray-100 mb-6">
            <Sparkles className="w-4 h-4 text-[#fc6f08] animate-pulse" />
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fc6f08] to-[#003b7b]">
              EXCLUSIVE FRAMEWORKS
            </span>
            <Sparkles className="w-4 h-4 text-[#003b7b] animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-gray-900">Signature</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#fc6f08] to-[#003b7b] animate-gradient-x">
              Framework
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Frameworks designed to simplify learning and build real skills.
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#fc6f08]"></div>
            <div className="w-2 h-2 rounded-full bg-[#fc6f08] animate-pulse"></div>
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#fc6f08] to-[#003b7b]"></div>
            <div className="w-2 h-2 rounded-full bg-[#003b7b] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#003b7b]"></div>
          </div>
        </div>

        {/* Framework Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {frameworks.map((framework, index) => {
            const isHovered = hoveredCard === framework.id;
            const isPyramid = framework.id === 1;

            return (
              <div
                key={framework.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(framework.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0a2647] to-[#003b7b] rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700"></div>

                {/* Main Card */}
                <div className={`relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 transform ${
                  isHovered ? 'scale-[1.02] shadow-[#fc6f08]/20' : ''
                }`}>
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a2647] to-[#003b7b]"></div>

                  {/* Animated Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px] animate-pattern-move"></div>
                  </div>

                  {/* Floating Geometric Shapes */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-10 right-10 w-32 h-32 border-4 border-white/10 rounded-full transition-all duration-700 ${
                      isHovered ? 'rotate-180 scale-125' : 'rotate-0'
                    }`}></div>
                    <div className={`absolute bottom-20 left-10 w-24 h-24 border-4 border-white/10 rotate-45 transition-all duration-700 ${
                      isHovered ? 'rotate-[225deg] scale-110' : 'rotate-45'
                    }`}></div>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-white/5 rounded-full transition-all duration-1000 ${
                      isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
                    }`}></div>
                  </div>

                  {/* Content Container */}
                  <div className="relative h-full flex flex-col p-8">
                    {/* Custom Graphic Illustration */}
                    <div className="relative mb-6 h-48 flex items-center justify-center">
                      {isPyramid ? (
                        // Pyramid Graphic
                        <div className={`relative w-48 h-48 transition-all duration-700 ${
                          isHovered ? 'scale-110 rotate-3' : ''
                        }`}>
                          {/* 3D Pyramid */}
                          <svg viewBox="0 0 200 200" className="w-full h-full">
                            <defs>
                              <linearGradient id="pyramidGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#fc6f08" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="#ff9a4d" stopOpacity="0.7" />
                              </linearGradient>
                              <linearGradient id="pyramidGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ff9a4d" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#ffc185" stopOpacity="0.6" />
                              </linearGradient>
                              <linearGradient id="pyramidGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ffc185" stopOpacity="0.7" />
                                <stop offset="100%" stopColor="#fc6f08" stopOpacity="0.5" />
                              </linearGradient>
                              <filter id="pyramidGlow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                  <feMergeNode in="coloredBlur"/>
                                  <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                              </filter>
                            </defs>
                            
                            {/* Pyramid faces */}
                            <polygon points="100,30 30,170 170,170" fill="url(#pyramidGrad1)" stroke="white" strokeWidth="2" opacity="0.9" filter="url(#pyramidGlow)"/>
                            <polygon points="100,30 170,170 190,160" fill="url(#pyramidGrad2)" stroke="white" strokeWidth="2" opacity="0.8" filter="url(#pyramidGlow)"/>
                            <polygon points="100,30 30,170 10,160" fill="url(#pyramidGrad3)" stroke="white" strokeWidth="2" opacity="0.85" filter="url(#pyramidGlow)"/>
                            
                            {/* Glowing top */}
                            <circle cx="100" cy="30" r="8" fill="#fc6f08" className="animate-pulse">
                              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
                            </circle>
                            
                            {/* Lines showing stages */}
                            <line x1="40" y1="150" x2="160" y2="150" stroke="white" strokeWidth="1" opacity="0.5" strokeDasharray="5,5">
                              <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite"/>
                            </line>
                            <line x1="50" y1="120" x2="150" y2="120" stroke="white" strokeWidth="1" opacity="0.5" strokeDasharray="5,5">
                              <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite"/>
                            </line>
                            <line x1="65" y1="85" x2="135" y2="85" stroke="white" strokeWidth="1" opacity="0.5" strokeDasharray="5,5">
                              <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite"/>
                            </line>
                            
                            {/* AI Badge */}
                            <circle cx="160" cy="60" r="20" fill="white" opacity="0.95"/>
                            <text x="160" y="67" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#0a2647">AI</text>
                          </svg>
                          
                          {/* Floating particles */}
                          {isHovered && (
                            <>
                              <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#fc6f08] rounded-full animate-float-particle-1"></div>
                              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#fc6f08] rounded-full animate-float-particle-2"></div>
                              <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#fc6f08] rounded-full animate-float-particle-3"></div>
                            </>
                          )}
                        </div>
                      ) : (
                        // Project Lab Graphic
                        <div className={`relative w-56 h-48 transition-all duration-700 ${
                          isHovered ? 'scale-110 -rotate-2' : ''
                        }`}>
                          {/* Mobile/Device Frame */}
                          <svg viewBox="0 0 240 200" className="w-full h-full">
                            <defs>
                              <linearGradient id="deviceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1e3a5f" />
                                <stop offset="100%" stopColor="#0a1929" />
                              </linearGradient>
                              <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#003b7b" />
                                <stop offset="100%" stopColor="#0a2647" />
                              </linearGradient>
                              <filter id="deviceGlow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                  <feMergeNode in="coloredBlur"/>
                                  <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                              </filter>
                            </defs>
                            
                            {/* Phone/Device body */}
                            <rect x="60" y="20" width="120" height="160" rx="15" fill="url(#deviceGrad)" stroke="white" strokeWidth="3" filter="url(#deviceGlow)"/>
                            
                            {/* Screen */}
                            <rect x="70" y="35" width="100" height="130" rx="8" fill="url(#screenGrad)" opacity="0.9"/>
                            
                            {/* App Icons Grid */}
                            <g opacity="0.8">
                              {/* Row 1 */}
                              <rect x="80" y="50" width="18" height="18" rx="4" fill="#fc6f08" className="animate-pulse" style={{animationDelay: '0s'}}/>
                              <rect x="105" y="50" width="18" height="18" rx="4" fill="#ff9a4d" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                              <rect x="130" y="50" width="18" height="18" rx="4" fill="#ffc185" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                              <rect x="155" y="50" width="18" height="18" rx="4" fill="#fc6f08" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                              
                              {/* Row 2 */}
                              <rect x="80" y="75" width="18" height="18" rx="4" fill="#ff9a4d" className="animate-pulse" style={{animationDelay: '0.1s'}}/>
                              <rect x="105" y="75" width="18" height="18" rx="4" fill="#ffc185" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                              <rect x="130" y="75" width="18" height="18" rx="4" fill="#fc6f08" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                              <rect x="155" y="75" width="18" height="18" rx="4" fill="#ff9a4d" className="animate-pulse" style={{animationDelay: '0.7s'}}/>
                              
                              {/* Row 3 */}
                              <rect x="80" y="100" width="18" height="18" rx="4" fill="#ffc185" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                              <rect x="105" y="100" width="18" height="18" rx="4" fill="#fc6f08" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                              <rect x="130" y="100" width="18" height="18" rx="4" fill="#ff9a4d" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                              <rect x="155" y="100" width="18" height="18" rx="4" fill="#ffc185" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                            </g>
                            
                            {/* Bottom dock/bar */}
                            <rect x="85" y="140" width="70" height="15" rx="7" fill="white" opacity="0.3"/>
                            
                            {/* AI Badge */}
                            <circle cx="200" cy="80" r="24" fill="white" opacity="0.95"/>
                            <text x="200" y="88" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0a2647">AI</text>
                            
                            {/* Businessman silhouette hint */}
                            <circle cx="200" cy="150" r="18" fill="#fc6f08" opacity="0.8"/>
                            <ellipse cx="200" cy="175" rx="20" ry="12" fill="#fc6f08" opacity="0.8"/>
                          </svg>
                          
                          {/* Floating code symbols */}
                          {isHovered && (
                            <>
                              <div className="absolute top-0 right-0 text-[#fc6f08] text-2xl font-bold animate-float-code-1">&lt;/&gt;</div>
                              <div className="absolute bottom-0 left-0 text-[#fc6f08] text-2xl font-bold animate-float-code-2">{ }</div>
                              <div className="absolute top-1/2 left-0 text-[#fc6f08] text-xl font-bold animate-float-code-3">AI</div>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl font-black text-white mb-4 leading-tight">
                      {framework.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-lg leading-relaxed mb-6 flex-grow">
                      {framework.description}
                    </p>

                    {/* Features Grid */}
                    <div className={`grid grid-cols-2 gap-3 mb-6 transition-all duration-500 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {framework.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 text-sm text-white font-semibold text-center border border-white/20 transform transition-all duration-300 hover:bg-white/20 hover:scale-105"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <button 
                      onClick={() => handleReadMore(framework.pdfUrl)}
                      className="group/btn relative w-full py-4 bg-[#fc6f08] hover:bg-[#ff8534] rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center"
                    >
                      {/* Button Background Animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#fc6f08] to-[#ff8534] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-700"></div>

                      {/* Button Content */}
                      <div className="relative flex items-center justify-center space-x-3">
                        <span className="text-white font-bold text-lg tracking-wide">Read More</span>
                        <ArrowDown className="w-5 h-5 text-white transition-transform duration-500 group-hover/btn:translate-y-1" />
                      </div>

                      {/* Ripple Effect */}
                      <div className="absolute inset-0 scale-0 group-hover/btn:scale-100 bg-white/20 rounded-2xl transition-transform duration-700"></div>
                    </button>
                  </div>

                  {/* Shine Overlay on Hover */}
                  {isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 animate-shine-diagonal"></div>
                  )}

                  {/* Border Glow */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-white/0 transition-all duration-700 ${
                    isHovered ? 'border-white/30' : ''
                  }`}></div>

                  {/* Corner Accents */}
                  <div className={`absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-white/20 rounded-tl-3xl transition-all duration-700 ${
                    isHovered ? 'w-32 h-32 border-white/40' : ''
                  }`}></div>
                  <div className={`absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-white/20 rounded-br-3xl transition-all duration-700 ${
                    isHovered ? 'w-32 h-32 border-white/40' : ''
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block relative group cursor-pointer">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#fc6f08] to-[#003b7b] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Button */}
            <div className="relative px-12 py-5 bg-gradient-to-r from-[#0a2647] to-[#003b7b] rounded-full shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#fc6f08] via-[#003b7b] to-[#fc6f08] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-rotate-border"></div>
              <div className="absolute inset-[2px] rounded-full bg-gradient-to-r from-[#0a2647] to-[#003b7b]"></div>
              
              {/* Content */}
              <div className="relative flex items-center space-x-4">
                <span className="text-white font-black text-xl">Explore All Frameworks</span>
                <div className="w-10 h-10 bg-[#fc6f08] rounded-full flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-90">
                  <ArrowDown className="w-5 h-5 text-white rotate-[-90deg]" />
                </div>
              </div>

              {/* Shine */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.05); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pattern-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        @keyframes shine-diagonal {
          0% { transform: translate(-100%, -100%) rotate(45deg); }
          100% { transform: translate(100%, 100%) rotate(45deg); }
        }
        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes float-particle-1 {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(40px, -60px); opacity: 0; }
        }
        @keyframes float-particle-2 {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(-40px, -50px); opacity: 0; }
        }
        @keyframes float-particle-3 {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(30px, -70px); opacity: 0; }
        }
        @keyframes float-code-1 {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
          50% { opacity: 1; }
          100% { transform: translate(20px, -30px) rotate(15deg); opacity: 0; }
        }
        @keyframes float-code-2 {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
          50% { opacity: 1; }
          100% { transform: translate(-20px, -25px) rotate(-15deg); opacity: 0; }
        }
        @keyframes float-code-3 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { opacity: 1; }
          100% { transform: translate(-30px, 0) scale(1.2); opacity: 0; }
        }

        .animate-float-1 { animation: float-1 10s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 12s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        .animate-pattern-move { animation: pattern-move 20s linear infinite; }
        .animate-shine-diagonal { animation: shine-diagonal 2s ease-in-out; }
        .animate-rotate-border { animation: rotate-border 3s linear infinite; }
        .animate-float-particle-1 { animation: float-particle-1 3s ease-out infinite; }
        .animate-float-particle-2 { animation: float-particle-2 3.5s ease-out infinite; }
        .animate-float-particle-3 { animation: float-particle-3 4s ease-out infinite; }
        .animate-float-code-1 { animation: float-code-1 3s ease-out infinite; }
        .animate-float-code-2 { animation: float-code-2 3.2s ease-out infinite; }
        .animate-float-code-3 { animation: float-code-3 3.5s ease-out infinite; }
      `}</style>
    </div>
  );
};

export default SignatureFramework;