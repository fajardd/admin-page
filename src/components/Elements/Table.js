import React from "react";

function Table({ children, clasName }) {
  return <table className={`w-full ${clasName}`}>{children}</table>;
}
export default Table;
