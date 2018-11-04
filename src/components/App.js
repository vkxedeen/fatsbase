import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { view } from "react-easy-state";
import states from "../state";
import Wrapper from "./Wrapper";
import ElemInfo from "./ElemInfo";
import NotFound from "./NotFound";

class App extends React.Component {
  componentDidMount() {
    fetch("./data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        states.data = result.map(item => {
          item.isSelect = true;
          return item;
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    const { data } = states;
    if (data) {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/" component={Wrapper} />
                <Route path="/:name" component={ElemInfo} />
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
