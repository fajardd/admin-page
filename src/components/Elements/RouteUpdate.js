// RouteUpdate.js
import React from "react";
import { Link } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

function RouteUpdate(props) {
  return (
    <Link {...props}>
      <PencilSquareIcon className="stroke-yellow-600 w-6 h-6" />
    </Link>
  );
}

export default RouteUpdate;
