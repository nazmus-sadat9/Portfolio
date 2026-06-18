import React, { useState } from "react";

const ToastBox = ({title, message, color, isCancel}) => {
  
  let msgColor;

  if (color === "red") {
    msgColor = "#";
  }
  else if (color === "green") {
    msgColor = "#";
  }
  else {
    msgColor = "#";
  }

  return (
    <div className="w-full p-[5%] flex flex-col justify-around">
      <h3 className="">{title}</h3>
      
      <div className="flex justify-around items-center">
          <p className="">{message}</p>

      <div className="">×</div>
      </div>
    </div>
  )
}

export default ToastBox
