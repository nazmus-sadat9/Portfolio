'use client';
import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

const Skills = () => {

  const skillRef = useRef(null);

  useGSAP(()=>{

    gsap.fromTo(".gridBox", {
      opacity: 0,
      scale: 0.6
    }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.8,
        stagger: 0.1,
        ease: "back.out(2)"
      });

  }, { scope: skillRef , dependencies: []});

  return (
    <div ref={skillRef} className="w-full h-auto p-[10%] gap-[7vw] text-[3vw] md:text-[1.3rem] content-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 bg-[#ffffdb]">
      <div className="gridBox md:text-[1rem]">Javascript</div>
      <div className="gridBox md:text-[1rem]">Node</div>
      <div className="gridBox md:text-[1rem]">React</div>
      <div className="gridBox md:text-[1rem]">Express</div>
      <div className="gridBox md:text-[1rem]">C</div>
      <div className="gridBox md:text-[1rem]">Python</div>
      <div className="gridBox md:text-[1rem]">Gsap</div>
      <div className="gridBox md:text-[1rem]">Next</div>
      <div className="gridBox md:text-[1rem]">Typescript</div>
      <div className="gridBox md:text-[1rem]">Socket.io</div>
    </div>
  );
}

export default Skills;
