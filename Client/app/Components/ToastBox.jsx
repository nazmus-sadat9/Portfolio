import React, { useState } from "react";

const ToastBox = ({title, message, isCancel}) => {
  

  return (

    <div className="w-[80%] max-w-[300px] py-[1%] px-[4%] border-[0.2em] border-[#121212] bg-[#fff] flex justify-between bg-[#555] fixed left-0 bottom-[2%] md:bottom-[5%] z-500">
      
      <div className="flex flex-col justify-around">
        <h3 className="text-[#121212] font-semibold">{title}</h3>
        <p className="">{message}</p>

      </div>

        <div className="flex justify-center items-center">×</div>
    </div>
  )
}

export default ToastBox;
