import states from "./state";

export function changeForm(str) {
  states.inputValue = str;
}

export function setSortProp(str) {
  states.sort = str;
}

export function directionChange() {
  states.sortDirection = !states.sortDirection;
}

export function toggleFrying() {
  states.fryChecked = !states.fryChecked;
}

export function toggleVegetarian() {
  states.vegChecked = !states.vegChecked;
}

export function toggleSingIn() {
  states.singInFormShown = !states.singInFormShown;
}

export function toggleShowMenu() {
  states.menuFormShown = !states.menuFormShown;
}
