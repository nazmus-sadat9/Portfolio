'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const navbarRef = useRef(null);
  const pathname = usePathname();


  useGSAP(()=>{
    gsap.fromTo(".navbar-links", {
      yPercent: 90,
      opacity: 0,
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(2)"
    })
  }, { scope: navbarRef, dependencies: [pathname] });

  return (
    <div className="w-screen h-auto flex justify-center items-center z-[500] text-[4vw] md:text-[2rem] fixed left-0 top-[2%]">
      <div className="px-[3%] h-auto max-w-2xl w-[80%] md:w-[100%] bg-[#ffffff] border-[#121212] border-[0.1em] rounded-[0.5em] shadow-[0.4em_0.4em_0_0_#121212] flex items-center justify-between">
        <h1 className="uppercase text-[#121212] font-black text-[6vw] md:text-[2.8rem]">sadat</h1>
        
        <div ref={navbarRef} className="text-[2.5vw] md:text-[1.1rem] w-full h-full flex justify-evenly items-center">
          <Link className="navbar-links" href='/'>Home</Link>
          <Link className="navbar-links" href='/About'>About</Link>
          <Link className="navbar-links" href='/Projects'>Projects</Link>
          <Link className="navbar-links" href='/Contact'>Contact</Link>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
