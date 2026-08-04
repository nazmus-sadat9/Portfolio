import GetProject from "../Components/Projects/GetProject";

// get projects data from backend
async function getProjects() {
  let apiUrl = process.env.NEXT_PUBLIC_API_URL; 

  try {
    // fetch to the url
    let res = await fetch(`${apiUrl}/api/projects`, { cache: 'no-store'});
    
    if (!res.ok) return [];
    
    return await res.json();

  } catch (err) {
    return [];
  }
}

export default async function page() {
  
  const projects = await getProjects();

  return (
    <div className="h-screen w-screen bg-[#ffffdb] py-[15%] px-[5%] overflow-x-hidden">
      <h1 className="mb-[5%] font-black text-[1rem] md:text-[2.5rem] p-[2%] bg-[#121212] text-[#ffffdb] inline-block shadow-[0.4em_0.4em_0_0_#121212]">My Projects</h1>
      <GetProject projects={projects} />
    </div>
  );
}
