import { Link } from "react-router-dom";
import React from "react";
import { view } from "react-easy-state";
import { addChart } from "../../helpers";
import "./diagram-style.css";

export default view(
  class Diagram extends React.Component {
    componentDidMount() {
      addChart(this.elem, this.props.item);
    }

    componentDidUpdate() {
      addChart(this.elem, this.props.item);
    }

    componentWillUnmount() {
      this.elem.remove();
    }

    render() {
      let oil = this.props.item.name;

      return (
        <li className="list-group-item">
          <Link to={`/${oil}`} className="diagram">
            <div className="link-text">{oil}</div>
            <div className="graph" ref={node => (this.elem = node)} />
          </Link>
        </li>
      );
    }
  }
);
