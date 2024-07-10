import {
  HomeIcon,
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
      <div className="flex flex-col space-y-2">
        <SidebarItem icon={HomeIcon} to="/dashboard" label="Dashboard" />
        <SidebarItem icon={UsersIcon} to="/customer" label="Customer" />
        <SidebarItem icon={UserIcon} to="/admin" label="Admin" />
        <SidebarItem
          icon={UserPlusIcon}
          to="/veterinarian"
          label="Veterinarian"
        />
        <SidebarItem icon={CalendarIcon} to="/schedule" label="Jadwal" />
        <SidebarItem
          icon={ClipboardDocumentListIcon}
          to="/pelayanan"
          label="Pelayanan"
        />
        <SidebarItem icon={FolderIcon} to="/riwayat" label="Riwayat" />
      </div>
    </div>
  );
}
export default Sidebar;
