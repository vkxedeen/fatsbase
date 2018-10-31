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

  checkFrying() {
    states.fryChecked = !states.fryChecked;
  },

  checkVegetarian() {
    states.vegChecked = !states.vegChecked;
  }
});

export default states;
