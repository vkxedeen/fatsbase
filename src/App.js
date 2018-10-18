import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Diagram from "./Diagram";
import ElemInfo from "./ElemInfo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    let self = this;
    fetch("./data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        self.setState({ data: result });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    if (this.state.data) {
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/:name" component={ElemInfo} />
              <Diagram data={this.state.data} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    } else return null;
  }
}

export default App;