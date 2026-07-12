import GetProject from "../Components/Projects/GetProject";


export default function Projects() {
  
  return(
    <div className="w-screen h-screen mx-auto px-[5%] pt-[12%] flex items-center flex-col bg-[#ffffdb] overflow-scroll">
      <h2 className="text-[#121212] font-bold text-[6vw] md:text-[3rem] my-[5%]">My Projects</h2>
      <GetProject />
    </div>
  );
}
