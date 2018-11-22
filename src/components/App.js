import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { view } from "react-easy-state";
import state from "../state";
import Table from "./Table/Table";
import ElemInfo from "./ElemInfo";
import NotFound from "./NotFound";
import * as actions from "../actions";
import Toggle from "./Toggle";
import SignIn from "./SignIn/SignIn";

class App extends React.Component {
  componentDidMount() {
    fetch("./data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        state.data = result.map(item => {
          item.isSelect = true;
          return item;
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    const { data } = state;
    if (data) {
      return (
        <div>
          <Toggle>
            {({ on, toggle }) => (
              <div>
                {on && <SignIn toggle={toggle} />}
                <button onClick={toggle}>Sign in</button>
              </div>
            )}
          </Toggle>

          <button onClick={() => actions.toggleShowMenu()}>Menu</button>
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/" component={Table} />
                <Route
                  path="/:name"
                  //render={props => <ElemInfo {...props} data={data} />}
                />
                />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default view(App);
