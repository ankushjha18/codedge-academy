import { Hero } from "@/components/hero"
import AnimatedSection from "@/components/animated-section"
export default function ReviewsPage() {
  return (
    <>
      <Hero
        eyebrow="What learners say"
        title="Real stories. Real outcomes."
        subtitle="Our students consistently rate us highly for clarity, practicality, and the elegance of our learning experience."
      />
      <AnimatedSection as="section" className="mx-auto max-w-6xl px-4 md:px-6 pb-20" delayMs={60}>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Ava", quote: "Crisp, modern, and effective. I landed a job in 3 months." },
            { name: "Ethan", quote: "Elegant UI and powerful content. The best learning flow." },
            { name: "Noah", quote: "The animations made it delightful without being distracting." },
          ].map((t) => (
            <figure key={t.name} className="rounded-lg border p-6 hover-raise transition-all">
              <blockquote className="leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-[color:var(--color-muted-foreground)]">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </AnimatedSection>

      
    </>
  )
}
