"use client";
import React, { useState } from 'react';
import { Search, Clock, ArrowRight, TrendingUp, Sparkles, Brain, Database, Code } from 'lucide-react';

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogSections = [
    {
      id: 'latest',
      title: 'Latest Blogs',
      icon: Sparkles,
      color: 'from-orange-500 to-pink-500',
      blogs: [
        {
          id: 1,
          title: 'Role of Automated Deep Learning Algorithm For Reliable Screening of Chest Radiographs',
          description: 'Learn how automated deep learning algorithms enhance chest radiograph screening reliability, revolutionising medical imaging interpretation.',
          author: 'Sonalisha Mohanty',
          date: 'Nov 18, 2024',
          readTime: '4.6 mins',
          category: 'Machine Learning',
          link: '/blog/automated-deep-learning-chest-radiographs'
        },
        {
          id: 2,
          title: 'The Rising Influence of Data Science and AI in Banking & Finance',
          description: 'Discover how data science and AI are transforming the banking and finance sector with innovative solutions.',
          author: 'Sonalisha Mohanty',
          date: 'Nov 10, 2024',
          readTime: '8.2 mins',
          category: 'Data Science',
          link: '/blog/data-science-ai-banking-finance'
        },
        {
          id: 3,
          title: 'IOT Careers: Your Ultimate Guide to Thriving Opportunities in 2025',
          description: 'Explore cutting-edge IoT career opportunities and discover how to build a successful career in this growing field.',
          author: 'Sayantika Mandal',
          date: 'Sep 24, 2024',
          readTime: '4.5 mins',
          category: 'Technology',
          link: '/blog/iot-careers-guide-2025'
        }
      ]
    },
    {
      id: 'top',
      title: 'Top Blogs',
      icon: TrendingUp,
      color: 'from-purple-500 to-indigo-500',
      blogs: [
        {
          id: 4,
          title: 'Trending Machine Learning Projects to Elevate Your Skills in 2024',
          description: 'Explore cutting-edge machine learning projects to enhance your skills in 2024.',
          author: 'Nivin Biswas',
          date: 'Mar 12, 2024',
          readTime: '9 mins',
          category: 'Machine Learning',
          link: '/blog/trending-ml-projects-2024'
        },
        {
          id: 5,
          title: 'Complete Guide to Natural Language Processing in 2024',
          description: 'Master NLP techniques and applications with this comprehensive guide.',
          author: 'Priya Sharma',
          date: 'Feb 28, 2024',
          readTime: '12 mins',
          category: 'AI',
          link: '/blog/nlp-guide-2024'
        },
        {
          id: 6,
          title: 'Building Production-Ready ML Models: A Complete Guide',
          description: 'Learn best practices for deploying machine learning models in production environments.',
          author: 'Amit Verma',
          date: 'Jan 15, 2024',
          readTime: '14 mins',
          category: 'Machine Learning',
          link: '/blog/production-ml-models'
        }
      ]
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      blogs: [
        {
          id: 7,
          title: 'Deep Dive into Neural Networks and Backpropagation',
          description: 'Understand the fundamentals of neural networks and how backpropagation works.',
          author: 'Rajesh Kumar',
          date: 'Oct 15, 2024',
          readTime: '15 mins',
          category: 'Machine Learning',
          link: '/blog/neural-networks-backpropagation'
        },
        {
          id: 8,
          title: 'Reinforcement Learning: From Theory to Practice',
          description: 'Learn how to implement reinforcement learning algorithms in real-world scenarios.',
          author: 'Anita Desai',
          date: 'Sep 30, 2024',
          readTime: '10 mins',
          category: 'Machine Learning',
          link: '/blog/reinforcement-learning-guide'
        },
        {
          id: 9,
          title: 'Feature Engineering Techniques for Better ML Models',
          description: 'Master advanced feature engineering techniques to improve your machine learning models.',
          author: 'Karan Mehta',
          date: 'Aug 20, 2024',
          readTime: '11 mins',
          category: 'Machine Learning',
          link: '/blog/feature-engineering-techniques'
        }
      ]
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      blogs: [
        {
          id: 10,
          title: 'Reasons to Dive into a Master\'s Journey in Artificial Intelligence',
          description: 'Unlock career potential with a Master\'s in AI. Learn key benefits, career opportunities, and industry demands.',
          author: 'Sonalisha Mohanty',
          date: 'Nov 5, 2024',
          readTime: '7 mins',
          category: 'AI',
          link: '/blog/masters-journey-ai'
        },
        {
          id: 11,
          title: 'Generative AI: The Future of Creative Intelligence',
          description: 'Explore how generative AI is revolutionizing content creation and innovation.',
          author: 'Arjun Patel',
          date: 'Oct 22, 2024',
          readTime: '11 mins',
          category: 'AI',
          link: '/blog/generative-ai-future'
        },
        {
          id: 12,
          title: 'Computer Vision Applications in Healthcare',
          description: 'Discover how computer vision is transforming medical diagnostics and patient care.',
          author: 'Dr. Neha Gupta',
          date: 'Sep 10, 2024',
          readTime: '13 mins',
          category: 'AI',
          link: '/blog/computer-vision-healthcare'
        }
      ]
    },
    {
      id: 'ds',
      title: 'Data Science',
      icon: Database,
      color: 'from-amber-500 to-orange-500',
      blogs: [
        {
          id: 13,
          title: 'Data Visualization Best Practices for 2024',
          description: 'Master the art of data visualization with modern tools and techniques.',
          author: 'Meera Singh',
          date: 'Nov 1, 2024',
          readTime: '8 mins',
          category: 'Data Science',
          link: '/blog/data-visualization-best-practices'
        },
        {
          id: 14,
          title: 'Big Data Analytics: Tools and Technologies',
          description: 'Comprehensive guide to big data analytics tools and their applications.',
          author: 'Vikram Malhotra',
          date: 'Oct 18, 2024',
          readTime: '13 mins',
          category: 'Data Science',
          link: '/blog/big-data-analytics-tools'
        },
        {
          id: 15,
          title: 'Python Data Analysis with Pandas: Advanced Techniques',
          description: 'Level up your data analysis skills with advanced Pandas techniques and tricks.',
          author: 'Priya Kapoor',
          date: 'Sep 5, 2024',
          readTime: '10 mins',
          category: 'Data Science',
          link: '/blog/pandas-advanced-techniques'
        }
      ]
    }
  ];

  type Blog = {
  title: string;
  link: string;
  category: string;
  readTime: string;
  description: string;
  author: string;
  date: string;
  id: number;


};


  const BlogCard = ({ blog  }: { blog: Blog }) => (
    <a
      href={blog.link}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center p-6">
            <h3 className="text-lg font-bold line-clamp-3">{blog.title}</h3>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
          {blog.category}
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {blog.description}
        </p>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
            {blog.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900 text-sm">{blog.author}</p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{blog.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-3 gap-2 transition-all">
          Read More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );

  type SectionHeaderProps = {
  section: {
    id: string; 
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
    blogs: Blog[];
  };
};

  const SectionHeader = ({ section}:SectionHeaderProps) => {
    const Icon = section.icon;
    return (
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
        </div>
        <button className="group flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
          View More
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Explore Our Blogs
          </h1>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest trends in technology, AI, and data science
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter search term..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
            />
          </div>
        </div>

        {/* Blog Sections */}
        {blogSections.map((section, index) => (
          <div key={section.id} className="mb-16">
            <SectionHeader section={section} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.blogs
                .filter(blog =>
                  blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  blog.description.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map(blog => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;