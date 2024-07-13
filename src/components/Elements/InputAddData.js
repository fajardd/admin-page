import React from "react";

function InputAddData({ type, placeholder, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-slate-300 focus:border-blue-700 focus:outline-none  rounded-md text-[16px] p-2"
      {...props}
    />
  );
}
export default InputAddData;
