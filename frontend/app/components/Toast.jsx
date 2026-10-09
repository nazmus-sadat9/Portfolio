"use client";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Toast({ status, onClose }) {

  useEffect(() => {

    if (!status) return;
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [status, onClose]);

  if (!status) return null;

  const ok = status === "success";

  return (
    <div
      role="status"
      className={`fixed top-15 md:top-35 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 border-2 border-black px-5 py-2 text-sm font-bold uppercase text-black shadow-[4px_4px_0_#111] ${ok ? "bg-green-300" : "bg-red-300"
        }`}
    >
      <FontAwesomeIcon icon={ok ? faCircleCheck : faCircleXmark} />
      {ok ? "Sent" : "Failed"}
    </div>
  );
}

export default Toast;
