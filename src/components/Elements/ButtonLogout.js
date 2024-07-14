import React from "react";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";

function ButtonLogout({ ...props }) {
  return (
    <button {...props}>
      <ArrowRightEndOnRectangleIcon className="w-6 h-6 stroke-white" />
    </button>
  );
}
export default ButtonLogout;
