"use client";
import React, { useState, useEffect } from 'react';
import { Brain, Code, Briefcase, Users, Video, UserCheck, Headphones, BookOpen, Layers, Globe, Target, MessageSquare, Award, Star, CheckCircle, TrendingUp, Zap, Rocket, GraduationCap, ChevronRight } from 'lucide-react';

export default function WhyLearnersLove() {
  const [activeCard, setActiveCard] = useState<number|null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const mainFeatures = [
    {
      icon: Brain,
      title: 'Advanced Curriculum with Real-World Tools',
      description: 'Master the entire AI pipeline - from Python, Data Science, and Machine Learning to Deep Learning, NLP, and Computer Vision. Our market-aligned curriculum ensures you\'re ready for both service-based and product-based roles.',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgGradient: 'from-purple-50 to-pink-50',
      iconColor: 'text-purple-600',
      stats: ['15+ Tools', '50+ Projects']
    },
    {
      icon: Users,
      title: 'Project-Based Learning & Expert Mentorship',
      description: 'Work on real-world industry projects, build capstones, and learn from global AI mentors. Collaborate with peers in cohorts, gain hands-on experience, and receive personalized feedback throughout your journey to ensure you\'re job-ready and confident.',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconColor: 'text-blue-600',
      stats: ['1:1 Sessions', 'Live Projects']
    },
    {
      icon: Briefcase,
      title: '100% Placement Assistance + Internship',
      description: 'Access our global job portal, resume-building support, mock interviews, and a 3-month guaranteed internship. Launch your dream career with confidence whether it\'s a startup, MNC, or MAANG-level company we equip you with the tools to succeed anywhere.',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      bgGradient: 'from-orange-50 to-amber-50',
      iconColor: 'text-orange-600',
      stats: ['100% Guarantee', '3-Month Internship']
    }
  ];

  const programOffers = [
    { icon: Briefcase, title: 'Internship Training Experience', color: 'purple' },
    { icon: Video, title: 'Live Recorded Sessions', color: 'blue' },
    { icon: UserCheck, title: 'Personalized 1:1 Mentorship', color: 'pink' },
    { icon: Headphones, title: '24/7 Career Support', color: 'cyan' },
    { icon: BookOpen, title: 'Lifetime LMS Access', color: 'indigo' },
    { icon: Layers, title: 'Industry-Designed Curriculum', color: 'purple' },
    { icon: Zap, title: 'Interactive Learning Modules', color: 'orange' },
    { icon: Globe, title: 'Global Career Opportunities', color: 'green' },
    { icon: Target, title: 'Interview Preparation Training', color: 'red' },
    { icon: MessageSquare, title: 'Soft Skills Development', color: 'teal' },
    { icon: Code, title: 'Comprehensive Tools Coverage', color: 'blue' },
    { icon: CheckCircle, title: '100% Placement Guarantee', color: 'green' },
    { icon: Star, title: '5-Star Student Reviews', color: 'yellow' },
    { icon: Award, title: 'Globally Recognized Certifications', color: 'purple' },
    { icon: TrendingUp, title: 'Placement Guarantee Support', color: 'orange' },
    { icon: Rocket, title: 'All Tools Covered', color: 'pink' },
    { icon: GraduationCap, title: '10k+ Learners Placed', color: 'indigo' },
    { icon: Brain, title: 'Get Interview Preparation', color: 'cyan' },
    { icon: Zap, title: 'Master Latest Technologies', color: 'purple' }
  ];

 
    const colors = {
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' },
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-600', light: 'bg-pink-50', border: 'border-pink-200' },
      cyan: { bg: 'bg-cyan-500', text: 'text-cyan-600', light: 'bg-cyan-50', border: 'border-cyan-200' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-200' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200' },
      green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200' },
      red: { bg: 'bg-red-500', text: 'text-red-600', light: 'bg-red-50', border: 'border-red-200' },
      teal: { bg: 'bg-teal-500', text: 'text-teal-600', light: 'bg-teal-50', border: 'border-teal-200' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-600', light: 'bg-yellow-50', border: 'border-yellow-200' }
    };
     const getColorClasses = (color:keyof typeof colors) => {
    return colors[color] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ left: `${mousePosition.x}%`, top: `${mousePosition.y}%`, transition: 'all 0.5s ease-out' }}
        />
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ top: '20%', right: '10%' }} />
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{ bottom: '20%', left: '10%' }} />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-purple-200 rounded-lg transform rotate-45 animate-spin-slow opacity-30" />
      <div className="absolute top-40 right-20 w-16 h-16 border-4 border-blue-200 rounded-full animate-bounce-slow opacity-30" />
      <div className="absolute bottom-40 right-40 w-24 h-24 border-4 border-pink-200 transform rotate-12 animate-pulse opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 shadow-lg">
              <Star className="w-5 h-5 text-purple-600 animate-pulse" />
              <span className="text-purple-700 font-bold text-sm tracking-wide">STUDENT SUCCESS STORIES</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text animate-gradient">
            Why Learners Love This Program
          </h1>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Join thousands of successful learners who transformed their careers with our comprehensive program
          </p>
        </div>

        {/* Main Features - 3 Column Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`relative h-full bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 border-2 border-transparent hover:border-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2`}>
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Animated corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Section */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                      <feature.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                      
                      {/* Animated ring */}
                      <div className="absolute inset-0 rounded-2xl border-4 border-white/30 animate-ping-slow" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-4 text-center">
                    <h3 className={`text-2xl font-bold ${feature.iconColor} group-hover:scale-105 transition-transform duration-300`}>
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-700 text-base leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Stats badges */}
                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                      {feature.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                          <CheckCircle className={`w-4 h-4 ${feature.iconColor}`} />
                          <span className="font-semibold text-gray-700 text-sm">{stat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Animated arrow */}
                    <div className="pt-4">
                      <button className={`inline-flex items-center gap-2 ${feature.iconColor} font-semibold group-hover:gap-4 transition-all duration-300`}>
                        <span>Learn More</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                {activeCard === index && (
                  <>
                    <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full animate-float-particle" />
                    <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-float-particle animation-delay-500" />
                    <div className="absolute bottom-20 left-10 w-2 h-2 bg-white rounded-full animate-float-particle animation-delay-1000" />
                  </>
                )}

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} w-0 group-hover:w-full transition-all duration-700`} />
              </div>
            </div>
          ))}
        </div>

        {/* What Our Program Offers Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 shadow-lg">
                <Rocket className="w-5 h-5 text-blue-600 animate-bounce-slow" />
                <span className="text-blue-700 font-bold text-sm tracking-wide">PROGRAM BENEFITS</span>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              What Our Program Offers
            </h2>
            
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Everything you need to succeed in your learning journey
            </p>
          </div>

          {/* Grid of offerings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programOffers.map((offer, index) => {
              const colorClasses = getColorClasses(offer.color as keyof typeof colors);
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-6 border-2 ${colorClasses.border} hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.light} to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 ${colorClasses.bg} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <offer.icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold text-gray-800 group-hover:${colorClasses.text} transition-colors duration-300`}>
                      {offer.title}
                    </h3>

                    {/* Animated check mark */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-6 h-6 ${colorClasses.bg} rounded-full flex items-center justify-center`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 ${colorClasses.bg} w-0 group-hover:w-full transition-all duration-500`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-grid-white opacity-10" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join 10,000+ successful learners who achieved their dream jobs
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="group px-8 py-4 bg-white text-purple-600 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Enroll Now
                    <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-particle {
          0% { transform: translateY(0) opacity(1); }
          100% { transform: translateY(-100px) opacity(0); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-float-particle { animation: float-particle 3s ease-out forwards; }
        .animate-gradient { background-size: 200% auto; animation: gradient 3s ease infinite; }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        
        .bg-grid-white {
          background-image: linear-gradient(white 1px, transparent 1px),
                          linear-gradient(90deg, white 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
}