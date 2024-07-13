import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

function ButtonDelete({ ...props }) {
  return (
    <button {...props}>
      <TrashIcon className="stroke-red-600 w-6 h-6" />
    </button>
  );
}
export default ButtonDelete;
