'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';

const AboutText = () => {

  const textRef = useRef(null);
  const headerRef = useRef(null);

  const containerRef = useRef(null);

  useGSAP(()=>{
    gsap.from(".gsap-texts", {
      yPercent: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(2)"
    })
    
  }, { dependencies: [], scope: containerRef });

  return (
    <div ref={containerRef} className="text-[4vw] md:text-[2rem] mb-[5%] w-full h-full flex justify-center items-center">
      <div className="w-[85%] h-auto bg-white border-[0.3em] border-[#121212] p-[5%] shadow-[0.6em_0.6em_0_0_#121212]">

        <h2 className="gsap-texts uppercase font-extrabold text-[4vw] md:text-[2.5rem]">Who is <br/> sadat?</h2>

        <p className="gsap-texts text-[#121212] text-[2.5vw] md:text-[1.5rem]">A full-stack <span className="bg-[#FFFFDB] font-semibold">web developer</span>, dedicated to writing code every single day. A student who is constantly learning about technology and <span className="bg-[#FFFFDB] font-semibold">programming. </span>Who is trying to create something new that will help people.</p>
      </div>
    </div>
  );
}

export default AboutText;
