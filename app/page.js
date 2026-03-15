// making some change to check
import { Suspense } from "react"
import Hero from "../components/Hero"
import Properties from "../components/Properties"
import About from "../components/About"
import ContactUsSection from "../components/ContactUsSection"
import CTASection from "../components/CTASection"
import WhyChooseUs from "../components/WhyToChooseUs"

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Properties />
      </Suspense>
      <CTASection />
      <WhyChooseUs />
      <About />
      <ContactUsSection />
    </main>
  )
}// this is new comment