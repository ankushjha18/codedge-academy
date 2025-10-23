"use client";
import React, { useState } from 'react';
import { Award, Globe, Briefcase, X, CheckCircle, Star, Sparkles, Users, TrendingUp, Download, ZoomIn } from 'lucide-react';

export default function CertificationSection() {
  const [openModal, setOpenModal] = useState<string|null>(null);
  const [activeTab, setActiveTab] = useState('ai');

  const features = [
    {
      icon: Award,
      text: 'Certification Backed by XSAV LAB',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      icon: Globe,
      text: 'Globally Recognized, Industry-Endorsed',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Briefcase,
      text: 'Earned Through Production-Level AI Projects',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: Users,
      text: 'Trusted Signal to Recruiters and CTO',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  const certificates = [
    {
      id: 'ai',
      title: 'AI Master Certificate',
      subtitle: 'Professional Certification',
      // This is the thumbnail/preview image
      thumbnailImage: 'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?w=800&q=80',
      // This is the actual certificate image that will open in modal
      certificateImage: 'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?w=1200&q=80',
      badge: 'IBM Certified',
      color: 'from-blue-500 to-indigo-600',
      highlights: [
        'Industry-recognized AI certification',
        'Backed by IBM & XSAV Labs',
        'Lifetime validity',
        'Verifiable digital credential'
      ]
    },
    {
      id: 'internship',
      title: 'Internship Certificate',
      subtitle: 'Real-World Experience',
      // This is the thumbnail/preview image
      thumbnailImage: 'https://images.unsplash.com/photo-1554224311-beee2c99c77b?w=800&q=80',
      // This is the actual certificate image that will open in modal
      certificateImage: 'https://images.unsplash.com/photo-1554224311-beee2c99c77b?w=1200&q=80',
      badge: 'Project-Based',
      color: 'from-orange-500 to-red-600',
      highlights: [
        'Hands-on project completion',
        'Industry mentor guidance',
        'Production-level work experience',
        'Portfolio-ready projects'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-10 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg rotate-45 animate-float opacity-20"></div>
      <div className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-float-delayed opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 mb-4 shadow-lg animate-slide-down">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">Industry-Recognized Credentials</span>
            <Sparkles className="w-4 h-4 text-orange-500" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fade-in-up">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Certification
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
            Get certified with globally recognized credentials that showcase your expertise
          </p>

          {/* Tab Buttons */}
          <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200 animate-fade-in-up delay-300">
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              AI Certificate
            </button>
            <button
              onClick={() => setActiveTab('internship')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'internship'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Internship Certificate
            </button>
          </div>
        </div>

        {/* Main Content - Certificate Image Left, Features Right */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side - Certificate Image */}
          <div className="lg:w-1/2 flex justify-center w-full">
            {certificates
              .filter(cert => cert.id === activeTab)
              .map((cert) => (
            <div 
              key={cert.id}
              onClick={() => setOpenModal(cert.id)}
              className="group relative animate-scale-in w-full max-w-lg cursor-pointer"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500 scale-95 group-hover:scale-105`}></div>
              
              {/* Image Card */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group-hover:border-gray-300 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={cert.thumbnailImage}
                    alt={cert.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-6 mb-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ZoomIn className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-white font-bold text-lg text-center mb-2">Click to View Full Certificate</p>
                    <p className="text-white/80 text-sm text-center">See complete details</p>
                  </div>

                  {/* Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${cert.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {cert.badge}
                  </div>

                  {/* Title at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-white/90 text-sm">{cert.subtitle}</p>
                  </div>
                </div>

                {/* Click indicator - Pulsing ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-20 h-20 border-4 border-white rounded-full opacity-0 group-hover:opacity-60 animate-ping"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-20 transform group-hover:opacity-40 transition-all duration-500 rounded-full blur-xl`}></div>
            </div>
          ))}
          </div>

          {/* Right Side - Features */}
          <div className="lg:w-1/2 space-y-3 w-full">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex items-center gap-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <p className="text-gray-700 font-medium leading-relaxed flex-1">
                    {feature.text}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - Shows the actual certificate image */}
      {openModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpenModal(null)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[95vh] overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-bold text-white">
                  {certificates.find(c => c.id === openModal)?.title}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-300 flex items-center gap-2 font-semibold"
                  onClick={() => {
                    const cert = certificates.find(c => c.id === openModal);
                    if (cert) {
                      // In a real application, this would download the certificate
                      window.open(cert.certificateImage, '_blank');
                    }
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button 
                  onClick={() => setOpenModal(null)}
                  className="p-2 bg-white/10 hover:bg-red-500 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Certificate Image Container */}
            <div className="p-6 overflow-y-auto max-h-[calc(95vh-80px)] bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="relative mx-auto max-w-5xl">
                {/* Certificate Border Decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 rounded-2xl blur-xl opacity-20 animate-pulse-slow"></div>
                
                {/* Certificate Image */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-500/20">
                  <img 
                    src={certificates.find(c => c.id === openModal)?.certificateImage}
                    alt="Certificate"
                    className="w-full h-auto"
                  />
                  
                  {/* Verified Badge Overlay */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-bold text-sm">VERIFIED</span>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="mt-6 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-gray-500 text-sm mb-1">Certificate Type</div>
                      <div className="font-bold text-gray-800">
                        {certificates.find(c => c.id === openModal)?.subtitle}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500 text-sm mb-1">Issued By</div>
                      <div className="font-bold text-gray-800">
                        {openModal === 'ai' ? 'Codedge Academy & IBM' : 'XSAV LAB'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500 text-sm mb-1">Valid Until</div>
                      <div className="font-bold text-gray-800">Lifetime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-down { animation: slide-down 0.8s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>
  );
}