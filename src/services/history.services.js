import Cookies from "js-cookie";
const BASE_URL = process.env.REACT_APP_BASE_URL;

// GET ALL HISTORY
export const getAllHistories = async (page = 1) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/histories?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response) {
      throw new Error("please login");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching history:", error);
    throw error;
  }
};

// CREATE DATA HISTORY
export const addHistory = async (historyData) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/histories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(historyData),
    });

    if (!response.ok) {
      throw new Error("Failed to add history");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding history", error);
    throw error;
  }
};

// GET BY ID HISTORY BY CUSTOMER
export const getByIdHistoryCustomer = async (id_user, page = 1, limit = 3) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(
      `${BASE_URL}/web/v1/histories/${id_user}?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to get detail history account");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching id customers:", error);
    throw error;
  }
};

// DELETE DATA HISTORY
export const deleteHistory = async (id_history) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/histories/${id_history}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete history");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error delete history", error);
    throw error;
  }
};
