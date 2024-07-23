import React from "react";

function InputUpdateData({ ...props }) {
  return (
    <input
      className={`border focus:border-blue-700 focus:outline-none p-2 rounded-[10px] w-full `}
      {...props}
    />
  );
}
export default InputUpdateData;
