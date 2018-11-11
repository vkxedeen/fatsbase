import React from "react";
import { view } from "react-easy-state";
import * as actions from "../actions";

function SingIn() {
  return (
    <div className="modal">
      Your name is
      <input type="text" size="40" />
      Password
      <input type="text" size="40" />
      <button onClick={() => actions.toggleSingIn()}>Ok</button>
    </div>
  );
}

export default view(SingIn);
