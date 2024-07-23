import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getByIdHistoryCustomer,
  deleteHistory,
  addHistory,
} from "../../../services/history.services";
import DetailCustomerPageTemplate from "../../../components/Layouts/Customer/DetailCustomerPageTemplate";
import Swal from "sweetalert2";

function HistoryCustomer() {
  const { id_user } = useParams();
  const [historyCustomers, setHistoryCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    tanggal: "",
    pelayanan: "",
    keterangan: "",
    id_user: id_user,
  });

  // GET HISTORY BY ID USER
  useEffect(() => {
    async function fetchHistoryCustomer() {
      try {
        const data = await getByIdHistoryCustomer(id_user, currentPage);
        setHistoryCustomers(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching history customer:", error);
      }
    }
    fetchHistoryCustomer();
  }, [id_user, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //CREATE DATA HISTORY
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
      setHistoryCustomers((prevHistories) => [...prevHistories, newHistory]);
      setFormData({
        tanggal: "",
        pelayanan: "",
        keterangan: "",
        id_user: id_user,
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

  // DELETE HISTORY
  const handleDeleteHistory = async (id_history) => {
    try {
      const result = await Swal.fire({
        title: "Apakah anda yakin?",
        text: "Data yang dihapus tidak dapat dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
      });
      if (result.isConfirmed) {
        await deleteHistory(id_history);
        setHistoryCustomers((prevHistoryCustomers) =>
          prevHistoryCustomers.filter(
            (historyCustomer) => historyCustomer.id_history !== id_history
          )
        );
        Swal.fire({
          title: "Deleted!",
          text: "Data berhasil dihapus",
          icon: "success",
        });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <DetailCustomerPageTemplate
      historyCustomers={historyCustomers}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      totalPages={totalPages}
      handleDeleteHistory={handleDeleteHistory}
      onChange={handleChange}
      value={formData}
      handleAddHistory={handleAddHistory}
    />
  );
}

export default HistoryCustomer;
