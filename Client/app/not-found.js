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
      ease: "back.out(1.8)"
    });

    gsap.from(box.current, {
      y: 30,
      duration: 1,
      opacity: 0,
      ease: "back.out(2)"
    });

  }, []); 

  return(
    <div className="text-[4vw] bg-[#ffffdb] w-screen h-screen flex flex-col justify-center items-center">
      <h2 id="errorStatus" ref={status} className="font-black text-[25vw] text-[#fff] tracking-[3vw] select-none drop-shadow-[0.2em_0.2em_0_#121212]">404</h2>

      <div ref={box} className="flex flex-col justify-around items-center w-[60%] h-[23%] bg-[#fff] border-[#121212] border-[0.3em] shadow-[0.6em_0.6em_0_0_#121212] px-[5%] py-[4%]">
        <h2 className="uppercase font-bold text-[6vw] text-[#121212]">We are lost</h2>
        <Link className="text-center text-[4vw] px-[5%] py-[2%] border-[#121212] border-[0.1em] text-[#121212] font-semibold transition-all duration-300 shadow-[0.4em_0.4em_0_0_#121212] hover:shadow-[0em_0em_0_0_#121212] hover:translate-x-[10px] hover:translate-y-[10px] hover:text-red-800" href='/'>Go Back</Link>
      </div>
    </div>
  );
}
