import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

function ButtonUpdate({ children, ...props }) {
  return (
    <button
      className="bg-yellow-500 p-2 text-white rounded-[10px] flex justify-center"
      {...props}
    >
      <PencilSquareIcon className="stroke-white w-6 h-6 mr-2" /> {children}
    </button>
  );
}
export default ButtonUpdate;
