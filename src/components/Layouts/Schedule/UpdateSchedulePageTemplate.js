import React from "react";
import ButtonBack from "../../Elements/ButtonBack";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import InputUpdateSchedule from "../../Fragments/InputUpdateSchedule";

function UpdateSchedulePageTemplate({
  handleUpdateSchedule,
  schedule,
  handleInputChange,
  listDokter,
  selectedDokters,
  onSelectDokter,
  onRemoveDokter,
  handleDateChange,
}) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold">Schedule</h1>
      <div className="flex">
        <p className="text-blue-700">Schedule</p>
        <ChevronRightIcon className="stroke-slate-300 w-6 h-6" />
        <p className="text-blue-700">Detail Schedule</p>
      </div>
      <InputUpdateSchedule
        handleUpdateSchedule={handleUpdateSchedule}
        schedule={schedule}
        handleInputChange={handleInputChange}
        listDokter={listDokter}
        selectedDokters={selectedDokters}
        onSelectDokter={onSelectDokter}
        onRemoveDokter={onRemoveDokter}
        handleDateChange={handleDateChange}
      />
      <ButtonBack to={`/schedule`} />
    </div>
  );
}
export default UpdateSchedulePageTemplate;
