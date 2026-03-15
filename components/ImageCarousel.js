
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function ImageCarousel({ images = [] }) {

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {

    if (!images || images.length === 0) return

    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)

  }, [images])

  if (!images || images.length === 0) return null

  return (

    <section className="py-14 md:py-16 bg-gray-100 dark:bg-gray-900 transition-colors">

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-800 dark:text-white">
        Site Images
      </h2>

      {/* Carousel Card */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 transition-colors">

        <div className="relative w-full h-[250px] md:h-[420px] overflow-hidden rounded-xl">

          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Site Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          ))}

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition"
          >
            ❮
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === current
                    ? "bg-white"
                    : "bg-white/40 dark:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  )
}
