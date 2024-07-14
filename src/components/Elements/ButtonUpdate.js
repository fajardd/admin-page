import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

function ButtonUpdate({ ...props }) {
  return (
    <button {...props}>
      <PencilSquareIcon className="stroke-yellow-600 w-6 h-6" />
    </button>
  );
}
export default ButtonUpdate;
