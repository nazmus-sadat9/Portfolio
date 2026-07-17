'use client';
import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNode, faReact, faPython, faTypescript} from '@fortawesome/free-brands-svg-icons';
//import { faBolt, faDatabase } from '@fortawesome/free-solid-svg-icons'

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
    <div ref={skillRef} className="w-full h-auto py-[10%] px-[5%] gap-[7vw] text-[3vw] md:text-[1.3rem] content-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 bg-[#ffffdb]">
      
      <div className="gridBox md:text-[1rem]">
        <FontAwesomeIcon icon={faJs} className="text-[#121212] md:text-[3rem]" />
        <span className="text-[121212]">Javascript</span>
      </div>

      <div className="gridBox md:text-[1rem]">
        <FontAwesomeIcon icon={faNode} className="text-[#121212] md:text-[3rem]" />
        <span>Node</span>
      </div>

      <div className="gridBox md:text-[1rem]">
        <FontAwesomeIcon icon={faReact} className="text-[#121212] md:text-[3rem]" />
        <span>React</span>
      </div>

      <div className="gridBox md:text-[1rem]">
    
        Express
      </div>
      
      <div className="gridBox md:text-[1rem]"> 
        <span>C</span>
      </div>

      <div className="gridBox md:text-[1rem]">
        <FontAwesomeIcon icon={faPython} className="text-[#121212] md:text-[3rem]" />
        <span>Python</span>
      </div>
      <div className="gridBox md:text-[1rem]">
        
        <span>GSAP</span>
      </div>
      <div className="gridBox md:text-[1rem]">Next</div>
      
      <div className="gridBox md:text-[1rem]">
        <FontAwesomeIcon icon={faTypescript} className="text-[#121212] md:text-[3rem]" />
        <span>Typescript</span>
      </div>

      <div className="gridBox md:text-[1rem]">
        
        <span>Mongodb</span>
      </div>
      <div className="gridBox md:text-[1rem]">Socket.io</div>
    </div>
  );
}

export default Skills;
