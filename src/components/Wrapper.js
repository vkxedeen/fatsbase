import React from "react";
import { checkCookingPossibility } from "../helpers";
import Diagram from "./Diagram";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      inputValue: undefined,
      formValue: false,
      sort: null,
      fryCheck: false,
      vegCheck: false,
      sortDirection: true
    };
    this.nodes = [];
  }

  applyFilters(data) {
    if (data) {
      let filterFn;
      if (this.state.fryCheck && this.state.vegCheck) {
        filterFn = item =>
          item.isVegeterian === true &&
          checkCookingPossibility(item) === true &&
          item.isSelect === true;
      } else if (this.state.fryCheck) {
        filterFn = item =>
          checkCookingPossibility(item) === true && item.isSelect === true;
      } else if (this.state.vegCheck) {
        filterFn = item => item.isVegeterian === true && item.isSelect === true;
      } else {
        filterFn = item => item.isSelect === true;
      }
      let res = data.filter(filterFn);
      return res;
    }
  }

  applySorts(str, data) {
    if (!str) return data;
    if (this.state.sortDirection) {
      return data.sort(compare);
    } else {
      return data.sort(compare).reverse();
    }

    function compare(a, b) {
      return a[str] - b[str];
    }
  }

  setSortProp(str) {
    this.setState({ sort: str });
  }

  directionChange() {
    this.setState({ sortDirection: !this.state.sortDirection });
  }

  checkFrying() {
    this.setState({ fryCheck: !this.state.fryCheck });
  }

  checkVeg() {
    this.setState({ vegCheck: !this.state.vegCheck });
  }

  render() {
    debugger;
    let bars = this.applySorts(
      this.state.sort,
      this.applyFilters(this.state.data)
    );
    if (bars) {
      bars = bars.map((item, i) => <Diagram item={item} i={i} />);
      return (
        <div id="container">
          <p>
            <b>Find:</b>
            <br />
            <input
              type="text"
              size="40"
              value={this.state.inputValue}
              onChange={event => this.props.findByPattern(event)}
            />
          </p>
          <p>
            Упорядочить по
            <select
              value={this.state.sortDirection}
              onChange={() => this.directionChange()}
            >
              <option value={true}>Возрастанию</option>
              <option value={false}>Убыванию</option>
            </select>
            <input
              type="checkbox"
              id="frying"
              checked={this.state.fryCheck}
              onChange={() => this.checkFrying()}
            />
            <label htmlFor="frying">Frying frendly</label>
            <input
              type="checkbox"
              id="vegeterian"
              checked={this.state.vegCheck}
              onChange={() => this.checkVeg()}
            />
            <label htmlFor="vegeterian">Vegeterian</label>
            <br />
          </p>

          <p>
            <input
              type="radio"
              id="sf"
              name="sort"
              value="sF"
              onChange={() => this.setSortProp("sF")}
            />
            <label htmlFor="sF">Saturated fats</label>
            <input
              type="radio"
              id="mUF"
              name="sort"
              value="mUF"
              onChange={() => this.setSortProp("mUF")}
            />
            <label htmlFor="mUF">Monounsaturated fats</label>
            <input
              type="radio"
              id="om3"
              name="sort"
              value="om3"
              onChange={() => this.setSortProp("omega3")}
            />
            <label htmlFor="om3">Omega 3</label>
            <input
              type="radio"
              id="om6"
              name="sort"
              value="om6"
              onChange={() => this.setSortProp("omega6")}
            />
            <label htmlFor="om6">Omega 6</label>
          </p>
          {bars}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Wrapper;
