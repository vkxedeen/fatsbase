import React from "react";
import { addChart } from "./addChart";
import { Link } from "react-router-dom";

class Diagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: null
    };
    this.nodes = [];
    this.bars = []
  }
  
  componentDidUpdate() {
    for (let i = 0; i < this.bars.length; i++) {
      addChart(this.nodes[i], this.bars[i]); // бардак в nodes
    }
  }
 
  componentDidMount() {
    for (let i = 0; i < this.props.data.length; i++) {
      addChart(this.nodes[i], this.props.data[i]);
    }
  }

  render() {
    if (this.props.data) {
      this.bars = this.props.data
        .filter(item => item.isSelect == true)
        .map((item, i) => (
          <div key={i}>  
            <Link to={`/${item.name}`}>{item.name}</Link>
            <div id={i}  ref={node => this.nodes.push(node)} />
          </div> 
        ))
        
      return (
        <div id="container" style={{ width: 400 + "px" }}>
          <p><b>Find:</b><br/>
            <input type="text" size="40" value={this.state.inputValue} onKeyUp={(event) => this.props.findByPattern(event)}/>
          </p>
          {this.bars}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Diagram;
