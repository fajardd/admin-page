import React, { useState, useEffect } from "react";
import {
  getAllDokter,
  addDokter,
  deleteDokter,
} from "../../services/dokter.services";
import DokterPageTemplate from "../../components/Layouts/Dokter/DokterPageTemplate";
import Swal from "sweetalert2";

function Dokter() {
  const [dokters, setDokters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [formData, setFormData] = useState({
    nama: "",
    username: "",
    email: "",
    id_role: "17b4b6fb-db9a-4641-9a0e-2cb098041ff7",
    password: "",
  });

  // GET ALL DATA
  useEffect(() => {
    const getDokters = async (page) => {
      try {
        const data = await getAllDokter(page);
        setDokters(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getDokters(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // CREATE DATA DOKTER
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleAddDokter = async () => {
    try {
      const response = await addDokter(formData);
      const newDokter = response.data;
      setDokters((prevDokters) => [...prevDokters, newDokter]);
      setFormData({
        nama: "",
        username: "",
        email: "",
        id_role: "17b4b6fb-db9a-4641-9a0e-2cb098041ff7",
        password: "",
      });
      Swal.fire({
        icon: "success",
        title: "Berhasil Menambahkan Dokter Baru",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  // DELETE DATA DOKTER
  const handleDeleteDokter = async (id_user) => {
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
        await deleteDokter(id_user);
        setDokters((prevDokters) =>
          prevDokters.filter((dokter) => dokter.id_user !== id_user)
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

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <DokterPageTemplate
      dokters={dokters}
      currentPage={currentPage}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
      onChange={handleChange}
      value={formData}
      handleAddDokter={handleAddDokter}
      handleDeleteDokter={handleDeleteDokter}
    />
  );
}
export default Dokter;
