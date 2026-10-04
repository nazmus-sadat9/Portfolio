"use client";
import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNode, faReact, faPython, faTypescript } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';

// resgister of ScrollTrigger
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {

  const root = useRef(null);
  const containerOne = useRef(null);
  const containerTwo = useRef(null);
  const containerThree = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.from(".skill-box", {
        yPercent: 30,
        opacity: 0,
        duration: 1,
        ease: "back.out(2)",
        stagger: 0.2,
      });
    },
    { scope: root }
  );

  // random rotation on hover
  const handleEnter = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      rotation: gsap.utils.random(-6, 6),
      duration: 0.4,
      ease: "back.out(2)",
    });
  });

  const handleLeave = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      rotation: 0,
      duration: 0.4,
      ease: "back.out(2)",
    });
  });

  return (
    <div ref={root} className="w-full h-auto py-[10%] px-[5%] text-[3vw] md:text-[1.3rem] bg-[#ffffdb] grid grid-cols-1 md:grid-cols-2 gap-[5%]">

      <div className="skill-box bg-[#fff] shadow-[0.8em_0.8rem_0_0_#121222] border-[#121212] border-[0.4em]">

        <h2 className="w-full selection:bg-[#FFFFDB] selection:text-[#121212] bg-[#121212] text-[2rem] py-[3%] md:py-[2%] px-[2%] text-[#ffffdb] font-black">Languages</h2>

        <div ref={containerOne} className="container grid grid-cols-2 md:grid-cols-4 gap-4 p-[5%]">

          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="fade-up">
            <div className="js">
              <FontAwesomeIcon icon={faJs} className="fontSize text-[#121212]" />
              <span className="selection:text-[#ffd558] selection:bg-[#fff]">Javascript</span>
            </div>
          </div>

          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="fade-up">
            <div className="ts">
              <FontAwesomeIcon icon={faTypescript} className="fontSize icon text-[#121212]" />
              <span className="selection:text-[#3178C6] selection:bg-[#fff]">Typescript</span>
            </div>
          </div>

          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="fade-up">
            <div className="clang">
              <FontAwesomeIcon icon={faC} className="fontSize icon text-[#121212]" />
              <span className="selection:text-[#282C34] selection:bg-[#fff]">Clang</span>
            </div>
          </div>

          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="fade-up">
            <div className="py">
              <FontAwesomeIcon icon={faPython} className="fontSize icon text-[#121212]" />
              <span className="selection:text-[#3776AB] selection:bg-[#fff]">Python</span>
            </div>
          </div>

        </div>
      </div>

      <div className="skill-box bg-[#fff] shadow-[0.8em_0.8rem_0_0_#121222] border-[#121212] border-[0.4em]">

        <h2 className="w-full selection:bg-[#FFFFDB] selection:text-[#121212] bg-[#121212] text-[2rem] py-[3%] md:py-[2%] px-[2%] text-[#ffffdb] font-black">Libraries &#38; Frameworks</h2>
        <div ref={containerTwo} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-[5%]">

          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="fade-upTwo">
            <div className="react">
              <FontAwesomeIcon icon={faReact} className="fontSize text-[#121212]" />
              <span className="selection:text-[#61DAFB] selection:bg-[#fff]">React</span>
            </div>
          </div>

          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="fade-upTwo">
            <div className="node">
              <FontAwesomeIcon icon={faNode} className="fontSize icon text-[#121212]" />
              <span className="selection:text-[#5FA04E] selection:bg-[#fff]">Node</span>
            </div>
          </div>

          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="fade-upTwo">
            <div className="gsap">
              <span className="selection:text-[#88CE02] selection:bg-[#fff]">GSAP</span>
            </div>
          </div>

          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="fade-upTwo">
            <div className="next">
              <span className="selection:text-[#1c1c1c] selection:bg-[#fff]">Next</span>
            </div>
          </div>

          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="fade-upTwo">
            <div className="ex">
              <span className="selection:text-[#333333] selection:bg-[#fff]">Express</span>
            </div>
          </div>

          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="fade-upTwo">
            <div className="socket">
              <span className="selection:text-[#1c1c1c] selection:bg-[#fff]">Socket.io</span>
            </div>
          </div>

        </div>
      </div>

      <div className="py-10 md:py-0">
        <div className="skill-box bg-[#fff] shadow-[0.8em_0.8rem_0_0_#121222] border-[#121212] border-[0.4em]">

          <h2 className="w-full selection:bg-[#FFFFDB] selection:text-[#121212] bg-[#121212] text-[2rem] py-[3%] md:py-[2%] px-[2%] text-[#ffffdb] font-black">Database</h2>
          <div ref={containerThree} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-[5%]">

            <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="fade-upThree">
              <div className="mongo">
                <span className="selection:text-[#13AA52] selection:bg-[#fff]">Mongodb</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Skills;
