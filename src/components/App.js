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
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

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

    return (
      <div className="container">
        <Header />
        <Menu />
        {data ? (
          <BrowserRouter>
            <div className="container table">
              <Switch>
                <Route exact path="/" component={Table} />
                <Route
                  path="/:name"
                  render={props => <ElemInfo {...props} data={data} />}
                />
                />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </BrowserRouter>
        ) : (
          <div>Loading...</div>
        )}
        <Footer />
      </div>
    );
  }
}

export default view(App);

/*    <Toggle>
            {({ on, toggle }) => (
              <div>
                {on && <SignIn toggle={toggle} />}
                <button onClick={toggle}>Sign in</button>
              </div>
            )}
          </Toggle>
          <button onClick={() => actions.toggleShowMenu()}>Menu</button>
      */
