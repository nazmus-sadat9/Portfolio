"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#121212] text-[4vw] flex justify-center items-center border-[0.2em] border-[#121212]">
      <p className="font-semibold text-[#ffffff] text-[2.5vw] py-[3%]">&copy; 2026 SADAT. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
