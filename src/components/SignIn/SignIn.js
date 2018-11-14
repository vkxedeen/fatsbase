import React from "react";
import { view } from "react-easy-state";
import * as actions from "./actions";
import { toggleSignIn } from "../../actions";
import state from "./state";

function SignIn() {
  return (
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

      <button onClick={() => toggleSignIn()}>Close</button>
    </div>
  );
}

export default view(SignIn);
