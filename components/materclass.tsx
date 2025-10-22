'use client';

import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight, Sparkles, Play } from 'lucide-react';

const masterclasses = [
  {
    id: 1,
    title: 'From Zero to Data Hero',
    subtitle: 'How to Land Your First Data Job in 90 Days.',
    date: '12/5/2025',
    duration: '6 weeks',
    color: 'from-blue-400 to-cyan-400',
    icon: '📊',
    image: '💼',
    tags: ['Beginner', 'Career Launch', 'Data Analytics']
  },
  {
    id: 2,
    title: 'Will AI Automate Data Science',
    subtitle: 'Jobs In 2025',
    date: '12/5/2025',
    duration: '6 weeks',
    color: 'from-purple-400 to-pink-400',
    icon: '🤖',
    image: '🔮',
    tags: ['AI/ML', 'Future Trends', 'Data Science']
  },
  {
    id: 3,
    title: 'Artificial Intelligence',
    subtitle: 'How to Land Your First Data Job in 90 Days.',
    date: '12/5/2025',
    duration: '6 weeks',
    color: 'from-emerald-400 to-teal-400',
    icon: '🧠',
    image: '⚡',
    tags: ['AI', 'Deep Learning', 'Neural Networks']
  }
];

export default function MasterclassSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-13 px-4 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * 50}px, ${scrollY * 30}px)`
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
          style={{
            transform: `translate(-${scrollY * 40}px, -${scrollY * 50}px)`
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"
          style={{
            transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.5})`
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div
          className="text-center mb-10"
          style={{
            opacity: scrollY,
            transform: `translateY(${(1 - scrollY) * 50}px)`
          }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-3 border border-blue-100">
            <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LIMITED SEATS AVAILABLE
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Attend Masterclass
            </span>
          </h1>
          
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
            Free masterclass with expert insights to launch careers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {masterclasses.map((course, index) => (
            <div
              key={course.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={handleMouseMove}
              style={{
                opacity: scrollY,
                transform: `translateY(${(1 - scrollY) * (50 + index * 20)}px)`
              }}
            >
              {/* Card Container */}
              <div
                className={`relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 h-full ${
                  hoveredCard === course.id
                    ? 'scale-105 shadow-2xl'
                    : 'hover:shadow-2xl'
                }`}
              >
                {/* Spotlight Effect */}
                {hoveredCard === course.id && (
                  <div
                    className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.8), transparent)`
                    }}
                  />
                )}

                {/* Top Gradient Section */}
                <div
                  className={`relative h-50 bg-gradient-to-br ${course.color} p-8 overflow-hidden`}
                >
                  {/* Animated Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute bg-white rounded-full"
                          style={{
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      From <span className="text-yellow-300">Zero</span> to
                    </h3>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Data <span className="text-yellow-300">Hero</span>
                    </h3>
                    <p className="text-white/90 text-sm">
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute bottom-20 right-4 text-6xl transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                    {course.image}
                  </div>
                </div>

                {/* Bottom Content Section */}
                <div className="p-6 bg-white">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    {course.title}
                  </h4>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Date and Duration */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="flex items-center justify-center w-10 h-10 bg-orange-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="font-semibold text-gray-800">{course.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-semibold text-gray-800">{course.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 bg-gradient-to-r ${course.color} text-white font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                      hoveredCard === course.id
                        ? 'scale-105 shadow-2xl'
                        : 'hover:scale-105'
                    }`}
                  >
                    <Play className="w-5 h-5" />
                    <span>Signup Now</span>
                    <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-lg">
                  🔥 Hot
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA /}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            🎯 Join <span className="font-bold text-purple-600">5000+</span> students who transformed their careers
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-4 border-white shadow-lg"
                style={{
                  marginLeft: i > 0 ? '-12px' : '0',
                  zIndex: 5 - i
                }}
              />
            ))}
          </div>
        </div>*/}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}