import { Link } from "react-router-dom";
import React from "react";
import { view } from "react-easy-state";
import { addChart } from "../helpers";

export default view(
  class Diagram extends React.Component {
    componentDidMount() {
      addChart(this.elem, this.props.item);
    }

    componentDidUpdate() {
      addChart(this.elem, this.props.item);
    }

    componentWillUnmount() {
      debugger;
      this.elem.remove();
    }

    render() {
      let oil = this.props.item.name;

      return (
        <div>
          <Link to={`/${oil}`}>{oil}</Link>
          <div ref={node => (this.elem = node)} />
        </div>
      );
    }
  }
);
