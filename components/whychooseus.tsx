'use client';

import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Users, Award, Target, BookOpen, TrendingUp, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement|null>(null);
  const [isVisible, setIsVisible] = useState(false);
  

  const advantages = [
    {
      id: 1,
      title: "Structured Live Learning",
      description: "Experience structured live learning through expert-led classes that follow a clear roadmap from basics to advanced concepts. Every session is interactive, hands-on, and designed to build strong technical foundations, ensuring you stay consistent, confident, and industry-ready for competitive Tier-1 interviews.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Expert Instructors",
      description: "Learn from industry veterans with 10+ years of experience at top tech companies. Our instructors bring real-world insights and mentor you through every step of your learning journey, providing personalized guidance and career advice.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Industry-Recognized Certifications",
      description: "Earn globally recognized certifications that add credibility to your resume. Our certificates are valued by top employers and demonstrate your commitment to professional development and mastery of in-demand skills.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Career Support & Placement",
      description: "Get dedicated placement assistance with resume building, mock interviews, and direct connections to hiring partners. Our career support team works tirelessly to help you land your dream job at top companies.",
      icon: Target,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 5,
      title: "Hands-On Projects",
      description: "Build a portfolio of real-world projects that showcase your skills to potential employers. Work on industry-relevant case studies and capstone projects that solve actual business problems.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Lifetime Learning Access",
      description: "Enjoy lifetime access to course materials, updates, and our exclusive alumni network. Continue learning and growing even after course completion with new content and resources added regularly.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const section = sectionRef.current;
          
          const rect = section.getBoundingClientRect();
          const sectionHeight = section.offsetHeight;
          const viewportHeight = window.innerHeight;
          
          if (rect.top <= viewportHeight && rect.bottom >= 0) {
            const rawProgress = (viewportHeight - rect.top) / (sectionHeight + viewportHeight);
            const scrollProgress = Math.max(0, Math.min(1, rawProgress * 1.28)); // ⚡ faster scroll (1.8x speed)

            
            setScrollProgress(scrollProgress);
            
            const step = Math.min(
              Math.floor(scrollProgress * advantages.length),
              advantages.length - 1
            );
            setActiveStep(Math.max(0, step));
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [advantages.length]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className="text-center mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span className="text-orange-500 font-semibold text-lg mb-2 block tracking-wider">Why Us?</span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            The <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Codedge</span> Advantage
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Transform your career with our comprehensive learning ecosystem designed for success
          </p>
        </div>

        {/* Timeline with Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2 hidden lg:block">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg"
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: 'height 0.1s linear'
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-32">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              const progress = Math.max(0, Math.min(1, (scrollProgress * advantages.length) - index));
              const isActive = progress > 0;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={advantage.id}
                  className="relative"
                  style={{
                    opacity: Math.min(1, progress + 0.3),
                    transform: `translateY(${(1 - Math.min(1, progress + 0.3)) * 60}px)`,
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="group relative">
                        {/* Glow Effect */}
                        <div 
                            className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-30 transition-all duration-700 ease-out`}
                            style={{
                                filter: 'blur(20px)', // smooth glow
                                zIndex: -1,
                            }}
                            ></div>
                        
                        <div 
                          className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 transition-all duration-700 ease-out"
                          style={{
                            transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                            boxShadow: isActive 
                              ? '0 20px 60px -15px rgba(0, 0, 0, 0.15), 0 10px 20px -10px rgba(0, 0, 0, 0.1)' 
                              : '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
                          }}
                          onMouseEnter={(e) => {
                            
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 30px 80px -20px rgba(0, 0, 0, 0.2), 0 15px 30px -15px rgba(0, 0, 0, 0.15)';
                           (e.currentTarget.previousElementSibling as HTMLElement)?.style.setProperty('opacity', '0.15');


                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 20px 60px -15px rgba(0, 0, 0, 0.15), 0 10px 20px -10px rgba(0, 0, 0, 0.1)';
                            (e.currentTarget.previousElementSibling as HTMLElement).style.opacity = '0';
                          }}
                        >
                          {/* Step Number */}
                          <div 
                            className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${advantage.gradient} text-white font-bold text-xl mb-6 shadow-lg`}
                            style={{
                              transform: `scale(${0.8 + (progress * 0.2)})`,
                              transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                          >
                            {index + 1}
                          </div>
                          
                          <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-all duration-500 ease-out hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text">
                            {advantage.title}
                          </h3>
                          
                          <p className="text-slate-600 leading-relaxed mb-6 text-base">
                            {advantage.description}
                          </p>

                          {/* Feature Highlights */}
                          <div className="flex flex-wrap gap-2">
                            <span 
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium transition-all duration-300 hover:bg-green-100 hover:scale-105"
                              style={{
                                opacity: progress,
                                transform: `translateX(${isLeft ? '' : '-'}${(1 - progress) * 20}px)`,
                                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                              }}
                            >
                              <CheckCircle className="w-4 h-4" />
                              Verified
                            </span>
                            <span 
                              className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${advantage.gradient} text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                              style={{
                                opacity: progress,
                                transform: `translateX(${isLeft ? '' : '-'}${(1 - progress) * 20}px)`,
                                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                              }}
                            >
                              <Icon className="w-4 h-4" />
                              Premium
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="relative z-10 hidden lg:block">
                      <div 
                        className={`w-20 h-20 rounded-full bg-gradient-to-r ${advantage.gradient} flex items-center justify-center shadow-2xl`}
                        style={{
                          transform: `scale(${0.7 + (progress * 0.3)}) rotate(${(1 - progress) * 180}deg)`,
                          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          opacity: Math.min(1, progress + 0.5)
                        }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Pulse Animation */}
                      {isActive && (
                        <div 
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${advantage.gradient}`}
                          style={{
                            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                            opacity: 0.2
                          }}
                        ></div>
                      )}
                    </div>

                    {/* Image Card */}
                    <div className="flex-1">
                      <div className="group relative">
                        {/* Hover Glow */}
                        <div 
                          className={`absolute -inset-1 bg-gradient-to-r ${advantage.gradient} rounded-3xl blur-2xl transition-all duration-700 ease-out`}
                          style={{ opacity: 0 }}
                        ></div>
                        
                        <div 
                          className="relative rounded-3xl overflow-hidden shadow-xl transition-all duration-700 ease-out"
                          style={{
                            transform: `scale(${0.95 + (progress * 0.05)})`,
                            opacity: Math.min(1, progress + 0.3)
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 30px 80px -20px rgba(0, 0, 0, 0.25)';
                            (e.currentTarget.previousElementSibling as HTMLElement).style.opacity = '0.2';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 20px 60px -15px rgba(0, 0, 0, 0.2)';
                           ( e.currentTarget.previousElementSibling as HTMLElement).style.opacity = '0';
                          }}
                        >
                          <img
                            src={advantage.image}
                            alt={advantage.title}
                            className="w-full h-64 object-cover transition-transform duration-1000 ease-out hover:scale-110"
                          />
                          
                          {/* Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 transition-opacity duration-500 hover:opacity-10`}></div>
                          
                          {/* Floating Icon */}
                          <div 
                            className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ease-out"
                            style={{
                              transform: 'translateY(10px)',
                              opacity: 0
                            }}
                            onMouseEnter={(e) => {
                                const parent = e.currentTarget.parentElement as HTMLElement | null;
                                if (!parent) return; // ✅ safely exit if null

                                const icon = parent.querySelector(".floating-icon") as HTMLElement | null;
                                if (icon) {
                                    icon.style.transform = "translateY(0)";
                                    icon.style.opacity = "1";
                                }
                                }}

                                onMouseLeave={(e) => {
                                const parent = e.currentTarget.parentElement as HTMLElement | null;
                                if (!parent) return; // ✅ safely exit if null

                                const icon = parent.querySelector(".floating-icon") as HTMLElement | null;
                                if (icon) {
                                    icon.style.transform = "translateY(10px)";
                                    icon.style.opacity = "0";
                                }
                                }}

                          >
                            <Icon className={`w-6 h-6 bg-gradient-to-r ${advantage.gradient} bg-clip-text floating-icon`} style={{ color: 'transparent' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className="text-center mt-24"
          style={{
            opacity: scrollProgress > 0.8 ? 1 : 0,
            transform: scrollProgress > 0.8 ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <button 
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-xl overflow-hidden"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 60px -10px rgba(139, 92, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(139, 92, 246, 0.3)';
            }}
            style={{
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <span className="relative z-10">Start Your Journey Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}