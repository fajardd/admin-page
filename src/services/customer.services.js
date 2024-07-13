import Cookies from "js-cookie";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllCustomer = async (page = 1, limit = 5) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(
      `${BASE_URL}/users?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch customers");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

export const addCustomer = async (customerData) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(customerData),
    });

    if (!response.ok) {
      throw new Error("Failed to add customer");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding Customer", error);
    throw error;
  }
};
