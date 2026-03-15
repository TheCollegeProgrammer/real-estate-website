"use client"

import { useRouter } from "next/navigation"

export default function CTASection() {

  const router = useRouter()

  const goProperties = () => {
    router.push("/?expand=true#properties")
  }

  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/buying-house.jpg')" }}
    >

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 bg-orange-500 text-white max-w-md p-10 ml-24 shadow-xl rounded-2xl">

        <h2 className="text-2xl font-semibold mb-4">
          Buy Your First Property
        </h2>

        <p className="text-sm mb-6 leading-relaxed">
          Discover premium residential and commercial properties with
          modern amenities and prime locations.
        </p>

        <button
          onClick={goProperties}
          className="border border-white px-6 py-2 hover:bg-white hover:text-orange-500 transition"
        >
          Our Properties
        </button>

      </div>

    </section>
  )
}