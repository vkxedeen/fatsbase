import React from "react";
import { Link } from "react-router-dom";

import * as R from "ramda";
import NotFound from "../../pages/NotFound";
import Pie from "../Pie";

function ElemInfo(props) {
  const { data, match } = props;
  const item = R.filter(R.whereEq({ name: match.params.name }), data);

  if (item.length == 0) return <NotFound />;

  return (
    <div>
      <Link to="/">Back </Link> <br />
      <div>
        Smoke point is: <h2>{item[0].fireP}</h2>
      </div>
      <Pie item={item[0]} />
    </div>
  );
}

export default ElemInfo;
