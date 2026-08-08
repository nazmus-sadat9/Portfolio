import HomeGrid from "../Components/Home/HomeGrid.jsx";

import Temp from "../Components/Temp.jsx";

export default function Page() {

  return(
    <div className="pt-[12%] h-screen w-screen bg-[#ffffdb] flex justify-center items-center">
      <HomeGrid />
      <Temp />
    </div>
  );
}

