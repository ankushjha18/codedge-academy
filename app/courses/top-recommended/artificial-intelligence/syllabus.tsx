"use client";
import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, CheckCircle, ChevronDown, ChevronUp, Play, Award, Code, Zap } from 'lucide-react';

export default function SyllabusSection() {
  const [expandedModule, setExpandedModule] = useState<number|null>(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const syllabusData = [
    {
      id: 1,
      title: "Frontend Fundamentals",
      duration: "4 Weeks",
      hours: "32 Hours",
      description: "Master the core building blocks of modern web development with HTML5, CSS3, and JavaScript ES6+",
      topics: [
        "HTML5 Semantic Elements & Accessibility",
        "CSS3 Advanced Styling & Animations",
        "Flexbox & Grid Layouts",
        "JavaScript ES6+ Features",
        "DOM Manipulation & Events",
        "Responsive Web Design"
      ],
      icon: Code,
      color: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      id: 2,
      title: "React & Modern Frameworks",
      duration: "6 Weeks",
      hours: "48 Hours",
      description: "Build dynamic, high-performance applications with React, Redux, and Next.js",
      topics: [
        "React Components & Hooks",
        "State Management with Redux",
        "React Router & Navigation",
        "Next.js & Server-Side Rendering",
        "Performance Optimization",
        "Testing with Jest & React Testing Library"
      ],
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      id: 3,
      title: "Backend Development",
      duration: "5 Weeks",
      hours: "40 Hours",
      description: "Create robust server-side applications with Node.js, Express, and database management",
      topics: [
        "Node.js Core Concepts",
        "Express.js RESTful APIs",
        "MongoDB & Mongoose",
        "Authentication & Authorization",
        "Security Best Practices",
        "API Design Patterns"
      ],
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      id: 4,
      title: "DevOps & Deployment",
      duration: "3 Weeks",
      hours: "24 Hours",
      description: "Deploy and scale applications with Docker, AWS, and CI/CD pipelines",
      topics: [
        "Docker & Containerization",
        "AWS Cloud Services",
        "CI/CD with GitHub Actions",
        "Nginx & Load Balancing",
        "Monitoring & Logging",
        "Production Best Practices"
      ],
      icon: Award,
      color: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100"
    },
    {
      id: 5,
      title: "Full-Stack Projects",
      duration: "4 Weeks",
      hours: "32 Hours",
      description: "Apply everything you've learned by building real-world, production-ready applications",
      topics: [
        "E-commerce Platform",
        "Social Media Dashboard",
        "Real-time Chat Application",
        "Project Management Tool",
        "Portfolio Website",
        "Capstone Project"
      ],
      icon: Play,
      color: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100"
    }
  ];

  const toggleModule = (id:number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  const toggleComplete = (id:number) => {
    setCompletedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const totalWeeks = syllabusData.reduce((acc, module) => acc + parseInt(module.duration), 0);
  const totalHours = syllabusData.reduce((acc, module) => acc + parseInt(module.hours), 0);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              Course <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-orange-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Syllabus
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 blur-lg opacity-50" />
              </span>
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 rounded-full" />
          </div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive curriculum designed to transform you into a full-stack developer
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="group px-6 py-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-slate-900">{totalWeeks}</p>
                  <p className="text-sm text-slate-600">Weeks</p>
                </div>
              </div>
            </div>
            <div className="group px-6 py-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-slate-900">{totalHours}</p>
                  <p className="text-sm text-slate-600">Hours</p>
                </div>
              </div>
            </div>
            <div className="group px-6 py-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-slate-900">{syllabusData.length}</p>
                  <p className="text-sm text-slate-600">Modules</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Timeline */}
        <div className="relative mb-12">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${(completedModules.length / syllabusData.length) * 100}%` }}
            />
          </div>
          <p className="text-center mt-2 text-sm text-slate-600">
            {completedModules.length} of {syllabusData.length} modules completed
          </p>
        </div>

        {/* Syllabus Modules */}
        <div className="space-y-6">
          {syllabusData.map((module, index) => (
            <SyllabusModule
              key={module.id}
              module={module}
              index={index}
              isExpanded={expandedModule === module.id}
              isCompleted={completedModules.includes(module.id)}
              onToggle={() => toggleModule(module.id)}
              onComplete={() => toggleComplete(module.id)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 10s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}
interface SyllabusModuleProps {
  module: {
    id: number;     
    title: string;
    duration: string;
    hours: string;
    description: string;    
    topics: string[];
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
    bgGradient: string;
  };
  index: number;
    isExpanded: boolean;
    isCompleted: boolean;
    onToggle: () => void;
    onComplete: () => void;
}

function SyllabusModule({ module, index, isExpanded, isCompleted, onToggle, onComplete }: SyllabusModuleProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = module.icon;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${module.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500`} />
      
      {/* Module Card */}
      <div className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 ${
        isExpanded ? 'shadow-2xl' : ''
      }`}>
        {/* Header */}
        <div
          className={`relative cursor-pointer p-6 md:p-8 transition-all duration-500 ${
            isExpanded ? `bg-gradient-to-r ${module.bgGradient}` : 'bg-white'
          }`}
          onClick={onToggle}
        >
          {/* Number Badge */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8">
            <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg`}>
              <span className="text-xl md:text-2xl font-black text-white">{String(index + 1).padStart(2, '0')}</span>
              {isCompleted && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start gap-4 md:gap-6 pr-16 md:pr-20">
            {/* Icon */}
            <div className={`p-4 md:p-5 rounded-2xl bg-gradient-to-br ${module.color} transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-lg`}>
              <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className={`text-2xl md:text-3xl font-bold mb-2 transition-all duration-300 ${
                isExpanded ? 'text-transparent bg-clip-text bg-gradient-to-r ' + module.color : 'text-slate-900'
              }`}>
                {module.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 shadow-sm">
                  <Clock className="w-4 h-4" />
                  {module.duration}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 shadow-sm">
                  <BookOpen className="w-4 h-4" />
                  {module.hours}
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed mb-4">
                {module.description}
              </p>

              {/* Toggle Button */}
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                <span>{isExpanded ? 'Show Less' : 'View Topics'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Decorative circles */}
          <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${module.color} opacity-10 rounded-full transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700`} />
        </div>

        {/* Expandable Topics */}
        <div className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white border-t border-slate-200">
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <div className={`w-1 h-6 bg-gradient-to-b ${module.color} rounded-full`} />
              What You'll Learn
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {module.topics.map((topic, topicIndex) => (
                <div
                  key={topicIndex}
                  className="group/topic flex items-start gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{
                    animation: `fadeInScale 0.4s ease-out ${topicIndex * 0.05}s both`
                  }}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${module.color} group-hover/topic:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-700 font-medium group-hover/topic:text-slate-900 transition-colors flex-1">
                    {topic}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onComplete();
                }}
                className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  isCompleted
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : `bg-gradient-to-r ${module.color} text-white hover:shadow-xl`
                }`}
              >
                {isCompleted ? '✓ Completed' : 'Mark as Complete'}
              </button>
              <button className={`px-6 py-3 rounded-xl font-semibold bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 transition-all duration-300 hover:border-slate-300`}>
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}