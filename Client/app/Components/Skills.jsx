'use client'
import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

const Skills = () => {
  return (
    <div className="w-screen h-screen bg-[#ffffdb]">
      <div className="gridBox">Javascript</div>
      <div className="gridBox">Node</div>
      <div className="gridBox">React</div>
      <div className="gridBox">Express</div>
      <div className="gridBox">C</div>
      <div className="gridBox">Python</div>
      <div className="gridBox">Gsap</div>
      <div className="gridBox">Next</div>
      <div className="gridBox">Typescript</div>
      <div className="gridBox">Socket.io</div>
    </div>
  )
}

export default Skills
