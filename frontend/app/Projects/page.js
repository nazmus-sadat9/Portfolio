import GetProject from "../Components/Projects/GetProject";

// get projects data from backend
async function getProjects() {
  try {
    // fetch to the url
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, { cache: 'no-store'});
    
    if (!res.ok) return [];
    
    return await res.json();
 
  } catch (err) {
    return [];
  }
}

export default async function page() {
  
  const projects = await getProjects();

  return (
    <div className="h-screen w-screen bg-[#ffffdb] pt-[12vh] px-[5%] overflow-x-hidden">
      <h1 className="mb-[5%] font-black text-[5vw] md:text-[2.5rem] text-center">My Projects</h1>
      <GetProject projects={projects} />
    </div>
  );
}
