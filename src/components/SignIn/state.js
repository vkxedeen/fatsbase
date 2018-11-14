import { store } from "react-easy-state";

const modalState = store({
  name: null, //        String user name
  password: null //     String user password
});

export default modalState;
