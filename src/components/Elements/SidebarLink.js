import { Link } from "react-router-dom";

function SidebarLink({ to, label }) {
  return (
    <Link to={to} className="text-white hover:bg-blue-500 p-2 rounded">
      {label}
    </Link>
  );
}

export default SidebarLink;
