"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const HomeGrid = () => {
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    
  useGSAP(() => {
    const boxTl = gsap.timeline();

    boxTl.from(box1Ref.current, {
      xPercent: 25,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(2)"
    });

    boxTl.from(box2Ref.current, {
      yPercent: 40,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(2)"
    });

    boxTl.from(box3Ref.current, {
      yPercent: 40,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(2)"
    });

  });

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-auto md:w-[60%] grid md:grid-cols-3 gap-[10%] z-10 p-[10%]">
        <div ref={box1Ref} className="col-span-3 text-[4vw] md:text-[2rem] p-[10%] bg-[#ffffff] border-[0.2em] border-[#121212] shadow-[0.4em_0.4em_0_0_#121212] w-full flex flex-col justify-center">
          <h2 className="mb-[2%] uppercase font-black text-[6vw] md:text-[3rem] text-[#121212]">sadat //</h2>
          <p className="font-semibold text-[3vw] md:text-[1.8rem] text-[#121212]">I am a web developer.</p>
        </div>
                
        <div ref={box2Ref} className="uppercase py-[5%] col-span-2 text-[4vw] md:text-[2rem] md:col-span-2 w-full shadow-[0.4em_0.4em_0_0_#121212] bg-[#121212] text-[#ffffff] flex flex-col justify-center items-center">
          <span>2026</span>
          <span>edition</span>
        </div>
                
        <div ref={box3Ref} className="py-[5%] md:col-span-1 w-full font-black text-[4vw] md:text-[2rem] shadow-[0.4em_0.4em_0_0_#121212] border-[0.2em] border-[#121212] flex justify-center items-center bg-[#ffffff] text-black">
          &#123; &#125;
        </div>
      </div>

      <p className="text-[#121212] ml-[5%]">v0.7.3</p>
    </div>
    );
};

export default HomeGrid;
