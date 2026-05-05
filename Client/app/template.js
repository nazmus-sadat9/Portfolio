'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function Template({ children }) {
  const container = useRef(null)

  useGSAP(() => {
    gsap.from(container.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
  }, { scope: container })

  return (
    <div ref={container} className="min-h-screen">
      {children}
    </div>
  )
}
