// [id_user].js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByIdCustomer } from "../../services/customer.services";

function UpdateCustomerPage() {
  const { id_user } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    async function fetchCustomer() {
      try {
        const data = await getByIdCustomer(id_user);
        setCustomer(data.data);
      } catch (error) {
        console.error("Error fetching customer:", error);
      }
    }
    fetchCustomer();
  }, [id_user]);

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Nama: {customer.nama}</h1>
      <h1>Email: {customer.email}</h1>
      <h1>No Telp: {customer.no_telp}</h1>
    </div>
  );
}

export default UpdateCustomerPage;
