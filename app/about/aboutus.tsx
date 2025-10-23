"use client";
import React, { useState } from 'react';
import { BookOpen, Award, Globe, TrendingUp, GraduationCap, Users } from 'lucide-react';

const AboutUsSection = () => {
  const [hoveredService, setHoveredService] = useState<Number|null>(null);

  const services = [
    { 
      icon: <BookOpen className="w-6 h-6" />, 
      title: "AI", 
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: "Data Science", 
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: "Web Development", 
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "App Development", 
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Digital Marketing", 
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float-delay"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-float-slow"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-purple-100">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">About Us</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Codedge Academy
                </span>{' '}
                <span className="text-gray-800">is a full-service tech education platform focused on helping learners</span>{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                  succeed online
                </span>
                <span className="text-gray-800">.</span>
              </h1>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-md text-gray-700 leading-relaxed">
              <p>
                We specialize in{' '}
                <span className="font-bold text-blue-600">AI</span>,{' '}
                <span className="font-bold text-purple-600">Data Science</span>,{' '}
                <span className="font-bold text-green-600">Web Development</span>,{' '}
                <span className="font-bold text-orange-600">App Development</span>, and{' '}
                <span className="font-bold text-indigo-600">Digital Marketing</span>.
              </p>

              <p>
                With a team of{' '}
                <span className="font-bold text-gray-900">creative and skilled professionals</span>, we deliver tailored learning experiences that{' '}
                <span className="font-bold text-green-600">drive growth</span>,{' '}
                <span className="font-bold text-purple-600">enhance skills</span>, and create{' '}
                <span className="font-bold text-orange-600">lasting impact</span> for our learners.
              </p>
            </div>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`
                    group flex items-center space-x-3 px-6 py-3 rounded-full
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    ${hoveredService === index 
                      ? `bg-gradient-to-r ${service.color} text-white` 
                      : `${service.bgColor} text-gray-700`}
                  `}
                >
                  <span className={`transition-transform duration-300 ${hoveredService === index ? 'rotate-12' : ''}`}>
                    {service.icon}
                  </span>
                  <span className="font-semibold">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* right :Visual Section */}
                 <div className="flex-1 flex justify-center">
                 <div className="w-full max-w-sm md:max-w-md">
                   {/* Right Visual Section */}
                   <div className="relative">
                     {/* Central Circle */}
                     <div className="relative w-full  mx-auto max-w-xs">
                       <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                       
                       <div className="relative bg-white rounded-full p-8 shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-500">
                         <div className="aspect-square flex flex-col items-center justify-center text-center space-y-4">
                           
                           <div className="flex justify-center">
                             <img
                               src="/logo.png"  // actual image path
                               alt="Codedge Academy Logo"
                               className="w-68 h-68 object-contain  hover:scale-105 transition-transform duration-300 .animate-float"
                             />
                           </div>
                         </div>
                       </div>
         
                       {/* Floating Badge 1 - Top Right */}
                       <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-6 py-3 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 animate-float">
                         <div className="flex items-center space-x-2">
                           <span className="text-2xl">🎓</span>
                           <span className="font-bold">Google</span>
                         </div>
                       </div>
         
                       {/* Floating Badge 2 - Top Left */}
                       <div className="absolute -top-8 -left-8 bg-blue-400 text-white p-4 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 animate-float-delay">
                         
                         <div className="flex items-center space-x-2">
                           <BookOpen className="w-8 h-8" />
                           <span className="font-bold">Microsoft</span>
                         </div>
                       </div>
         
                       {/* Floating Badge 3 - Bottom Right */}
                       <div className="absolute -bottom-4 -right-15 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-3 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 animate-float-slow">
                         <div className="flex items-center space-x-2">
                           <span className="text-2xl">✨</span>
                           <span className="font-bold">IBM</span>
                         </div>
                       </div>
         
                       {/* Floating Card - Bottom /}
                       <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 w-80 hover:shadow-purple-200 transition-all duration-500 hover:-translate-y-2 border border-purple-100">
                         <div className="text-center space-y-2">
                           <h4 className="text-xl font-bold text-gray-900">AI & Data Science</h4>
                           <p className="text-sm text-gray-600">Industry-aligned curriculum with IBM certifications</p>
                         </div>
         
                       </div> */}
                       <div className="absolute --bottom-2 -left-10 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-3 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 animate-float-slow">
                         <div className="flex items-center space-x-2">
                           <span className="text-2xl">✨</span>
                           <span className="font-bold">Xsav Lab</span>
                         </div>
                       </div>
         
                       {/* Small Floating Icons */}
                       <div className="absolute top-1/4 -left-12 bg-orange-100 p-3 rounded-full shadow-lg animate-float">
                         <span className="text-2xl">📱</span>
                       </div>
                       <div className="absolute bottom-1/3 -right-12 bg-pink-100 p-3 rounded-full shadow-lg animate-float-delay">
                         <span className="text-2xl">🎨</span>
                       </div>
                       <div className="absolute top-1/2 -left-16 bg-purple-100 p-3 rounded-full shadow-lg animate-float-slow">
                         <span className="text-2xl">💼</span>
                       </div>
                     </div>
                   </div>
                 </div>
                 </div>
        </div>

        {/* Bottom Details Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Founded by Alumni</h3>
            </div>
            <p className="text-gray-600">University of Leeds & Liverpool John Moores University</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300 transform hover:-translate-y-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Global Presence</h3>
            </div>
            <p className="text-gray-600">UK, Bangalore, Delhi & Online since 2021</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100 hover:border-green-300 transform hover:-translate-y-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Since 2017</h3>
            </div>
            <p className="text-gray-600">Empowering thousands of learners worldwide</p>
          </div>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default AboutUsSection;