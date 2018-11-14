import React from "react";
import { Link } from "react-router-dom";

const R = require("ramda");

function ElemInfo(props) {
  let { data, match } = props;
  const elem = R.filter(R.whereEq({ name: match.params.name }), data);
  return (
    <div>
      <Link to="/">Back </Link> <br />
      {elem[0].name}
      <div>
        Smoke point is: <h2>{elem[0].fireP}</h2>
      </div>
    </div>
  );
}

export default ElemInfo;
