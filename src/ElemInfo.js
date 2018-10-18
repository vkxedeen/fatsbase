import React from "react";
import { Link } from "react-router-dom";

function ElemInfo(props) {
  return (
    <div>
      {props.match.params.name} /
      <Link to="./">
        <span>назад</span>
      </Link>
    </div>
  );
}

export default ElemInfo;
