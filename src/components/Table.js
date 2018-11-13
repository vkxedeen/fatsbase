import React from "react";
import { view } from "react-easy-state";
import * as helpers from "../helpers";
import * as localActions from "./localActions";
import Diagram from "./Diagram";
import state from "../state";
import localState from "./localState";
import * as R from "ramda";

class Table extends React.Component {
  paintDiagram(item) {
    return <Diagram item={item} key={helpers.idMaker(item.name)} />;
  }

  render() {
    const data = state.data;
    const {
      inputValue,
      sortDirection,
      fryChecked,
      vegChecked,
      sort
    } = localState;
    if (data) {
      const bars = R.pipe(
        R.filter(helpers.findByPattern(inputValue)),
        R.filter(helpers.makeFilterFn(fryChecked, vegChecked)),
        R.sort(helpers.makeSortFn(sortDirection, sort)),
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
              defaultValue={inputValue}
              onChange={event => localActions.changeForm(event.target.value)}
            />
          </p>
          <p>
            Упорядочить по
            <select
              value={sortDirection}
              onChange={() => localActions.directionChange()}
            >
              <option value={true}>Возрастанию</option>
              <option value={false}>Убыванию</option>
            </select>
            <input
              type="checkbox"
              id="frying"
              checked={fryChecked}
              onChange={() => localActions.toggleFrying()}
            />
            <label htmlFor="frying">Frying frendly</label>
            <input
              type="checkbox"
              id="vegeterian"
              checked={vegChecked}
              onChange={() => localActions.toggleVegetarian()}
            />
            <label htmlFor="vegeterian">Vegeterian</label>
            <br />
          </p>

          <p>
            <input
              type="radio"
              id="sf"
              name="sort"
              onChange={() => localActions.setSortProp("sF")}
            />
            <label htmlFor="sF">Saturated fats</label>
            <input
              type="radio"
              id="mUF"
              name="sort"
              onChange={() => localActions.setSortProp("mUF")}
            />
            <label htmlFor="mUF">Monounsaturated fats</label>
            <input
              type="radio"
              id="om3"
              name="sort"
              onChange={() => localActions.setSortProp("omega3")}
            />
            <label htmlFor="om3">Omega 3</label>
            <input
              type="radio"
              id="om6"
              name="sort"
              onChange={() => localActions.setSortProp("omega6")}
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

export default view(Table);
