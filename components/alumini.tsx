'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';

const alumniData = [
  {
    id: 1,
    name: 'Aayushi Jain',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNDNT0lD4mrsr98KZlo-yAsNobSyZWeXaUA&s',
    prePlacement: 'BrightSoft Solutions',
    postPlacement: 'Razorpay',
    linkedIn: 'https://linkedin.com/in/aayushi-jain'
  },
  {
    id: 2,
    name: 'Pranjal Dubey',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNDNT0lD4mrsr98KZlo-yAsNobSyZWeXaUA&s',
    prePlacement: 'SmartByte Technologies',
    postPlacement: 'TCS',
    linkedIn: 'https://linkedin.com/in/pranjal-dubey'
  },
  {
    id: 3,
    name: 'Meenal Sinha',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNDNT0lD4mrsr98KZlo-yAsNobSyZWeXaUA&s',
    prePlacement: 'Digiware Solutions',
    postPlacement: 'Accenture',
    linkedIn: 'https://linkedin.com/in/meenal-sinha'
  },
  {
    id: 4,
    name: 'Rahul Sharma',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNDNT0lD4mrsr98KZlo-yAsNobSyZWeXaUA&s',
    prePlacement: 'TechVista Solutions',
    postPlacement: 'Google',
    linkedIn: 'https://linkedin.com/in/rahul-sharma'
  },
  {
    id: 5,
    name: 'Priya Verma',
    image: '/api/placeholder/200/200',
    prePlacement: 'CodeCraft Labs',
    postPlacement: 'Microsoft',
    linkedIn: 'https://linkedin.com/in/priya-verma'
  },
  {
    id: 6,
    name: 'Arjun Patel',
    image: '/api/placeholder/200/200',
    prePlacement: 'WebWorks India',
    postPlacement: 'Amazon',
    linkedIn: 'https://linkedin.com/in/arjun-patel'
  }
];

export default function AlumniCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerView = 3;
  const maxIndex = alumniData.length - itemsPerView;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-slate-900 via-blue-950 to-slate-900 py-10 px-8">
     
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 animate-fade-in">
          Explore and Connect with Our Alumni
        </h1>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={carouselRef}>
            <div
              className="flex gap-8 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {alumniData.map((alumni) => (
                <div
                  key={alumni.id}
                  className="min-w-[calc(33.333%-1.5rem)] flex-shrink-0"
                  onMouseEnter={() => {
                    setHoveredCard(alumni.id);
                    setIsAutoPlaying(false);
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    setIsAutoPlaying(true);
                  }}
                >
                  <div
                    className={`bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 h-full ${
                      hoveredCard === alumni.id
                        ? 'transform scale-105 shadow-pink-500/50'
                        : ''
                    }`}
                  >
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-22 relative">
                      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                        <div
                          className={`w-32 h-32 rounded-full border-4 border-white overflow-hidden transition-all duration-500 ${
                            hoveredCard === alumni.id
                              ? 'scale-110 rotate-6'
                              : ''
                          }`}
                        >
                          <img
                            src={alumni.image}
                            alt={alumni.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="pt-15 pb-8 px-6 text-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {alumni.name}
                      </h3>

                      {/* Pre Codedge Section */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2">
                          Pre Codedge Academy
                        </p>
                        <p className="font-semibold text-gray-700">
                          {alumni.prePlacement}
                        </p>
                      </div>

                      {/* Arrow Indicator */}
                      <div className="flex justify-center my-4">
                        <svg
                          className="w-8 h-8 text-orange-500 animate-bounce"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 3l-7 7h4v7h6v-7h4l-7-7z" />
                        </svg>
                      </div>

                      {/* Post Codedge Section */}
                      <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-2">
                          Post Codedge Academy
                        </p>
                        <p className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {alumni.postPlacement}
                        </p>
                      </div>

                      {/* LinkedIn Button */}
                      <a
                        href={alumni.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 ${
                          hoveredCard === alumni.id
                            ? 'bg-blue-700 transform scale-110 shadow-lg'
                            : 'hover:bg-blue-700'
                        }`}
                      >
                        <Linkedin size={20} />
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/90 hover:bg-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/90 hover:bg-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-12 h-3 bg-white'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            {isAutoPlaying ? '⏸ Pause Auto-play' : '▶ Resume Auto-play'}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}