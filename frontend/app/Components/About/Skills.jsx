'use client';
import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNode, faReact, faPython, faTypescript} from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import MyJson from "./MyJson";

// resgister of ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const container = useRef(null);

  useGSAP(()=>{
    const cards = gsap.utils.toArray('.fade-up');

    /*
    cards.forEach((card) => {
      gsap.to(card, {
          opacity: 1,
          y: 100,
          duration: 0.6,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: card,
            start: "top 60%",
            end: "bottom bottom",
            markers: true
          }
        }
      )
    });*/
  }, { scope: container });

  return (
    <div ref={container} className="w-full h-auto py-[10%] px-[5%] text-[3vw] md:text-[1.3rem] bg-[#ffffdb] grid grid-cols-1 gap-[5%]">
      
      <div  className="fade-up bg-[#fff] shadow-[0.8em_0.8rem_0_0_#121222] border-[#121212] border-[0.4em]">

        <h2 className="w-full bg-[#121212] text-[2rem] py-[3%] px-[2%] text-[#ffffdb] font-black">Languages</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem] p-[5%]">
          
          <div className="js md:text-[1rem]">
            <FontAwesomeIcon icon={faJs} className="text-[#121212] text-[3rem] md:text-[4rem]" />
            <span className="text-[121212]">Javascript</span>
          </div>

          <div className="ts md:text-[1rem]">
            <FontAwesomeIcon icon={faTypescript} className="icon text-[#121212] text-[3rem] md:text-[4rem]" />
            <span>Typescript</span>
          </div>

          <div className="clang md:text-[1rem]">
            <FontAwesomeIcon icon={faC} className="icon text-[#121212] text-[3rem] md:text-[4rem]" />
            <span>Clang</span>
          </div>

          <div className="py md:text-[1rem]">
            <FontAwesomeIcon icon={faPython} className="icon text-[#121212] text-[3rem] md:text-[4rem]" />
            <span>Python</span>
          </div>

        </div>
      </div>

      <div className="fade-up bg-[#fff] shadow-[0.8em_0.8rem_0_0_#121222] border-[#121212] border-[0.4em]">

        <h2 className="w-full bg-[#121212] text-[2rem] py-[3%] px-[2%] text-[#ffffdb] font-black">Libraries &#38; Frameworks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem] p-[5%]">
      
          <div className="react md:text-[1rem]">
            <FontAwesomeIcon icon={faReact} className="text-[#121212] text-[3rem] md:text-[4rem]" />
            <span>React</span>
          </div>

          <div className="node md:text-[1rem]">
            <FontAwesomeIcon icon={faNode} className="icon text-[#121212] text-[3rem] md:text-[4rem]" />
            <span>Node</span>
          </div>

          <div className="gsap md:text-[1rem]">      
            <span>GSAP</span>
          </div>

          <div className="next md:text-[1rem]">
            <span>Next</span>
          </div>
      
          <div className="ex md:text-[1rem]">
            <span>Express</span>
          </div>

          <div className="socket md:text-[1rem]">
            <span>Socket.io</span>
          </div>

        </div>
      </div>

      <div className="fade-up bg-[#fff] shadow-[0.8em_0.8rem_0_0_#121222] border-[#121212] border-[0.4em]">

        <h2 className="w-full bg-[#121212] text-[2rem] py-[3%] px-[2%] text-[#ffffdb] font-black">Database</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem] p-[5%]">

          <div className="mongo md:text-[1rem]">
        
            <span>Mongodb</span>
          </div>

        </div>
      </div>

      <div className="fade-up">
        <MyJson />
      </div>

    </div>
  );
}

export default Skills;
