import { useState } from "react";
import { Link } from "react-router-dom";
import SidebarIcon from "../Elements/SidebarIcon";
import SidebarLink from "../Elements/SidebarLink";

function SidebarItem({ icon, to, label, subItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (subItems) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <Link
        to={to}
        className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded cursor-pointer"
        onClick={handleToggle}
      >
        <SidebarIcon icon={icon} />
        <SidebarLink to={to} label={label} />
      </Link>
      {isOpen && subItems && (
        <div className="ml-6">
          {subItems.map((subItem, index) => (
            <SidebarItem
              key={index}
              icon={subItem.icon}
              to={subItem.to}
              label={subItem.label}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SidebarItem;
