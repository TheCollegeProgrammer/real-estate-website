"use client"
export default function About() {
  return (
    <section
      id="about"
      className="py-14 md:py-20 px-6 bg-white dark:bg-gray-800 text-center transition-colors"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          About Our Agency
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-[15px] md:text-lg leading-relaxed">
          With <strong>10+ years of trust</strong> and <strong>10+ successful projects</strong>,
          we are a dedicated real estate agency helping clients discover premium residential
          and commercial properties. Our focus on <strong>transparent deals, prime locations,
          and professional service</strong> ensures every investment is secure, valuable,
          and built for long-term growth.
        </p>

      </div>
    </section>
  )
}
