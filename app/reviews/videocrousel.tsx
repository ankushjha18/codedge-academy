"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Quote, User } from 'lucide-react';

const VideoTestimonialCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number|null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      video: "https://via.placeholder.com/600x400/667eea/ffffff?text=Video+1",
      thumbnail: "https://via.placeholder.com/600x400/667eea/ffffff?text=Sarah's+Story",
      quote: "This transformed our entire business model. ROI increased by 400% in just 6 months!",
      rating: 5,
      company: "TechCorp",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      video: "https://via.placeholder.com/600x400/764ba2/ffffff?text=Video+2",
      thumbnail: "https://via.placeholder.com/600x400/764ba2/ffffff?text=Michael's+Journey",
      quote: "Revolutionary platform! Our development speed tripled and team morale skyrocketed.",
      rating: 5,
      company: "StartupXYZ",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      video: "https://via.placeholder.com/600x400/f093fb/ffffff?text=Video+3",
      thumbnail: "https://via.placeholder.com/600x400/f093fb/ffffff?text=Emily's+Experience",
      quote: "Best marketing automation tool we've ever used. Campaign efficiency up 350%!",
      rating: 5,
      company: "Digital Agency",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 4,
      name: "David Park",
      role: "Product Manager",
      video: "https://via.placeholder.com/600x400/4facfe/ffffff?text=Video+4",
      thumbnail: "https://via.placeholder.com/600x400/4facfe/ffffff?text=David's+Success",
      quote: "Game-changing solution! Customer satisfaction scores reached all-time highs.",
      rating: 5,
      company: "Innovation Labs",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "VP of Sales",
      video: "https://via.placeholder.com/600x400/00d2ff/ffffff?text=Video+5",
      thumbnail: "https://via.placeholder.com/600x400/00d2ff/ffffff?text=Lisa's+Results",
      quote: "Incredible results! Sales pipeline grew by 500% and deals close 3x faster now.",
      rating: 5,
      company: "SalesForce Pro",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Operations Lead",
      video: "https://via.placeholder.com/600x400/f9ca24/ffffff?text=Video+6",
      thumbnail: "https://via.placeholder.com/600x400/f9ca24/ffffff?text=James's+Impact",
      quote: "Streamlined our operations beautifully. Efficiency gains beyond our wildest dreams!",
      rating: 5,
      company: "Global Corp",
      avatar: "https://i.pravatar.cc/150?img=6"
    },
    {
      id: 7,
      name: "Nina Patel",
      role: "Design Director",
      video: "https://via.placeholder.com/600x400/6c5ce7/ffffff?text=Video+7",
      thumbnail: "https://via.placeholder.com/600x400/6c5ce7/ffffff?text=Nina's+Vision",
      quote: "Absolutely phenomenal! Our creative workflow became seamless and inspiring.",
      rating: 5,
      company: "Creative Studio",
      avatar: "https://i.pravatar.cc/150?img=7"
    },
    {
      id: 8,
      name: "Robert Kim",
      role: "CFO",
      video: "https://via.placeholder.com/600x400/fd79a8/ffffff?text=Video+8",
      thumbnail: "https://via.placeholder.com/600x400/fd79a8/ffffff?text=Robert's+Metrics",
      quote: "Outstanding ROI! Cost savings of 60% while doubling our output capacity.",
      rating: 5,
      company: "Finance Solutions",
      avatar: "https://i.pravatar.cc/150?img=8"
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalPages]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setIsAutoPlay(false);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setIsAutoPlay(false);
  };

  const goToPage = (page:number) => {
    setCurrentPage(page);
    setIsAutoPlay(false);
  };

  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .card-3d {
          transform-style: preserve-3d;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card-3d:hover {
          transform: translateY(-12px) rotateX(5deg) rotateY(5deg) scale(1.02);
        }

        .gradient-border {
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #4facfe);
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .bg-grid {
          background-image: 
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 animate-slideInUp">
          <div className="inline-block mb-2">
            <span className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-semibold tracking-wide uppercase shadow-lg animate-glow">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-3 leading-tight">
            Client Love Stories
          </h2>
          <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto font-light">
            Real people, real results, real impact on their business growth
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {getCurrentItems().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="animate-slideInUp"
                style={{animationDelay: `${index * 0.1}s`}}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-3d glass-card rounded-2xl overflow-hidden h-full shine-effect group">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={testimonial.thumbnail} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group-hover:animate-pulse">
                        <Play className="w-7 h-7 text-purple-600 ml-1" fill="currentColor" />
                      </button>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg">
                      <Star className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
                      <span className="text-sm font-bold text-gray-800">{testimonial.rating}.0</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Quote */}
                    <div className="mb-4 relative">
                      <Quote className="absolute -top-1 -left-1 w-8 h-8 text-purple-400 opacity-30" />
                      <p className="text-white text-sm leading-relaxed pl-6 line-clamp-3">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-400/50">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-sm truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-purple-300 text-xs truncate">
                          {testimonial.role}
                        </p>
                        <p className="text-purple-400 text-xs truncate">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-50 blur-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6">
            {/* Previous Button */}
            <button
              onClick={prevPage}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-300" />
            </button>

            {/* Page Indicators */}
            <div className="flex gap-3">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    currentPage === index 
                      ? 'w-12 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                      : 'w-3 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextPage}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-300" />
            </button>
          </div>

          {/* Stats Counter */}
          <div className="mt-8 text-center">
            <p className="text-purple-300 text-sm">
              Showing {currentPage * itemsPerPage + 1}-{Math.min((currentPage + 1) * itemsPerPage, testimonials.length)} of {testimonials.length} testimonials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonialCarousel;