const MyJson = () => {
  return (
    <div className="w-full pb-[10%]">
      <div className="w-full bg-[#fff] border-[0.2em] border-[#121212] shadow-[0.8em_0.8em_0_0_#121212]">
        <h2 className="w-full bg-[#121212] text-[#ffffdb] text-[2rem] py-[3%] px-[2%] font-black">My JSON</h2>
        
        <div className="py-[4%]">
          <span className="ml-[5%]">&#123;</span>
          <div className="">
            <span className="font-bold text-[#121212] ml-[10%] mr-[3%]">"student":</span>
            <span className="text-[#555]">true,</span>
          </div>

          <div className="">
            <span className="font-bold text-[#121212] ml-[10%] mr-[3%]">"programmer":</span>
            <span className="text-[#555]">true,</span>
          </div>

          <div className="">
            <span className="font-bold text-[#121212] ml-[10%] mr-[3%]">"relative":</span>
            <span className="text-[#555]">false,</span>
          </div>

          <div className="">
            <span className="font-bold text-[#121212] ml-[10%] mr-[3%]">"girlfriend":</span>
            <span className="text-[#555]">false</span>

          </div>

          <span className="ml-[5%]">&#125;</span>
        </div>

      </div>
    </div>
  )
}

export default MyJson;
