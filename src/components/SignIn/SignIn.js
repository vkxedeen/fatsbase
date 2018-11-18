import React from "react";
import ReactDOM from "react-dom";
import * as actions from "./actions";
import state from "./state";

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
    return ReactDOM.createPortal(
      <div className="modal">
        <form onSubmit={event => actions.showStatesInConsole(event)}>
          <input
            type="text"
            size="40"
            defaultValue={state.name}
            onChange={event => actions.saveName(event.target.value)}
          />
          <div>Password</div>
          <input
            type="text"
            size="40"
            defaultValue={state.password}
            onChange={event => actions.savePassword(event.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>

        <button onClick={this.props.toggle}>Close</button>
      </div>,
      this.el
    );
  }
}
