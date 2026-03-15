"use client"

import { Facebook, Instagram, Youtube, Phone, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0b1a2f] text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>

          <h2 className="text-white text-2xl font-semibold mb-4">
            Success Infra Estate
          </h2>

          <p className="text-sm leading-relaxed mb-6">
            Helping you find the right property with expert consultancy,
            verified legal documentation, and smooth home loan assistance.
          </p>

          <div className="flex gap-4">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-600 rounded-md hover:bg-gray-700 transition"
            >
              <Facebook size={18}/>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-600 rounded-md hover:bg-gray-700 transition"
            >
              <Instagram size={18}/>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-600 rounded-md hover:bg-gray-700 transition"
            >
              <Youtube size={18}/>
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div>

          <h3 className="text-white text-lg font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">

            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/#properties" className="hover:text-white transition">
                Our Projects
              </Link>
            </li>

            <li>
              <Link href="/about_us" className="hover:text-white transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/enquiry_form" className="hover:text-white transition">
                Enquiry Form
              </Link>
            </li>

          </ul>

        </div>


        {/* Contact Info */}
        <div>

          <h3 className="text-white text-lg font-semibold mb-6">
            Contact Info
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex items-start gap-3">
              <MapPin size={18}/>
              <a
                href="https://maps.app.goo.gl/5b4S2xLaawpKxGj96"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                First Floor, Anil Apartment <br/>
                Deendayal Nagar, Nagpur - 440022
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18}/>
              <a href="tel:7887889488" className="hover:text-white">
                +91 7887889488
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18}/>
              <a href="mailto:successinfraestate@gmail.com" className="hover:text-white">
                successinfraestate@gmail.com
              </a>
            </div>

          </div>


          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">

            <a
              href="https://wa.me/918080331005"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-4 py-2 text-white text-sm rounded hover:bg-green-700 transition"
            >
              WhatsApp
            </a>

            <a
              href="https://maps.app.goo.gl/5b4S2xLaawpKxGj96"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-500 px-4 py-2 text-sm rounded hover:bg-gray-700 transition"
            >
              View Map
            </a>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p>
            © {new Date().getFullYear()} Success Infra Estate. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link href="/privacy_policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>

            <Link href="/sitemap" className="hover:text-white">
              Sitemap
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}