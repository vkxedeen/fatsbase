import { store } from "react-easy-state";

const localState = store({
  inputValue: undefined, //              String search pattern
  sort: null, //                         sorting by = "sF"/"mUF/omega3/omega6"
  fryChecked: false, //                  cooking frendly selector
  vegChecked: false, //                  vegetarian frendly selector
  sortDirection: true //                 Sorting direction true = ascending, false = descending
});

export default localState;
