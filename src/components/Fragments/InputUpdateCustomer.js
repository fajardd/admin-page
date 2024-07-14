import React from "react";
import InputUpdateData from "../Elements/InputUpdateData";
import Label from "../Elements/Label";

function InputUpdateCustomer({ id, label, type, value, onChange }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <InputUpdateData id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}
export default InputUpdateCustomer;
