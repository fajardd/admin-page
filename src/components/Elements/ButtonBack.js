import React from "react";
import { Link } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

function ButtonBack({ children, ...props }) {
  return (
    <div className="flex justify-start ">
      <Link {...props}>
        <button className="border border-blue-700 bg-white text-blue-700 text-[16px] p-2 rounded-xl mt-6 ">
          <ArrowUturnLeftIcon className="stroke-blue-700 w-6 h-6 " />
        </button>
      </Link>
    </div>
  );
}
export default ButtonBack;
