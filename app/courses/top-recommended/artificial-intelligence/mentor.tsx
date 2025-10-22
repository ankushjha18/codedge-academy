"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Award, Star } from 'lucide-react';
import { TimerOptions } from 'timers';

export default function MentorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  

  const mentors = [
    {
      name: "Mohit S.",
      company: "Kyndryl",
      companyLogo: "🔷",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      title: "Senior Full Stack Developer",
      description: "Elevate Your Profile: Boost your career prospects",
      expertise: ["React", "Node.js", "AWS"],
      experience: "8+ years"
    },
    {
      name: "Pulkit Jain",
      company: "PayPal",
      companyLogo: "💙",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      title: "Lead Software Engineer",
      description: "Elevate Your Profile: Boost your career prospects",
      expertise: ["Python", "System Design", "ML"],
      experience: "10+ years"
    },
    {
      name: "Tripti Jain",
      company: "Paytm",
      companyLogo: "💎",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      title: "Tech Lead",
      description: "Elevate Your Profile: Boost your career prospects",
      expertise: ["Frontend", "UI/UX", "TypeScript"],
      experience: "7+ years"
    },
    {
      name: "Ankur K.",
      company: "Walmart",
      companyLogo: "⭐",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      title: "Principal Engineer",
      description: "Elevate Your Profile: Boost your career prospects",
      expertise: ["Cloud", "DevOps", "Architecture"],
      experience: "12+ years"
    }
  ];

  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, mentors.length - visibleCards);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }
    return () => clearInterval(autoPlayRef.current as ReturnType<typeof setInterval>);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index:number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleTouchStart = (e:React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e:React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide();
    if (touchStart - touchEnd < -75) prevSlide();
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-blue-50/30 py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-100/30 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-2xl md:text-5xl font-black text-slate-900">
            Meet Our <span className="relative inline-block">
              <span className="relative z-10">Mentors</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-orange-400 to-blue-400 -rotate-1 -z-10"></span>
            </span>
          </h2>
          <p className="text-md md:text-xl text-slate-600 font-light max-w-3xl mx-auto">
            Guiding You Every Step of the Way Towards Professional Excellence
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 md:p-4 bg-white hover:bg-orange-500 text-slate-800 hover:text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 md:p-4 bg-white hover:bg-blue-500 text-slate-800 hover:text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div 
            className="overflow-hidden px-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <MentorCard mentor={mentor} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-12 h-3 bg-gradient-to-r from-orange-500 to-blue-500'
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-6">
            {/*<button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              {isAutoPlaying ? '⏸ Pause Auto-play' : '▶ Resume Auto-play'}
            </button>*/}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
interface MentorCardProps {
  mentor: {
    name: string;   
    company: string;
    companyLogo: string;
    image: string;
    title: string;
    description: string;
    expertise: string[];
    experience: string;
  };
  index: number;
}

function MentorCard({ mentor, index }: MentorCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Card Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500" />
      
      {/* Card */}
      <div className="relative h-full bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50" />
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative p-6 md:p-8">
          {/* Image Section */}
          <div className="flex items-start gap-4 mb-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-blue-400 rounded-2xl blur group-hover:blur-md transition-all duration-500" />
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
            </div>

            {/* Name and Company */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-blue-600 transition-all duration-300">
                {mentor.name}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{mentor.companyLogo}</span>
                <span className="text-lg font-semibold text-slate-700">{mentor.company}</span>
              </div>
              <p className="text-sm text-slate-600 font-medium">{mentor.title}</p>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full mb-4">
            <Award className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-slate-700">{mentor.experience}</span>
          </div>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors">
            {mentor.description}
          </p>

          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {mentor.expertise.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-blue-500 text-slate-700 group-hover:text-white text-sm font-medium rounded-full transition-all duration-300 transform group-hover:scale-105"
                style={{
                  transitionDelay: `${i * 50}ms`
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Book Session
            </button>
            <button className="p-3 bg-blue-100 hover:bg-blue-500 text-blue-600 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-blue-400/20 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
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
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}