"use client"

import Link from "next/link"

export default function AmazonPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 py-4 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto flex justify-center">
          <Link href="/" className="group">
            <div className="bg-teal-100 rounded-3xl px-8 py-3 shadow-md hover:shadow-lg transition-shadow">
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-teal-800">Breathing Rivers</h1>
            </div>
          </Link>
        </div>
      </div>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side - Text content area */}
          <div className="flex-1">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">Amazon River</h1>
            <div className="prose prose-lg max-w-none text-gray-700">{/* Text content will be added here */}</div>
          </div>

          {/* Right side - Video */}
          <div className="flex-1">
            <video className="w-full rounded-lg shadow-2xl" autoPlay loop muted playsInline>
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amaz-FJ3DhyoGIMHhGhilvoL2JZy8RD9Sjr.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </main>
  )
}
