import MainProject from "../Components/Projects/MainProject";


export default function Projects() {
  
  return(
    <div className="w-screen h-screen pt-[12%] flex justify-evenly items-center flex-col bg-[#ffffdb] overflow-scroll">
      <h2 className="text-[#121212] font-bold text-[6vw] md:text-[3rem] mx-[10%] my-[5%]">My Projects</h2>
      <MainProject />
    </div>
  );
}
