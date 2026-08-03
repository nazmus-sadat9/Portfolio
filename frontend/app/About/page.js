import React from 'react';
import TextBox from '../Components/About/AboutText';
import AboutCard from '../Components/About/AboutCard';
import Skills from '../Components/About/Skills';

export default function Page(){

  return(
    <div className="w-screen h-screen bg-[#FFFFDB] py-[15%] overflow-scroll">
      <h2 className="font-black text-[1rem] md:text-[2.5rem] bg-[#121212] text-[#ffffdb] shadow-[0.4em_0.4em_0_0_#121212] inline-block py-[2%] px-[2%] ml-[5%] my-[5%] rotate-[-3deg]">ABOUT ME</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 content-center gap-[4%]">

        <TextBox />
        <AboutCard />

      </div>

      <Skills />

    </div>
  );
}
