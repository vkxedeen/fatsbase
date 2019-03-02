import React, { Component } from "react";

import { addPie } from "../../helpers";

import "./pie-style.css";

export default class ElemInfo extends Component {
  constructor(props) {
    super();
    this.item = props.item;
  }

  componentDidMount() {
    addPie(this.elem, this.item);
  }

  componentWillUnmount() {
    this.elem.remove();
  }

  render() {
    return <div className="pie" ref={node => (this.elem = node)} />;
  }
}
