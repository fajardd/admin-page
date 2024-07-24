import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarIcon from "../Elements/SidebarIcon";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function SidebarItem({ icon, to, label, subItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleToggle = () => {
    if (subItems) {
      setIsOpen(!isOpen);
    }
  };

  const renderLink = () => (
    <Link
      to={to}
      className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
        isActive ? "bg-blue-500" : "hover:bg-blue-500"
      }`}
      onClick={handleToggle}
    >
      <SidebarIcon icon={icon} />
      <span>{label}</span>
    </Link>
  );

  const renderDiv = () => (
    <div
      className={`flex items-center justify-between space-x-2 p-2 rounded cursor-pointer ${
        isActive ? "bg-blue-500" : "hover:bg-blue-500"
      }`}
      onClick={handleToggle}
    >
      <div className="flex item space-x-2">
        <SidebarIcon icon={icon} />
        <span>{label}</span>
      </div>
      <ChevronDownIcon
        className={`w-5 h-5 transform transition-transform duration-200 ${
          isOpen ? "-rotate-90" : ""
        }`}
      />
    </div>
  );

  return (
    <div>
      {subItems ? renderDiv() : renderLink()}
      {isOpen && subItems && (
        <div className="space-y-4 mt-4 pl-6">
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
