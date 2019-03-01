import { store } from "react-easy-state";

debugger;
const state = store({
  data: null, //               [], fats data
  signInFormShown: false, //   sign in modal window hide (default)/ shown
  menuFormShown: false, //      menu modal window hide (default)/ shown
  inputValue: undefined, //              String search pattern
  sort: null, //                         sorting by = "sF"/"mUF/omega3/omega6"
  fryChecked: false, //                  cooking frendly selector
  vegChecked: false, //                  vegetarian frendly selector
  sortDirection: "Sort by" //                 Sorting direction true = ascending, false = descending
});

export default state;
