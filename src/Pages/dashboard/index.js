import React from "react";
import Sidebar from "../../components/Layouts/Sidebar";
import { Route, Routes } from "react-router-dom";
import Customer from "../customer/index";
import Admin from "../admin/index";
import Veterinarian from "../veterinarian/index";
import Schedule from "../schedule/index";
import Pelayanan from "../pelayanan/index";
import Riwayat from "../riwayat/index";
import bgDashboard from "../../assets/Images/bgPetcare.png";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route
            path="/dashboard"
            element={
              <div className="flex justify-center items-center">
                <div>
                  <img
                    src={bgDashboard}
                    alt="imageDashboard"
                    className="w-auto h-[300px]"
                  />
                  <p className="text-center text-[24px] font-medium">
                    Welcome To Dashboard
                  </p>
                </div>
              </div>
            }
          />
          <Route path="/customer" element={<Customer />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/veterinarian" element={<Veterinarian />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/pelayanan" element={<Pelayanan />} />
          <Route path="/riwayat" element={<Riwayat />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
