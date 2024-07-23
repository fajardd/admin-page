import React from "react";
import ScheduleTable from "../../Fragments/ScheduleTable";
import InputAddSchedule from "../../Fragments/InputAddSchedule";

function SchedulePageTemplate({
  schedules,
  currentPage,
  listDokter,
  onSelectDokter,
  onRemoveDokter,
  onChange,
  value,
  handleAddSchedule,
}) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold">Schedule</h1>
      <p className="text-blue-700">Schedule</p>
      {/* <InputAddSchedule
        listDokter={listDokter}
        onSelectDokter={onSelectDokter}
        onRemoveDokter={onRemoveDokter}
        onChange={onChange}
        value={value}
        handleAddSchedule={handleAddSchedule}
      /> */}
      <ScheduleTable schedules={schedules} currentPage={currentPage} />
    </div>
  );
}

export default SchedulePageTemplate;
