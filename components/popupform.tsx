'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

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
  countryCode: string;
  services: string[];
}

export default function PopupForm({ isOpen: externalIsOpen, onClose, trigger, showDefaultButton = true }: PopupFormProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    countryCode: 'India',
    services: []
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = onClose ? (value: boolean) => !value && onClose() : setInternalIsOpen;

  const services = [
    'Web Development',
    'Digital Marketing',
    'Mobile Development',
    'SEO Optimization',
    'UI/UX Design',
    'Analytics & Insights'
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

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('✨ Form submitted successfully!');
    setIsOpen(false);
    setFormData({ name: '', email: '', phone: '', countryCode: 'India', services: [] });
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
        <div onClick={() => setIsOpen(true)} className="inline-block">
          {trigger}
        </div>
      ) : showDefaultButton ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
          {/* Animated Background Stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
            style={{ animation: 'float 3s ease-in-out infinite' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% 200%', animation: 'gradient 3s ease infinite' }} />
            <span className="relative z-10 flex items-center gap-3 text-lg">
              <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
              Request a Callback
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      ) : null}

      {/* Popup Modal */}
      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center pt-8 z-50 "
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div className="bg-gradient-to-br from-slate-800/95 via-purple-900/90 to-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-5xl  max-h-[90vh] overflow-auto relative overflow-hidden border border-purple-500/20" style={{ animation: 'scaleIn 0.4s ease-out' }}>
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-red-500/80 transition-all duration-300 hover:rotate-90 hover:scale-110 z-20 group backdrop-blur-sm border border-white/20"
            >
              <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Illustration */}
              <div className="relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-6 md:p-8 lg:p-10 flex items-center justify-center overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" style={{ animation: 'pulseSlow 4s ease-in-out infinite' }} />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" style={{ animation: 'pulseSlow 4s ease-in-out infinite', animationDelay: '1s' }} />
                
                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `floatParticle ${3 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  />
                ))}

                <div className="relative z-10 text-center space-y-6">
                  {/* Animated SVG Illustration */}
                  <div className="relative">
                    <svg viewBox="0 0 400 500" className="w-full max-w-md mx-auto" style={{ animation: 'float 3s ease-in-out infinite' }}>
                      {/* Background circle */}
                      <circle cx="200" cy="100" r="60" fill="#fbbf24" opacity="0.3" style={{ animation: 'pulseSlow 4s ease-in-out infinite' }} />
                      
                      {/* Birds */}
                      <path d="M 100 80 Q 110 75 120 80" stroke="#94a3b8" strokeWidth="2" fill="none" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.5s' }} />
                      <path d="M 140 90 Q 150 85 160 90" stroke="#94a3b8" strokeWidth="2" fill="none" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.8s' }} />
                      
                      {/* Person 1 - Sitting with laptop */}
                      <g style={{ animation: 'bounceSlow 2.5s ease-in-out infinite' }}>
                        <ellipse cx="120" cy="380" rx="40" ry="15" fill="#1e293b" opacity="0.3" />
                        <rect x="100" y="320" width="40" height="60" rx="20" fill="#f97316" />
                        <path d="M 110 380 L 100 420 L 90 440" stroke="#0f172a" strokeWidth="12" fill="none" strokeLinecap="round" />
                        <path d="M 130 380 L 140 420 L 150 440" stroke="#0f172a" strokeWidth="12" fill="none" strokeLinecap="round" />
                        <path d="M 105 330 L 80 360 L 75 380" stroke="#0f172a" strokeWidth="10" fill="none" strokeLinecap="round" />
                        <path d="M 135 330 L 160 360" stroke="#0f172a" strokeWidth="10" fill="none" strokeLinecap="round" />
                        <circle cx="120" cy="300" r="25" fill="#d97706" />
                        <path d="M 100 295 Q 120 280 140 295" fill="#0f172a" />
                        <circle cx="115" cy="305" r="3" fill="#0f172a" />
                        <circle cx="125" cy="305" r="3" fill="#0f172a" />
                        <path d="M 110 315 Q 120 318 130 315" stroke="#0f172a" strokeWidth="2" fill="none" />
                        <rect x="70" y="370" width="50" height="35" rx="3" fill="#e5e7eb" style={{ animation: 'pulseSlow 4s ease-in-out infinite' }} />
                        <rect x="72" y="372" width="46" height="28" fill="#3b82f6" />
                      </g>
                      
                      {/* Person 2 - Standing with phone */}
                      <g style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.3s' }}>
                        <ellipse cx="280" cy="430" rx="35" ry="12" fill="#1e293b" opacity="0.3" />
                        <rect x="260" y="330" width="40" height="70" rx="20" fill="#f97316" />
                        <rect x="265" y="400" width="12" height="30" rx="6" fill="#0f172a" />
                        <rect x="283" y="400" width="12" height="30" rx="6" fill="#0f172a" />
                        <path d="M 270 340 L 260 370 L 255 390" stroke="#0f172a" strokeWidth="10" fill="none" strokeLinecap="round" />
                        <rect x="248" y="350" width="15" height="25" rx="3" fill="#1e293b" style={{ animation: 'pulseSlow 4s ease-in-out infinite' }} />
                        <rect x="250" y="352" width="11" height="20" fill="#22d3ee" />
                        <path d="M 290 340 L 310 360" stroke="#0f172a" strokeWidth="10" fill="none" strokeLinecap="round" />
                        <circle cx="280" cy="310" r="25" fill="#d97706" />
                        <path d="M 260 305 Q 280 290 300 305" fill="#0f172a" />
                        <circle cx="275" cy="315" r="3" fill="#0f172a" />
                        <circle cx="285" cy="315" r="3" fill="#0f172a" />
                        <path d="M 270 325 Q 280 328 290 325" stroke="#0f172a" strokeWidth="2" fill="none" />
                        <path d="M 265 330 Q 250 360 265 400" stroke="#0f172a" strokeWidth="4" fill="none" />
                      </g>
                      
                      {/* Ground plants */}
                      <g style={{ animation: 'sway 3s ease-in-out infinite' }}>
                        <path d="M 320 450 Q 325 430 330 450" stroke="#10b981" strokeWidth="3" fill="none" />
                        <path d="M 325 450 Q 330 435 335 450" stroke="#10b981" strokeWidth="3" fill="none" />
                        <path d="M 180 455 Q 185 440 190 455" stroke="#10b981" strokeWidth="3" fill="none" />
                      </g>
                    </svg>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3" style={{ animation: 'slideUp 0.5s ease-out' }}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      YOU, SIT AND RELAX
                    </h3>
                    <p className="text-base md:text-lg text-gray-300">
                      LET US DO OUR WORK<br />JUST A MOMENT!
                    </p>
                    <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" style={{ animation: 'pulseSlow 4s ease-in-out infinite' }}>
                      <p className="text-base md:text-lg font-bold text-white">
                        WE&apos;LL CALL YOU BACK
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="relative z-10 p-6 md:p-8 lg:p-10">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ animation: 'slideDown 0.5s ease-out' }}>
                    Request a Callback
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="group" style={{ animation: 'slideRight 0.5s ease-out', animationDelay: '0.1s', animationFillMode: 'backwards' }}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Full Name*"
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 text-sm md:text-base"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="group" style={{ animation: 'slideRight 0.5s ease-out', animationDelay: '0.2s', animationFillMode: 'backwards' }}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Email Address*"
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 text-sm md:text-base"
                    />
                  </div>

                  {/* Phone Input with Country Code */}
                  <div className="grid grid-cols-3 gap-4" style={{ animation: 'slideRight 0.5s ease-out', animationDelay: '0.3s', animationFillMode: 'backwards' }}>
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="col-span-1 px-2 py-3 bg-transparent border-b-2 border-gray-600 text-white focus:outline-none focus:border-purple-500 transition-all duration-300 text-sm md:text-base"
                    >
                      <option value="India" className="bg-slate-900">India</option>
                      <option value="USA" className="bg-slate-900">USA</option>
                      <option value="UK" className="bg-slate-900">UK</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Num*"
                      className="col-span-2 px-4 py-3 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 text-sm md:text-base"
                    />
                  </div>

                  {/* Services Checkboxes */}
                  <div style={{ animation: 'slideRight 0.5s ease-out', animationDelay: '0.4s', animationFillMode: 'backwards' }}>
                    <p className="text-white font-semibold mb-3 text-sm md:text-base">Services you are interested in:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <button
                          key={service}
                          onClick={() => toggleService(service)}
                          type="button"
                          className="flex items-center gap-2 text-left text-white hover:text-purple-400 transition-colors duration-300 group"
                        >
                          <div className={`w-4 h-4 border-2 rounded flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                            formData.services.includes(service) 
                              ? 'bg-purple-500 border-purple-500' 
                              : 'border-gray-400 group-hover:border-purple-400'
                          }`}>
                            {formData.services.includes(service) && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="text-xs md:text-sm">{service}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 active:scale-95 overflow-hidden relative flex items-center justify-center gap-2 text-sm md:text-base"
                    style={{ animation: 'slideUp 0.5s ease-out', animationDelay: '0.5s', animationFillMode: 'backwards' }}
                  >
                    → SUBMIT
                  </button>
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
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideRight {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(15px, -15px); opacity: 0.5; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
      `}</style>
    </>
  );
}