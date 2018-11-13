import localState from "./localState";

export function changeForm(str) {
  localState.inputValue = str;
}

export function setSortProp(str) {
  debugger;
  localState.sort = str;
}

export function directionChange() {
  localState.sortDirection = !localState.sortDirection;
}

export function toggleFrying() {
  debugger;
  localState.fryChecked = !localState.fryChecked;
}

export function toggleVegetarian() {
  localState.vegChecked = !localState.vegChecked;
}
