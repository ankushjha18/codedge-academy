'use client';

import { useState } from 'react';
import { Download, Eye, ArrowRight, Clock, Award } from 'lucide-react';

export default function CoursesSection() {
const [activeTab, setActiveTab] = useState<CourseCategory>('recommended');

 type CourseCategory = 'recommended' | 'masters' | 'certification';
  interface Course {
  id: string | number;
  title: string;
  image: string;
  duration: string;
  level: string;
  color: string;
}


  const courses = {
    recommended: [
      {
        id: 1,
        title: "Master's In Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        duration: "12 Months",
        level: "Advanced",
        color: "from-blue-400 to-purple-400"
      },
      {
        id: 2,
        title: "Full Stack Web Development",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
        duration: "6 Months",
        level: "Intermediate",
        color: "from-green-400 to-teal-400"
      },
      {
        id: 3,
        title: "Data Science & Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        duration: "8 Months",
        level: "Intermediate",
        color: "from-orange-400 to-red-400"
      }
    ],
    masters: [
      {
        id: 4,
        title: "Master's In Data Science",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        duration: "12 Months",
        level: "Advanced",
        color: "from-cyan-400 to-blue-400"
      },
      {
        id: 5,
        title: "Master's In Machine Learning",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
        duration: "14 Months",
        level: "Advanced",
        color: "from-violet-400 to-purple-400"
      },
      {
        id: 6,
        title: "Master's In Cloud Computing",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
        duration: "10 Months",
        level: "Advanced",
        color: "from-pink-400 to-rose-400"
      }
    ],
    certification: [
      {
        id: 7,
        title: "Advanced Certification In Business Analytics",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        duration: "4 Months",
        level: "Professional",
        color: "from-amber-400 to-orange-400"
      },
      {
        id: 8,
        title: "Blockchain Development Certificate",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
        duration: "3 Months",
        level: "Professional",
        color: "from-emerald-400 to-green-400"
      },
      {
        id: 9,
        title: "Cybersecurity Specialist",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
        duration: "5 Months",
        level: "Professional",
        color: "from-red-400 to-pink-400"
      }
    ]
  };
  
 
  const tabs = [
    { id: 'recommended', label: 'Top Recommended' },
    { id: 'masters', label: "Master's Program" },
    { id: 'certification', label: 'Certification Program' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with animated gradient */}
        <div className="text-center mb-6 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-fade-in">
            Explore Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Transform your career with industry-leading programs designed by experts
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as CourseCategory)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses[activeTab].map((course, index) => (
            <div
              key={course.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glowing border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${course.color} rounded-2xl opacity-0 group-hover:opacity-75 blur transition-all duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 h-full transition-all duration-500 group-hover:border-transparent shadow-md group-hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 z-10"></div>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating badges */}
                  <div className="absolute top-4 right-4 z-20 space-y-2">
                    <span className="block px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs text-slate-700 font-medium border border-slate-200 shadow-sm">
                      {course.level}
                    </span>
                  </div>

                  {/* Animated corner accent */}
                  <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {course.title}
                  </h3>

                  {/* Info badges */}
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>Certified</span>
                    </div>
                  </div>

                  {/* Animated divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-all duration-300 hover:shadow-md group/btn border border-slate-200">
                      <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
                      <span className="text-sm font-medium">Brochure</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 group/btn">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover overlay particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-150"></div>
                  <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animation-delay-150 {
          animation-delay: 150ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
}