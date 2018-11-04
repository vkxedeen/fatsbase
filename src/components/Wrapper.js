import React from "react";
import { view } from "react-easy-state";
import * as helpers from "../helpers";
import Diagram from "./Diagram";
import SingIn from "./Diagram";
import states from "../state";

const R = require("ramda");

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.nodes = [];
  }

  paintDiagram(item) {
    return <Diagram item={item} key={helpers.idMaker(item.name)} />;
  }

  makeFilterFn() {
    if (states.fryChecked && states.vegChecked) {
      return item =>
        item.isVegeterian === true &&
        helpers.checkCookingPossibility(item) === true &&
        item.isSelect === true;
    } else if (states.fryChecked) {
      return item =>
        helpers.checkCookingPossibility(item) === true &&
        item.isSelect === true;
    } else if (states.vegChecked) {
      return item => item.isVegeterian === true && item.isSelect === true;
    } else {
      return item => item.isSelect === true;
    }
  }

  makeSortsByProp(str) {
    if (states.sortDirection) return (a, b) => a[str] - b[str];
    return (a, b) => b[str] - a[str];
  }

  render() {
    const {
      data,
      sort,
      inputValue,
      changeForm,
      directionChange,
      toggleFrying,
      toggleVegetarian,
      setSortProp,
      sortDirection,
      fryChecked,
      vegChecked,
      toggleSingIn,
      singInFormShown
    } = states;

    if (data) {
      const bars = R.pipe(
        R.filter(helpers.findByPattern(inputValue)),
        R.filter(this.makeFilterFn()),
        R.sort(this.makeSortsByProp(sort)),
        R.map(this.paintDiagram)
      )(data);
      const singIn = singInFormShown ? <SingIn data={data} /> : null;
      return (
        <div id="container">
          <button onClick={() => toggleSingIn()}>Sing in</button>
          <p>
            <b>Find:</b>
            <br />
            <input
              type="text"
              size="40"
              defaultValue={inputValue}
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
              onChange={() => toggleFrying()}
            />
            <label htmlFor="frying">Frying frendly</label>
            <input
              type="checkbox"
              id="vegeterian"
              checked={vegChecked}
              onChange={() => toggleVegetarian()}
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
          {singIn}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default view(Wrapper);
