import React from "react";
import { addChart } from "./addChart";
import { Link } from "react-router-dom";

class Diagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.nodes = [];
  }
  /*componentDidUpdate() {
    debugger
    for (let i = 0; i < this.props.newData.length; i++) {
      addChart(this.nodes[i], this.props.newData[i]);
    }
  }
  */

  componentDidMount() {
    for (let i = 0; i < this.props.data.length; i++) {
      addChart(this.nodes[i], this.props.data[i]);
    }
  }

  componentWillUnmount() {
    this.nodes = [];
  }

  /*shouldComponentUpdate() {
    if (this.props.newData != this.props.data) return true
    return false;
  }
  */

  render() {
    if (this.props.data) {
      let bars = this.props.newData || this.props.data;
      return (
        <div>
          <div id="container" style={{ width: 400 + "px" }}>
            {bars.map((item, i) => (
              <div>
                <span>
                  <Link to={`/${item.name}`}>{item.name}</Link>
                </span>
                <div id={i} key={i} ref={node => this.nodes.push(node)} />
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Diagram;
