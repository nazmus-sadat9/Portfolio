import React from "react";

const ProjectCard = ({title, description, tags, link}) => {
  
  return (
    <div className="hoverCards min-h-[300px] w-full h-full px-[5%] py-[6%] text-[4vw] bg-[#fff] border-[#121212] flex flex-col justify-around border-[0.2em] shadow-[0.5em_0.5em_0_0_#121212] mb-[10%]">
      <h3 className="text-xl font-bold text-[#121212]">{title}</h3>
      <p className="text-[#555] text-sm">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs text-[#fff] bg-[#121212] font-semibold border-[#121212] border-[0.2em] px-[2%] py-[1%]">
            {tag}
          </span>
        ))}
      </div>

        <a href={link} className="w-full text-center text-sm px-[5%] py-[2%] text-[#121212] shadow-[0.4em_0.4em_0_0_#121212] border-[#121212] border-[0.2em] bg-[#ffffdb]">
          View Code
        </a>
      
    </div>
  );
}

export default ProjectCard;
