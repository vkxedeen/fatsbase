import React from "react";
import { view } from "react-easy-state";
import Diagram from "../Diagram";
import "./table-style.css";

function Table(props) {
  debugger;
  const data = props.visibleData.map(item => (
    <Diagram item={item} key={item.name} />
  ));

  if (data) {
    return <ul className="list-group">{data}</ul>;
  } else {
    return <div>Loading...</div>;
  }
}

export default view(Table);
