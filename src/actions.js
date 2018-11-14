import state from "./state";

export function toggleSignIn() {
  state.signInFormShown = !state.signInFormShown;
}

export function toggleShowMenu() {
  state.menuFormShown = !state.menuFormShown;
}

export function changeForm(property, str) {
  debugger;
  return (property = str);
}
