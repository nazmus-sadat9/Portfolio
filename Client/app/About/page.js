import React from 'react';
import TextBox from '../Components/About/AboutText.jsx';
import AboutCard from '../Components/About/AboutCard.jsx';
import Skills from '../Components/Skills.jsx'

export default function Page(){

  return(
    <div className="mt-[12%] w-screen h-screen flex flex-col pt-[7vh] bg-[#FFFFDB]">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 content-center">

      <TextBox />
      <AboutCard />

    </div>

      <Skills />
    </div>
  );
}
