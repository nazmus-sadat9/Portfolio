import ProjectPage from "../components/Projects/ProjectPage";

const page = () => {
  return (
    <div className="h-screen w-screen bg-[#ffffdb] py-[15%] md:py-[5%] px-[5%] overflow-x-hidden">
      <h2 className="my-[5%] font-black text-[1rem] md:text-[2.5rem] p-[2%] bg-[#121212] text-[#ffffdb] inline-block shadow-[0.4em_0.4em_0_0_#121212]">My Projects</h2>

      <ProjectPage />

    </div>
  );
}

export default page;
