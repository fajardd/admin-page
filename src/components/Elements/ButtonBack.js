import React from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

function ButtonBack({ children, ...props }) {
  return (
    <button
      className="border border-blue-700 bg-white text-blue-700 p-2 rounded-[10px] flex justify-center mt-3 px-3"
      {...props}
    >
      <ArrowLeftCircleIcon className="stroke-blue-700 w-6 h-6 mr-2" />
      {children}
    </button>
  );
}
export default ButtonBack;
