import { Hero } from "@/components/hero"
import Link from "next/link"
import AnimatedSection from "@/components/animated-section"
import CtaBand from "@/components/cta-band"

export default function JoinPage() {
  return (
    <>
      <Hero
        eyebrow="Become a member"
        title="Join a community of focused learners."
        subtitle="Get access to the full catalog, live sessions, and a private forum."
        ctaHref="/enroll"
        ctaLabel="Choose a plan"
      />
      <AnimatedSection as="section" className="mx-auto max-w-6xl px-4 md:px-6 pb-20" delayMs={60}>
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold">Membership perks</h3>
          <ul className="mt-3 list-disc pl-5 leading-relaxed text-[color:var(--color-muted-foreground)]">
            <li>All current and future courses</li>
            <li>Live office hours</li>
            <li>Private community</li>
          </ul>
          <Link
            href="/enroll"
            className="mt-6 inline-block animated-gradient px-4 py-2 rounded-md text-[color:var(--color-primary-foreground)] hover-raise transition-all"
          >
            Enroll now
          </Link>
        </div>
      </AnimatedSection>

      <CtaBand
        title="Become a member today."
        subtitle="Unlock the full catalog, live sessions, and private forums."
        ctaHref="/enroll"
        ctaLabel="View pricing"
      />
    </>
  )
}
