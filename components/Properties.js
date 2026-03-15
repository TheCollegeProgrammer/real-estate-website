"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronsDown, ChevronsUp } from "lucide-react"

const properties = [
    {
        id: 1,
        link: "ruby-town",
        title: "Ruby Town",
        image: "/images/ruby-logo.png",
        location: "Bokhara, Nagpur",
        description:
            "Residential + Commercial plots in the city’s fastest-growing corridor with excellent connectivity and development.",
    },
    {
        id: 2,
        link: "bokhara",
        title: "Residential Layout Bokhara",
        image: "/images/bokhara.png",
        location: "Bokhara, Nagpur",
        description:
            "Premium residential plots in a rapidly developing and well-connected location.",
    },
    {
        id: 3,
        link: "ganesh-vatika",
        title: "Ganesh Vatika - 11",
        image: "/images/ganesh-vatika.png",
        location: "Shankarpur, Nagpur",
        description:
            "Residential + Commercial plots in a high-growth area with strong connectivity and modern convenience.",
    },
    {
        id: 4,
        link: "mauli-niwasa",
        title: "Mauli Niwasa 36 & 37",
        image: "/images/mauli.png",
        location: "Borkhedi - Butibori, Nagpur",
        description:
            "Mauli Niwasa 36 & 37 offers premium residential & commercial plots with modern amenities.",
    },
    {
        id: 5,
        link: "ksshreya",
        title: "K.S.Shreya Homes",
        image: "/images/ksshreya.png",
        location: "Jamtha, Nagpur",
        description:
            "Residential plots in the city’s fastest-growing corridor with excellent connectivity and development.",
    },
]

export default function Properties() {

    const [expanded, setExpanded] = useState(false)

    const sectionRef = useRef(null)

    const toggleExpand = () => {

        if (expanded) {

            sectionRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })

        }

        setExpanded(!expanded)
    }

    return (

        <section
            ref={sectionRef}
            id="properties"
            className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors"
        >

            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                Our Projects
            </h2>


            {/* Cards Container */}

            <div className={`max-w-7xl mx-auto px-6 overflow-hidden transition-all duration-700 ease-in-out ${expanded ? "max-h-[2250px]" : "max-h-[850px]"}`}>

                <div className="flex flex-wrap justify-center gap-8 mb-6">

                    {properties.slice(0, expanded ? properties.length : 3).map((property) => (

                        <div
                            key={property.id}
                            className={`bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col overflow-hidden
                            transition-all ease-in-out duration-500 hover:-translate-y-2 hover:shadow-xl
              
                            w-full
                            sm:w-[45%]
                            ${expanded ? "lg:w-[25%]" : "lg:w-[23%]"}
                            `}
                        >

                            <div className="relative w-full h-48">

                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover"
                                />

                            </div>


                            <div className="p-5 flex flex-col flex-grow">

                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                    {property.title}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    📍 {property.location}
                                </p>

                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                                    {property.description}
                                </p>


                                <Link href={`/projects/${property.link}`}>

                                    <button className="w-full mt-auto bg-black dark:bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-500 ease-in-out">
                                        View Details
                                    </button>

                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>


            {/* View More Button */}

            <div className="text-center mt-6">

                <button
                    onClick={toggleExpand}
                    className="inline-flex items-center gap-2 text-lg font-medium text-gray-800 dark:text-gray-200 hover:scale-110 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
                >

                    {expanded ? <ChevronsUp size={20} /> : <ChevronsDown size={20} />}

                    {expanded ? "View Less" : "View More"}

                    {expanded ? <ChevronsUp size={20} /> : <ChevronsDown size={20} />}

                </button>

            </div>

        </section>
    )
}