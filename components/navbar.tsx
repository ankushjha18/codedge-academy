"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Sparkles, Zap } from 'lucide-react';
import PopupForm from './popupform';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState<string|null>(null);
  const [currentPath, setCurrentPath] = useState('/');

  // Course categories with subcategories
  const courseCategories = [
    {
      title: "TOP RECOMMENDED",
      icon: "⭐",
      color: "from-yellow-500 to-orange-500",
      courses: [
        {
          title: "Master's In Artificial Intelligence",
          duration: "9 Months | Job Guarantee",
          icon: "🤖",
          href: "/courses/top-recommended/artificial-intelligence"
        },
        {
          title: "Full Stack Development",
          duration: "6 Months | Industry Projects",
          icon: "💻",
          href: "/courses/top-recommended/full-stack"
        }
      ]
    },
    {
      title: "MASTER'S PROGRAM",
      icon: "🎓",
      color: "from-blue-500 to-purple-500",
      courses: [
        {
          title: "Master's In Artificial Intelligence",
          duration: "9 Months | 4 Domain Specialization",
          icon: "🤖",
          href: "/courses/masters/artificial-intelligence"
        },
        {
          title: "Master's In Data Science",
          duration: "6 Months | Career Support",
          icon: "📊",
          href: "/courses/masters/data-science"
        },
        {
          title: "Master's In Cloud Computing",
          duration: "8 Months | AWS & Azure",
          icon: "☁️",
          href: "/courses/masters/cloud-computing"
        }
      ]
    },
    {
      title: "CERTIFICATION PROGRAM",
      icon: "📜",
      color: "from-green-500 to-teal-500",
      courses: [
        {
          title: "Advanced Business Analytics",
          duration: "6 Months | 20+ Projects",
          icon: "📈",
          href: "/courses/certification/business-analytics"
        },
        {
          title: "Digital Marketing Certification",
          duration: "4 Months | SEO & SEM",
          icon: "📱",
          href: "/courses/certification/digital-marketing"
        },
        {
          title: "Cybersecurity Certification",
          duration: "5 Months | Ethical Hacking",
          icon: "🔒",
          href: "/courses/certification/cybersecurity"
        }
      ]
    }
  ];

  const menuItems = [
    { name: 'Review', effect: 'wave', href: '/reviews' },
    { name: 'Blog', effect: 'slide', href: '/blog' },
    { name: 'About', effect: 'glow', href: '/about' },
    { name: 'Join', effect: 'bounce', href: '/join' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Simulate current path (in real Next.js, use usePathname from next/navigation)
    setCurrentPath(window.location.pathname);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href:string) => currentPath === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-20 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-orange-100/30' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}
      >
        {/* Animated gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h- bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-17">
            {/* Logo with magnetic effect */}
            <a href="/" className="flex-shrink-0 group cursor-pointer relative">
              <div className="relative flex items-center space-x-3 transform transition-all duration-500 group-hover:scale-110">
                {/* Logo Image */}
                <img
                  src="/logo.png" // <-- your image path here
                  alt="Logo"
                  className="w-40 h-52 object-contain" // adjust width & height
                />
                {/* Optional: text next to image /}
                <div className="hidden sm:block">
                  <div className="text-2xl font-black text-gray-800">
                    CodegE
                  </div>
                  <div className="text-xs font-semibold text-gray-600 tracking-wider">ACADEMY</div>
                </div>*/}
              </div>
            </a>


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Courses Mega Menu */}
              <div
                className="relative group perspective-1000"
                onMouseEnter={() => setShowCourseDropdown(true)}
                onMouseLeave={() => setTimeout(() => setShowCourseDropdown(false), 150)}
              >
                <button className={`relative px-5 py-2.5 rounded-2xl font-semibold transition-all duration-300 group overflow-hidden ${
                  currentPath.includes('/courses') 
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg' 
                    : 'text-gray-700'
                }`}>
                  <span className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl ${
                    currentPath.includes('/courses') ? 'hidden' : ''
                  }`}></span>
                  <span className={`absolute inset-0 border-2 border-transparent group-hover:border-orange-300 rounded-2xl transition-all duration-500 ${
                    currentPath.includes('/courses') ? 'hidden' : ''
                  }`}></span>
                  <div className="relative flex items-center space-x-2 z-10">
                    <span className={`transition-colors duration-300 ${
                      currentPath.includes('/courses') ? '' : 'group-hover:text-orange-600'
                    }`}>Courses</span>
                    <ChevronDown className={`w-4 h-4 transform transition-all duration-500 group-hover:rotate-180 ${
                      currentPath.includes('/courses') ? '' : 'group-hover:text-orange-600'
                    }`} />
                  </div>
                  {!currentPath.includes('/courses') && (
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000"></span>
                  )}
                </button>

                {/* Mega Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[900px] transition-all duration-500 origin-top ${
                    showCourseDropdown 
                      ? 'opacity-100 scale-100 visible rotate-x-0' 
                      : 'opacity-0 scale-95 invisible rotate-x-12'
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Arrow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white backdrop-blur-2xl rotate-45 border-l border-t border-orange-200"></div>
                  
                  <div className="relative bg-white backdrop-blur-2xl rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
                    {/* Header gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 opacity-50"></div>
                    
                    <div className="relative p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {courseCategories.map((category, catIndex) => (
                          <div key={catIndex} className="space-y-3">
                            {/* Category Header */}
                            <div className={`flex items-center space-x-2 pb-3 border-b-2 border-gradient-to-r ${category.color}`}>
                              <span className="text-2xl">{category.icon}</span>
                              <h3 className={`font-black text-xs tracking-wider bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {category.title}
                              </h3>
                            </div>

                            {/* Course Items */}
                            <div className="space-y-2">
                              {category.courses.map((course, courseIndex) => (
                                <a
                                  key={courseIndex}
                                  href={course.href}
                                  className={`block p-3 rounded-xl transition-all duration-300 group/item relative overflow-hidden ${
                                    isActive(course.href) 
                                      ? 'bg-gradient-to-r from-orange-50 to-pink-50 border-2 border-orange-300' 
                                      : 'hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50'
                                  }`}
                                >
                                  {/* Hover background */}
                                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/item:opacity-5 transition-all duration-500`}></div>
                                  
                                  <div className="relative flex items-start space-x-3">
                                    <div className="text-2xl transform transition-all duration-500 group-hover/item:scale-110 group-hover/item:rotate-6">
                                      {course.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className={`font-semibold text-sm text-gray-800 mb-1 line-clamp-2 ${
                                        isActive(course.href)
                                          ? `bg-gradient-to-r ${category.color} bg-clip-text text-transparent`
                                          : `group-hover/item:bg-gradient-to-r group-hover/item:${category.color} group-hover/item:bg-clip-text group-hover/item:text-transparent`
                                      } transition-all duration-500`}>
                                        {course.title}
                                      </h4>
                                      <p className="text-xs text-gray-600">{course.duration}</p>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 transition-all duration-500 ${
                                      isActive(course.href)
                                        ? 'text-orange-600 opacity-100'
                                        : 'text-orange-500 opacity-0 group-hover/item:opacity-100 transform translate-x-1 group-hover/item:translate-x-0'
                                    }`} />
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Menu Items with unique hover effects */}
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2.5 rounded-2xl font-semibold transition-all duration-300 group overflow-hidden ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-700'
                  }`}
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {/* Different effects for each item (only show if not active) */}
                  {!isActive(item.href) && (
                    <>
                      {item.effect === 'wave' && (
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-wave"></span>
                      )}
                      {item.effect === 'slide' && (
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-full group-hover:translate-x-0 opacity-10 transition-transform duration-500"></span>
                      )}
                      {item.effect === 'glow' && (
                        <>
                          <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></span>
                          <span className="absolute inset-0 border-2 border-orange-300 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500 animate-pulse-border"></span>
                        </>
                      )}
                      {item.effect === 'bounce' && (
                        <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-bounce-subtle"></span>
                      )}
                    </>
                  )}
                  
                  <span className={`relative z-10 ${
                    !isActive(item.href) && `group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${
                      item.effect === 'wave' ? 'group-hover:from-blue-600 group-hover:to-cyan-600' :
                      item.effect === 'slide' ? 'group-hover:from-purple-600 group-hover:to-pink-600' :
                      item.effect === 'glow' ? 'group-hover:from-orange-600 group-hover:to-red-600' :
                      'group-hover:from-green-600 group-hover:to-emerald-600'
                    }`
                  } transition-all duration-300`}>
                    {item.name}
                  </span>

                  {/* Floating particles (only on hover, not when active) */}
                  {!isActive(item.href) && activeItem === item.name && (
                    <>
                      <span className="absolute top-0 left-1/4 w-1 h-1 bg-orange-500 rounded-full animate-float-1"></span>
                      <span className="absolute bottom-0 right-1/4 w-1 h-1 bg-pink-500 rounded-full animate-float-2"></span>
                    </>
                  )}
                </a>
              ))}
            </div>

            {/* Enroll Button with magnetic effect */}
            <PopupForm
            trigger={
            <div className="hidden md:block relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-glow"></div>
              <a
                href="/#"
                className={`relative block px-8 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold rounded-full overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-orange-500/50 bg-size-200 animate-gradient-x ${
                  isActive('/#') ? 'ring-4 ring-orange-300' : ''
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Enroll Now</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-2 group-hover:scale-125 transition-all duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                {/* Ripple effect */}
                <span className="absolute inset-0 scale-0 group-hover:scale-150 bg-white/30 rounded-full transition-transform duration-700"></span>
                {/* Shine */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000"></span>
              </a>
            </div>
            }
            />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 rounded-2xl text-gray-700 hover:bg-orange-50 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
              {isOpen ? (
                <X className="w-6 h-6 relative z-10 transform group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden  transition-all duration-500 ${
            isOpen ? 'max-h-screen opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="relative px-4 pt-2 pb-6 space-y-2 bg-white border-t border-orange-200">
            {/* Mobile Course Categories */}
            <div className="space-y-2">
              <button
                onClick={() => setShowCourseDropdown(!showCourseDropdown)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-2xl font-semibold transition-all duration-300 group ${
                  currentPath.includes('/courses')
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-700 bg-orange-50 hover:bg-orange-100'
                }`}
              >
                <span>Courses</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-all duration-500 ${
                    showCourseDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  showCourseDropdown ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-4 pt-2">
                  {courseCategories.map((category, catIndex) => (
                    <div key={catIndex} className="pl-2">
                      <div className={`flex items-center space-x-2 mb-2 pb-2 border-b-2 border-gradient-to-r ${category.color}`}>
                        <span className="text-xl">{category.icon}</span>
                        <h4 className={`font-bold text-xs tracking-wider bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {category.title}
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {category.courses.map((course, courseIndex) => (
                          <a
                            key={courseIndex}
                            href={course.href}
                            className={`block p-3 rounded-xl transition-all duration-300 border-l-4 transform hover:translate-x-1 ${
                              isActive(course.href)
                                ? 'bg-gradient-to-r from-orange-50 to-pink-50 border-orange-500 shadow-lg'
                                : 'bg-white border-transparent hover:border-orange-300 hover:bg-orange-50'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-xl">{course.icon}</span>
                              <div className="flex-1 min-w-0">
                                <h5 className="font-semibold text-sm text-gray-800 truncate">{course.title}</h5>
                                <p className="text-xs text-gray-600 mt-1">{course.duration}</p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Other Links */}
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:translate-x-1 ${
                  isActive(item.href)
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-700 bg-orange-50 hover:bg-orange-100 hover:text-orange-600'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Enroll Button */}
            <a
              href="/enroll"
              className={`block w-full mt-4 px-6 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-105 bg-size-200 animate-gradient-x text-center ${
                isActive('/enroll') ? 'ring-4 ring-orange-300' : ''
              }`}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Enroll Now</span>
                <Zap className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(100%); }
        }
        @keyframes pulse-border {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes float-1 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-20px) translateX(10px); opacity: 0; }
        }
        @keyframes float-2 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(20px) translateX(-10px); opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 1s ease-in-out infinite;
        }
        .animate-float-1 {
          animation: float-1 2s ease-out infinite;
        }
        .animate-float-2 {
          animation: float-2 2.5s ease-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-x-0 {
          transform: rotateX(0deg);
        }
        .rotate-x-12 {
          transform: rotateX(-12deg);
        }
      `}</style>
    </>
  );
};

export default Navbar;