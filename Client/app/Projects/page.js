import MainProject from "../Components/Projects/MainProject";


export default function Projects() {
  
  return(
    <div className="w-full h-screen max-w-6xl mx-auto px-[5%] pt-[12%] flex items-center flex-col bg-[#ffffdb] overflow-scroll">
      <h2 className="text-[#121212] font-bold text-[6vw] md:text-[3rem] my-[5%]">My Projects</h2>
      <MainProject />
    </div>
  );
}
