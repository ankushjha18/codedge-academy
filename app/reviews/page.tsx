import ReviewPage from "./reviewhero"
import TestimonialsSection from "@/components/testimonials"
import AlumniCarousel from "@/components/alumini"
import ContactSection from "@/components/contactform"
import StatsSection from "../about/aboutstats"
import VideoTestimonialCarousel from "./videocrousel"
import TopRatedVideoSection from "./infovideo"
import ReviewsSection from "./morereview"

export default function reviews() {
  return (
    <>
        <ReviewPage />
        <StatsSection />
        <TopRatedVideoSection />
        <VideoTestimonialCarousel />
        <ReviewsSection />
        <TestimonialsSection />
        <AlumniCarousel />
        <ContactSection />
      
    </>
  )
}
