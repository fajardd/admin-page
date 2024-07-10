import React, { useEffect, useState } from "react";
import { fetchCustomers } from "../../services/customer.services";

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getCustomers = async (page) => {
      try {
        const data = await fetchCustomers(page);
        setCustomers(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCustomers(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-[24px] font-semibold">Customer</h1>

      <div className="overflow-x-auto mt-6">
        <table className="w-full text-sm text-left border rtl:text-right text-black">
          <thead className="text-xs text-black bg-white border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                NO
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                No Telp
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id_user} className="bg-white border-b">
                <td className="px-6 py-4">
                  {(currentPage - 1) * 5 + index + 1}
                </td>
                <td className="px-6 py-4">{customer.nama}</td>
                <td className="px-6 py-4">{customer.role.role_name}</td>
                <td className="px-6 py-4">{customer.no_telp}</td>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4">Edit || Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-black">
              {(currentPage - 1) * 5 + 1}-{currentPage * 5}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-black">{totalPages * 5}</span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 hover:text-white bg-white hover:bg-blue-500 border"
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages).keys()].map((page) => (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    currentPage === page + 1
                      ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                      : "text-gray-500 hover:text-white bg-white hover:bg-blue-500 border"
                  }`}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Customer;
