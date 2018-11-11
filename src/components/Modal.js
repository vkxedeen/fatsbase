import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal");

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    document.body.style.overflow = "visible";
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
