"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Globe, 
  Smartphone, 
  Search, 
  Palette, 
  TrendingUp,
  Users,
  Briefcase,
  BookOpen,
  Phone,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Shield,
  FileText,
  Cookie
} from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info - Enhanced with Logo */}
          <div className="space-y-6 group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sparkles className="h-6 w-6 text-cyan-400 animate-spin" style={{animationDuration: '3s'}} />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg animate-pulse"></div>
              </div>
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="codedge academy" 
                  className="h-50 w-auto object-contain filter brightness-110 hover:brightness-125 transition-all duration-300"
                />
              </div>
            </div>
            <p className="text-gray-300 text-pretty leading-relaxed">
              Transforming businesses through innovative digital solutions and strategic marketing with cutting-edge technology.
            </p>
            
            {/* Animated Social Icons */}
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/social relative"
              >
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="relative overflow-hidden bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:rotate-3"
                >
                  <Facebook className="h-5 w-5 text-white group-hover/social:text-blue-400 transition-colors duration-300 group-hover/social:animate-bounce" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 blur-lg"></div>
                </Button>
              </a>
              
              <a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/social relative"
              >
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="relative overflow-hidden bg-white/5 border border-white/10 hover:border-green-400/50 hover:bg-green-500/20 transition-all duration-300 hover:scale-110 hover:-rotate-3"
                >
                  <MessageCircle className="h-5 w-5 text-white group-hover/social:text-green-400 transition-colors duration-300 group-hover/social:animate-pulse" />
                  <div className="absolute inset-0 bg-green-400/20 rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 blur-lg"></div>
                </Button>
              </a>
              
              <a 
                href="https://www.instagram.com/digitrix.solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/social relative"
              >
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="relative overflow-hidden bg-white/5 border border-white/10 hover:border-pink-400/50 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Instagram className="h-5 w-5 text-white group-hover/social:text-pink-400 transition-colors duration-300 group-hover/social:animate-spin" style={{animationDuration: '2s'}} />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 blur-lg"></div>
                </Button>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/digitrix-soln/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/social relative"
              >
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="relative overflow-hidden bg-white/5 border border-white/10 hover:border-blue-600/50 hover:bg-blue-600/20 transition-all duration-300 hover:scale-110 hover:-rotate-2"
                >
                  <Linkedin className="h-5 w-5 text-white group-hover/social:text-blue-400 transition-colors duration-300 group-hover/social:animate-bounce" />
                  <div className="absolute inset-0 bg-blue-600/20 rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 blur-lg"></div>
                </Button>
              </a>
            </div>
          </div>

          {/* Services - Enhanced with Icons */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-cyan-400" />
              Courses
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Web Development", icon: Globe, href: "/services/web-development" },
                { name: "Digital Marketing", icon: TrendingUp, href: "/services/digital-marketing" },
                { name: "Mobile Development", icon: Smartphone, href: "/services/mobile-development" },
                { name: "SEO Optimization", icon: Search, href: "/services/seo" },
                { name: "UI/UX Design", icon: Palette, href: "/services/design" }
              ].map((service, index) => (
                <li key={service.name} className="group/item">
                  <a 
                    href={service.href} 
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 group-hover/item:translate-x-2"
                  >
                    <service.icon className="h-4 w-4 text-cyan-400/60 group-hover/item:text-cyan-400 group-hover/item:animate-pulse transition-colors duration-300" />
                    <span className="relative">
                      {service.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover/item:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - Enhanced with Icons and Legal Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-400" />
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", icon: Users, href: "/about" },
                { name: "Careers", icon: TrendingUp, href: "/careers" },
                { name: "Blog", icon: BookOpen, href: "/blog" },
                { name: "Contact", icon: Phone, href: "/contact" }
              ].map((item, index) => (
                <li key={item.name} className="group/item">
                  <a 
                    href={item.href} 
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-all duration-300 group-hover/item:translate-x-2"
                  >
                    <item.icon className="h-4 w-4 text-purple-400/60 group-hover/item:text-purple-400 group-hover/item:animate-pulse transition-colors duration-300" />
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover/item:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter - Enhanced */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-pink-400 animate-pulse" />
              <h4 className="text-xl font-bold text-white">Get In Touch</h4>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 group">
                <Phone className="h-4 w-4 text-pink-400 group-hover:animate-pulse" />
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-sm text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    +91 XXXXXXXXXX
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <Mail className="h-4 w-4 text-pink-400 group-hover:animate-pulse" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a 
                    href="mailto:info@digitrix.com" 
                    className="text-sm text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    codeede 
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Subscribe to our newsletter for updates and insights.
              </p>
              <div className="space-y-3">
                <div className="relative group">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:bg-white/15 transition-all duration-300 pr-12"
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group">
                  <span>Subscribe Now</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="text-gray-400 text-sm">© 2025 codedge academy. All rights reserved.</div>
            </div>
            <div className="flex gap-8 text-sm">
              {[
                { name: "Privacy Policy", href: "/privacypolicy" },
                { name: "Terms of Service", href: "/termsofservices" },
                { name: "Cookie Policy", href: "/cookie" }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}