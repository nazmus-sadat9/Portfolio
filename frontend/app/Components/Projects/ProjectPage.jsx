"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import projects from "./ProjectData";

const ProjectPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-8">
      {projects.map((project)=>(
        <div key={project.id} className="hoverCards md:relative bg-[#ffffff] border-[0.2em] border-[#000] shadow-[0.8em_0.8em_0_0_#121212]">
          
          <h2 className="text-[1.5rem] font-black text-[#ffffdb] bg-[#121212] w-full text-center py-[7%] mb-[4%]">{project.title}</h2>
          
          <div className="w-full p-[5%]">
            <p className="text-[#121212] mb-[2%] text-center">{project.description}</p>
          </div>

          <div className="w-full text-[0.8rem] flex justify-evenly mb-[3%]">
            
            {project.tags.map((tag, index)=>(
              <span key={index} className="bg-[#ffffdb] text-[#121212] font-bold px-2 py-1 border-[0.2em] border-[#121212]">{tag}</span>
            ))}
          </div>

          <div className="w-full p-[5%] md:absolute md:bottom-[5%]">

            <a className="w-full py-2 border-[0.2em] border-[#121212] text-[#121212] flex justify-center items-center w-full shadow-[0.4em_0.4em_0_0_#121212]" href={project.link} target="_blank" rel="noopener noreferrer">
              
              <FontAwesomeIcon className="mr-[3%]" icon={faGithub} />
              
              <span>VIEW REPO</span>
            </a>
          </div>

        </div>
      ))}
    </div>
  )
}

export default ProjectPage;
