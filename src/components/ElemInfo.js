import React from "react";
import { Link } from "react-router-dom";
import { view } from "react-easy-state";
import states from "./states";

const R = require("ramda");

export default view(function ElemInfo(props) {
  const elem = R.filter(
    R.whereEq({ name: props.match.params.name }),
    states.data
  );
  debugger;
  return (
    <div>
      <Link to="/">Back </Link> <br />
      {elem[0].name}
      <div>
        Smoke point is: <h2>{elem[0].fireP}</h2>
      </div>
    </div>
  );
});
