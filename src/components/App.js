import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./Wrapper";
import ElemInfo from "./ElemInfo";
import NotFound from "./NotFound";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      markedData: null
    };
  }

  componentDidMount() {
    let self = this;
    fetch("./data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        self.setState({
          data: result.map(item => {
            item.isSelect = true;
            return item;
          })
        });
      })
      .catch(error => console.log(error.message));
  }

  findByPattern = event => {
    let regex = new RegExp(event.target.value.toLowerCase());
    let filtered = this.state.data.map(item => {
      if (
        regex.test(item.name.toLowerCase()) === true ||
        event.target.value === ""
      ) {
        item.isSelect = true;
      } else {
        item.isSelect = false;
      }
      return item;
    });
    this.setState({ data: filtered });
  };

  render() {
    if (this.state.data) {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={props => (
                    <Wrapper
                      {...props}
                      data={this.state.data}
                      findByPattern={this.findByPattern}
                    />
                  )}
                />
                <Route
                  path="/:name"
                  render={props => (
                    <ElemInfo {...props} data={this.state.data} />
                  )}
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

export default App;
