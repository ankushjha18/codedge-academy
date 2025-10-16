"use client"
import React, { useState } from 'react';
import { Eye, Target, Heart, Sparkles, Lightbulb, Zap } from 'lucide-react';

const InspirationSection = () => {
  const [activeCard, setActiveCard] = useState<number|null>(null);

  const inspirations = [
    {
      number: "01",
      title: "Vision",
      icon: <Eye className="w-8 h-8" />,
      subtitle: "Empower global talent to lead the future of technology.",
      description: "We envision a world where every learner regardless of background can access high-quality, real-world education in AI, Data Science, and emerging technologies. We strive to bridge the global skill gap with industry-relevant programs and personalized mentorship.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-50 to-cyan-50",
      tags: ["Global Access", "Real-World Education", "Personalized Mentorship"]
    },
    {
      number: "02",
      title: "Mission",
      icon: <Target className="w-8 h-8" />,
      subtitle: "Build tech leaders through practical, career-focused learning.",
      description: "Our mission is to provide hands-on, project-based education that equips learners with real-world tools, industry certifications, and placement support. We work closely with experts to create an upskilling journey that ensures job readiness, drives innovation, and fosters long-term career growth.",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-50 to-pink-50",
      tags: ["Hands-On Projects", "Industry Certifications", "Placement Support"]
    },
    {
      number: "03",
      title: "Core Values",
      icon: <Heart className="w-8 h-8" />,
      subtitle: "Integrity. Innovation. Impact.",
      description: "We are driven by a commitment to excellence through continuous innovation, ethical learning, and measurable outcomes. Our core values shape how we teach, mentor, and support each learner empowering them to succeed in top companies, unlock global opportunities, and make a lasting impact in the world of technology.",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgGradient: "from-orange-50 to-amber-50",
      tags: ["Excellence", "Ethical Learning", "Global Impact"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="font-semibold text-sm tracking-wider uppercase">Our Inspiration</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-gray-900">Driven by</span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text animate-gradient">
              innovation and impact
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Codedge Academy empowers learners toward transformation and success.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center space-x-4 pt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-purple-400 rounded-full"></div>
            <Lightbulb className="w-6 h-6 text-purple-500 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Inspiration Cards - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {inspirations.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700`}></div>

              {/* Card Content */}
              <div className={`relative h-full bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 transform hover:-translate-y-3`}>
                <div className="p-8 flex flex-col h-full">
                  {/* Number */}
                  <div className="relative mb-6">
                    <span className={`text-7xl font-bold bg-gradient-to-br ${item.gradient} text-transparent bg-clip-text opacity-90 transform transition-all duration-500 ${activeCard === index ? 'scale-110' : 'scale-100'}`}>
                      {item.number}
                    </span>
                    <div className={`absolute -bottom-2 left-0 h-2 bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-500 ${activeCard === index ? 'w-20' : 'w-0'}`}></div>
                  </div>

                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${item.gradient} p-4 rounded-2xl text-white shadow-lg inline-flex mb-6 transform transition-all duration-500 ${activeCard === index ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}`}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h2 className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text mb-4 transform transition-all duration-500`}>
                    {item.title}
                  </h2>

                  {/* Subtitle */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {item.subtitle}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-700 leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-1000 ease-out ${activeCard === index ? 'w-full' : 'w-0'}`}
                      ></div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full transform transition-all duration-500 ${activeCard === index ? 'scale-150' : 'scale-100'}`}></div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform origin-left transition-all duration-500 ${activeCard === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-1 rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="bg-white rounded-3xl px-12 py-8">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
                Ready to transform your future?
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default InspirationSection;