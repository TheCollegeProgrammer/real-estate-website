import ImageCarousel from "@/components/ImageCarousel"
import BookNowSection from "@/components/BookNowSection"
import ContactUsSection from "@/components/ContactUsSection"
import MapViewer from "@/components/MapViewer"

import { TrendingUp, Map, Home, ChartLine } from "lucide-react"
import { Route, School, GraduationCap, Train, Factory } from "lucide-react"

import Image from "next/image"

export default function Page() {
  return (
    <div className="text-gray-700 dark:text-gray-300">

      {/* HERO */}
      <section
        className="h-[280px] md:h-[380px] flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "url('/images/mauli-layout.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center px-4">
          <h1 className="text-3xl md:text-5xl font-semibold mb-3">Project</h1>
          <div className="w-20 h-[3px] bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl">Mauli Niwasa 36, 37</p>
        </div>
      </section>


      {/* INFO */}
      <section className="py-14 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 px-6 items-center">

          <Image
            src="/images/mauli.png"
            alt="Mauli Niwasa"
            width={800}
            height={600}
            className="rounded-lg shadow-md w-full object-contain"
          />

          <div>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
              Mauli Niwasa 36, 37
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Marketed By Success Infra Estate
            </p>

            <p className="leading-relaxed text-[15px] md:text-lg">
              Mauli Niwasa 36 & 37 is located in a rapidly developing zone with
              direct highway access, offering excellent connectivity and easy
              access to daily essentials—making it ideal for both living and
              investment.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT HIGHLIGHTS */}
      <section className="py-14 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Project Highlights
          </h2>

          {/* Layout Plan */}
          <div className="flex justify-center mb-12">

            <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-4xl w-full">

              <MapViewer src="/images/mauli-plan.png" />

            </div>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
              <p className="text-gray-500 text-sm">Location</p>
              <p className="font-semibold mt-1">Borkhedi, Butibori</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
              <p className="text-gray-500 text-sm">Project Type</p>
              <p className="font-semibold mt-1">Residential + Commercial Plots</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
              <p className="text-gray-500 text-sm">Plot Sizes</p>
              <p className="font-semibold mt-1">1000 – 3500 sq ft</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
              <p className="text-gray-500 text-sm">Phases</p>
              <p className="font-semibold mt-1">Phase 1 & Phase 2</p>
            </div>

          </div>

        </div>

      </section>


      {/* AMENITIES */}
      <section className="py-14 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Project Amenities
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[15px] md:text-[17px]">

              {[
                "Club House", "Swimming Pool", "Community Hall", "Indoor Games",
                "Cafe Restaurant", "Cricket Turf", "Basketball Court", "Drainage Line",
                "Sewage Line with STP", "Water Supply", "Road Plantation", "Gazebo for Yoga",
                "Jogging Track", "Street Lamps"
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-green-600">✔</span>
                  <p>{item}</p>
                </div>
              ))}

            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4">

              <Image
                src="/images/hall.png"
                alt="Community Hall"
                width={400}
                height={180}
                className="rounded-xl shadow-md w-full h-[180px] object-cover"
              />

              <Image
                src="/images/cafe.png"
                alt="Cafe"
                width={400}
                height={360}
                className="rounded-xl shadow-xl row-span-2 w-full h-full object-cover"
              />

              <Image
                src="/images/pool.jpg"
                alt="Swimming Pool"
                width={400}
                height={180}
                className="rounded-xl shadow-md w-full h-[180px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* LOCATION ADVANTAGES */}
      <section className="py-14 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            Location Advantages
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">

            <MapViewer src="/images/mauli-map.png" />

            <div className="grid grid-cols-2 gap-5">

              {[
                { icon: Route, title: "Nagpur Highway", time: "2 min drive" },
                { icon: School, title: "St. Carlet Schools", time: "5 min drive" },
                { icon: GraduationCap, title: "IIIT", time: "25 min drive" },
                { icon: Train, title: "Upcoming Metro", time: "5 min drive" },
                { icon: GraduationCap, title: "Kamla Nehru College", time: "5 min drive" },
                { icon: Factory, title: "MIDC Butibori", time: "15 min drive" }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.time}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* GALLERY */}
      <ImageCarousel
        images={[
          "/images/ruby-1.png",
          "/images/ruby-2.png",
          "/images/ruby-3.png",
          "/images/ruby-4.png"
        ]}
      />


      {/* WHY INVEST */}
      <section className="py-14 md:py-16 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Why Invest in Mauli Niwasa?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: Map,
                title: "Prime Developing Location",
                text: "Situated in a rapidly growing area with excellent infrastructure."
              },
              {
                icon: Home,
                title: "Affordable Residential Plots",
                text: "Perfect opportunity to own premium plots."
              },
              {
                icon: TrendingUp,
                title: "High Future Appreciation",
                text: "Strong potential for property value growth."
              },
              {
                icon: ChartLine,
                title: "Direct Highway Connectivity",
                text: "Easy access to major roads and city routes."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                <item.icon className="mx-auto mb-3 text-yellow-600" size={30} />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      <BookNowSection />
      <ContactUsSection />

    </div>
  )
}
