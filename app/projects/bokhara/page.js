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
        className="h-[300px] md:h-[380px] flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "url('/images/bokhara-plan.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center px-6">
          <h1 className="text-3xl md:text-5xl font-semibold mb-3">Project</h1>
          <div className="w-20 h-[3px] bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl">Bokhara Residential Layout</p>
        </div>
      </section>


      {/* INFO */}

      <section className="py-16 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

          <Image
            src="/images/bokhara.png"
            alt="Bokhara Layout"
            width={800}
            height={600}
            className="rounded-lg shadow-md w-full h-auto"
          />

          <div>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
              Bokahra Residential Layout
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Marketed By Success Infra Estate
            </p>

            <p className="leading-relaxed text-base md:text-lg">
              Bokhara Residential Layout is an NMRDA-sanctioned project located
              in the fast-developing area of Bokhara, Nagpur. The layout is
              designed with proper planning and essential amenities.
            </p>

            <p className="leading-relaxed text-base md:text-lg mt-4">
              Surrounded by growing infrastructure and strong connectivity to nearby
              areas, it is an ideal choice for comfortable living and secure
              long-term investment.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT HIGHLIGHTS */}

      <section className="py-16 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            Project Highlights
          </h2>

          <div className="flex justify-center mb-16">
            <MapViewer src="/images/bokhara-plan.png" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
              <h4 className="font-semibold text-lg mb-1">Location</h4>
              <p className="text-gray-600 dark:text-gray-400">Bokhara, Nagpur</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
              <h4 className="font-semibold text-lg mb-1">Project Type</h4>
              <p className="text-gray-600 dark:text-gray-400">Residential Plots</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
              <h4 className="font-semibold text-lg mb-1">Plot Sizes</h4>
              <p className="text-gray-600 dark:text-gray-400">1000 – 3000 sq ft</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
              <h4 className="font-semibold text-lg mb-1">Phases</h4>
              <p className="text-gray-600 dark:text-gray-400">Phase 1</p>
            </div>

          </div>

        </div>

      </section>


      {/* AMENITIES */}

      <section className="py-16 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Project Amenities
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-center mb-12">
            Essential infrastructure and lifestyle amenities available in the project
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[16px] md:text-[18px]">

              {["Cement Road", "Sewage Lines", "Electricity", "Garden Area", "Water Line"].map((item) => (
                <div key={item} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex items-center gap-3">
                  <span className="text-green-600 text-xl">✔</span>
                  <p>{item}</p>
                </div>
              ))}

            </div>

            <div className="grid grid-cols-2 gap-5">

              <Image
                src="/images/water-line.webp"
                alt="Water Line"
                width={400}
                height={300}
                className="rounded-xl shadow-md w-full h-[180px] md:h-[200px] object-cover"
              />

              <Image
                src="/images/cement-road.jpg"
                alt="Cement Road"
                width={400}
                height={300}
                className="rounded-xl shadow-md w-full h-[180px] md:h-[200px] object-cover"
              />

              <Image
                src="/images/garden.jpg"
                alt="Garden"
                width={800}
                height={400}
                className="rounded-xl shadow-lg col-span-2 w-full h-[200px] md:h-[220px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* LOCATION ADVANTAGES */}

      <section className="py-16 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14">
            Location Advantages
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">

            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/bokhara-map.png"
                alt="Project Location Map"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {[{
                icon: Route, title: "Outer Ring Road", time: "2 min drive"
              }, {
                icon: School, title: "New Modern High School", time: "5 min drive"
              }, {
                icon: Landmark, title: "Koradi Temple", time: "15 min drive"
              }, {
                icon: GraduationCap, title: "Jhulelal Institute of Technology", time: "5 min drive"
              }, {
                icon: School, title: "Bhonsala Military School", time: "10 min drive"
              }, {
                icon: Hospital, title: "Central India Nursing School", time: "5 min drive"
              }].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.time}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      <ImageCarousel
        images={[
          "/images/ruby-1.png",
          "/images/ruby-2.png",
          "/images/ruby-3.png",
          "/images/ruby-4.png"
        ]}
      />


      {/* WHY INVEST */}

      <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Why Invest in Bokhara Residential ?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: Map,
                title: "Prime Developing Location",
                text: "Situated in a rapidly growing area with excellent infrastructure development."
              },
              {
                icon: Home,
                title: "Affordable Residential Plots",
                text: "Perfect opportunity to own premium plots at competitive prices."
              },
              {
                icon: TrendingUp,
                title: "High Future Appreciation",
                text: "Strong potential for property value growth in the coming years."
              },
              {
                icon: ChartLine,
                title: "Direct Highway Connectivity",
                text: "Easy access to major roads ensuring smooth travel."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                <item.icon className="mx-auto mb-4 text-yellow-600" size={32} />
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

