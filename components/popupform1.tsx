'use client';

import { useState, useEffect } from 'react';
import { X, User, Mail, Phone, BookOpen, Send } from 'lucide-react';

interface PopupFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  trigger?: React.ReactNode;
  showDefaultButton?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
}

export default function PopupForm({ isOpen: externalIsOpen, onClose, trigger, showDefaultButton = true }: PopupFormProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = onClose ? (value: boolean) => !value && onClose() : setInternalIsOpen;

  const courses = [
    'Web Development',
    'Data Science',
    'Mobile Development',
    'Digital Marketing',
    'UI/UX Design',
    'Cloud Computing'
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('✨ Inquiry submitted successfully!');
    setIsOpen(false);
    setFormData({ name: '', email: '', phone: '', course: '' });
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      {trigger ? (
        <div onClick={() => setIsOpen(true)} className="inline-block cursor-pointer">
          {trigger}
        </div>
      ) : showDefaultButton ? (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Open Inquiry Form
          </button>
        </div>
      ) : null}

      {/* Popup Modal */}
      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center p-4"
          style={{ 
            animation: 'fadeIn 0.3s ease-out', 
            zIndex: 2147483647,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-y-auto relative"
            style={{ animation: 'slideUp 0.4s ease-out' }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 z-20 group"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Form */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-gray-50 to-white">
                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Your Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Phone Number"
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Course Select */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Course Interested In</label>
                    <div className="relative">
                      <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 focus:outline-none focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Select a course</option>
                        {courses.map((course) => (
                          <option key={course} value={course}>{course}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  >
                    Submit Inquiry
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Side - Illustration */}
              <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 p-8 md:p-12 flex items-center justify-center overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" style={{ animation: 'pulse 4s ease-in-out infinite' }} />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" style={{ animation: 'pulse 4s ease-in-out infinite', animationDelay: '2s' }} />

                {/* Main Content */}
                <div className="relative z-10 text-center space-y-8">
                  {/* Character Illustration */}
                  <div className="relative" style={{ animation: 'float 3s ease-in-out infinite' }}>
                    <div className="w-64 h-64 mx-auto relative">
                      {/* Head */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-orange-300 rounded-full" />
                      {/* Headband */}
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-8 bg-gray-800 rounded-full" />
                      {/* Eyes */}
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-3">
                        <div className="w-3 h-3 bg-gray-800 rounded-full" />
                        <div className="w-3 h-3 bg-gray-800 rounded-full" />
                      </div>
                      {/* Smile */}
                      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-8 h-4 border-b-2 border-gray-800 rounded-b-full" />
                      
                      {/* Body */}
                      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-20 h-28 bg-orange-400 rounded-3xl" />
                      
                      {/* Arms */}
                      <div className="absolute top-28 left-8 w-3 h-20 bg-gray-800 rounded-full" style={{ transform: 'rotate(-20deg)' }} />
                      <div className="absolute top-28 right-8 w-3 h-20 bg-gray-800 rounded-full" style={{ transform: 'rotate(20deg)' }} />
                      
                      {/* Legs */}
                      <div className="absolute top-48 left-12 w-4 h-16 bg-gray-800 rounded-full" />
                      <div className="absolute top-48 right-12 w-4 h-16 bg-gray-800 rounded-full" />
                    </div>
                  </div>

                  {/* Speech Bubbles */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-3xl px-6 py-4 shadow-xl inline-block" style={{ animation: 'slideInRight 0.5s ease-out' }}>
                      <p className="text-gray-800 font-semibold text-sm">Which Program is Right for me?</p>
                      <div className="absolute -top-2 right-8 w-4 h-4 bg-white transform rotate-45" />
                    </div>
                    
                    <div className="bg-white rounded-3xl px-6 py-4 shadow-xl inline-block" style={{ animation: 'slideInRight 0.5s ease-out', animationDelay: '0.2s', animationFillMode: 'backwards' }}>
                      <p className="text-gray-800 font-semibold text-sm">Why Codedge Academy vs Others?</p>
                      <div className="absolute -top-2 right-12 w-4 h-4 bg-white transform rotate-45" />
                    </div>
                    
                    <div className="bg-white rounded-3xl px-6 py-4 shadow-xl inline-block max-w-xs" style={{ animation: 'slideInRight 0.5s ease-out', animationDelay: '0.4s', animationFillMode: 'backwards' }}>
                      <p className="text-gray-800 font-semibold text-sm">What all career opportunities will I get on enrolling in a program?</p>
                      <div className="absolute -top-2 right-16 w-4 h-4 bg-white transform rotate-45" />
                    </div>
                  </div>

                  {/* Sparkles */}
                  <div className="absolute top-8 right-16 text-yellow-300 text-2xl" style={{ animation: 'twinkle 2s ease-in-out infinite' }}>✨</div>
                  <div className="absolute top-32 right-8 text-yellow-300 text-2xl" style={{ animation: 'twinkle 2s ease-in-out infinite', animationDelay: '0.5s' }}>✨</div>
                  <div className="absolute bottom-20 right-20 text-yellow-300 text-2xl" style={{ animation: 'twinkle 2s ease-in-out infinite', animationDelay: '1s' }}>✨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }
      `}</style>
    </>
  );
}