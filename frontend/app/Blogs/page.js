import MainBlog from "../Components/Blog/MainBlog";

export default function page(){
  return(
    <div className="w-screen py-[15%] px-[5%] h-screen bg-[#ffffdb] overflow-x-hidden">
      <h2 className="selection:bg-[#ffffdb] selection:text-[#121212] p-[2%] md:text-[2rem] bg-[#121212] uppercase text-[#ffffdb] shadow-[0.4em_0.4em_0_0_#121212] inline-block font-black my-[5%]">Blogs</h2>
    <MainBlog />
    </div>
  )
} 
