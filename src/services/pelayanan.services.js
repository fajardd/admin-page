import Cookies from "js-cookie";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

// GET ALL SCHEDULE
export const getAllService = async (page = 1, limit = 5) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.get(
      `${BASE_URL}/web/v1/service?page=${page}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API response error:", error.message);
    } else {
      console.error("Error get schedules", error.message);
    }
    throw error;
  }
};

// CREATE PELAYANAN
export const addService = async (pelayananData) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.post(
      `${BASE_URL}/web/v1/service`,
      pelayananData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Api response error:", error.response);
    } else {
      console.error("Error create service", error.message);
    }
    throw error;
  }
};

// // GET BY ID SEVICE
export const getByIdService = async (id_service) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.get(
      `${BASE_URL}/web/v1/service/${id_service}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Api response error", error.response);
    } else {
      console.error("error create service", error.message);
    }
    throw error;
  }
};

// // UPDATE SERVICE
export const updateService = async (id_service, serviceData) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.put(
      `${BASE_URL}/web/v1/service/${id_service}`,
      serviceData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Api response error", error.response);
    } else {
      console.error("Error update service", error.message);
    }
    throw error;
  }
};

// DELETE SERVICE
export const deleteService = async (id_service) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.delete(
      `${BASE_URL}/web/v1/service/${id_service}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API response error:", error.response);
    } else {
      console.error("Error delete service:", error.message);
    }
    throw error;
  }
};
