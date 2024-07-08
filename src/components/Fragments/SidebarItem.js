import SidebarIcon from "../Elements/SidebarIcon";
import SidebarLink from "../Elements/SidebarLink";

function SidebarItem({ icon, to, label }) {
  return (
    <div className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded">
      <SidebarIcon icon={icon} />
      <SidebarLink to={to} label={label} />
    </div>
  );
}

export default SidebarItem;
