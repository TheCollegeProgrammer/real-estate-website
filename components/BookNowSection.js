"use client"

import Link from "next/link"

export default function BookNowSection() {
  return (
    <section className="py-14 md:py-20 bg-[#cccccc] dark:bg-gray-900 text-center transition-colors">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black dark:text-white">
          So Don't Wait — Book Your Plot Today
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-[15px] md:text-lg mb-8">
          Limited plots available in prime locations. Secure your investment today.
        </p>

        <Link
          href="/enquiry_form"
          className="inline-block bg-black text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Book Now
        </Link>

      </div>

    </section>
  )
}
