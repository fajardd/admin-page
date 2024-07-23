import React from "react";
import Multiselect from "multiselect-react-dropdown";
import Label from "./Label";
import { UserIcon } from "@heroicons/react/24/outline";

function MultiSelectUser({
  options,
  displayValue,
  onSelect,
  onRemove,
  label,
  id,
  selectedValues,
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Multiselect
          className="w-full bg-white"
          options={options}
          displayValue={displayValue}
          onSelect={onSelect}
          onRemove={onRemove}
          selectedValues={selectedValues}
          placeholder="Update dokter"
        />
        <div className="absolute right-2 top-2">
          <UserIcon className="stroke-slate-400 w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default MultiSelectUser;
