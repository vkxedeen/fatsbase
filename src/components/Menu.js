import React from "react";
import { view } from "react-easy-state";

import * as actions from "../actions";

import state from "../state";

function Menu() {
  const { inputValue, sortDirection, fryChecked, vegChecked } = state;

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
    </div>
  );
}

export default view(Menu);
