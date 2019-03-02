import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { view } from "react-easy-state";
import state from "../../state";
import * as helpers from "../../helpers";
import * as R from "ramda";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Details from "../../pages/Details";
import Header from "../Header";
import Footer from "../Footer";

import "./app-style.css";

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
    const {
      inputValue,
      sortDirection,
      fryChecked,
      vegChecked,
      sort,
      data
    } = state;
    const visibleData = data
      ? R.pipe(
          R.filter(helpers.findByPattern(inputValue)),
          R.filter(helpers.makeFilterFn(fryChecked, vegChecked)),
          R.sort(helpers.makeSortFn(sortDirection, sort))
        )(data)
      : [];

    return (
      <div className="container">
        <Header />
        {data ? (
          <BrowserRouter>
            <div className="jumbotron">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Home visibleData={visibleData} />}
                />
                <Route
                  path="/:name"
                  render={props => <Details {...props} data={data} />}
                />
                <Route render={() => <NotFound />} />
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
