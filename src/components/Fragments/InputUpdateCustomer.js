import React from "react";
import InputUpdateData from "../Elements/InputUpdateData";
import Label from "../Elements/Label";

function InputUpdateCustomer({ id, label, type, value, onChange, disabled }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <InputUpdateData
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
export default InputUpdateCustomer;
