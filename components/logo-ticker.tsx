import Image from "next/image"

export default function LogoTicker() {
  const logos = [
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
  ]
  return (
    <div className="relative overflow-hidden border-y">
      <div className="marquee">
        <div className="marquee-content">
          {logos.map((src, i) => (
            <div key={`a-${i}`} className="mx-8 h-10 flex items-center opacity-70">
              <Image src={src || "/placeholder.svg"} alt="Partner logo" width={120} height={24} />
            </div>
          ))}
          {logos.map((src, i) => (
            <div key={`b-${i}`} className="mx-8 h-10 flex items-center opacity-70" aria-hidden>
              <Image src={src || "/placeholder.svg"} alt="" width={120} height={24} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
