import React from "react";
import { Link } from "react-router-dom";

function ElemInfo(props) {
  let elem;
  props.data.forEach(item => {
    if (item.name === props.match.params.name) elem = item;
    else return;
  });
  return (
    <div>
      <Link to="/">Back </Link> <br />
      {elem.name}
      <div>
        Smoke point is: <h2>{elem.fireP}</h2>
      </div>
    </div>
  );
}

export default ElemInfo;
