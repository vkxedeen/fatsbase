import { Link } from "react-router-dom";
import React from "react";

export default function Diagram(props) {
  return (
    <div key={this.props.i}>  
      <Link to={`/${this.props.item.name}`}>{this.props.item.name}</Link>
    </div> 
    
  )
}