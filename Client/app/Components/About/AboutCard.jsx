'use client';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';


const AboutCard = () => {
  const cardRef = useRef(null);

  useGSAP(()=>{
    gsap.from(".gasp-cards", {
      yPercent: 20,
      duration: 0.5,
      delay: 0.8,
      opacity: 0,
      stagger: 0.12,
      ease: "back.out(2)"
    });
  }, {scope: cardRef, dependencies: []});

  return (
    <div ref={cardRef} className="text-[4vw] mx-[7.5%] w-[85%] h-auto flex flex-col justify-between items-center">

      <div className="gasp-cards w-full p-[3%] bg-[#fff] border-[#121212] border-[0.2em] flex flex-col shadow-[0.4em_0.4em_0_0_#121212]">
        <span className="text-[#121212] uppercase font-bold text-[3vw]">Location</span> 
        <span className="text-[2.5vw] text-[#121212]">Rajshahi, Joypurhat</span>
      </div>

      <div className="gasp-cards w-full p-[3%] bg-[#fff] border-[#121212] border-[0.2em] flex flex-col shadow-[0.4em_0.4em_0_0_#121212]">
        <span className="text-[#121212] text-[3vw] uppercase font-bold">Hobby</span>
        <span className="text-[#121212] text-[2.5vw]">Programming</span>
      </div>

      <div className="gasp-cards w-full p-[3%] bg-[#fff] border-[#121212] border-[0.2em] flex flex-col shadow-[0.4em_0.4em_0_0_#121212]">
        <span className="text-[3vw] text-[#121212] uppercase font-bold">Working at</span>
        <span className="text-[2.5vw] text-[#121212]">Student</span>
      </div>

    </div>
  );

}

export default AboutCard;
