import WebDevHero from "./course"
import OverviewSection from "./overviewsection"
import WhyLearnersLove from "./whyleanerslove"
import InternshipPage from "./internship"
import PlacementSection from "./placement"
import MentorsCarousel from "./mentor"
import SyllabusSection from "./syllabus"
import LearningPathway from "@/components/process"
import FeesSection from "./fess"
import ToolsSection from "./tools"
import ContactSection from "@/components/contactform"
import CertificationSection from "./certificates"
import CareerSupport from "./support"

export default function WebDevCourse() {
  return (
    <>
     <WebDevHero />
     <OverviewSection />
      <WhyLearnersLove />
      <PlacementSection />
      <MentorsCarousel />
      <SyllabusSection />
      <FeesSection />
      <LearningPathway />
      <ToolsSection />
      <InternshipPage />
      <CertificationSection />
      <CareerSupport />
      <ContactSection />
    </>
  )
}
