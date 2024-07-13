import React from "react";

function ButtonAdd({ children, ...props }) {
  return (
    <button
      className="bg-green-600 text-white border rounded-md p-2 px-3"
      {...props}
    >
      {children}
    </button>
  );
}
export default ButtonAdd;
