import React from "react";
import { checkCookingPossibility, idMaker, findByPattern } from "../helpers";
import { view } from "react-easy-state";
import states from "./states";
import Diagram from "./Diagram";
const R = require("ramda");

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.nodes = [];
  }

  makeFilterFn = () => {
    if (states.fryChecked && states.vegChecked) {
      return item =>
        item.isVegeterian === true &&
        checkCookingPossibility(item) === true &&
        item.isSelect === true;
    } else if (states.fryChecked) {
      return item =>
        checkCookingPossibility(item) === true && item.isSelect === true;
    } else if (states.vegChecked) {
      return item => item.isVegeterian === true && item.isSelect === true;
    } else {
      return item => item.isSelect === true;
    }
  };

  makeSortsByProp = str => {
    if (states.sortDirection) return (a, b) => a[str] - b[str];
    return (a, b) => b[str] - a[str];
  };

  paintDiagram = item => <Diagram item={item} key={idMaker(item.name)} />;

  render() {
    const {
      data,
      sort,
      inputValue,
      changeForm,
      directionChange,
      fryChecked,
      vegChecked,
      checkFrying,
      checkVegetarian,
      setSortProp,
      sortDirection
    } = states;

    if (data) {
      let bars = R.pipe(
        R.filter(findByPattern(inputValue)),
        R.filter(this.makeFilterFn()),
        R.sort(this.makeSortsByProp(sort)),
        R.map(this.paintDiagram)
      )(data);
      return (
        <div id="container">
          <p>
            <b>Find:</b>
            <br />
            <input
              type="text"
              size="40"
              value={inputValue}
              onChange={event => changeForm(event.target.value)}
            />
          </p>
          <p>
            Упорядочить по
            <select value={sortDirection} onChange={() => directionChange()}>
              <option value={true}>Возрастанию</option>
              <option value={false}>Убыванию</option>
            </select>
            <input
              type="checkbox"
              id="frying"
              checked={fryChecked}
              onChange={() => checkFrying()}
            />
            <label htmlFor="frying">Frying frendly</label>
            <input
              type="checkbox"
              id="vegeterian"
              checked={vegChecked}
              onChange={() => checkVegetarian()}
            />
            <label htmlFor="vegeterian">Vegeterian</label>
            <br />
          </p>

          <p>
            <input
              type="radio"
              id="sf"
              name="sort"
              onChange={() => setSortProp("sF")}
            />
            <label htmlFor="sF">Saturated fats</label>
            <input
              type="radio"
              id="mUF"
              name="sort"
              onChange={() => setSortProp("mUF")}
            />
            <label htmlFor="mUF">Monounsaturated fats</label>
            <input
              type="radio"
              id="om3"
              name="sort"
              onChange={() => setSortProp("omega3")}
            />
            <label htmlFor="om3">Omega 3</label>
            <input
              type="radio"
              id="om6"
              name="sort"
              onChange={() => setSortProp("omega6")}
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

export default view(Wrapper);
