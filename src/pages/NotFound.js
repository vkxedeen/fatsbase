import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>Element not found</div>
      <Link to="/">Back </Link> <br />
    </div>
  );
};

export default NotFound;
