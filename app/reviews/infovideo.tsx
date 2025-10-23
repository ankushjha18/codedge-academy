"use client";
import React, { useState } from 'react';
import { Play, Star, X } from 'lucide-react';

const TopRatedVideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const platforms = [
    {
      name: 'LinkedIn',
      rating: '4.7',
      logo: '🔗',
      color: 'from-blue-50 to-blue-100',
      textColor: 'text-blue-700',
      badge: 'Top Rated'
    },
    {
      name: 'Course Report',
      rating: '4.7',
      logo: '📚',
      color: 'from-green-50 to-green-100',
      textColor: 'text-green-700',
      badge: 'Featured'
    },
    {
      name: 'SwitchUp',
      rating: '4.7',
      logo: '🔄',
      color: 'from-rose-50 to-rose-100',
      textColor: 'text-rose-700',
      badge: 'Top Choice'
    },
    {
      name: 'Google',
      rating: '4.7',
      logo: '🔍',
      color: 'from-purple-50 to-purple-100',
      textColor: 'text-purple-700',
      badge: 'Verified'
    }
  ];

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-10 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }

        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 2s infinite;
        }

        .video-frame {
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(0, 0, 0, 0.05),
            inset 0 0 0 1px rgba(255, 255, 255, 0.9);
        }

        .platform-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .platform-card:hover {
          transform: translateY(-5px) scale(1.02);
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text and Ratings */}
          <div className="animate-fadeInUp text-center">
            {/* Header */}
            <div className="mb-5 ">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
                Courses Top Rated in:
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 font-light">
                Discover what our learners say about us
              </p>
            </div>

            {/* Platform Rating Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className={`platform-card bg-gradient-to-br ${platform.color} rounded-3xl p-6 shimmer-effect animate-scaleIn`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    {/* Logo */}
                    <div className="text-4xl">{platform.logo}</div>
                    
                    <div className="flex-1">
                      {/* Platform Name */}
                      <div className={`font-bold text-lg ${platform.textColor} mb-1`}>
                        {platform.name}
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-black text-slate-900">
                          {platform.rating}
                        </span>
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>

                    {/* Badge */}
                    <div className={`px-3 py-1 ${platform.textColor} bg-white/60 rounded-full text-xs font-semibold`}>
                      {platform.badge}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-black text-indigo-600 mb-1">50K+</div>
                <div className="text-sm text-slate-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-indigo-600 mb-1">4.7</div>
                <div className="text-sm text-slate-600">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-indigo-600 mb-1">100+</div>
                <div className="text-sm text-slate-600">Courses</div>
              </div>
            </div>
          </div>

          {/* Right Side - Video Player */}
          <div className="animate-fadeInUp lg:animate-float" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Video Container */}
              <div className="video-frame relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                {/* Thumbnail */}
                <div className="relative aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=675&fit=crop" 
                    alt="Student testimonials"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handlePlayVideo}
                      className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center animate-pulse-glow hover:scale-110 active:scale-95"
                      aria-label="Play video"
                    >
                      <Play className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 group-hover:text-white ml-1" fill="currentColor" />
                      
                      {/* Pulse Rings */}
                      <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    </button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                    ▶ 2:30
                  </div>

                  {/* Live Indicator */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    INTRODUCTION
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700">
                  <div className="h-full w-1/3 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <Star className="w-10 h-10 text-white fill-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
                4.7
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fadeInUp">
          {/* Close Button */}
          <button
            onClick={handleCloseVideo}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            aria-label="Close video"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Video Player */}
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Course Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopRatedVideoSection;