
import AboutHeroSection from "./heroabout"
import SupportTimeline from "@/components/process"
import TestimonialsSection from "@/components/testimonials"
import LogoTicker from "@/components/logo-ticker"
import AlumniCarousel from "@/components/alumini"
import AboutUsSection from "./aboutus"
import InspirationSection from "./ourinspiration"
import StatsSection from "./aboutstats"
import FoundersSection from "./ourfounders"

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutUsSection />
      <InspirationSection />
      <SupportTimeline />
      <LogoTicker />
      <StatsSection />
      <FoundersSection />
      
      <TestimonialsSection />
      <AlumniCarousel />
      
    

     
    </>
  )
}
