import { Hero } from "@/components/hero"
import AnimatedSection from "@/components/animated-section"

export default function EnrollPage() {
  return (
    <>
      <Hero
        eyebrow="Get started"
        title="Simple, transparent pricing."
        subtitle="Pick a plan that fits. Upgrade anytime."
      />
      <AnimatedSection id="pricing" as="section" className="mx-auto max-w-6xl px-4 md:px-6 pb-20" delayMs={60}>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Starter", price: "$19", features: ["1 course", "Email support"] },
            { name: "Pro", price: "$49", features: ["All courses", "Community", "Priority support"] },
            { name: "Team", price: "$149", features: ["Seats for 5", "Admin tools"] },
          ].map((p) => (
            <div key={p.name} className="rounded-lg border p-6 hover-raise transition-all">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-2 text-2xl">{p.price}/mo</p>
              <ul className="mt-4 space-y-1 text-[color:var(--color-muted-foreground)]">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full animated-gradient rounded-md px-4 py-2 text-[color:var(--color-primary-foreground)]">
                Choose {p.name}
              </button>
            </div>
          ))}
        </div>
      </AnimatedSection>

     
    </>
  )
}
