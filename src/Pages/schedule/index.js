import React, { useState, useEffect } from "react";
import { getAllSchedules, addSchedule } from "../../services/schedule.services";
import { getDropdownDokters } from "../../services/dropdown.services";
import SchedulePageTemplate from "../../components/Layouts/Schedule/SchedulePageTemplate";
import Swal from "sweetalert2";

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [listDokter, setListDokter] = useState([]);
  const [selectedDokters, setSelectedDokters] = useState([]);
  const [formData, setFormData] = useState({
    tanggal: "",
    day: "",
    id_user: [],
  });

  // get all schedule
  useEffect(() => {
    const getSchedules = async (page) => {
      try {
        const data = await getAllSchedules(page);
        setSchedules(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getSchedules(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // CREATE DATA SCHEDULE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleAddSchedule = async () => {
    try {
      const response = await addSchedule({
        ...formData,
        id_user: selectedDokters,
      });
      const newDokter = response.data;
      setSchedules((prevSchedules) => [...prevSchedules, newDokter]);
      setFormData({
        tanggal: "",
        day: "",
        id_user: [],
      });
      Swal.fire({
        icon: "success",
        title: "Berhasil Menambahkan Customer Baru",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  // get list dropdown dokter
  useEffect(() => {
    const getDokters = async () => {
      try {
        const response = await getDropdownDokters();
        const dataDokter = response.data;
        setListDokter(dataDokter);
      } catch (error) {
        setError(error.message);
      }
    };
    getDokters();
  }, []);

  const handleSelectDokter = (selectedList) => {
    setSelectedDokters(selectedList.map((dokter) => dokter.id_user));
  };

  const handleRemoveDokter = (selectedList) => {
    setSelectedDokters(selectedList.map((dokter) => dokter.id_user));
  };

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <SchedulePageTemplate
      schedules={schedules}
      currentPage={currentPage}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
      listDokter={listDokter}
      onSelectDokter={handleSelectDokter}
      onRemoveDokter={handleRemoveDokter}
      onChange={handleChange}
      value={formData}
      handleAddSchedule={handleAddSchedule}
    />
  );
};

export default Schedule;
