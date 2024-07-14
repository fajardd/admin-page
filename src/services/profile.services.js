import React from "react";
import Cookies from "js-cookie";
const BASE_URL = process.env.REACT_APP_BASE_URL;

// GET PROFIL
export const getProfile = async () => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetching profile");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
    throw error;
  }
};