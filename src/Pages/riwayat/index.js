import React, { useState, useEffect } from "react";
import { addHistory, getAllHistories } from "../../services/history.services";
import HistoryPageTemplate from "../../components/Layouts/HistoryPageTemplate";
import Swal from "sweetalert2";

const Riwayat = () => {
  const [histories, setHistories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [formData, setFormData] = useState({
    tanggal: "",
    riwayat: "",
    id_user: "",
  });

  useEffect(() => {
    const getHistories = async (page) => {
      try {
        const data = await getAllHistories(page);
        setHistories(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getHistories(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleAddHistory = async () => {
    try {
      const response = await addHistory(formData);
      const newHistory = response.data;
      setHistories((prevHistories) => [...prevHistories, newHistory]);
      setFormData({
        tanggal: "",
        riwayat: " ",
        id_user: "",
      });
      Swal.fire({
        icon: "success",
        title: "Berhasil Menambahkan History Baru",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <HistoryPageTemplate
      histories={histories}
      currentPage={currentPage}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
      onChange={handleChange}
      value={formData}
      handleAddHistory={handleAddHistory}
    />
  );
};
export default Riwayat;
