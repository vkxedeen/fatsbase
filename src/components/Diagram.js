import { Link } from "react-router-dom";
import React from "react";
import { addChart } from "../helpers";

export default class Diagram extends React.Component {
  componentDidMount() {
    addChart(this.elem, this.props.item);
  }

  componentDidUpdate() {
    addChart(this.elem, this.props.item);
  }

  render() {
    return (
      <div key={this.props.i}>
        <Link to={`/${this.props.item.name}`}>{this.props.item.name}</Link>
        <div id={this.props.i} ref={node => (this.elem = node)} />
      </div>
    );
  }
}
