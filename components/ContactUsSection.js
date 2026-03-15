"use client"

export default function ContactUsSection() {
  return (
    <section
      id="contact"
      className="py-14 md:py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center transition-colors"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          Get In Touch
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8 text-[15px] md:text-lg">
          Interested in buying a property? Contact us today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="https://wa.me/8080331005"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Chat on WhatsApp
          </a>

          <a
            href="tel:7887889488"
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Call Now
          </a>

        </div>

      </div>
    </section>
  )
}
