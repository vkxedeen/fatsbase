import React from "react";
import ReactDOM from "react-dom";
import { view } from "react-easy-state";
import states from "../state";

const modalRoot = document.getElementById("singin");

class SingIn extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    console.log("1");
    const button = <button>new</button>;
    return ReactDOM.createPortal(button, this.el);
  }
}

export default view(SingIn);
