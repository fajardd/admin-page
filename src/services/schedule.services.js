import Cookies from "js-cookie";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

// GET ALL SCHEDULE
export const getAllSchedules = async () => {
  try {
    const token = Cookies.get("token");
    const response = await axios.get(`${BASE_URL}/web/v1/schedules`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

// CREATE SCHEDULE
export const addSchedule = async (dataDokter) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.post(
      `${BASE_URL}/web/v1/schedules`,
      dataDokter,
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
      console.error("Error get schedules", error.message);
    }

    throw error;
  }
};

// GET BY ID SCHEDULE
export const getByIdSchedule = async (id_schedule) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.get(
      `${BASE_URL}/web/v1/schedules/${id_schedule}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Api response error:", error.response);
    } else {
      console.error("Error get schedule", error.message);
    }
    throw error;
  }
};

export const updateSchedule = async (id_schedule, scheduleData) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.put(
      `${BASE_URL}/web/v1/schedules/${id_schedule}`,
      scheduleData,
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
      console.error("Error update schedule", error.message);
    }
    throw error;
  }
};
