import React from "react";

const ButtonPagination = ({ children, onClick, disabled, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default ButtonPagination;
