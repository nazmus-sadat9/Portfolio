'use client';
import { notFound } from 'next/navigation';
import gsap from 'gsap';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';


export default function Page(){

  const status = useRef(null);
  const box = useRef(null);

  useGSAP(()=>{
    gsap.to(status.current, {
      duration: 3,
      y: -30,
      repeat: -1,
      yoyo: true,
      ease: "sine.out"
    });

  }, []); 

  return(
    <div className="text-[4vw] bg-[#ffffdb] w-screen h-screen flex flex-col gap-[5%] justify-center items-center">
      <h2 id="errorStatus" ref={status} className="font-black text-[25vw] text-[#fff] tracking-[3vw] select-none drop-shadow-[0.07em_0.07em_0_#121212]">404</h2>
      
        <h2 className="font-bold text-[6vw] text-[#121212]">We are lost</h2>
        <Link className="text-center text-[4vw] px-[5%] py-[2%] border-[#121212] border-[0.1em] text-[#121212] font-semibold transition-all duration-300 shadow-[0.4em_0.4em_0_0_#121212] hover:shadow-[0em_0em_0_0_#121212] hover:translate-x-[10px] hover:translate-y-[10px] hover:text-red-800" href='/'>Go Back</Link>
    </div>
  );
}
