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

function Sidebar() {
  return (
    <div className="h-screen bg-blue-700 text-white w-64 p-4">
      <div className="flex flex-col space-y-6">
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
    </div>
  );
}

export default Sidebar;
