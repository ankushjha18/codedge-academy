import { Hero } from "@/components/hero"
import AnimatedSection from "@/components/animated-section"
import CtaBand from "@/components/cta-band"

export default function DataScienceCourse() {
  return (
    <>
      <Hero
        eyebrow="Course"
        title="Data Science"
        subtitle="Build an end-to-end toolkit: analysis, ML, and deployment."
        ctaHref="/enroll"
        ctaLabel="Enroll in Data Science"
      />
      <AnimatedSection id="overview" as="section" className="mx-auto max-w-6xl px-4 md:px-6 py-12" delayMs={40}>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-[color:var(--color-muted-foreground)]">
          From EDA to models, with a focus on ethics and clarity.
        </p>
      </AnimatedSection>
      <AnimatedSection id="curriculum" as="section" className="mx-auto max-w-6xl px-4 md:px-6 py-12" delayMs={80}>
        <h2 className="text-xl font-semibold">Curriculum</h2>
        <ul className="mt-2 list-disc pl-5 text-[color:var(--color-muted-foreground)]">
          <li>Stats review and Python workflows</li>
          <li>Feature engineering, model evaluation</li>
          <li>Deployment patterns</li>
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
        title="Turn data into outcomes."
        subtitle="From analysis to deployment, learn the full stack."
        ctaHref="/enroll#pricing"
        ctaLabel="Choose a plan"
      />
    </>
  )
}
