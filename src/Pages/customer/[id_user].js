// [id_user].js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getByIdCustomer,
  updateCustomer,
} from "../../services/customer.services";
import UpdateCustomerPageTemplate from "../../components/Layouts/UpdateCustomerPageTemplate";

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

  const handleUpdateCustomer = () => {
    console.log("update");
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <UpdateCustomerPageTemplate
      customer={customer}
      handleUpdateCustomer={handleUpdateCustomer}
    />
  );
}

export default UpdateCustomerPage;
