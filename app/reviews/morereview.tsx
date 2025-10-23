"use client"
'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState('linkedin');

  const linkedinReviews = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    }
  ];

  const googleReviews = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop"
    }
  ];

  const reviews = activeTab === 'linkedin' ? linkedinReviews : googleReviews;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-md text-gray-600">
            Real experiences from real learners
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('linkedin')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'linkedin'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              LinkedIn Reviews
            </button>
            <button
              onClick={() => setActiveTab('google')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'google'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Google Reviews
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Google Color Bar */}
              {activeTab === 'google' && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 z-10" />
              )}

              {/* LinkedIn Badge */}
              {activeTab === 'linkedin' && (
                <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  LinkedIn
                </div>
              )}

              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={review.image}
                  alt={`Review ${review.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">Click to view full review</p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="group relative px-10 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
            <span className="relative z-10">View More Reviews</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
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

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ReviewsSection;