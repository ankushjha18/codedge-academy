import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import GlobalPopup from "@/components/global-popup"

export const metadata: Metadata = {
  title: "codege academy - Learn to Code, Build Projects, and Launch Your Tech Career",
  description: "Created by digitrixsolutions",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
        
          <Navbar />
          <main id="main">{children}</main>
          <Analytics />
          <Footer />
          <GlobalPopup />
        </Suspense>
         
      </body>
    </html>
  )
}
