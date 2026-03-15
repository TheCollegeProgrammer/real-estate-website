import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            About Our Company
          </h1>
          {/* <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300">
            With 10+ years of trust and 8+ successful projects, we help
            clients find premium residential and commercial properties.
          </p> */}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* LOGO */}
          <div className="flex justify-center md:block">
            <div className="bg-white p-4 rounded-xl shadow-lg md:bg-transparent md:p-0 md:shadow-none">
              <Image
                src="/images/big-logo.png"
                alt="company"
                width={500}
                height={300}
                className="w-full max-w-xs md:max-w-md h-auto object-contain"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4">
              We are a trusted real estate company committed to delivering
              high-quality residential and commercial properties. Our goal
              is to make property investment simple, transparent, and
              valuable for our clients.
            </p>

            <p className="text-gray-600">
              Our experienced team focuses on prime locations, modern
              infrastructure, and long-term value to ensure every client
              gets the best investment opportunity.
            </p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">10+</h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">8+</h3>
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">1000+</h3>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">15+</h3>
            <p className="text-gray-400 mt-2">Expert Team</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-lg rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-3">
                Trusted Experience
              </h3>
              <p className="text-gray-600">
                Years of experience in the real estate market with
                successful projects.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-3">
                Prime Locations
              </h3>
              <p className="text-gray-600">
                We focus on premium and high-growth locations for better
                investment opportunities.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-3">
                Transparent Process
              </h3>
              <p className="text-gray-600">
                We maintain complete transparency in every deal and
                ensure secure investments.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 md:py-20 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Find Your Dream Property?
        </h2>

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold transition">
          Contact Us
        </button>
      </section>

      {/* MAP + OFFICE */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* MAP */}
          <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.049228888947!2d79.04755987503381!3d21.11224488055812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfffe7c53dab%3A0xedb11353391277d6!2sSuccess%20Infra%20Estate%20plot%20sales%20in%20Nagpur!5e0!3m2!1sen!2sin!4v1773373742967!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>

          {/* OFFICE INFO */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Visit Our Office
            </h2>

            <p className="text-gray-600 mb-6">
              We welcome you to visit our office and explore our premium
              real estate projects. Our team will help you find the best
              property investment opportunities.
            </p>

            <div className="space-y-3 text-gray-700 text-center md:text-left">

              <p>
                <span className="font-semibold">Office Address:</span><br />
                Success Infra Estate<br />
                First Floor, Anil Apartment,<br />
                Deendayal Nagar, Nagpur,<br />
                Maharashtra 440022
              </p>

              <p>
                <span className="font-semibold">Phone:</span><br />
                +91 7887889488, +91 9923206693
              </p>

              <p>
                <span className="font-semibold">Email:</span><br />
                successinfraestate@gmail.com
              </p>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

