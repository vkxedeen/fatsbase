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
  singInFormShown: false,
  menuFormShown: false
});

export default states;
