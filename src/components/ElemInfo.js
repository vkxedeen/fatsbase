import React from "react";
import { Link } from "react-router-dom";
import { view } from "react-easy-state";
import states from "./states";

function ElemInfo(props) {
  let elem;
  states.data.forEach(item => {
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

export default view(ElemInfo);
