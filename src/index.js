import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Cookies from "js-cookie";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Admin from "./pages/admin";
import Dokter from "./pages/dokter";
import UpdateDokterPage from "./pages/dokter/update-dokter/[id_user]";
import Customer from "./pages/customer";
import Schedule from "./pages/schedule";
import UpdateSchedule from "./pages/schedule/update-schedule/[id_schedule]";
import Pelayanan from "./pages/pelayanan";
import UpdatePelayanan from "./pages/pelayanan/update-pelayanan/[id_user]";
import UpdateCustomerPage from "./pages/customer/update-customer/[id_user]";
import HistoryCustomer from "./pages/customer/history-customer/[id_user]";
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
        <div className="flex-grow px-2 md:ml-64 bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dokter" element={<Dokter />} />
            <Route
              path="/dokter/update-dokter/:id_user"
              element={<UpdateDokterPage />}
            />
            <Route path="/customer" element={<Customer />} />
            <Route
              path="/customer/update-customer/:id_user"
              element={<UpdateCustomerPage />}
            />
            <Route
              path="/customer/history-customer/:id_user"
              element={<HistoryCustomer />}
            />
            <Route path="/schedule" element={<Schedule />} />
            <Route
              path="/schedule/update-schedule/:id_schedule"
              element={<UpdateSchedule />}
            />
            <Route path="/pelayanan" element={<Pelayanan />} />
            <Route
              path="/pelayanan/update-pelayanan/:id_service"
              element={<UpdatePelayanan />}
            />
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
