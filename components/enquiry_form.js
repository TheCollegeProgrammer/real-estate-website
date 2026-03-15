"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function EnquiryForm() {

  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    address: "",
    site: "",
    question: ""
  })

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const goProperties = () => {

    if (typeof window !== "undefined" && window.location.pathname === "/") {

      const el = document.getElementById("properties")

      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }

    } else {

      router.push("/")

      setTimeout(() => {
        const el = document.getElementById("properties")
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }, 400)

    }
  }

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const validatePhone = (number) => {
    let phone = number.replace(/\D/g, "")

    if (phone.startsWith("91") && phone.length === 12) {
      phone = phone.slice(2)
    }

    return phone.length === 10
  }

  const cleanPhone = (number) => {
    let phone = number.replace(/\D/g, "")

    if (phone.startsWith("91") && phone.length === 12) {
      phone = phone.slice(2)
    }

    return phone
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    if (loading) return

    if (!form.name.trim()) {
      setError("Please enter your name")
      return
    }

    if (!validatePhone(form.whatsapp)) {
      setError("Please enter a valid 10 digit WhatsApp number")
      return
    }

    if (!form.address.trim()) {
      setError("Please enter your address")
      return
    }

    setError("")
    setLoading(true)

    const payload = {
      ...form,
      whatsapp: cleanPhone(form.whatsapp),
      question: form.question || "-"
    }

    try {

      await fetch(
        "https://script.google.com/macros/s/AKfycbzrpKAEnNRu16p1T8NSxccaMq-gHU21QkeeCrYc64SdJzIe-hKStWiiCExnHTpOpxcl1g/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      )

      setShowPopup(true)

      setForm({
        name: "",
        whatsapp: "",
        address: "",
        site: "",
        question: ""
      })

    } catch (err) {

      console.error(err)
      setError("Something went wrong. Please try again.")

    } finally {

      setLoading(false)

    }
  }

  const inputStyle =
    "w-full border border-gray-300 p-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black dark:text-white dark:border-gray-700 dark:placeholder-gray-400"

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black p-6">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6">

        {/* LEFT IMAGE */}

        <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[400px] md:min-h-[500px]">

          <Image
            src="/images/image.jpg"
            alt="Buying Home"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-8 md:p-10 text-white space-y-6">

            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
              Invest in Your Future with Success Infra Estate
            </h2>

            <p className="text-sm md:text-lg italic max-w-md drop-shadow-lg">
              "Real estate investment is not just about property,
              it's about securing your future."
            </p>

          </div>

        </div>

        {/* FORM */}

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10">

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-black dark:text-white">
            Enquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              className={inputStyle}
              required
            />

            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number *"
              value={form.whatsapp}
              onChange={handleChange}
              className={inputStyle}
              required
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <input
              type="text"
              name="address"
              placeholder="Street Address *"
              value={form.address}
              onChange={handleChange}
              className={inputStyle}
              required
            />

            <select
              name="site"
              value={form.site}
              onChange={handleChange}
              className={inputStyle}
            >
              <option value="">Select Project</option>
              <option value="Mauli Niwasa 36 - 37">Mauli Niwasa 36 - 37</option>
              <option value="Ruby Town">Ruby Town</option>
              <option value="Bokhara Residential Layout">Bokhara Residential Layout</option>
              <option value="Ganesh Vatika - 11">Ganesh Vatika - 11</option>
              <option value="K.S.Shreya Home's">K.S.Shreya Home's</option>
            </select>

            <textarea
              name="question"
              placeholder="Any question? (optional)"
              value={form.question}
              onChange={handleChange}
              className={inputStyle}
              rows={4}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>

          </form>

        </div>

      </div>

      {/* SUCCESS POPUP */}

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6">

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">

            <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Thank You!
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Your enquiry has been submitted successfully.
              Our team will contact you within <b>12 hours</b>.
            </p>

            <button
              onClick={goProperties}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              View Properties
            </button>

          </div>

        </div>
      )}

    </section>
  )
}