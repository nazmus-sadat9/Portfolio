"use client";
import React, { useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GetProject = ({projects}) => {

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-rows-4 md:grid-cols-3 gap-8">
      {projects.map((project)=>
        <div key={project.id} className="hoverCards bg-[#ffffff] flex justify-evenly flex-col items-center p-[5%] border-[0.2em] border-[#121212] shadow-[0.8em_0.8em_0_0_#121212]">
          <h2 className="text-[1.5rem] font-bold text-[#121212] mb-[2%]">{project.title}</h2>
          <p className="text-[#555] mb-[2%]">{project.description}</p>

          <div className="w-full text-[0.8rem] flex justify-evenly mb-[3%]">
          {project.tags.map((tag, index)=>
            <span className="bg-[#121212] text-[#ffffff] px-2 py-1" key={index}>{tag}</span>
          )}
          </div>

          <a className="w-full py-2 text-center border-[0.2em] border-[#121212] text-[#121212]" href={project.link} target="_blank" rel="noopener noreferrer" >View code</a>
        </div>
        )}
      </div>
  )
}

export default GetProject;
