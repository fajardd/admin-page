import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

function ButtonUpdate({ ...props }) {
  return (
    <button className="stroke-yellow-600 w-6 h-6" {...props}>
      <PencilSquareIcon />
    </button>
  );
}
export default ButtonUpdate;
