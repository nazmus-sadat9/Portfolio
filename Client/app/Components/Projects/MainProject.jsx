import React from "react";
import ProjectCard from "./ProjectCard";

const MainProject = () => {

  const projectData = [
    {
      id: 1,
      title: "light-snap",
      description: "This is a Javascript wrapper library.",
      tags: ["Typescript"],
      link: ""
    },

    {
      id: 2,
      title: "Weather app",
      description: "A real time weather application.",
      tags: ["Javascript"],
      link: ""
    },

    {
      id: 3,
      title: "Portfolio",
      description: "A animated portfolio website.",
      tags: ["React", "Next", "GSAP", "Node", "Express"],
      link: ""
    },

    {
      id: 4,
      title: "OTP Verification",
      description: "A real otp verification system.",
      tags: ["Javascript", "Node", "Express"],
      link: ""
    },

    {
      id: 5,
      title: "Rock Paper Scissor",
      description: "A simple rock paper scissor game.",
      tags: ["Javascript"],
      link: ""
    }

  ];

  return (
    <div className="w-full px-[5%] grid gap-[4%] md:grid-cols-2">

      {projectData.map((project) => (
        <ProjectCard 
          key={project.id}
          title={project.title}
          description={project.description}
          tags={project.tags}
          link={project.link}
        />
      ))}

    </div>
  );
}

export default MainProject;
