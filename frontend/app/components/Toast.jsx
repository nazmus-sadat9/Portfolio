"use client";
import { useEffect } from "react";

const Toast = ({
  title, 
  description, 
  isOpen = false,
  onClose,
  duration = 4000,
  }) => {

  useEffect(() => {
    if (isOpen && duration > 0 && onClose) {

      const timer = setTimeout(() => {
        onClose()
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose])

  if (!isOpen) {
    return null;
  }
  
  return (
    
    <div className="fixed top-[15%] bg-[#ffffff] right-[5%] p-[3%] border-[0.2em] border-[#121212] shadow-[0.8em_0.8em_0_0_#121212]">
      <div className="flex justify-evenly items-start flex-col">
        { title && <h3>{title}</h3>}
        { description && <p>{description}</p>}
      </div>

      {onClose && (
        <button onClick={onClose} className="text-[1.5rem]" >×</button>
      )}
  
    </div>
  );
}

export default Toast;
