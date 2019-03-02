import state from "../../state";

export function changeForm(str) {
  state.inputValue = str;
}

export function setSortProp(str) {
  state.sort = str;
}

export function directionChange() {
  state.sortDirection = !state.sortDirection;
}

export function toggleFrying() {
  state.fryChecked = !state.fryChecked;
}

export function toggleVegetarian() {
  state.vegChecked = !state.vegChecked;
}
