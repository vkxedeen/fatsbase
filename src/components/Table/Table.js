import React from "react";
import { view } from "react-easy-state";
import * as helpers from "../../helpers";
import * as actions from "./actions";
import Diagram from "../Diagram";
import globalState from "../../state";
import state from "./state";
import * as R from "ramda";

function Table() {
  const data = globalState.data;
  const { inputValue, sortDirection, fryChecked, vegChecked, sort } = state;
  if (data) {
    const bars = R.pipe(
      R.filter(helpers.findByPattern(inputValue)),
      R.filter(helpers.makeFilterFn(fryChecked, vegChecked)),
      R.sort(helpers.makeSortFn(sortDirection, sort)),
      R.map(item => <Diagram item={item} key={helpers.idMaker(item.name)} />)
    )(data);

    return (
      <div>
        <p>
          <b>Find:</b>
          <br />
          <input
            type="text"
            size="40"
            defaultValue={inputValue}
            onChange={event => actions.changeForm(event.target.value)}
          />
        </p>
        <p>
          Упорядочить по
          <select
            value={sortDirection}
            onChange={() => actions.directionChange()}
          >
            <option value={true}>Возрастанию</option>
            <option value={false}>Убыванию</option>
          </select>
          <input
            type="checkbox"
            id="frying"
            checked={fryChecked}
            onChange={() => actions.toggleFrying()}
          />
          <label htmlFor="frying">Frying frendly</label>
          <input
            type="checkbox"
            id="vegeterian"
            checked={vegChecked}
            onChange={() => actions.toggleVegetarian()}
          />
          <label htmlFor="vegeterian">Vegeterian</label>
          <br />
        </p>

        <p>
          <input
            type="radio"
            id="sf"
            name="sort"
            onChange={() => actions.setSortProp("sF")}
          />
          <label htmlFor="sF">Saturated fats</label>
          <input
            type="radio"
            id="mUF"
            name="sort"
            onChange={() => actions.setSortProp("mUF")}
          />
          <label htmlFor="mUF">Monounsaturated fats</label>
          <input
            type="radio"
            id="om3"
            name="sort"
            onChange={() => actions.setSortProp("omega3")}
          />
          <label htmlFor="om3">Omega 3</label>
          <input
            type="radio"
            id="om6"
            name="sort"
            onChange={() => actions.setSortProp("omega6")}
          />
          <label htmlFor="om6">Omega 6</label>
        </p>
        <ul className="list-group">{bars}</ul>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default view(Table);
