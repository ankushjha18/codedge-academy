"use client"
import React, { useState } from 'react';
import { Code2, Sparkles, Users, FolderKanban, GraduationCap, Target, Briefcase, Clock, BookOpen, Zap } from 'lucide-react';

export default function OverviewSection() {
  const [hoveredCard, setHoveredCard] = useState<number|null>(null);

  const highlights = [
    {
      icon: Zap,
      title: 'Real-World Hands-On Experience',
      description: 'Build production-ready applications with React, Node.js, and modern frameworks in actual business environments.',
      iconBg: 'bg-orange-500',
      iconColor: 'text-orange-500'
    },
    {
      icon: Briefcase,
      title: 'Master Top Industry Tools',
      description: 'Gain expertise in Next.js, TypeScript, MongoDB, Docker, and advanced DevOps frameworks.',
      iconBg: 'bg-orange-500',
      iconColor: 'text-orange-500'
    },
    {
      icon: FolderKanban,
      title: '31+ Case Studies & Projects',
      description: 'Work on mini, mega, and live projects to apply real-world problem-solving techniques.',
      iconBg: 'bg-orange-500',
      iconColor: 'text-orange-500'
    },
    {
      icon: Users,
      title: '145+ Hours of Expert Learning',
      description: 'Learn directly from 12 global MLOps professionals, including FAANG leaders.',
      iconBg: 'bg-orange-500',
      iconColor: 'text-orange-500'
    },
    {
      icon: GraduationCap,
      title: 'Personalized Expert Mentorship',
      description: 'Receive 1:1 guidance and career insights from senior full-stack developers and tech leads.',
      iconBg: 'bg-orange-500',
      iconColor: 'text-orange-500'
    },
    {
      icon: Target,
      title: 'Career-Focused Practical Skills',
      description: 'Build job-ready skills aligned with top hiring companies in web development and tech.',
      iconBg: 'bg-orange-500',
      iconColor: 'text-orange-500'
    },
    {
      icon: BookOpen,
      title: '76+ Quizzes and 29+ Assignments',
      description: 'Test knowledge, strengthen concepts, and track progress at every stage.',
      iconBg: 'bg-orange-500',
      iconColor: 'text-orange-500'
    },
    {
      icon: Clock,
      title: 'Flexible Learning Options',
      description: 'Access live sessions, recordings, and resources learn at your own pace.',
      iconBg: 'bg-orange-500',
      iconColor: 'text-orange-500'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Overview Section */}
        <div className="mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm">COURSE DETAILS</span>
            </div>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Overview
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Master's in Web Development is a transformative 9-month program designed to empower learners from all educational and professional backgrounds to excel in the world of modern web development.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                The curriculum combines industry-relevant theory with hands-on experience, covering React, Node.js, TypeScript, Next.js, MongoDB, and cutting-edge DevOps tools. Delivered by top-tier industry experts, the program includes live sessions, capstone projects, and case studies to ensure practical exposure.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Learners earn prestigious certifications from industry leaders, enhancing their credibility and global employability. Whether you're a beginner or a working professional, this program equips you to become fully job-ready in today's tech-driven world.
              </p>

              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Enroll Now
                </button>
                <button className="px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
                  Download Syllabus
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                  alt="Web Development" 
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 bg-white rounded-lg px-4 py-2 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-800">React & Next.js</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-2 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-gray-800">9 Months Program</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* Key Highlights Section */}
        <div className="pt-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Key Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-xl"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background animation on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 ${item.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Bottom line animation */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5000+', label: 'Students Placed', icon: Users },
              { value: '₹8.5L', label: 'Average Package', icon: Briefcase },
              { value: '500+', label: 'Hiring Partners', icon: Target },
              { value: '95%', label: 'Success Rate', icon: Sparkles }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}