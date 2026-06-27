"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";

const MainProject = () => {

  const projectData = [
    {
      id: 1,
      title: "light-snap",
      description: "This is a Javascript wrapper library.",
      tags: ["Typescript"],
      link: "https://github.com/nazmus-sadat9/light-snap.git"
    },

    {
      id: 2,
      title: "Weather app",
      description: "A real time weather application.",
      tags: ["Javascript"],
      link: "https://github.com/nazmus-sadat9/Weather-App.git"
    },

    {
      id: 3,
      title: "Portfolio",
      description: "A animated portfolio website.",
      tags: ["Next", "GSAP", "Express"],
      link: "https://github.com/nazmus-sadat9/Portfolio.git"
    },

    {
      id: 4,
      title: "OTP Verification",
      description: "A real otp verification system.",
      tags: ["Javascript", "Node", "Express"],
      link: "https://github.com/nazmus-sadat9/OTP-Verification.git"
    },

    {
      id: 5,
      title: "Rock Paper Scissor",
      description: "A simple rock paper scissor game.",
      tags: ["Javascript"],
      link: "https://github.com/nazmus-sadat9/Rock-Paper-scissor.git"
    }

  ];

  const container = useRef(null);

  useGSAP(()=>{

    gsap.from(".project-card", {
      yPercent: 35,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(2)"
    });

  }, { scope: container });

  return (
    <div ref={container} className="w-full grid gap-[5%] md:grid-cols-3">

      {projectData.map((project) => (
        <div key={project.id} className="project-card">
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        </div>
      ))}

    </div>
  );
}

export default MainProject;
