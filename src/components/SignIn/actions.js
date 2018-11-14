import tableState from "../Table/state";
import signInState from "./state";
import globalState from "../../state";

export function showStatesInConsole(event) {
  debugger;
  console.log("-------------Global states--------------");
  console.log("Fats data:", globalState.data);
  console.log("Sign in modal window visibility:", globalState.signInFormShown);
  console.log("Menu modal window visibility:", globalState.menuFormShown);
  console.log("-------------Table states--------------");
  console.log("Filtered by pattern:", tableState.inputValue);
  console.log("Sorting by:", tableState.sort);
  console.log("Is good for cooking:", tableState.fryChecked);
  console.log("Is vegeterian:", tableState.vegChecked);
  console.log("Sort direction:", tableState.sortDirection);
  console.log("-------------SignIn states--------------");
  console.log("User name:", signInState.name);
  console.log("User password:", signInState.password);
  event.preventDefault();
}

export function saveName(str) {
  signInState.name = str;
}

export function savePassword(str) {
  signInState.password = str;
}
