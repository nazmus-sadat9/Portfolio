"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const GetProject = () => {

  async function getProjects() {
    try {
      let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);

      return res.json();
    } catch (err) {
      console.log("failed to fetch", err);
    }
  }

  const projects = getProjects();

  return (
    <div className="">
      <div className="">
        {projects.map((project)=>
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.ddescription}</p>

            {project.tags.map((tag, index)=>
              <span key={index}>{tag}</span>
            )}

            <a href={project.link} target="_blank" rel="noopener noreferrer" >View code</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default GetProject;
