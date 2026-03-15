"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function MapViewer({ src }) {

  const [open, setOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const dragging = useRef(false)
  const start = useRef({ x: 0, y: 0 })

  const zoomIn = () => setZoom((z) => Math.min(z + 0.15, 4))
  const zoomOut = () => setZoom((z) => Math.max(z - 0.15, 0.4))
  const resetZoom = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  const handleWheel = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.deltaY < 0) zoomIn()
    else zoomOut()
  }

  const handleMouseDown = (e) => {
    dragging.current = true
    start.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    }
  }

  const handleMouseMove = (e) => {
    if (!dragging.current) return

    setPosition({
      x: e.clientX - start.current.x,
      y: e.clientY - start.current.y
    })
  }

  const handleMouseUp = () => {
    dragging.current = false
  }

  return (
    <>
      {/* Preview */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-zoom-in flex justify-center"
      >
        <Image
          src={src}
          alt="Project Map"
          width={1200}
          height={800}
          className="rounded-xl shadow-xl w-full max-h-[350px] md:max-h-[450px] object-contain"
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => {
            resetZoom()
            setOpen(false)
          }}
        >

          <div
            className="w-full h-full flex items-center justify-center overflow-hidden cursor-grab"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >

            <div
              onMouseDown={handleMouseDown}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                transition: dragging.current ? "none" : "transform 0.2s ease"
              }}
            >
              <Image
                src={src}
                alt="Full Map"
                width={2000}
                height={1400}
                className="w-auto h-auto max-w-none select-none"
                draggable={false}
              />
            </div>

          </div>

          {/* Controls */}
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-4">

            <button
              onClick={(e) => { e.stopPropagation(); zoomOut() }}
              className="bg-white/40 hover:bg-white text-black px-4 py-2 rounded-lg backdrop-blur transition"
            >
              −
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); zoomIn() }}
              className="bg-white/40 hover:bg-white text-black px-4 py-2 rounded-lg backdrop-blur transition"
            >
              +
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); resetZoom() }}
              className="bg-white/40 hover:bg-white text-black px-4 py-2 rounded-lg backdrop-blur transition"
            >
              Reset
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                resetZoom()
                setOpen(false)
              }}
              className="bg-red-500/70 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </>
  )
}
