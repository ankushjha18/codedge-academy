import  HeroSection  from "@/components/hero"
import Link from "next/link"
import TrustedBrandsSection from "@/components/logo-ticker"
import AnimatedSection from "@/components/animated-section"
import { ConsultancySection } from "@/components/contact"
import StatsSection from "@/components/statastic"
import CoursesSection from "@/components/courses"
import WhyChooseUs from "@/components/whychooseus"
import LearningPathway from "@/components/process"
import TestimonialsSection from "@/components/testimonials"
import FAQ from "@/components/faq"
import AlumniCarousel from "@/components/alumini"
import MasterclassSection from "@/components/materclass"
import SignatureFramework from "@/components/framework"
import ContactSection from "@/components/contactform"

export default function Page() {
  return (
    <>
      <HeroSection
      />

      {/* Animated Partner Logo Ticker */}
      <AnimatedSection >
      <StatsSection />
        <TrustedBrandsSection/>
      </AnimatedSection>
      <CoursesSection />
      <WhyChooseUs />
      <LearningPathway />
      <SignatureFramework />
      <TestimonialsSection />
      <AlumniCarousel />
      <MasterclassSection />

      {/* Features /}
      <AnimatedSection as="section" className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24" delayMs={80}>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Web Development",
              desc: "Master modern frontend and backend patterns with real projects.",
              href: "/courses/web-development",
            },
            {
              title: "Data Science",
              desc: "From statistics to ML—build a solid, deployable skillset.",
              href: "/courses/data-science",
            },
            {
              title: "UI/UX Design",
              desc: "Design elegant, accessible, and intuitive interfaces.",
              href: "/courses/ui-ux",
            },
          ].map((f) => (
            <Link key={f.title} href={f.href} className="group rounded-lg border p-6 hover-raise transition-all">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-[color:var(--color-muted-foreground)]">{f.desc}</p>
              <div
                className="mt-6 h-1 w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "linear-gradient(90deg, var(--brand-orange), var(--brand-blue))" }}
              />
            </Link>
          ))}
        </div>
      </AnimatedSection>

      {/* Page CTA Band */}
      <ConsultancySection />
      <ContactSection />
      <FAQ />
    </>
  )
}
