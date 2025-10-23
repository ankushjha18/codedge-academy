
'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Briefcase, Search, Users, Award,GraduationCap } from 'lucide-react';

const alumniData = [
  {
    id: 1,
    name: 'Aayushi Jain',
    image: '👩‍💻',
    role: 'Software Engineer',
    company: 'Google',
    course: 'Full Stack Development',
    review: 'The curriculum was incredibly comprehensive and industry-relevant. The mentorship I received helped me transition from a non-tech background to landing my dream job at Google.',
    rating: 5,
    salary: '₹28 LPA',
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    image: '👨‍💼',
    role: 'Data Scientist',
    company: 'Meta',
    course: 'Data Science & ML',
    review: 'Best decision of my career! The instructors are industry experts and the course content is cutting-edge. I went from knowing basic Python to building production-level ML models.',
    rating: 5,
    salary: '₹32 LPA',
  },
  {
    id: 3,
    name: 'Priya Patel',
    image: '👩‍🎓',
    role: 'Product Manager',
    company: 'Amazon',
    course: 'Product Management',
    review: 'From day one, I was immersed in real-world product scenarios. The frameworks and tools I learned are what I use daily at Amazon. The network of alumni is incredible.',
    rating: 5,
    salary: '₹35 LPA',
  },
  {
    id: 4,
    name: 'Arjun Kumar',
    image: '👨‍🔬',
    role: 'ML Engineer',
    company: 'Microsoft',
    course: 'Machine Learning',
    review: 'The depth of knowledge and practical experience I gained was outstanding. The projects pushed me to think critically and solve real problems. Highly recommend!',
    rating: 5,
    salary: '₹30 LPA',
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    image: '👩‍💼',
    role: 'Frontend Developer',
    company: 'Flipkart',
    course: 'Frontend Development',
    review: 'The course structure is perfect for working professionals. I could learn at my own pace while working full-time. The community support was amazing throughout.',
    rating: 5,
    salary: '₹22 LPA',
  },
  {
    id: 6,
    name: 'Vikram Singh',
    image: '👨‍🎓',
    role: 'DevOps Engineer',
    company: 'Adobe',
    course: 'DevOps & Cloud',
    review: 'Transformed my understanding of cloud infrastructure and DevOps practices. The hands-on labs and real-world scenarios prepared me perfectly for my current role.',
    rating: 5,
    salary: '₹26 LPA',
  }
];

export default function ReviewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % alumniData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + alumniData.length) % alumniData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const visibleReviews = [
    alumniData[currentIndex],
    alumniData[(currentIndex + 1) % alumniData.length],
    alumniData[(currentIndex + 2) % alumniData.length],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0f2943] to-[#1a4d6d] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--brand-orange)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[var(--brand-blue)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-10 pb-6 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight">
              Creating Impact<br />
              <span className="text-gradient">Through Outcomes</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover and connect with alumni who have<br />
              walked the same path as you
            </p>
            <button className="group bg-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/90 px-8 py-4 rounded-full font-bold text-lg btn-glow hover-raise transition-all duration-300 flex items-center gap-3">
              Explore Review
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>

            {/* Stats Cards */}
            <div className="flex gap-4 pt-8">
              <div className="glass rounded-2xl px-6 py-4 hover-raise transition-all duration-300 border">
                <div className="text-3xl font-bold text-[var(--brand-orange)]">10K+</div>
                <div className="text-sm text-gray-400 mt-1">Alumni</div>
              </div>
              <div className="glass rounded-2xl px-6 py-4 hover-raise transition-all duration-300 border">
                <div className="text-3xl font-bold text-[var(--brand-orange)]">95%</div>
                <div className="text-sm text-gray-400 mt-1">Success Rate</div>
              </div>
              <div className="glass rounded-2xl px-6 py-4 hover-raise transition-all duration-300 border">
                <div className="text-3xl font-bold text-[var(--brand-orange)]">500+</div>
                <div className="text-sm text-gray-400 mt-1">Companies</div>
              </div>
            </div>
          </div>

          {/* Right Visual Animation */}
          <div className="relative h-[600px]" 
               style={{
                 transform: `perspective(1000px) rotateY(${mousePosition.x * 5 - 2.5}deg) rotateX(${-mousePosition.y * 5 + 2.5}deg)`
               }}>
            {/* Profile Cards Stack */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md space-y-4">
              {[
                { emoji: '👨‍💻', delay: '0ms', name: 'Alex Chen', role: 'Software Engineer @ Google' },
                { emoji: '👩‍💼', delay: '150ms', name: 'Sarah Kumar', role: 'Product Manager @ Meta' },
                { emoji: '👨‍🎓', delay: '300ms', name: 'John Doe', role: 'Data Scientist @ Amazon' }
              ].map((profile, idx) => (
                <div
                  key={idx}
                  className="glass rounded-2xl p-5 border hover:border-[var(--brand-orange)] transition-all duration-300 hover-raise animate-fade-up flex items-center gap-4 group"
                  style={{ animationDelay: profile.delay, transform: `translateX(${idx * 20}px)` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {profile.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full w-32 mb-2"></div>
                    <div className="h-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full w-24"></div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform duration-300">
                    ✓
                  </div>
                </div>
              ))}
            </div>

            {/* Animated Magnifying Glass */}
            <div className="absolute top-20 right-10 animate-bounce-slow">
              <div className="relative">
                <div className="w-32 h-32 border-4 border-[var(--brand-orange)] rounded-full shadow-2xl shadow-[var(--brand-orange)]/50 animate-pulse-slow"></div>
                <div className="absolute -bottom-6 -right-6 w-3 h-16 bg-[var(--brand-orange)] rounded-full transform rotate-45 shadow-lg"></div>
                <Search className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-[var(--brand-orange)]" />
              </div>
            </div>

            {/* Floating Documents */}
            <div className="absolute bottom-20 left-10 space-y-2">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className="w-40 h-28 bg-gradient-to-br from-[var(--brand-orange)] to-yellow-500 rounded-xl shadow-2xl animate-float"
                  style={{ 
                    animationDelay: `${idx * 500}ms`,
                    transform: `rotate(${-5 + idx * 2}deg) translateY(${idx * 15}px)`,
                    opacity: 1 - idx * 0.2
                  }}
                >
                  <div className="p-3 space-y-1">
                    <div className="h-2 bg-white/40 rounded"></div>
                    <div className="h-2 bg-white/30 rounded w-3/4"></div>
                    <div className="h-2 bg-white/20 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Particles */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[var(--brand-orange)] rounded-full animate-float-particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                  opacity: 0.6
                }}
              />
            ))}
          </div>
        </div>
      </section>


      {/* CTA Banner /}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="wave-animation"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Ready to Start Your <span className="text-gradient">Journey?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful alumni and transform your career
          </p>
          <button className="group bg-white text-[var(--brand-orange)] hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg btn-glow hover-raise transition-all duration-300 inline-flex items-center gap-3">
            Get Started Today
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(-3deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        @keyframes twinkle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        @keyframes slide-in {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
        .wave-animation {
          background: linear-gradient(90deg, transparent, rgba(255, 123, 45, 0.1), transparent);
          animation: wave-move 3s ease-in-out infinite;
        }
        @keyframes wave-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}