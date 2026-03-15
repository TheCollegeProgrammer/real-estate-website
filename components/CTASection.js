"use client"

import { useRouter } from "next/navigation"

export default function CTASection() {

  const router = useRouter()

  const goProperties = () => {
    router.push("/?expand=true#properties")
  }

  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center hidden md:block"
      style={{ backgroundImage: "url('/images/buying-house.jpg')" }}
    >

        <div className="absolute inset-0 bg-black/30"></div>


        {/* Content Wrapper */}

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">

          <div className="bg-orange-500 text-white p-10 rounded-2xl max-w-lg shadow-xl">

            <h2 className="text-3xl font-bold mb-4">
              Buy Your First Property
            </h2>

            <p className="mb-6 text-lg">
              Discover premium residential and commercial properties
              with modern amenities and prime locations.
            </p>

            <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-orange-500 transition" href="/#properties" onClick={goProperties}>
              Our Properties
            </button>

          </div>

        </div>

      </section>
      )
}