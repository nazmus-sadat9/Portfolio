'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const navbarRef = useRef(null)
  return (
    <div className="z-50 w-screen h-[10vh] text-[#121212] flex justify-around items-center fixed left-0 top-0 backdrop-blur-md">
      <div className="py-[1%] px-[3%] font-bold border-[#121212] border-[0.1em] bg-[#fff] shadow-[0.4em_0.4em_0_0_#121212] cursor-pointer text-[#121212]">SADAT</div>
      <div className="w-1/2 h-full flex justify-evenly items-center">
        <Link href='/'>Home</Link>
        <Link href='/About'>About</Link>
        <Link href='/Projects'>Projects</Link>
        <Link href='/Contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
