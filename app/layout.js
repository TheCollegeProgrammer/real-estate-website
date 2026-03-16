import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export const metadata = {
  title: "Success Infra Estate",
  description: "Find your dream property with our trusted real estate agency",
    icons: {
    icon: "/app/logo.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">      
    <body className="bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />

    </body>
    </html>
  )
}