import React from "react";
import { lines } from "./lines";

class Graph extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.data };
    this.places = [];
  }

  componentDidMount() {
    for (let i = 0; i < this.state.data.length; i++) {
      debugger;
      lines(this.places[i], this.props.data[i]);
    }
  }
  shouldComponentUpdate() {
    return false;
  }

  render() {
    if (this.state.data) {
      return (
        <div id="container" style={{ width: 400 + "px" }}>
          {this.state.data.map((item, i) => (
            <div id={i} key={i} ref={node => this.places.push(node)}>
              {item.name}
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Graph;
