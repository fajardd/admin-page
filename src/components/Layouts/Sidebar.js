import React, { useState, useEffect } from "react";
import { getProfile } from "../../services/profile.services";
import ButtonLogout from "../Elements/ButtonLogout";
import {
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
  UserPlusIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import SidebarItem from "../Fragments/SidebarItem";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const data = await getProfile();
        setProfile(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getProfileData();
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
    window.location.reload();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-screen bg-blue-700 text-white w-64 flex flex-col justify-between">
      <div className=" p-4 flex flex-col space-y-6">
        <SidebarItem icon={HomeIcon} to="/dashboard" label="Dashboard" />
        <SidebarItem
          icon={UserGroupIcon}
          label="Users"
          subItems={[
            { icon: UserIcon, to: "/admin", label: "Admin" },
            { icon: UserPlusIcon, to: "/veterenarian", label: "Veterenarian" },
            { icon: UsersIcon, to: "/customer", label: "Customer" },
          ]}
        />
        <SidebarItem icon={FolderIcon} to="/riwayat" label="Riwayat Customer" />
        <SidebarItem icon={CalendarIcon} to="/schedule" label="Jadwal" />
        <SidebarItem
          icon={ClipboardDocumentListIcon}
          to="/pelayanan"
          label="Pelayanan"
        />
      </div>
      <div className="bg-blue-800 p-3 flex justify-between items-center w-full h-auto">
        <div>
          <h1 className="text-[16px] font-medium">{profile.nama}</h1>
          <p className="text-[12px] font-medium">{profile.role.role_name}</p>
        </div>
        <div>
          <ButtonLogout onClick={() => handleLogout()} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
