import React from "react";
import { addChart } from "./addChart";
import { Link } from 'react-router-dom';

class Diagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.data };
    this.nodes = [];
  }

  componentDidMount() {
    for (let i = 0; i < this.props.data.length; i++) {
      debugger;
      addChart(this.nodes[i], this.props.data[i]);
    }
  }
  shouldComponentUpdate() {
    return false;
  }

  render() {
    if (this.props.data) {
      return (
        <div id="container" style={{ width: 400 + "px" }}>
          {this.props.data.map((item, i) => (
            <div>
              <span><Link to={`./fat/${item.name}`}>{item.name}</Link></span>
              <div id={i} key={i} ref={node => this.nodes.push(node)}></div>
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Diagram;
