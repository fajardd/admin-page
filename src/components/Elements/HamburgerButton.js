import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

function HamburgerButton({ onClick }) {
  return (
    <button onClick={onClick} className="p-2 focus:outline-none">
      <PencilSquareIcon className="stroke-yellow-600 w-6 h-6" />
    </button>
  );
}
export default HamburgerButton;
