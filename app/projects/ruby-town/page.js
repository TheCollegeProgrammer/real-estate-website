import ImageCarousel from "@/components/ImageCarousel"
import BookNowSection from "@/components/BookNowSection"
import ContactUsSection from "@/components/ContactUsSection"
import MapViewer from "@/components/MapViewer"

import { TrendingUp, Map, Home, ChartLine } from "lucide-react"
import { Route, School, Landmark, GraduationCap, Hospital } from "lucide-react"

import Image from "next/image"

export default function Page() {
  return (
    <div className="text-gray-700 dark:text-gray-300">

      {/* HERO */}
      <section
        className="h-[280px] md:h-[450px] flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "url('/images/ruby-cover.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center px-4">
          <h1 className="text-3xl md:text-5xl font-semibold mb-3">Project</h1>
          <div className="w-20 h-[3px] bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl">Ruby Town</p>
        </div>
      </section>


      {/* INFO */}
      <section className="py-14 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 px-6 items-center">

          <Image
            src="/images/ruby-logo.png"
            alt="Ruby Town"
            width={800}
            height={600}
            className="rounded-xl shadow-lg w-full object-contain"
          />

          <div>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
              Ruby Town - Residential & Commercial Plots
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Marketed by Success Infra Estate
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] md:text-[16px]">
              Ruby Town, located at Bokara, Nagpur, offers RL-sanctioned residential
              and commercial plots in a well-planned layout with direct highway touch
              connectivity. The project is designed with essential amenities and proper
              infrastructure for comfortable living.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] md:text-[16px] mt-4">
              Surrounded by an established locality and growing development, Ruby Town
              presents a strong opportunity for both residential use and long-term investment.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT HIGHLIGHTS */}
      <section className="py-14 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-2">
            Project Highlights
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
            Key details of the project layout and specifications
          </p>

          <div className="flex justify-center mb-12">

            <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-3xl w-full">

              <MapViewer src="/images/ruby-plan.png" />

            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            {[
              { title: "Location", value: "Bokhara, Nagpur" },
              { title: "Project Type", value: "Residential + Commercial Plots" },
              { title: "Plot Sizes", value: "1200 – 3000 sq ft" },
              { title: "Phases", value: "Phase 1" }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
                <p className="text-gray-500 text-sm">{item.title}</p>
                <p className="font-semibold mt-1">{item.value}</p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* AMENITIES */}
      <section className="py-14 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Project Amenities
          </h2>

          <p className="text-gray-500 text-center mb-12">
            Essential infrastructure and lifestyle amenities available in the project
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div className="grid grid-cols-2 gap-5 text-[16px] md:text-[18px]">

              {[
                "Cement Road",
                "Sewage Lines",
                "Underground Electricity",
                "Garden Area",
                "Water Line",
                "Street Light",
                "Entrance Gate",
                "Wall Compound"
              ].map((item) => (
                <div key={item} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex items-center gap-3">
                  <span className="text-green-600 text-lg">✔</span>
                  <p>{item}</p>
                </div>
              ))}

            </div>

            <div className="grid grid-cols-2 gap-4">

              <Image
                src="/images/water-line.webp"
                alt="Water Line"
                width={400}
                height={200}
                className="rounded-xl shadow-md w-full h-[180px] object-cover"
              />

              <Image
                src="/images/cement-road.jpg"
                alt="Cement Road"
                width={400}
                height={200}
                className="rounded-xl shadow-md w-full h-[180px] object-cover"
              />

              <Image
                src="/images/garden.jpg"
                alt="Garden"
                width={800}
                height={220}
                className="rounded-xl shadow-lg col-span-2 w-full h-[200px] object-cover"
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

            <MapViewer src="/images/ruby-map.png" />

            <div className="grid grid-cols-2 gap-5">

              {[
                { icon: Route, title: "Outer Ring Road", time: "2 min drive" },
                { icon: School, title: "New Modern High School", time: "5 min drive" },
                { icon: Landmark, title: "Koradi Temple", time: "15 min drive" },
                { icon: GraduationCap, title: "Jhulelal Institute of Technology", time: "5 min drive" },
                { icon: School, title: "Bhonsala Military School", time: "10 min drive" },
                { icon: Hospital, title: "Central India Nursing School", time: "5 min drive" }
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
          "/images/ruby-1.jpeg",
          "/images/ruby-2.jpeg",
          "/images/ruby-3.jpeg",
          "/images/ruby-4.jpeg",
          "/images/ruby-5.jpeg",
          "/images/ruby-6.jpeg",
          "/images/ruby-7.jpeg",
          "/images/ruby-8.png"
        ]}
      />


      {/* WHY INVEST */}
      <section className="py-14 md:py-16 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Why Invest in Ruby Town?
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
