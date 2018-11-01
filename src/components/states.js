import { store } from "react-easy-state";

const states = store({
  data: null,
  markedData: null,
  inputValue: undefined,
  formValue: false,
  sort: null,
  fryChecked: false,
  vegChecked: false,
  sortDirection: true,

  changeForm(str) {
    states.inputValue = str;
  },

  setSortProp(str) {
    states.sort = str;
  },

  directionChange() {
    states.sortDirection = !states.sortDirection;
  },

  toggleFrying() {
    states.fryChecked = !states.fryChecked;
  },

  toggleVegetarian() {
    states.vegChecked = !states.vegChecked;
  }
});

export default states;
