import React, { useEffect, useState } from "react";
import {
  getAllAdmin,
  addAdmin,
  deleteAdmin,
} from "../../services/admin.services";
import AdminPageTemplate from "../../components/Layouts/Admin/AdminPageTemplate";
import Swal from "sweetalert2";

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [formData, setFormData] = useState({
    nama: "",
    no_telp: "",
    email: "",
    id_role: "ebe1f9bf-f7d6-446a-a8d6-bbdf21172d10",
    password: "",
  });

  // GET DATA ADMIN
  useEffect(() => {
    const getAdmins = async (page) => {
      try {
        const data = await getAllAdmin(page);
        setAdmins(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getAdmins(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setcurrentPage(newPage);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  // CREATE DATA ADMIN
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleAddAdmin = async () => {
    try {
      const response = await addAdmin(formData);
      const newCustomer = response.data;
      setAdmins((prevAdmins) => [...prevAdmins, newCustomer]);
      setFormData({
        nama: "",
        no_telp: "",
        email: "",
        id_role: "ebe1f9bf-f7d6-446a-a8d6-bbdf21172d10",
        password: "",
      });
      Swal.fire({
        icon: "success",
        title: "Berhasil Menambahkan Admin Baru",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  // DELETE ADMIN
  const handleDeleteAdmin = async (id_user) => {
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
        await deleteAdmin(id_user);
        setAdmins((prevAdmins) =>
          prevAdmins.filter((admin) => admin.id_user !== id_user)
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

  return (
    <AdminPageTemplate
      admins={admins}
      currentPage={currentPage}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
      onChange={handleChange}
      value={formData}
      handleAddAdmin={handleAddAdmin}
      handleDeleteAdmin={handleDeleteAdmin}
    />
  );
};

export default Admin;
