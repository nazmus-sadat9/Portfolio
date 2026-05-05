'use client'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'


const AboutCard = () => {
  const cardRef = useRef(null);
  const cardRef2 = useRef(null);

  useGSAP(()=>{
    gsap.from(cardRef.current, {
      y: 20,
      duration: 0.3,
      delay: 0.8,
      opacity: 0,
      ease: "power2.out"
    });

    gsap.from(cardRef2.current, {
      y: 20,
      duration: 0.3,
      delay: 1.1,
      opacity: 0,
      ease: "power2.out"
    })
  })

  return (
    <div className="mx-[7.5%] w-[85%] h-auto flex flex-col">

      <div ref={cardRef} className="mb-[5%] px-[5%] py-[2%] bg-[#fff] border-solid border-[#121212] border-[0.3em] flex flex-col gap-[2%]">
        <span className="text-[#121212] uppercase font-semibold">Location</span> 
        <span>Rajsahi, Joypurhat</span>
      </div>

      <div ref={cardRef2} className="px-[5%] py-[2%] bg-[#fff] border-solid border-[#121212] border-[0.3em] flex flex-col gap-[2%]">
        <span className="text-[#121212] uppercase font-semibold">Hobby</span>
        <span>Programming</span>
      </div>

    </div>
  )
}

export default AboutCard
