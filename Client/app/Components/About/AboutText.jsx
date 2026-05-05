'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';

const AboutText = () => {
  const textRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      y: 20,
      duration: 0.3,
      opacity: 0,
      ease: "power2.out"
    });

    tl.from(textRef.current, {
      y: 20,
      duration: 0.5,
      opacity: 0,
      ease: "power2.out"
    });
    
  })

  return (
    <div className="mb-[5%] w-full h-full flex justify-center items-center">
      <div className="w-[85%] h-auto bg-white border-[0.3em] border-[#121212] p-[5%]">

        <h2 ref={headerRef} className="uppercase font-extrabold text-[5vw]">Who is <br/> sadat?</h2>

        <p ref={textRef} className="leading-6 text-[#121212]">loremjs akw aj wja sjw sja sjs js wjw <span className="bg-[#FFFFDB] font-semibold">Web Developer</span> sja jww js aja aja aja jacdkdw vaia doq sis qka dis. fiewb sidvwi cdisk <span className="bg-[#FFFFDB] font-semibold">Portfolio</span> skw jovsuss si ahssvska</p>
      </div>
    </div>
  )
}

export default AboutText
