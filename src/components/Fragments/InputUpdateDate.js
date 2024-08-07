import React from "react";
import Label from "../Elements/Label";
import InputDate from "../Elements/InputDate";

function InputUpdateDate({ id, label, selected, onChange }) {
  return (
    <div>
      <Label id={id}>{label}</Label>
      <InputDate
        selected={selected}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
}
export default InputUpdateDate;
