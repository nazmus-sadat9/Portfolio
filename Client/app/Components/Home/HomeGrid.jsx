"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link";


const HomeGrid = () => {
    const container = useRef(null);
    
  useGSAP(() => {
   const tl = gsap.timeline();

    tl.from(".left-box", {
      xPercent: -25,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(2)"
    })
    .from(".bottom-box", {
        yPercent: 30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
        ease: "back.out(2)"
      }, "-=0.3");

  }, { scope: container });

  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <div ref={container} className="w-full h-auto md:w-[60%] grid md:grid-cols-3 gap-[10%] z-10 p-[10%]">
        <div className="left-box w-full md:col-span-3">
          <div className="w-full text-[4vw] md:text-[2rem] p-[10%] bg-[#ffffff] border-[0.2em] border-[#121212] shadow-[0.4em_0.4em_0_0_#121212] hover:shadow-[0em_0em_0_0_#121212] transition-all duration-300 hover:translate-x-[0.6rem] hover:translate-y-[0.6rem] ease-in-out cursor-pointer flex flex-col justify-center">
            <h2 className="mb-[2%] uppercase font-black text-[6vw] md:text-[3rem] text-[#121212]">sadat //</h2>
            <p className="font-semibold text-[3vw] md:text-[1.8rem] text-[#121212]">I am a web developer.</p>
          </div>
        </div>
                
        <div className="bottom-box w-full md:col-span-2">
          <div className="duration-300 uppercase py-[5%] col-span-2 text-[4vw] md:text-[2rem] md:col-span-2 w-full shadow-[0.4em_0.4em_0_0_#121212] bg-[#121212] text-[#ffffff] flex flex-col justify-center items-center">
            <span>2026</span>
            <span>edition</span>
          </div>
        </div>
                
        <div className="bottom-box w-full col-span-1">
          <div className="duration-300 py-[5%] w-full h-full font-black text-[4vw] md:text-[2rem] shadow-[0.4em_0.4em_0_0_#121212] border-[0.2em] border-[#121212] flex justify-center items-center bg-[#ffffff] text-black">
            &#123; &#125;
          </div>
        </div>

      </div>

      <p className="text-[#121212] ml-[5%]">v{__APP_VERSION}</p>
    </div>
    );
};

export default HomeGrid;
