import React from "react";
import { Link } from "react-router-dom";

function ElemInfo(props) {
  return (
    <div>
      <Link to="/">Back </Link> <br/>
      {props.match.params.name} <div>Smoke point is {props.match.params.fP}</div> 
      
    </div>
  );
}

export default ElemInfo;
