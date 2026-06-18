"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectCard = ({title, description, tags, link}) => {
  

  const card = useRef(null);

  useGSAP(()=>{
    gsap.from(card.current, {
      y: 20,
      stagger: 0.2
    });

  })

  return (
    <div ref={card} className="w-full h-full px-[5%] py-[6%] text-[4vw] bg-[#fff] border-[#121212] flex flex-col justify-around border-[0.2em] shadow-[0.5em_0.5em_0_0_#121212] mb-[10%]">
      <h3 className="text-[5vw] md:text-[2rem] mb-[4%] font-bold text-[#121212]">{title}</h3>
      <p className="text-[#555] text-[3.5vw] mb-[2%] md:text-[1.3rem]">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-[4%]">
        {tags.map((tag, index) => (
          <span key={index} className="text-[2.5vw] md:text-[1rem] text-[#fff] bg-[#121212] font-semibold border-[#121212] border-[0.2em] px-[2%] py-[1%]">
            {tag}
          </span>
        ))}
      </div>

        <a href={link} className="text-center px-[5%] py-[2%] text-[#121212] text-[3vw] md:text-[1.2rem] shadow-[0.4em_0.4em_0_0_#121212] border-[#121212] border-[0.2em] bg-[#ffffdb]">
          View My Project
        </a>
      
    </div>
  );
}

export default ProjectCard;
