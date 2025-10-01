"use client"

import Link from "next/link"

export default function AmazonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* زرار الهوم فوق */}
      <div className="fixed top-0 left-0 z-50 p-6">
        <Link
          href="/"
          className="flex items-center bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-border transition-all duration-500 ease-in-out hover:bg-background/90 hover:scale-105"
        >
          <h2 className="font-serif text-sm font-bold text-primary tracking-wider">
            Breathing Rivers
          </h2>
        </Link>
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/amazon.jpg')",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold drop-shadow-2xl">
            Amazon River
          </h1>
          <p className="text-xl md:text-2xl mt-4 drop-shadow-lg">
            The Largest River in the World
          </p>
        </div>
      </section>
{/* النص + الفيديو */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* النص داخل مستطيل شفاف */}
          <div className="bg-black/60 p-8 rounded-md flex items-center w-full">
            <div>
              <p className="text-white font-merri tracking-wide leading-relaxed">
  The Amazon rainforest is home to the largest continuous stretch of tropical forest on Earth, 
  producing about 20% of the planet's oxygen. Its dense vegetation regulates rainfall patterns, 
  absorbs vast amounts of carbon dioxide, and sustains millions of species.
</p>

<p className="text-white font-merri mt-6 leading-relaxed">
  However, satellite observations of vegetation reveal alarming changes. 
  Deforestation and human activities are reducing the forest cover, 
  threatening biodiversity and weakening one of Earth's most important climate regulators.
</p>

            </div>
          </div>

          {/* الفيديو */}
          <div className="border-8 border-yellow-400 rounded-lg shadow-xl p-2 bg-yellow-50 flex w-full">
            <video className="w-full h-full rounded object-cover" autoPlay loop muted playsInline>
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amaz-FJ3DhyoGIMHhGhilvoL2JZy8RD9Sjr.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </main>
  )
}
