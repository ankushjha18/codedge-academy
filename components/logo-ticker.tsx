"use client";
import React, { useState } from 'react';
import { Star, Award, TrendingUp } from 'lucide-react';

const TrustedBrandsSection = () => {
  const [hoveredBrand, setHoveredBrand] = useState<Item|null>(null);
  type Item = {
  row: number;
  index: number;
};

  // Brand logos organized in 3 rows with image URLs
  const brandRows = [
    // Row 1 - Scrolling Right
    [
      { img: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Myntra_logo.png', href: 'https://myntra.com', color: 'from-pink-500 to-red-500' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/4/49/World_Bank_Group_logo.svg', href: 'https://worldbank.org', color: 'from-blue-500 to-cyan-500' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_University_of_Chicago_Logo.svg', href: 'https://uchicago.edu', color: 'from-red-600 to-orange-600' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg', href: 'https://tata.com', color: 'from-blue-600 to-indigo-600' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg', href: 'https://samsung.com', color: 'from-blue-700 to-purple-700' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', href: 'https://google.com', color: 'from-red-500 to-yellow-500' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg', href: 'https://microsoft.com', color: 'from-blue-500 to-green-500' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', href: 'https://apple.com', color: 'from-gray-700 to-gray-900' }
    ],
    // Row 2 - Scrolling Left
    [
      { img: 'https://upload.wikimedia.org/wikipedia/en/2/25/Bajaj_Auto_Logo.svg', href: 'https://bajajauto.com', color: 'from-blue-600 to-blue-800' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', href: 'https://amazon.com', color: 'from-orange-400 to-yellow-600' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg', href: 'https://accenture.com', color: 'from-purple-600 to-pink-600' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg', href: 'https://walmart.com', color: 'from-blue-500 to-yellow-500' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg', href: 'https://visa.com', color: 'from-blue-600 to-blue-800' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Unilever_Logo.svg', href: 'https://unilever.com', color: 'from-blue-400 to-teal-500' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/PwC_Logo.svg', href: 'https://pwc.com', color: 'from-orange-500 to-red-600' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', href: 'https://netflix.com', color: 'from-red-600 to-black' }
    ],
    // Row 3 - Scrolling Right
    [
      { img: 'https://upload.wikimedia.org/wikipedia/commons/7/78/ESPN_wordmark.svg', href: 'https://espn.com', color: 'from-red-600 to-red-800' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Ericsson_logo.svg', href: 'https://ericsson.com', color: 'from-blue-600 to-purple-600' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg', href: 'https://lenovo.com', color: 'from-red-500 to-blue-600' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg', href: 'https://kpmg.com', color: 'from-blue-600 to-navy-800' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg', href: 'https://intel.com', color: 'from-blue-500 to-cyan-600' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg', href: 'https://infosys.com', color: 'from-blue-500 to-indigo-600' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg', href: 'https://adobe.com', color: 'from-red-600 to-pink-600' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg', href: 'https://oracle.com', color: 'from-red-500 to-orange-600' }
    ]
  ];

  return (
    <div className="relative py-20 bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/10 rounded-full blur-3xl animate-pulse-very-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10">
            <div className="flex items-center space-x-3">
              <Star className="w-6 h-6 text-yellow-500 animate-spin-slow" />
              <Award className="w-8 h-8 text-orange-500 animate-bounce-subtle" />
              <Star className="w-6 h-6 text-yellow-500 animate-spin-slow" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full border-2 border-orange-200">
              <TrendingUp className="w-5 h-5 text-orange-600 animate-pulse" />
              <span className="text-sm font-bold text-orange-600 tracking-wider">INDUSTRY LEADERS</span>
            </div>
          </div>

          <h2 className="text-3xl  md:text-4xl font-black text-gray-900 mb-4">
            Trusted by world's best <br/>
            <span className=" mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400  bg-clip-text text-transparent ">
              Organisations
            </span>
          </h2>
          <p className="text-l text-gray-600 max-w-2xl mx-auto">
            Recognized globally by top companies and leading employers.
          </p>

          {/* Decorative line */}
          <div className="mt-2 flex items-center justify-center space-x-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Scrolling Rows */}
        <div className="space-y-3">
          {brandRows.map((brands, rowIndex) => (
            <div
              key={rowIndex}
              className="relative overflow-hidden py-2"
            >
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-22 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-22 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

              <div
                className={`flex space-x-3 ${
                  rowIndex === 1 ? 'animate-scroll-left' : 'animate-scroll-right'
                }`}
                style={{
                  animationPlayState: hoveredBrand?.row === rowIndex ? 'paused' : 'running'
                }}
              >
                {/* Duplicate brands for seamless loop */}
                {[...brands, ...brands].map((brand, index) => (
                  <a
                    key={index}
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredBrand({ row: rowIndex, index })}
                    onMouseLeave={() => setHoveredBrand(null)}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${brand.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-110`}></div>
                      
                      {/* Card */}
                      <div className="relative w-52 h-22 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:scale-80 group-hover:-translate-y-2">
                        {/* Gradient border animation */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                        
                        {/* Content */}
                        <div className="relative h-full flex items-center justify-center p-6">
                          {/* Logo Image */}
                          <img 
                            src={brand.img} 
                            alt="Brand Logo"
                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                          />

                          {/* Shine effect */}
                          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000"></div>

                          {/* Floating particles on hover */}
                          {hoveredBrand?.row === rowIndex && hoveredBrand?.index === index && (
                            <>
                              <div className="absolute top-4 left-4 w-2 h-2 bg-orange-500 rounded-full animate-float-particle-1"></div>
                              <div className="absolute top-6 right-6 w-2 h-2 bg-pink-500 rounded-full animate-float-particle-2"></div>
                              <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-float-particle-3"></div>
                            </>
                          )}
                        </div>

                        {/* Corner accent */}
                        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}></div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 40px); }
        }
        @keyframes pulse-very-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float-particle-1 {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(20px, -30px); opacity: 0; }
        }
        @keyframes float-particle-2 {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(-25px, -25px); opacity: 0; }
        }
        @keyframes float-particle-3 {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(0, -35px); opacity: 0; }
        }

        .animate-scroll-right {
          animation: scroll-right 10s linear infinite;
        }
        .animate-scroll-left {
          animation: scroll-left 10s linear infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
        .animate-pulse-very-slow {
          animation: pulse-very-slow 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-float-particle-1 {
          animation: float-particle-1 2s ease-out infinite;
        }
        .animate-float-particle-2 {
          animation: float-particle-2 2.2s ease-out infinite;
        }
        .animate-float-particle-3 {
          animation: float-particle-3 2.5s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TrustedBrandsSection;