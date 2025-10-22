"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function InternshipPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState<ProjectTab>('live');
  const [openCurriculum, setOpenCurriculum] = useState<number|null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const curriculum = [
    { 
      title: 'Python for AI & Data Science', 
      weeks: 4,
      details: 'Master Python fundamentals, data structures, NumPy, Pandas, and visualization libraries essential for AI and data science projects.'
    },
    { 
      title: 'Data Science & Data Analysis', 
      weeks: 6,
      details: 'Learn statistical analysis, data preprocessing, exploratory data analysis, and advanced data manipulation techniques.'
    },
    { 
      title: 'Machine Learning', 
      weeks: 8,
      details: 'Dive into supervised and unsupervised learning, feature engineering, model evaluation, and deployment strategies.'
    },
    { 
      title: 'Deep Learning & Neural Networks', 
      weeks: 8,
      details: 'Explore neural networks, CNNs, RNNs, transformers, and cutting-edge deep learning architectures.'
    },
    { 
      title: 'Artificial Intelligence & Advanced AI Techniques', 
      weeks: 6,
      details: 'Study advanced AI concepts including reinforcement learning, NLP, computer vision, and generative AI.'
    },
    { 
      title: 'Capstone Project & Industry Readiness', 
      weeks: 6,
      details: 'Work on real-world capstone projects, interview preparation, and industry best practices.'
    }
  ];

  const courses = [
    "Master's in AI",
    "Data Science Bootcamp",
    "Machine Learning Specialization",
    "Deep Learning Program",
    "Full Stack AI Development"
  ];

  const projects = {
    live: [
      {
        title: 'Analysis for Zomato using Mutual Information Classification',
        description: 'Transforming material & chemical modeling via ML algorithms for Uttra Tech Predicting and optimizing physical chemical & mechanical properties fuelling Innovation in product development',
        color: 'from-rose-500 to-pink-600',
        company: 'pepsico'
      },
      {
        title: 'Empowering Early Stage Cancer Detection',
        description: 'Transforming material & chemical modeling via ML algorithms for UltraTech. predicting and optimizing physical chemical & mechanical properties fueling Innovation In product development.',
        color: 'from-blue-500 to-indigo-600',
        company: 'pepsico'
      },
      {
        title: 'Global Financial Asset Market Sentiment Detection',
        description: 'Transforming material & chemical modeling via ML algorithms for Ultratech Predicting and optimizing physical chemical & mechanical properties fueling innovation in product development',
        color: 'from-orange-500 to-amber-600',
        company: 'pepsico'
      }
    ],
    mega: [
      {
        title: 'Advanced NLP for Healthcare',
        description: 'Building sophisticated natural language processing systems for medical diagnosis and patient care optimization.',
        color: 'from-purple-500 to-violet-600',
        company: 'pepsico'
      },
      {
        title: 'Computer Vision for Autonomous Systems',
        description: 'Developing real-time object detection and tracking systems for autonomous vehicle navigation.',
        color: 'from-teal-500 to-cyan-600',
        company: 'pepsico'
      },
      {
        title: 'Predictive Analytics Platform',
        description: 'Enterprise-scale predictive analytics solution for business intelligence and decision making.',
        color: 'from-indigo-500 to-blue-600',
        company: 'pepsico'
      }
    ],
    mini: [
      {
        title: 'Sentiment Analysis Dashboard',
        description: 'Create interactive dashboards for real-time sentiment analysis of social media data.',
        color: 'from-emerald-500 to-green-600',
        company: 'pepsico'
      },
      {
        title: 'Predictive Maintenance System',
        description: 'Build ML models to predict equipment failures and optimize maintenance schedules.',
        color: 'from-fuchsia-500 to-pink-600',
        company: 'pepsico'
      },
      {
        title: 'Customer Churn Prediction',
        description: 'Analyze customer behavior patterns to predict and prevent customer churn.',
        color: 'from-amber-500 to-orange-600',
        company: 'pepsico'
      }
    ]
  };
  type ProjectTab = "live" | "mega" | "mini";

interface Project {
  title: string;
  description: string;
  color: string;
  company: string;
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"
          style={{ 
            top: '10%', 
            left: '10%',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30"
          style={{ 
            top: '60%', 
            right: '10%',
            transform: `translate(-${scrollY * 0.08}px, ${scrollY * 0.06}px)`
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl opacity-20"
          style={{ 
            bottom: '10%', 
            left: '50%',
            transform: `translate(${scrollY * 0.12}px, -${scrollY * 0.04}px)`
          }}
        />
      </div>


      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Curriculum Section /}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Course Curriculum Breakdown
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {curriculum.map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-100/70 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-200 hover:border-blue-300 transition-all duration-300"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <button
                    onClick={() => setOpenCurriculum(openCurriculum === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-blue-200/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title} ({item.weeks} Weeks)
                    </h3>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                        openCurriculum === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openCurriculum === index ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <div className="px-5 pb-5 text-gray-700">
                      {item.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-10 text-white shadow-xl h-fit sticky top-24">
              <h3 className="text-xl font-bold mb-3">Your Name</h3>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-5 py-4 rounded-lg mb-5 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-300 outline-none"
              />
              
              <h3 className="text-xl font-bold mb-3">Your Email</h3>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-5 py-4 rounded-lg mb-5 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-300 outline-none"
              />
              
              <h3 className="text-xl font-bold mb-3">Phone Number</h3>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full px-5 py-4 rounded-lg mb-5 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-300 outline-none"
              />
              
              <h3 className="text-xl font-bold mb-3">Course Interested In</h3>
              <select className="w-full px-5 py-4 rounded-lg mb-6 text-gray-800 focus:ring-2 focus:ring-purple-300 outline-none">
                {courses.map((course, idx) => (
                  <option key={idx} value={course}>{course}</option>
                ))}
              </select>
              
              <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                Submit
              </button>
            </div>
          </div>
        </section>

        {/* Internship Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              The XSAV LAB Internship and Work Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Under the masters in Ai 100% Job Guarantee Program, Each Student undertakes work and complete all assigned jobs in real time.These are real jobs that translate into meeting the companies objectives and key responsibilities.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {[
              { id: 'live', label: 'Live Hands On Projects' },
              { id: 'mega', label: 'Mega Topic Projects' },
              { id: 'mini', label: 'Mini Sectional Projects' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ProjectTab)}
                className={`px-8 py-4 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects[activeTab].map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                style={{
                  animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                
                <div className="relative z-10 p-8 pb-6">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:scale-105 transition-transform">
                    {project.title}
                  </h3>
                </div>

                <div className="relative z-10 px-8 pb-6 bg-white">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-blue-700 uppercase tracking-wide">
                      {project.company}
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>
      </main>

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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}