"use client"

import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors px-6">

      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800 dark:text-gray-200">
        WHY TO CHOOSE US ?
      </h2>

      <div className="grid gap-8 max-w-6xl mx-auto 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {/* Card 1 */}
        <div className="relative h-[260px] rounded-lg overflow-hidden group">

          <Image
            src="/images/counsaltancy.jpg"
            alt="Expert Property Consultancy"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

          <div className="relative text-white p-6 text-center flex flex-col justify-center h-full">

            <h3 className="text-xl font-semibold mb-3">
              Expert Property Consultancy
            </h3>

            <p className="text-sm leading-relaxed">
              Our experienced consultants guide you through every step of the property buying process.
              We help you choose the right investment based on your budget, location preference,
              and future growth potential.
            </p>

          </div>

        </div>

        {/* Card 2 */}
        <div className="relative h-[260px] rounded-lg overflow-hidden group">

          <Image
            src="/images/legel.jpg"
            alt="Legal Verified Projects"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

          <div className="relative text-white p-6 text-center flex flex-col justify-center h-full">

            <h3 className="text-xl font-semibold mb-3">
              100% Legal & Verified Projects
            </h3>

            <p className="text-sm leading-relaxed">
              All our projects are legally verified with proper documentation.
              We ensure that plots are sanctioned and RERA registered so you can invest
              with complete confidence and peace of mind.
            </p>

          </div>

        </div>

        {/* Card 3 */}
        <div className="relative h-[260px] rounded-lg overflow-hidden group">

          <Image
            src="/images/home-loan.jpg"
            alt="Home Loan Assistance"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

          <div className="relative text-white p-6 text-center flex flex-col justify-center h-full">

            <h3 className="text-xl font-semibold mb-3">
              Easy Home Loan Assistance
            </h3>

            <p className="text-sm leading-relaxed">
              We assist you in getting quick and easy home loan approvals through trusted banks
              and financial institutions, making your property purchase smooth and hassle-free.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}