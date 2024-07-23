import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

function InputDate({ selected, onChange }) {
  return (
    <div className="relative ">
      <DatePicker
        wrapperClassName="w-full"
        dateFormat="dd MMMM yyyy"
        placeholderText="Masukkan Tanggal"
        className="border border-slate-300 focus:border-blue-700 focus:outline-none rounded-md text-[16px] p-2 w-full"
        selected={selected}
        onChange={onChange}
        popperPlacement="bottom-end"
      />
      <div className="absolute top-2 right-2">
        <CalendarDaysIcon className="w-6 h-6 stroke-slate-400 " />
      </div>
    </div>
  );
}
export default InputDate;
