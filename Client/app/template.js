'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Template({ children }) {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(container.current, {
      height: "0%",
      duration: 0.5,
      ease: "power2.out"
    })

  }, []);

  return (
    <div ref={container} className=" w-full h-full">
      
      {children}
    </div>
  )
}
