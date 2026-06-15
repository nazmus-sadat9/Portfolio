import React from 'react';
import TextBox from '../Components/About/AboutText';
import AboutCard from '../Components/About/AboutCard';
import Skills from '../Components/Skills'

export default function Page(){

  return(
    <div className="w-screen h-screen flex flex-col justify-around items-center bg-[#FFFFDB] pt-[20%] md:pt-[0] overflow-scroll">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 content-center">

        <TextBox />
        <AboutCard />

      </div>

      <Skills />
    </div>
  );
}
