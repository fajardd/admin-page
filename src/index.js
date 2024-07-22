import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Cookies from "js-cookie";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Admin from "./pages/admin";
import UpdateAdminPage from "./pages/admin/update-admin/[id_user]";
import Dokter from "./pages/dokter";
import Customer from "./pages/customer";
import Riwayat from "./pages/riwayat";
import Schedule from "./pages/schedule";
import Pelayanan from "./pages/pelayanan";
import UpdateCustomerPage from "./pages/customer/update-customer/[id_user]";
import DetailCustomer from "./pages/customer/detail-customer/[id_user]";
import Sidebar from "./components/Layouts/Sidebar";
import "./assets/Styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow px-2 ml-64 bg-gray-50">
          <Routes>
            <Route path="*" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/admin/update-admin/:id_user"
              element={<UpdateAdminPage />}
            />
            <Route path="/dokter" element={<Dokter />} />
            <Route path="/customer" element={<Customer />} />
            <Route
              path="/customer/update-customer/:id_user"
              element={<UpdateCustomerPage />}
            />
            <Route
              path="/customer/detail-customer/:id_user"
              element={<DetailCustomer />}
            />
            <Route path="/riwayat" element={<Riwayat />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/pelayanan" element={<Pelayanan />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
