import { store } from "react-easy-state";

const state = store({
  data: null, //               [], fats data
  signInFormShown: false, //   sign in modal window hide (default)/ shown
  menuFormShown: false //      menu modal window hide (default)/ shown
});

export default state;
