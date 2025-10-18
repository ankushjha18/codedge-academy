import  HeroSection  from "@/components/hero"
import Link from "next/link"
import AnimatedSection from "@/components/animated-section"

export default function CoursesIndex() {
  return (
    <>
      <HeroSection
      />
      <AnimatedSection as="section" className="mx-auto max-w-6xl px-4 md:px-6 pb-20" delayMs={60}>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Web Development", href: "/courses/web-development" },
            { name: "Data Science", href: "/courses/data-science" },
            { name: "UI/UX Design", href: "/courses/ui-ux" },
          ].map((c) => (
            <Link key={c.name} href={c.href} className="rounded-lg border p-6 hover-raise transition-all">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="mt-2 text-[color:var(--color-muted-foreground)]">
                Explore overview, curriculum, and pricing details.
              </p>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      
    </>
  )
}
