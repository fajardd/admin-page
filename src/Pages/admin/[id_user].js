import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByIdAdmin, updateAdmin } from "../../services/admin.services";
import UpdateAdminPageTemplate from "../../components/Layouts/UpdateAdminPageTemplate";
import Swal from "sweetalert2";

function UpdateAdminPage() {
  const { id_user } = useParams();
  const [admin, setAdmin] = useState(null);
  const [updatedAdmin, setUpdatedAdmin] = useState({
    nama: "",
    no_telp: "",
    email: "",
  });
  useEffect(() => {
    async function fetchAdmin() {
      try {
        const data = await getByIdAdmin(id_user);
        setAdmin(data.data);
        setUpdatedAdmin(data.data);
      } catch (error) {
        console.error("Error fetching admin:", error);
      }
    }
    fetchAdmin();
  }, [id_user]);

  const handleInputChange = async (e) => {
    const { id, value } = e.target;
    setUpdatedAdmin((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleUpdateAdmin = async (e) => {
    e.preventDefault();
    try {
      await updateAdmin(id_user, updatedAdmin);
      Swal.fire({
        icon: "success",
        title: "Data berhasil diupdate",
        showConfirmButton: true,
      });
    } catch (error) {
      console.error("Error updating admin:", error);
    }
  };
  if (!admin) {
    return <div>Loading...</div>;
  }

  return (
    <UpdateAdminPageTemplate
      admin={updatedAdmin}
      handleUpdateAdmin={handleUpdateAdmin}
      handleInputChange={handleInputChange}
    />
  );
}
export default UpdateAdminPage;
