"use client"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative h-screen md:h-screen bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/images/villa.jpg')" }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 slide-up">

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Find Your Dream Property
        </h1>

        <p className="text-sm md:text-lg mb-8 max-w-xl">
          Premium Residential & Commercial plots in prime locations
        </p>

        <Link
          href="/#properties"
          className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Explore Properties
        </Link>

      </div>

    </section>
  )
}