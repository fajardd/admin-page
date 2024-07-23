import React from "react";
import { Link } from "react-router-dom";
import { FolderIcon } from "@heroicons/react/24/outline";

function ButtonDetail(props) {
  return (
    <Link {...props}>
      <FolderIcon className="stroke-green-600 w-6 h-6" />
    </Link>
  );
}
export default ButtonDetail;
