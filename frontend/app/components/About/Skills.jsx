"use client";
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

  const containerOne = useRef(null);
  const containerTwo = useRef(null);
  const containerThree = useRef(null);


  return (
    <div className="w-full h-auto py-[10%] px-[5%] text-[3vw] md:text-[1.3rem] bg-[#ffffdb] grid grid-cols-1 md:grid-cols-2 gap-[5%]">

      <div className="bg-[#fff] shadow-[0.8em_0.8rem_0_0_#121222] border-[#121212] border-[0.4em]">

        <h2 className="w-full selection:bg-[#FFFFDB] selection:text-[#121212] bg-[#121212] text-[2rem] py-[3%] md:py-[2%] px-[2%] text-[#ffffdb] font-black">Languages</h2>

        <div ref={containerOne} className="container grid grid-cols-2 md:grid-cols-4 gap-[2rem] p-[5%]">

          <div className="fade-up">
            <div className="js">
              <FontAwesomeIcon icon={faJs} className="fontSize text-[#121212]" />
              <span className="selection:text-[#ffd558] selection:bg-[#fff]">Javascript</span>
            </div>
          </div>

          <div className="fade-up">
            <div className="ts md:text-[1rem]">
              <FontAwesomeIcon icon={faTypescript} className="fontSize icon text-[#121212]" />
              <span className="selection:text-[#3178C6] selection:bg-[#fff]">Typescript</span>
            </div>
          </div>

          <div className="fade-up">
            <div className="clang md:text-[1rem]">
              <FontAwesomeIcon icon={faC} className="fontSize icon text-[#121212]" />
              <span className="selection:text-[#282C34] selection:bg-[#fff]">Clang</span>
            </div>
          </div>

          <div className="fade-up">
            <div className="py md:text-[1rem]">
              <FontAwesomeIcon icon={faPython} className="fontSize icon text-[#121212]" />
              <span className="selection:text-[#3776AB] selection:bg-[#fff]">Python</span>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#fff] shadow-[0.8em_0.8rem_0_0_#121222] border-[#121212] border-[0.4em]">

        <h2 className="w-full selection:bg-[#FFFFDB] selection:text-[#121212] bg-[#121212] text-[2rem] py-[3%] md:py-[2%] px-[2%] text-[#ffffdb] font-black">Libraries &#38; Frameworks</h2>
        <div ref={containerTwo} className="grid grid-cols-2 md:grid-cols-4 gap-[2rem] p-[5%]">

          <div className="fade-upTwo">
            <div className="react md:text-[1rem]">
              <FontAwesomeIcon icon={faReact} className="fontSize text-[#121212]" />
              <span className="selection:text-[#61DAFB] selection:bg-[#fff]">React</span>
            </div>
          </div>

          <div className="fade-upTwo">
            <div className="node md:text-[1rem]">
              <FontAwesomeIcon icon={faNode} className="fontSize icon text-[#121212]" />
              <span className="selection:text-[#5FA04E] selection:bg-[#fff]">Node</span>
            </div>
          </div>

          <div className="fade-upTwo">
            <div className="gsap md:text-[1rem]">
              <span className="selection:text-[#88CE02] selection:bg-[#fff]">GSAP</span>
            </div>
          </div>

          <div className="fade-upTwo">
            <div className="next md:text-[1rem]">
              <span className="selection:text-[1c1c1c] selection:bg-[#fff]">Next</span>
            </div>
          </div>

          <div className="fade-upTwo">
            <div className="ex md:text-[1rem]">
              <span className="selection:text-[#333333] selection:bg-[#fff]">Express</span>
            </div>
          </div>

          <div className="fade-upTwo">
            <div className="socket md:text-[1rem]">
              <span className="selection:text-[#1c1c1c] selection:bg-[#fff]">Socket.io</span>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#fff] shadow-[0.8em_0.8rem_0_0_#121222] border-[#121212] border-[0.4em]">

        <h2 className="w-full selection:bg-[#FFFFDB] selection:text-[#121212] bg-[#121212] text-[2rem] py-[3%] md:py-[2%] px-[2%] text-[#ffffdb] font-black">Database</h2>
        <div ref={containerThree} className="grid grid-cols-2 md:grid-cols-4 gap-[2rem] p-[5%]">

          <div className="fade-upThree">
            <div className="mongo md:text-[1rem]">
              <span className="selection:text-[#13AA52] selection:bg-[#fff]">Mongodb</span>
            </div>
          </div>

        </div>
      </div>

      <div className="">
        <MyJson />
      </div>

    </div>
  );
}

export default Skills;
