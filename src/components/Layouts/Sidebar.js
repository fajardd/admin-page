import {
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
  UserPlusIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import SidebarItem from "../Fragments/SidebarItem";

function Sidebar() {
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
          <h1 className="text-[16px] font-medium">Nama Lengkap</h1>
          <p className="text-[12px] font-medium">Admin</p>
        </div>
        <div>
          <ArrowRightEndOnRectangleIcon className="stroke-white w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
