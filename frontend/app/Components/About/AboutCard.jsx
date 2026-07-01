"use client";
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
    <div ref={cardRef} className="text-[4vw] md:text-[2rem] w-[85%] flex flex-col mx-[7.5%] justify-around gap-4 md:gap-0 items-center">

      <div className="gasp-cards w-full p-[3%] bg-[#fff] border-[#121212] border-[0.2em] flex flex-col shadow-[0.4em_0.4em_0_0_#121212]">
        <span className="text-[#121212] uppercase font-bold text-[3vw] md:text-[1.5rem]">Location</span> 
        <span className="text-[2.5vw] md:text-[1rem] text-[#121212]">Rajshahi, Joypurhat</span>
      </div>

      <div className="gasp-cards w-full p-[3%] bg-[#fff] border-[#121212] border-[0.2em] flex flex-col shadow-[0.4em_0.4em_0_0_#121212]">
        <span className="text-[#121212] text-[3vw] md:text-[1.5rem] uppercase font-bold">Hobby</span>
        <span className="text-[#121212] text-[2.5vw] md:text-[1rem]">Programming</span>
      </div>

      <div className="gasp-cards w-full p-[3%] bg-[#fff] border-[#121212] border-[0.2em] flex flex-col shadow-[0.4em_0.4em_0_0_#121212]">
        <span className="text-[3vw] text-[#121212] uppercase font-bold md:text-[1.5rem]">Current status</span>
        <span className="text-[2.5vw] md:text-[1rem] text-[#121212]">Student</span>
      </div>

    </div>
  );

}

export default AboutCard;
