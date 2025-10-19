"use client"
import React, { useState } from 'react';
import { Send, User, Mail, Phone, BookOpen, Sparkles, MessageCircle, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });
 const [focusedField, setFocusedField] = useState<"name" | "email" | "phone" | "course" | null>(null);
  const [hoveredQuestion, setHoveredQuestion] = useState<number|null>(null);
  

  const courses = [
    "Master's in AI",
    "Master's in Data Science",
    "Business Analytics",
    "Full Stack Development",
    "Cloud Computing"
  ];

  const questions = [
    { id: 1, text: "Which Program is Right for me?", position: { top: '15%', right: '15%' } },
    { id: 2, text: "Why Codedge Academy vs Others?", position: { top: '45%', right: '25%' } },
    { id: 3, text: "What all career opportunities will I get on enrolling in a program?", position: { bottom: '15%', right: '10%' } }
  ];

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Inquiry submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-[10%] w-[500px] h-[500px] bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-slower"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-2 bg-white rounded-full shadow-lg border border-blue-100 mb-6">
            <MessageCircle className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-gray-900">Have Question?</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
              Reach Out!
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Form */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-10 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl opacity-10 blur-xl"></div>

            {/* Form Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-100 transform transition-all duration-500 hover:shadow-blue-200/50 group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

              <div className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <div className="relative">
                    <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'name' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter Your Name"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-gray-800 placeholder-gray-400"
                    />
                    {focusedField === 'name' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-10 animate-pulse-border pointer-events-none"></div>
                    )}
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Email</label>
                  <div className="relative">
                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter Email"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-gray-800 placeholder-gray-400"
                    />
                    {focusedField === 'email' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-10 animate-pulse-border pointer-events-none"></div>
                    )}
                  </div>
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'phone' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter Phone Number"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-gray-800 placeholder-gray-400"
                    />
                    {focusedField === 'phone' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-10 animate-pulse-border pointer-events-none"></div>
                    )}
                  </div>
                </div>

                {/* Course Selection */}
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Course Interested In</label>
                  <div className="relative">
                    <BookOpen className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 z-10 ${
                      focusedField === 'course' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('course')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-gray-800 appearance-none cursor-pointer"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, idx) => (
                        <option key={idx} value={course}>{course}</option>
                      ))}
                    </select>
                    {focusedField === 'course' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-10 animate-pulse-border pointer-events-none"></div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="group/btn relative w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Button content */}
                  <div className="relative flex items-center justify-center space-x-3">
                    <span>Submit Inquiry</span>
                    <Send className="w-5 h-5 transform group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform duration-500" />
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-1000"></div>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 scale-0 group-hover/btn:scale-100 bg-white/20 rounded-2xl transition-transform duration-700"></div>
                </button>
              </div>

              {/* Floating success indicator */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce-subtle">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right Side - Animated Illustration */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Support Agent Circle */}
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-spin-very-slow opacity-30"></div>
                <div className="absolute inset-8 border-4 border-purple-200 rounded-full animate-spin-slow-reverse opacity-20"></div>
              </div>

              {/* Main circle with agent */}
              <div className="relative w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-600 to-purple-700 shadow-2xl overflow-hidden group cursor-pointer transform transition-all duration-700 hover:scale-105">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-600/50"></div>
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
                </div>

                {/* Support agent illustration */}
                <div className="relative h-full flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffd4a3" />
                        <stop offset="100%" stopColor="#ffb870" />
                      </linearGradient>
                      <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#e0e7ff" />
                      </linearGradient>
                      <linearGradient id="tieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                    </defs>
                    
                    {/* Head */}
                    <ellipse cx="200" cy="160" rx="70" ry="80" fill="url(#skinGrad)" className="animate-float-gentle"/>
                    
                    {/* Hair */}
                    <path d="M 130 140 Q 130 100, 200 100 Q 270 100, 270 140 Q 270 120, 250 120 Q 240 110, 200 110 Q 160 110, 150 120 Q 130 120, 130 140 Z" fill="#2d1810"/>
                    
                    {/* Headset */}
                    <rect x="110" y="150" width="15" height="40" rx="7" fill="#1e293b" opacity="0.9"/>
                    <rect x="275" y="150" width="15" height="40" rx="7" fill="#1e293b" opacity="0.9"/>
                    <path d="M 125 155 Q 125 130, 200 130 Q 275 130, 275 155" stroke="#1e293b" strokeWidth="8" fill="none" opacity="0.9"/>
                    <circle cx="118" cy="170" r="12" fill="#3b82f6" className="animate-pulse"/>
                    
                    {/* Mic */}
                    <rect x="110" y="195" width="6" height="30" rx="3" fill="#1e293b"/>
                    <circle cx="113" cy="228" r="8" fill="#3b82f6"/>
                    
                    {/* Eyes */}
                    <ellipse cx="175" cy="165" rx="8" ry="12" fill="#1e293b" className="animate-blink"/>
                    <ellipse cx="225" cy="165" rx="8" ry="12" fill="#1e293b" className="animate-blink"/>
                    
                    {/* Smile */}
                    <path d="M 170 190 Q 200 205, 230 190" stroke="#d97706" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    
                    {/* Body - Shirt */}
                    <ellipse cx="200" cy="310" rx="120" ry="100" fill="url(#shirtGrad)"/>
                    
                    {/* Tie */}
                    <polygon points="200,240 190,260 210,260" fill="url(#tieGrad)"/>
                    <rect x="193" y="260" width="14" height="50" fill="url(#tieGrad)"/>
                    
                    {/* Collar */}
                    <path d="M 140 240 L 180 260 L 200 250 L 220 260 L 260 240" stroke="white" strokeWidth="3" fill="none"/>
                  </svg>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Floating Question Bubbles */}
              {questions.map((question, idx) => (
                <div
                  key={question.id}
                  className="absolute hidden lg:block"
                  style={question.position}
                  onMouseEnter={() => setHoveredQuestion(question.id)}
                  onMouseLeave={() => setHoveredQuestion(null)}
                >
                  <div className={`relative group/bubble cursor-pointer transition-all duration-500 ${
                    hoveredQuestion === question.id ? 'scale-110 z-20' : 'z-10'
                  }`}>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover/bubble:opacity-50 transition-opacity duration-500"></div>
                    
                    {/* Bubble */}
                    <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl border border-gray-100 max-w-xs animate-float-bubble"
                         style={{ animationDelay: `${idx * 0.5}s` }}>
                      <p className="text-sm font-semibold text-gray-800 leading-tight">
                        {question.text}
                      </p>
                      
                      {/* Tail */}
                      <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
                      
                      {/* Sparkle icon */}
                      <Sparkles className={`absolute -top-2 -right-2 w-6 h-6 text-blue-600 transition-all duration-500 ${
                        hoveredQuestion === question.id ? 'scale-125 rotate-12' : ''
                      }`} />
                    </div>
                  </div>
                </div>
              ))}

              {/* Decorative floating elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl opacity-20 animate-float-1 blur-sm"></div>
              <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full opacity-20 animate-float-2 blur-sm"></div>
              <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-20 animate-float-3 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.05); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-border {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.02); opacity: 0.2; }
        }
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-bubble {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -15px) rotate(5deg); }
          66% { transform: translate(-10px, 10px) rotate(-5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-15px, 10px) rotate(-5deg); }
          66% { transform: translate(10px, -10px) rotate(5deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(12px, -12px) rotate(10deg); }
        }

        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-pulse-border { animation: pulse-border 2s ease-in-out infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 20s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 15s linear infinite; }
        .animate-float-gentle { animation: float-gentle 3s ease-in-out infinite; }
        .animate-float-bubble { animation: float-bubble 4s ease-in-out infinite; }
        .animate-blink { animation: blink 4s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ContactSection;