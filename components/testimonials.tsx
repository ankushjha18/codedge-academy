"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, Users } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, ExampleCorp",
    text: "This company transformed our online presence. Their innovative approach and professional execution exceeded all our expectations. The ROI has been phenomenal!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    company: "ExampleCorp",
    results: "+300% Revenue Growth"
  },
  {
    name: "Jane Smith",
    role: "Marketing Director, BrandX",
    text: "Exceptional service with amazing results. They really understand digital marketing and delivered campaigns that converted beyond our wildest dreams.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    company: "BrandX",
    results: "+250% Lead Generation"
  },
  {
    name: "Mike Johnson",
    role: "CTO, TechSolutions",
    text: "Their development team delivered a flawless mobile app that our users absolutely love. The attention to detail and technical expertise is unmatched.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    company: "TechSolutions",
    results: "4.9★ App Store Rating"
  },
  {
    name: "Sara Williams",
    role: "Creative Director, CreativeHub",
    text: "Great design sense and attention to detail. They brought our vision to life with stunning visuals that perfectly capture our brand essence.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    company: "CreativeHub",
    results: "+180% Brand Engagement"
  },
  {
    name: "David Brown",
    role: "Founder, StartupZone",
    text: "Amazing consultancy and strategic guidance. Our startup went from concept to market leader thanks to their expert insights and execution.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    company: "StartupZone",
    results: "$2M Series A Raised"
  },
  {
    name: "Emily Davis",
    role: "VP Operations, DevCo",
    text: "Professional, proactive, and results-driven. They streamlined our processes and delivered solutions that scaled with our rapid growth.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    company: "DevCo",
    results: "500% Efficiency Boost"
  },
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))
    setIsAutoPlay(false)
  }

  const renderStars = (rating:number) => {
    return (
      <div className="flex items-center space-x-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'text-amber-400 fill-amber-400'
                : i < rating
                ? 'text-amber-400 fill-amber-400/50'
                : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="py-10 px-10 md:px-10 lg:px-8 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-float-slow">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            <Users className="w-4 h-4 mr-2" />
            Client Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-900 via-orange-950 to-blue-900 bg-clip-text text-transparent leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((testimonial, index) => (
                        <Card
                          key={index}
                          className="group relative overflow-hidden border-2 bg-gradient-to-br from-card via-card/95 to-muted/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:scale-110 cursor-pointer will-transform"
                        >
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Quote icon */}
                          <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                            <Quote className="w-12 h-12 text-primary" />
                          </div>

                          <CardContent className="p-3 lg:p-8 relative z-10">
                            {/* Header with image and basic info */}
                            <div className="flex items-center mb-6">
                              <div className="relative">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                  <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                                  <Star className="w-3 h-3 text-white fill-white" />
                                </div>
                              </div>
                              
                              <div className="ml-4 flex-1">
                                <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                  {testimonial.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.role}
                                </p>
                                <p className="text-xs text-primary font-medium">
                                  {testimonial.company}
                                </p>
                              </div>
                            </div>

                            {/* Stars */}
                            <div className="mb-4">
                              {renderStars(testimonial.rating)}
                            </div>

                            {/* Testimonial text */}
                            <blockquote className="text-foreground/90 leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-300">
                              "{testimonial.text}"
                            </blockquote>

                            {/* Results badge */}
                            <Badge 
                              variant="secondary" 
                              className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 font-medium"
                            >
                              {testimonial.results}
                            </Badge>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="group w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" />
            </Button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="group w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center px-4">
          {[
            { number: "200+", label: "Happy Clients" },
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}