import { Hero } from "@/components/hero"
import AnimatedSection from "@/components/animated-section"
import CtaBand from "@/components/cta-band"

export default function UiUxCourse() {
  return (
    <>
      <Hero
        eyebrow="Course"
        title="UI/UX Design"
        subtitle="Design systems, motion, and polished, accessible experiences."
        ctaHref="/enroll"
        ctaLabel="Enroll in UI/UX"
      />
      <AnimatedSection id="overview" as="section" className="mx-auto max-w-6xl px-4 md:px-6 py-12" delayMs={40}>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-[color:var(--color-muted-foreground)]">
          Learn to balance aesthetics and function with systems thinking.
        </p>
      </AnimatedSection>
      <AnimatedSection id="curriculum" as="section" className="mx-auto max-w-6xl px-4 md:px-6 py-12" delayMs={80}>
        <h2 className="text-xl font-semibold">Curriculum</h2>
        <ul className="mt-2 list-disc pl-5 text-[color:var(--color-muted-foreground)]">
          <li>Foundations of typography and color</li>
          <li>Component-driven design</li>
          <li>Motion and micro-interactions</li>
        </ul>
      </AnimatedSection>
      <AnimatedSection id="pricing" as="section" className="mx-auto max-w-6xl px-4 md:px-6 py-12" delayMs={120}>
        <h2 className="text-xl font-semibold">Pricing</h2>
        <p className="mt-2 text-[color:var(--color-muted-foreground)]">
          Included in Pro and Team plans. See{" "}
          <a className="underline" href="/enroll#pricing">
            pricing
          </a>
          .
        </p>
      </AnimatedSection>

      <CtaBand
        title="Design with taste."
        subtitle="Create polished, accessible experiences with motion."
        ctaHref="/enroll#pricing"
        ctaLabel="Choose a plan"
      />
    </>
  )
}
