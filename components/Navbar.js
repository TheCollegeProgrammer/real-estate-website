"use client"

import { Sun, Moon, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {

  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark")
      setDarkMode(isDark)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleTheme = () => setDarkMode(prev => !prev)

  const closeMenu = () => setMenuOpen(false)

  const goHome = () => {

    if (typeof window !== "undefined" && window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    } else {
      router.push("/")
    }

    closeMenu()
  }

  const goProperties = () => {

    if (typeof window !== "undefined" && window.location.pathname === "/") {

      const el = document.getElementById("properties")

      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }

      window.history.replaceState(null, "", "/")

    } else {
      router.push("/?expand=true#properties")
    }

    closeMenu()
  }

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-10 py-4 bg-black text-white shadow-md">

      {/* Logo */}
      <button onClick={goHome} className="flex items-center gap-2">

        <Image
          src="/images/logo.png"
          alt="Success Infra Estate"
          width={32}
          height={32}
        />

        <span className="font-bold text-lg hidden sm:block">
          Success Infra Estate
        </span>

      </button>


      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">

        <button onClick={goHome} className="hover:text-blue-400 transition">
          Home
        </button>

        <Link href="/about_us" className="hover:text-blue-400 transition">
          About
        </Link>

        <button onClick={goProperties} className="hover:text-blue-400 transition">
          Properties
        </button>

        <Link href="/enquiry_form" className="hover:text-blue-400 transition">
          Enquiry Form
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

      </div>


      {/* Mobile Buttons */}
      <div className="flex items-center gap-3 md:hidden">

        <button
          onClick={toggleTheme}
          className="px-3 py-2 border border-gray-700 rounded-lg"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-6 shadow-md md:hidden">

          <button onClick={goHome}>
            Home
          </button>

          <Link href="/about_us" onClick={closeMenu}>
            About
          </Link>

          <button onClick={goProperties}>
            Properties
          </button>

          <Link href="/enquiry_form" onClick={closeMenu}>
            Enquiry Form
          </Link>

        </div>
      )}

    </nav>
  )
}
