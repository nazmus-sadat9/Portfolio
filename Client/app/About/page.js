import React from 'react';
import TextBox from '../Components/About/AboutText.jsx';
import AboutCard from '../Components/About/AboutCard.jsx';
import Skills from '../Components/Skills.jsx'

export default function Page(){

  return(
    <div className="pt-[15%] w-screen h-auto flex flex-col bg-[#FFFFDB] p-6">
      <h2 className="font-bold text-[7.5vw] text-[#121212] relative after:content-[''] after:absolute after:w-[0%] after:h-[7%] after:bg-[#121212] after:left-0 after:bottom-0 after:transition-all after:duration-300 after:opacity-0 hover:after:opacity-100 hover:after:w-full">About Me</h2>

      <TextBox />
      <AboutCard />
      <Skills />
    </div>
  )
}
