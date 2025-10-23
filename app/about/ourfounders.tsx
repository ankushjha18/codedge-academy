"use client"
import React, { useState } from 'react';
import { Linkedin, Mail, Award, Briefcase, GraduationCap, Star, TrendingUp, Users } from 'lucide-react';

const FoundersSection = () => {
  const [hoveredFounder, setHoveredFounder] = useState<number|null>(null);

  const founders = [
    {
      name: "Lalit Vijay",
      title: "Co-Founder & Chief Innovation Officer",
      education: "University of Leeds alumnus",
      experience: "Ex-Walmart",
      years: "10+ Years in Tech Leadership",
      description: "A strategic innovator and passionate educator, Lalit brings over a decade of experience across AI, product engineering, and business transformation. Having led key tech initiatives at Walmart, Lalit understands what it takes to build systems that scale globally. As a Leeds graduate, he combines academic rigor with real-world leadership. At Codedge, he spearheads innovation in curriculum design and outcome-driven learning, ensuring every learner becomes industry-ready.",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      accentColor: "blue",
      highlights: ["AI & Product Engineering", "Business Transformation", "Curriculum Innovation"],
      image: "/images/founder1.jpg"
    },
    {
      name: "Amit Tiwari",
      title: "Co-Founder & Product Excellence Lead",
      education: "Data & Product Evangelist",
      experience: "Ex-Google, AT&T",
      years: "7+ Years of Experience",
      description: "With a career that spans roles at Google and AT&T, Kajal is an expert in user-centric AI products, data science, and scalable solutions. Her journey reflects a perfect blend of deep tech skills and product-thinking. A mentor by nature and a trailblazer in her field, she's on a mission to democratize world-class tech education. Kajal leads learner experience and product excellence at Codedge, infusing every program with the mindset and tools needed to crack top-tier roles.",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      accentColor: "purple",
      highlights: ["User-Centric AI", "Data Science", "Learner Experience"],
      image: "/images/founder1.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-9 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            <Users className="w-5 h-5" />
            <span className="font-semibold text-sm tracking-wider uppercase">Meet The Visionaries</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Founders
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of tech education with experience from the world's leading companies
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {founders.map((founder, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFounder(index)}
              onMouseLeave={() => setHoveredFounder(null)}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${founder.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700`}></div>

              {/* Card */}
              <div className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 border border-gray-100`}>
                {/* Top Gradient Bar */}
                <div className={`h-2 bg-gradient-to-r ${founder.gradient}`}></div>

                <div className="p-8 md:p-10">
                  {/* Image Placeholder & Info */}
                  <div className="flex flex-col md:flex-row gap-8 mb-8">
                    {/* Profile Image */}
                    <div className="relative group/image">
                      <div className={`absolute -inset-1 bg-gradient-to-r ${founder.gradient} rounded-2xl blur opacity-75 group-hover/image:opacity-100 transition duration-500`}></div>
                      <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden shadow-xl">
                        {/* Placeholder for actual image */}
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-full h-full flex items-center justify-center">
                            {founder.image ? (
                              <img
                                src={founder.image}
                                alt={founder.name}
                                className="w-full h-full object-cover rounded-2xl"
                              />
                            ) : (
                              <div
                                className={`w-32 h-32 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white text-4xl font-bold shadow-2xl`}
                              >
                                {founder.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${founder.gradient} text-transparent bg-clip-text mb-2`}>
                          {founder.name}
                        </h2>
                        <p className="text-lg font-semibold text-gray-700 mb-4">
                          {founder.title}
                        </p>
                      </div>

                      {/* Badges */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className={`bg-gradient-to-r ${founder.gradient} p-2 rounded-lg`}>
                            <GraduationCap className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">{founder.education}</span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className={`bg-gradient-to-r ${founder.gradient} p-2 rounded-lg`}>
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">{founder.experience}</span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className={`bg-gradient-to-r ${founder.gradient} p-2 rounded-lg`}>
                            <TrendingUp className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">{founder.years}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {founder.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-3">
                      {founder.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className={`px-4 py-2 bg-gradient-to-r ${founder.bgGradient} rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-${founder.accentColor}-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4 pt-4">
                      <button className={`flex items-center space-x-2 bg-gradient-to-r ${founder.gradient} text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm font-semibold">Connect</span>
                      </button>
                      <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full hover:bg-gray-200 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm font-semibold">Email</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1 bg-gradient-to-r ${founder.gradient} transform origin-left transition-all duration-500 ${hoveredFounder === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-7 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-1">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Award className="w-8 h-8" />
              </div>
              <p className="text-4xl font-bold">17+</p>
              <p className="text-lg opacity-90">Years Combined Experience</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Star className="w-8 h-8" />
              </div>
              <p className="text-4xl font-bold">Top Tier</p>
              <p className="text-lg opacity-90">Global Companies</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Users className="w-8 h-8" />
              </div>
              <p className="text-4xl font-bold">1000+</p>
              <p className="text-lg opacity-90">Lives Transformed</p>
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
      `}</style>
    </div>
  );
};

export default FoundersSection;