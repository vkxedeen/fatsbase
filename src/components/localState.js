import { store } from "react-easy-state";

const localState = store({
  inputValue: undefined,
  formValue: false,
  sort: null,
  fryChecked: false,
  vegChecked: false,
  sortDirection: true
});

export default localState;
