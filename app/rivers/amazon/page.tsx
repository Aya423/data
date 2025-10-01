"use client"

import Link from "next/link"

export default function AmazonPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 z-50 p-6">
        <Link
          href="/"
          className="flex items-center bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-border transition-all duration-500 ease-in-out hover:bg-background/90 hover:scale-105"
        >
          <h2 className="font-serif text-sm font-bold text-primary tracking-wider">Breathing Rivers</h2>
        </Link>
      </div>

        {/* style */}<section
  className="relative min-h-[50vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
  style={{
    backgroundImage: "url('/amazon.jpg')",
  }}
>
  <div className="text-center text-white">
    <h1 className="text-4xl font-bold">Amazon River</h1>
  </div>
</section>



        <div className="text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold drop-shadow-2xl">Amazon River</h1>
          <p className="text-xl md:text-2xl mt-4 drop-shadow-lg">The Largest River in the World</p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-gray-800/70 text-white rounded-lg p-6 shadow-lg">
            <p className="text-lg leading-relaxed">
              The Amazon rainforest is home to the largest continuous stretch of tropical forest on Earth, producing
              about 20% of the planet's oxygen. Its dense vegetation regulates rainfall patterns, absorbs vast amounts
              of carbon dioxide, and sustains millions of species.
            </p>
            <p className="text-lg mt-6 leading-relaxed">
              However, satellite observations of vegetation reveal alarming changes. Deforestation and human activities
              are reducing the forest cover, threatening biodiversity and weakening one of Earth's most important
              climate regulators.
            </p>
          </div>

          <div className="border-8 border-yellow-400 rounded-lg shadow-xl p-2 bg-yellow-50">
            <video className="w-full rounded" autoPlay loop muted playsInline>
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amaz-FJ3DhyoGIMHhGhilvoL2JZy8RD9Sjr.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </main>
  )
}
